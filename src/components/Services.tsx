
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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

  const services = [
    {
      id: 'comprehensive-eye-exam',
      title: 'Comprehensive Eye Examinations',
      description: 'Our thorough eye exams evaluate your vision and screen for various eye conditions using advanced diagnostic technology.',
      icon: '👁️',
      price: 'R550',
      duration: '45 minutes'
    },
    {
      id: 'contact-lens',
      title: 'Contact Lens Fitting',
      description: 'We provide personalized contact lens fittings and follow-up care to ensure comfortable vision and eye health.',
      icon: '🔍',
      price: 'R750',
      duration: '60 minutes'
    },
    {
      id: 'pediatric-eye-care',
      title: 'Pediatric Eye Care',
      description: 'Specialized eye care for children in a friendly environment, focusing on early detection of vision problems.',
      icon: '👶',
      price: 'R450',
      duration: '30 minutes'
    },
    {
      id: 'prescription-glasses',
      title: 'Prescription Glasses',
      description: 'Stylish, high-quality frames and precision lenses customized to your prescription and lifestyle needs.',
      icon: '👓',
      price: 'Varies',
      duration: '30 minutes'
    },
    {
      id: 'ocular-disease',
      title: 'Ocular Disease Management',
      description: 'Diagnosis and management of eye diseases including glaucoma, macular degeneration, and diabetic retinopathy.',
      icon: '🏥',
      price: 'R650',
      duration: '45 minutes'
    },
    {
      id: 'laser-consultation',
      title: 'Laser Surgery Consultation',
      description: "Expert advice and evaluation to determine if you're a candidate for laser vision correction.",
      icon: '⚡',
      price: 'R850',
      duration: '60 minutes'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-optometry-light" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Our Services</h2>
          <p className="section-subtitle animate-on-scroll">Comprehensive eye care solutions for your entire family</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll glass-card p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-optometry-dark mb-3">{service.title}</h3>
              <p className="text-optometry-charcoal mb-4">{service.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium bg-optometry-gray px-3 py-1 rounded-full">
                  {service.duration}
                </span>
                <span className="font-bold text-optometry-primary">
                  {service.price}
                </span>
              </div>
              
              <Link 
                to={`/services/${service.id}`}
                className="inline-block w-full text-center py-2 border-2 border-optometry-primary text-optometry-primary font-medium rounded-md transition-all duration-300 hover:bg-optometry-primary hover:text-white"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <Link to="/booking" className="btn-primary">
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
