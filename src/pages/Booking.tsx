
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      
      <div className="pt-20 bg-optometry-light min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-optometry-dark mb-4">Book Your Appointment</h1>
            <p className="text-lg text-optometry-primary max-w-2xl mx-auto">
              Schedule your visit with our experienced optometrists for personalized eye care.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 glass-card p-8 animate-fade-in">
            <h3 className="text-xl font-bold text-optometry-dark mb-4">What to Expect</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-optometry-primary mb-2">Before Your Visit</h4>
                <ul className="space-y-2 text-optometry-charcoal">
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Complete your patient forms (available online or in our office)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Bring your current glasses or contact lenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Prepare a list of current medications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Bring your medical aid information if applicable</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-optometry-primary mb-2">During Your Visit</h4>
                <ul className="space-y-2 text-optometry-charcoal">
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Arrive 10-15 minutes before your appointment time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Be prepared to discuss your eye health history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>Your appointment will typically last 30-60 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-optometry-primary mr-2">•</span>
                    <span>If your eyes are dilated, bring sunglasses for comfort afterward</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-optometry-gray bg-opacity-30 p-4 rounded-lg text-sm text-optometry-charcoal">
              <p className="font-bold mb-1">Cancellation Policy:</p>
              <p>Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other patients who may be waiting.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;
