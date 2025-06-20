import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Hero from '../components/home/Hero';
import VideoSection from '../components/home/VideoSection';

const Home = () => {
  const featuredProducts = [
    {
      id: 'oofrag',
      name: 'OOFRAG',
      tagline: 'Because the strength of life begins with the strength of the oocyte.',
      description: 'The first scientifically formulated supplement targeting oocyte fragmentation at its root with dual-action precision.',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
    },
    {
      id: 'blastocare',
      name: 'BLASTOCARE',
      tagline: 'Even a perfect embryo needs the perfect home.',
      description: 'Comprehensive endometrial support designed to enhance implantation success by creating the optimal uterine environment.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
    },
    {
      id: 'chromosafe',
      name: 'CHROMOSAFE',
      tagline: 'Because your DNA carries more than genes—it carries generations.',
      description: 'Next-generation solution rooted in reproductive epigenetics, supporting sperm health at the genomic level.',
      image: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg',
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* Company Overview */}
      <Section className="bg-white py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary-900 mb-6">Leading Innovation in Pharma & Reproductive Nutrition in India</h2>
            <p className="text-gray-700 mb-6">
              At GeneChord, innovation is measured by impact—real outcomes in real patient journeys. 
              Our formulations go beyond supplementation; they are therapeutic adjuncts engineered 
              to integrate seamlessly with IVF protocols.
            </p>
            <p className="text-gray-700 mb-6">
              Each product is designed with precision to support the full spectrum of reproductive 
              challenges—from enhancing oocyte integrity and reducing DNA fragmentation to optimizing 
              the molecular signaling essential for implantation.
            </p>
            <p className="text-gray-700 mb-8">
              By aligning with clinical pathways, our solutions amplify the efficacy of expert 
              interventions, supporting better results where it matters most.
            </p>
            <Link to="/mission">
              <Button variant="primary">
                Our Mission & Vision <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg" 
                alt="Pharmaceutical Laboratory Research" 
                className="rounded-lg shadow-md h-60 w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" 
                alt="Advanced Research Equipment" 
                className="rounded-lg shadow-md h-60 w-full object-cover mt-8 md:mt-4 lg:mt-8"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg" 
                alt="Quality Control Laboratory" 
                className="rounded-lg shadow-md h-60 w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg" 
                alt="Pharmaceutical Manufacturing Facility" 
                className="rounded-lg shadow-md h-60 w-full object-cover mt-8 md:mt-4 lg:mt-8"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Video Section */}
      <VideoSection />

      {/* Featured Products */}
      <Section className="bg-gray-50 py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Carefully developed to support hope, healing, and parenthood—our reproductive health solutions are made to empower IVF success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900">
                  {product.name}
                </h3>
                <p className="text-primary-400 font-medium text-sm mb-3 italic">
                  {product.tagline}
                </p>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link to={`/products/${product.id}`} className="text-primary-400 font-medium flex items-center hover:text-primary-300">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="secondary">
              View All Products
            </Button>
          </Link>
        </div>
      </Section>

      {/* Safety Standards Section */}
      <Section className="bg-white py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary-900 mb-6">Our Safety Standards</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Genechord, we hold ourselves to the highest standards and are proud to showcase our robust safety standards. 
              We follow strict guidelines and adhere to industry best practices to ensure that our products/services are safe, reliable, 
              and of the utmost quality.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Quality Certifications</h3>
                <p className="text-gray-700 mb-4">
                  We proudly hold various certifications and licenses that testify to our commitment to excellence. 
                  Our Good Distribution Practice (GDP) certification guarantees the integrity of our supply chain.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                    ISO 14001:2015 certification for quality management systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                    Good Distribution Practice (GDP) certification
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                    Halal and Kosher certifications for dietary compliance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                    FSSAI certification for food safety standards
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Our Commitment</h3>
                <p className="text-gray-700">
                  These certifications ensure that our products meet the dietary requirements and preferences of individuals 
                  with specific cultural and religious beliefs, while maintaining the highest standards of safety and quality 
                  throughout our manufacturing and distribution processes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
              <img 
                src="/image.png" 
                alt="Safety Standards Certifications - ISO, GDP, FSSAI, Halal, Kosher" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Certified Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Our comprehensive certifications demonstrate our unwavering commitment to quality, 
                  safety, and regulatory compliance across all our operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-r from-primary-400 to-primary-300 text-white py-20">
        <div className="text-center">
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Partner with Genechord
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you're a fertility specialist, clinic, or potential collaborator, we invite you to join us in advancing reproductive healthcare through innovation, precision, and purpose.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/for-doctors">
              <Button variant="secondary">For Doctors</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-400">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Home;