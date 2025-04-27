import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
// Import archiver for direct implementation
import archiver from "archiver";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Set up the download route directly
  app.get('/download-project', (req, res) => {
    log('Download request received');
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
    
    res.attachment('shubham-tyagi-foundation.zip');
    archive.pipe(res);
    
    // Add all relevant directories and files
    archive.directory('client/', 'client');
    archive.directory('server/', 'server');
    archive.directory('shared/', 'shared');
    archive.file('package.json', { name: 'package.json' });
    archive.file('tsconfig.json', { name: 'tsconfig.json' });
    archive.file('vite.config.ts', { name: 'vite.config.ts' });
    archive.file('postcss.config.js', { name: 'postcss.config.js' });
    archive.file('tailwind.config.ts', { name: 'tailwind.config.ts' });
    archive.file('components.json', { name: 'components.json' });
    archive.file('drizzle.config.ts', { name: 'drizzle.config.ts' });
    
    archive.finalize();
  });
  
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = process.env.PORT || 5000; // Use environment port or fallback to 5000
  server.listen({
    port,
    host: "0.0.0.0",
  }, () => {
    log(`serving on port ${port}`);
  });
})();
