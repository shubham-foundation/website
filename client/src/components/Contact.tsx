import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
});

export function Contact() {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const newsletterMutation = useMutation({
    mutationFn: (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You have successfully subscribed to our newsletter.",
      });
      setNewsletterEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    contactMutation.mutate(values);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      newsletterSchema.parse({ email: newsletterEmail });
      newsletterMutation.mutate(newsletterEmail);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">Contact Us</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#F97316] mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base">
            Have questions or want to get involved? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Send Us a Message</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Fill out the form below and we'll respond within 24-48 hours.
                </p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="text-sm sm:text-base" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" className="text-sm sm:text-base" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-sm sm:text-base">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="donation">Donation Inquiry</SelectItem>
                            <SelectItem value="volunteer">Volunteering</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="resize-none text-sm sm:text-base" 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white text-sm sm:text-base py-2 sm:py-3" 
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Contact Information</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Feel free to reach out through any of the following channels.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1">Address</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      123 Charity Lane, Sector 15<br />
                      Gurgaon, Haryana 122001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1">Phone</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      +91 98765 43210<br />
                      +91 12345 67890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1">Email</h4>
                    <p className="text-gray-700 text-sm sm:text-base break-words">
                      info@shubhamtyagifoundation.org<br />
                      donations@shubhamtyagifoundation.org
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Follow Us</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <a href="#" className="bg-primary-100 p-2 sm:p-3 rounded-full text-primary hover:bg-primary-200 transition">
                      <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="#" className="bg-primary-100 p-2 sm:p-3 rounded-full text-primary hover:bg-primary-200 transition">
                      <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="#" className="bg-primary-100 p-2 sm:p-3 rounded-full text-primary hover:bg-primary-200 transition">
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="#" className="bg-primary-100 p-2 sm:p-3 rounded-full text-primary hover:bg-primary-200 transition">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="#" className="bg-primary-100 p-2 sm:p-3 rounded-full text-primary hover:bg-primary-200 transition">
                      <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12">
                <div className="bg-primary-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Newsletter Signup</h4>
                  <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                    Stay updated with our latest news and events by subscribing to our newsletter.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 text-sm sm:text-base sm:rounded-r-none"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    <Button 
                      type="submit" 
                      className="sm:rounded-l-none bg-primary text-white text-sm sm:text-base"
                      disabled={newsletterMutation.isPending}
                    >
                      {newsletterMutation.isPending ? "..." : "Subscribe"}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
