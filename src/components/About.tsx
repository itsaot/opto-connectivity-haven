
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const doctors = [
    {
      name: 'Dr. Nokwanda Ngcobo',
      title: 'Optometrist & Co-founder',
      description: 'With over 15 years of experience, Dr. Nokwanda specializes in pediatric optometry and contact lens fitting. Her gentle approach makes her a favorite among younger patients.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Sharon Ngcobo',
      title: 'Optometrist & Co-founder',
      description: 'Dr. Sharon has dedicated her career to diagnosing and managing ocular diseases. She is passionate about preventative eye care and community education.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Meet Our Expert Optometrists</h2>
          <p className="section-subtitle animate-on-scroll">Dedicated to providing exceptional eye care in Umhlanga, Durban</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[index] = el}
              className="animate-on-scroll glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-optometry-primary">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-optometry-dark mb-2">{doctor.name}</h3>
              <p className="text-optometry-primary font-medium mb-4">{doctor.title}</p>
              <p className="text-optometry-charcoal leading-relaxed">{doctor.description}</p>
              <div className="mt-6 w-24 h-1 bg-optometry-accent"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto animate-on-scroll">
          <h3 className="text-2xl font-bold text-optometry-dark mb-6 text-center">Our Story</h3>
          <div className="glass-card p-8">
            <p className="text-optometry-charcoal mb-4 leading-relaxed">
              Founded in 2008 by sisters Dr. Nokwanda and Dr. Sharon Ngcobo, our practice has grown from a small clinic to one of Umhlanga's premier eye care destinations. Both graduates of UKZN's prestigious optometry program, the Ngcobo sisters combined their expertise to create a practice that blends clinical excellence with compassionate care.
            </p>
            <p className="text-optometry-charcoal leading-relaxed">
              Our mission is simple: to provide exceptional eye care services that improve our patients' quality of life. We invest in the latest technology and continuing education to ensure we offer the most advanced diagnostic and treatment options. At Ngcobo Optometry, we don't just focus on your vision – we care about your overall eye health and how it connects to your well-being.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: "🎓", title: "Education", text: "UKZN Optometry Graduates" },
            { icon: "🏆", title: "Excellence", text: "Award-winning practice" },
            { icon: "💡", title: "Innovation", text: "Latest technology" },
            { icon: "❤️", title: "Community", text: "Proudly South African" },
          ].map((item, index) => (
            <div key={index} className="animate-on-scroll text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-optometry-dark">{item.title}</h4>
              <p className="text-sm text-optometry-charcoal">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
