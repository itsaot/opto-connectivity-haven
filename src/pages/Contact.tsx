
import React from 'react';
import Navbar from '../components/Navbar';
import ContactContent from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <ContactContent />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
