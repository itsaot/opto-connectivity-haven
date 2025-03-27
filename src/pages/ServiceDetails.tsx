
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Service details data
  const services = {
    'comprehensive-eye-exam': {
      title: 'Comprehensive Eye Examinations',
      description: 'Our thorough eye exams evaluate your vision and screen for various eye conditions using advanced diagnostic technology.',
      longDescription: `
        Our comprehensive eye examinations go beyond just checking your vision. Using state-of-the-art diagnostic equipment, our experienced optometrists perform a series of tests to evaluate your overall eye health.
        
        The examination includes vision assessment, eye pressure testing, retinal examination, and screening for common eye conditions such as glaucoma, cataracts, and macular degeneration. We also assess how well your eyes work together and evaluate your visual needs based on your lifestyle and occupation.
        
        Regular eye examinations are crucial for maintaining good vision and eye health, as many serious eye conditions develop without noticeable symptoms in their early stages. We recommend adults have an eye exam every 1-2 years, while children and seniors may need more frequent check-ups.
      `,
      price: 'R550',
      duration: '45 minutes',
      image: 'https://images.unsplash.com/photo-1585115704784-d6db1f39f8f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      faqs: [
        {
          question: 'How often should I have an eye examination?',
          answer: 'Most adults should have a comprehensive eye exam every 1-2 years. If you have existing eye conditions or risk factors like diabetes, you may need more frequent examinations.'
        },
        {
          question: 'What should I bring to my eye examination?',
          answer: 'Please bring your current glasses or contact lenses, a list of current medications, your medical history information, and your insurance details if applicable.'
        },
        {
          question: 'Will my eyes be dilated during the examination?',
          answer: 'Dilation may be recommended to allow a better view of the inside of your eyes. This is especially important for patients with risk factors for eye diseases.'
        }
      ]
    },
    'contact-lens': {
      title: 'Contact Lens Fitting',
      description: 'We provide personalized contact lens fittings and follow-up care to ensure comfortable vision and eye health.',
      longDescription: `
        Finding the right contact lenses involves more than just matching your prescription. Our contact lens fitting service takes into account your eye shape, tear film quality, lifestyle needs, and personal preferences.
        
        The process begins with a comprehensive eye examination to assess your vision and eye health. Then, our optometrists take precise measurements of your eyes to determine the best lens type, size, and material for your unique needs. We offer a wide range of contact lens options, including daily disposables, multifocals, toric lenses for astigmatism, and specialty lenses for complex eye conditions.
        
        After your initial fitting, we provide training on proper insertion, removal, and care techniques. Follow-up appointments ensure your lenses continue to provide optimal vision and comfort while maintaining your eye health.
      `,
      price: 'R750',
      duration: '60 minutes',
      image: 'https://images.unsplash.com/photo-1600883792757-0579057c7c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      faqs: [
        {
          question: 'Are contact lenses safe to wear?',
          answer: 'Yes, contact lenses are safe when properly fitted and cared for. Following your optometrist's instructions for wear time, cleaning, and replacement schedule is essential for maintaining eye health.'
        },
        {
          question: 'Can I sleep in my contact lenses?',
          answer: 'Unless you have been specifically prescribed extended wear lenses, you should not sleep in your contact lenses. Doing so increases the risk of eye infections and complications.'
        },
        {
          question: 'How long does it take to adjust to contact lenses?',
          answer: 'Most people adapt to contact lenses within a few days to a week. Initially, you may feel the lens on your eye, but this awareness typically diminishes as you become accustomed to wearing them.'
        }
      ]
    },
    'pediatric-eye-care': {
      title: 'Pediatric Eye Care',
      description: 'Specialized eye care for children in a friendly environment, focusing on early detection of vision problems.',
      longDescription: `
        Children's vision plays a crucial role in their development and learning. Our pediatric eye care services are designed to detect and address vision problems early, in a child-friendly and comfortable environment.
        
        Dr. Nokwanda Ngcobo specializes in pediatric optometry and has created examination procedures that are engaging and non-intimidating for children of all ages. We assess visual acuity, eye alignment, depth perception, color vision, and overall eye health using age-appropriate techniques and equipment.
        
        We screen for common childhood vision issues such as amblyopia (lazy eye), strabismus (crossed eyes), refractive errors (nearsightedness, farsightedness, astigmatism), and other eye conditions that can affect learning and development. Our practice offers a wide selection of durable, comfortable frames designed specifically for children.
      `,
      price: 'R450',
      duration: '30 minutes',
      image: 'https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      faqs: [
        {
          question: 'At what age should my child have their first eye examination?',
          answer: 'Children should have their first comprehensive eye examination at 6 months of age, another at 3 years, and then before starting school. After that, annual examinations are recommended.'
        },
        {
          question: 'How can I tell if my child has vision problems?',
          answer: 'Signs may include squinting, sitting too close to screens, frequent eye rubbing, short attention span for visual tasks, poor hand-eye coordination, or complaints of headaches and eye fatigue.'
        },
        {
          question: 'Are eye exams different for children?',
          answer: 'Yes, pediatric eye exams are tailored to the child's age and development level. We use special techniques and equipment designed for children, and the process is made engaging and comfortable.'
        }
      ]
    },
    'prescription-glasses': {
      title: 'Prescription Glasses',
      description: 'Stylish, high-quality frames and precision lenses customized to your prescription and lifestyle needs.',
      longDescription: `
        At Ngcobo Optometry, we believe that prescription glasses should enhance both your vision and your appearance. Our optical boutique features an extensive collection of designer frames and high-quality lenses to suit every style preference, face shape, and budget.
        
        After your comprehensive eye examination, our experienced opticians will guide you through selecting frames that complement your features and lifestyle. We consider factors such as face shape, skin tone, and personal style to help you find the perfect frames.
        
        We offer the latest in lens technology, including progressive lenses, blue light filtering, transitional lenses, anti-reflective coatings, and ultra-thin high-index options. Each pair of glasses is precisely crafted to your prescription and properly fitted to ensure optimal vision and comfort.
      `,
      price: 'Varies based on frames and lenses selected',
      duration: '30 minutes for frame selection and fitting',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      faqs: [
        {
          question: 'How do I choose the right frames for my face?',
          answer: 'Our opticians can help you select frames that complement your face shape, skin tone, and personal style. Generally, frames that contrast with your face shape (round frames for square faces and vice versa) create a balanced appearance.'
        },
        {
          question: 'What types of lens materials are available?',
          answer: 'We offer various materials including standard plastic (CR-39), polycarbonate (impact-resistant), Trivex (lightweight and impact-resistant), and high-index lenses (thinner and lighter for stronger prescriptions).'
        },
        {
          question: 'How long will it take to receive my new glasses?',
          answer: 'Most prescription glasses are ready within 7-10 business days, depending on the complexity of your prescription and the type of lenses ordered. Some simpler prescriptions may be available sooner.'
        }
      ]
    },
    'ocular-disease': {
      title: 'Ocular Disease Management',
      description: 'Diagnosis and management of eye diseases including glaucoma, macular degeneration, and diabetic retinopathy.',
      longDescription: `
        Dr. Sharon Ngcobo specializes in the diagnosis and management of ocular diseases, offering expert care for patients with various eye conditions. Using advanced diagnostic technology, we can detect eye diseases in their earliest stages, when treatment is most effective.
        
        We provide comprehensive care for conditions such as glaucoma, macular degeneration, diabetic retinopathy, dry eye syndrome, cataracts, and various infections and inflammatory conditions. Our management approach combines the latest medical treatments with lifestyle modifications and regular monitoring to preserve vision and eye health.
        
        For patients with systemic health conditions that affect the eyes, such as diabetes or hypertension, we work collaboratively with your other healthcare providers to ensure coordinated care. We also provide pre- and post-operative care for patients undergoing eye surgeries.
      `,
      price: 'R650',
      duration: '45 minutes',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      faqs: [
        {
          question: 'What is glaucoma and how is it treated?',
          answer: 'Glaucoma is a group of eye conditions that damage the optic nerve, often due to elevated pressure within the eye. Treatment typically involves eye drops to lower pressure, though some cases may require laser treatment or surgery.'
        },
        {
          question: 'How does diabetes affect eye health?',
          answer: 'Diabetes can damage blood vessels in the retina (diabetic retinopathy), leading to vision problems. Regular eye exams are crucial for diabetic patients to detect changes early. Treatment may include laser therapy, medications, or surgery in advanced cases.'
        },
        {
          question: 'What can I do to protect my eyes as I age?',
          answer: 'Maintain a healthy lifestyle with a nutrient-rich diet, regular exercise, and sun protection. Don't smoke, control blood pressure and blood sugar, have regular eye exams, and follow your optometrist's recommendations for any existing conditions.'
        }
      ]
    },
    'laser-consultation': {
      title: 'Laser Surgery Consultation',
      description: 'Expert advice and evaluation to determine if you're a candidate for laser vision correction.',
      longDescription: `
        If you're considering laser vision correction such as LASIK or PRK, our comprehensive consultation service will help you determine if you're a suitable candidate and which procedure might be best for your unique eyes and visual needs.
        
        During your consultation, we perform specialized tests to measure your corneal thickness, pupil size, tear film quality, and other factors critical for successful laser surgery. We also discuss your lifestyle, occupation, and expectations to ensure laser vision correction aligns with your needs.
        
        While we don't perform the laser procedures at our practice, we have established relationships with top ophthalmologists and laser surgery centers in the Durban area. We provide thorough pre-operative evaluations and post-operative care, working closely with your surgeon to ensure optimal outcomes.
      `,
      price: 'R850',
      duration: '60 minutes',
      image: 'https://images.unsplash.com/photo-1579498324737-5d98d76be258?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      faqs: [
        {
          question: 'Am I a good candidate for laser eye surgery?',
          answer: 'Good candidates typically have stable vision for at least a year, are over 18 years old, have adequate corneal thickness, and don't have certain eye conditions or systemic diseases. Our comprehensive evaluation will determine your suitability.'
        },
        {
          question: 'What's the difference between LASIK and PRK?',
          answer: 'Both procedures use a laser to reshape the cornea. LASIK creates a thin flap in the cornea before reshaping, allowing for quicker recovery. PRK removes the outer layer of the cornea before reshaping and may be better for patients with thinner corneas, though recovery takes longer.'
        },
        {
          question: 'Is laser eye surgery permanent?',
          answer: 'The correction itself is permanent, but your eyes can change over time due to aging or other factors. Some patients may need reading glasses as they age due to presbyopia, a natural aging process of the eye.'
        }
      ]
    },
  };

  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h2 className="text-3xl font-bold">Service not found</h2>
          <p className="mt-4">The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/services" className="btn-primary inline-block mt-8">
            View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <div className="pt-20 bg-optometry-light">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-optometry-primary opacity-60"></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">{service.title}</h1>
              <p className="max-w-2xl mx-auto text-lg animate-fade-in-up">{service.description}</p>
            </div>
          </div>
        </div>
        
        {/* Service Details */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 animate-fade-in-right">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-optometry-dark mb-6">About This Service</h2>
                {service.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-optometry-charcoal mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <h3 className="text-xl font-bold text-optometry-dark mt-8 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-optometry-gray pb-4">
                      <h4 className="font-bold text-optometry-primary mb-2">{faq.question}</h4>
                      <p className="text-optometry-charcoal">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="glass-card p-8 sticky top-24">
                <h3 className="text-xl font-bold text-optometry-dark mb-6">Service Information</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-optometry-charcoal">Price:</span>
                    <span className="font-bold text-optometry-primary">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-optometry-charcoal">Duration:</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="border-t border-optometry-gray my-4"></div>
                  <p className="text-sm text-optometry-charcoal italic">
                    * Prices may vary based on individual needs and requirements
                  </p>
                </div>
                
                <Link 
                  to="/booking" 
                  className="btn-primary w-full text-center block"
                >
                  Book This Service
                </Link>
                
                <div className="mt-8">
                  <h4 className="font-bold text-optometry-dark mb-3">Need more information?</h4>
                  <p className="text-sm text-optometry-charcoal mb-4">
                    Contact us directly to learn more about this service or to discuss your specific needs.
                  </p>
                  <div className="flex items-center">
                    <span className="text-optometry-primary mr-2">📞</span>
                    <span>(031) 566-5500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-fade-in">
            <Link to="/services" className="btn-secondary mr-4">
              View All Services
            </Link>
            <Link to="/booking" className="btn-primary">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetails;
