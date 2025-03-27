
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-optometry-light pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-optometry-secondary opacity-10 animate-float"></div>
        <div className="absolute top-1/3 -left-24 w-64 h-64 rounded-full bg-optometry-accent opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-optometry-primary opacity-10 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div 
          ref={heroRef}
          className="max-w-3xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000 pt-20 md:pt-28"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-optometry-secondary bg-opacity-30 text-optometry-primary text-sm font-medium mb-6 animate-fade-in">
            Umhlanga's Premier Eye Care Specialists
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-optometry-dark leading-tight mb-6">
            Exceptional Vision Care for 
            <span className="text-optometry-primary relative">
              <span className="relative z-10"> Your Family</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-optometry-accent opacity-30 -z-0"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-optometry-charcoal opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            At Ngcobo Optometry, we provide comprehensive eye care services with the latest technology and personalized attention for all ages.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking" className="btn-primary">
              Book an Appointment
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { count: '2000+', label: 'Happy Patients' },
              { count: '15+', label: 'Years Experience' },
              { count: '100%', label: 'Satisfaction' },
              { count: '50+', label: 'Frame Brands' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`stagger-item stagger-delay-${index + 1} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <p className="text-3xl font-bold text-optometry-primary">{stat.count}</p>
                <p className="text-sm text-optometry-charcoal">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <p className="text-optometry-primary mb-2 text-sm">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-optometry-primary rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-optometry-primary rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
