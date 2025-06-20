import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Check if current route is active
  const isActive = (path: string) => location.pathname === path;

  // Listen for scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Mission & Vision', path: '/mission' },
    { name: 'Products', path: '/products' },
    { name: 'For Doctors', path: '/for-doctors' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <span className="text-[#603084] font-display text-2xl font-bold">Gene</span>
                <span className="text-[#CB5498] font-display text-2xl font-bold">chord</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-all duration-300 py-2 group ${
                  isActive(link.path) 
                    ? 'text-primary-400 font-semibold' 
                    : 'text-secondary-900 hover:text-primary-400'
                }`}
              >
                {link.name}
                
                {/* Center-expanding animated underline */}
                <span className={`absolute left-1/2 bottom-0 h-0.5 bg-primary-400 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                  isActive(link.path) 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary-900 hover:text-primary-400 transition duration-200"
            >
              {isOpen ? (
                <X size={24} className="text-primary-400" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 font-medium transition-all duration-300 group ${
                    isActive(link.path) 
                      ? 'text-primary-400 font-semibold' 
                      : 'text-secondary-900 hover:text-primary-400'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                  
                  {/* Mobile center-expanding animated underline */}
                  <span className={`absolute left-1/2 bottom-0 h-0.5 bg-primary-400 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                    isActive(link.path) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;