import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      
      // Add timestamp
      const submission = {
        ...data,
        createdAt: new Date().toISOString()
      };
      
      await storage.createContactSubmission(submission);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submission successful"
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form"
        });
      }
    }
  });
  
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Add timestamp
      const subscription = {
        ...data,
        createdAt: new Date().toISOString()
      };
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterSubscriptionByEmail(data.email);
      
      if (existingSubscription) {
        return res.status(400).json({ 
          success: false, 
          message: "Email already subscribed to newsletter" 
        });
      }
      
      await storage.createNewsletterSubscription(subscription);
      
      res.status(201).json({ 
        success: true, 
        message: "Newsletter subscription successful" 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
