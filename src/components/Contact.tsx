
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Define the form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Infer the type from the schema
type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be a call to your backend API
      // For demonstration, we'll simulate a successful submission after a delay
      console.log("Form data submitted:", data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Message sent successfully", {
        description: "We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Contact Us</h2>
          <p className="section-subtitle animate-on-scroll">We're here to answer your questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-on-scroll">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-optometry-dark mb-6">Visit Our Practice</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-optometry-primary mb-2">Location</h4>
                  <p className="text-optometry-charcoal">
                    250 Umhlanga Rocks Drive<br />
                    Umhlanga Ridge<br />
                    Durban, 4319
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-optometry-primary mb-2">Hours</h4>
                  <ul className="text-optometry-charcoal">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:30am - 5:00pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00am - 1:00pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-optometry-primary mb-2">Contact</h4>
                  <p className="text-optometry-charcoal">
                    <strong>Phone:</strong> (031) 566-5500<br />
                    <strong>Email:</strong> info@ngcobooptometry.co.za
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 border-2 border-optometry-primary text-optometry-primary font-medium rounded-md transition-all duration-300 hover:bg-optometry-primary hover:text-white"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-optometry-dark mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-optometry-dark">
                          Your Name *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-optometry-dark">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-optometry-dark">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-optometry-dark">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="input-field"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-on-scroll">
          <div className="glass-card p-4 aspect-[16/7] overflow-hidden rounded-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9788696386057!2d31.056752775845756!3d-29.734239474056135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70f8f778a289d%3A0xd27d50b3a5d9e41f!2s250%20Umhlanga%20Rocks%20Dr%2C%20Umhlanga%2C%20Durban%2C%204320%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1685538345678!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Ngcobo Optometry Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
