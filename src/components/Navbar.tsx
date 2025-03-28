import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4 text-gray-800' : 'bg-transparent py-6 text-gray-300'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="text-2xl font-playfair font-bold">
          Keshav Interiors
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-gray-300'}`}>Home</a>
          <a href="#projects" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-gray-300'}`}>Projects</a>
          <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-gray-300'}`}>About</a>
          <a href="#services" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-gray-300'}`}>Services</a>
          <a 
            href="#contact" 
            className={`btn-primary ${isScrolled ? 'bg-red-500 text-white' : 'bg-red-300 text-gray-800'}`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 h-screen w-64 bg-white shadow-xl p-6 md:hidden"
            >
              <div className="flex flex-col space-y-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="self-end"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
                <a href="#home" className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#contact" className="btn-primary text-center">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;