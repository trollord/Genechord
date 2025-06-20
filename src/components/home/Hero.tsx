import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-primary-100 via-primary-100/30 to-white pt-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="mb-6">
              <span className="text-secondary-900 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Pioneering the future
              </span>
              <span className="text-primary-400 block text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">
                of fertility
              </span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                At GeneChord, we understand that the journey to parenthood isn't always simple—but it's always sacred.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Our pharma-nutritional and metabolic products support IVF specialists and couples through assisted reproduction with science-led precision and deep understanding of the human hope behind each procedure.
              </p>
              
              <p className="text-lg text-primary-400 font-medium max-w-xl">
                With global expertise and heartfelt purpose, GeneChord turns possibility into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mt-8">
              <Link to="/products">
                <Button variant="primary" className="w-full sm:w-auto">
                  Our Products <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/for-doctors">
                <Button variant="outline" className="w-full sm:w-auto">
                  For Doctors
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
              alt="Pharmaceutical research laboratory with advanced equipment"
              className="rounded-xl shadow-xl w-full h-auto max-h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-300/30 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;