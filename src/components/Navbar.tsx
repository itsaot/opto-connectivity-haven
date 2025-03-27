
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Book Appointment', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-optometry-primary">
              Ngcobo <span className="text-optometry-accent">Optometry</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`font-medium transition-all duration-300 
                  ${location.pathname === link.path 
                    ? 'text-optometry-primary' 
                    : 'text-optometry-dark hover:text-optometry-primary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-optometry-primary transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-optometry-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-optometry-primary transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`font-medium px-4 py-2 rounded-md transition-all duration-300 
                  ${location.pathname === link.path 
                    ? 'bg-optometry-primary text-white' 
                    : 'text-optometry-dark hover:bg-optometry-gray'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
