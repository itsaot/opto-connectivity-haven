
import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-optometry-dark mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-optometry-dark mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    required
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-optometry-dark mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-optometry-dark mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="input-field"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-on-scroll">
          <div className="glass-card p-4 aspect-[16/7] overflow-hidden rounded-xl">
            {/* Replace with actual Google Maps iframe */}
            <div className="w-full h-full bg-optometry-gray flex items-center justify-center">
              <p className="text-optometry-primary">Google Maps will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
