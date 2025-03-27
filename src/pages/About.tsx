
import React from 'react';
import Navbar from '../components/Navbar';
import AboutContent from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
