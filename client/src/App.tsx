import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Helmet } from "react-helmet";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
          <title>Shubham Tyagi Foundation - Empowering Underprivileged Children</title>
          <meta name="description" content="Shubham Tyagi Foundation is dedicated to the upliftment of underprivileged children through education and healthcare initiatives in Gurgaon, New Delhi and across India." />
          <meta name="keywords" content="NGO, underprivileged kids education, child upliftment, education NGO, healthcare for children, Gurgaon NGO, New Delhi charity, India foundation, child welfare" />
          
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="Shubham Tyagi Foundation - Empowering Underprivileged Children" />
          <meta property="og:description" content="Dedicated to the upliftment of underprivileged children through education and healthcare initiatives in India." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.shubhamtyagifoundation.org" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" />
          
          {/* Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Helmet>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
