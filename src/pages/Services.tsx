
import React from 'react';
import Navbar from '../components/Navbar';
import ServicesContent from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <ServicesContent />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
