import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Instagram, Twitter, Facebook, Youtube, Globe } from 'lucide-react';

const QRInfo = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, name: 'LinkedIn', href: 'https://www.linkedin.com/company/genechord-pharmaceuticals/about/', color: 'hover:bg-blue-700' },
    { icon: <Instagram size={24} />, name: 'Instagram', href: 'https://www.instagram.com/genechord?igsh=YXdsODNieWo3ajZo', color: 'hover:bg-pink-600' },
    { icon: <Twitter size={24} />, name: 'Twitter', href: 'https://x.com/genechord', color: 'hover:bg-blue-500' },
    { icon: <Facebook size={24} />, name: 'Facebook', href: 'https://www.facebook.com/share/1Bd1h8PYCn/', color: 'hover:bg-blue-600' },
    { icon: <Youtube size={24} />, name: 'YouTube', href: 'https://www.youtube.com/@GenechordPharma', color: 'hover:bg-red-600' },
    { 
      icon: (
        <div className="p-2 bg-primary-50 rounded-full flex-shrink-0">
          <svg 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            fill="currentColor"
            className="text-primary-500 transform scale-90"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      ), 
      name: 'WhatsApp', 
      href: 'https://wa.me/917977612659', 
      color: 'hover:bg-green-600' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-white to-primary-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 py-12 px-4 border-b border-purple-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#603084] font-display text-5xl md:text-6xl font-bold">Gene</span>
              <span className="text-[#CB5498] font-display text-5xl md:text-6xl font-bold">chord</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-secondary-900 text-2xl md:text-3xl font-semibold mb-3"
          >
            <span className="text-black font-display font-bold">Gene</span>
            <span className="text-black font-display font-bold">chord</span>
            <span className="text-black"> Pharmaceuticals Private Limited</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-700 text-lg md:text-xl"
          >
            Pioneering the future of fertility
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">Our Location</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      B-811, Damji Shamji Corporate Square<br />
                      Laxmi Nagar, Ghatkopar East<br />
                      Mumbai – 400075, Maharashtra, India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Numbers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">Contact Numbers</h3>
                    <div className="space-y-2">
                      <a 
                        href="tel:+917977612659" 
                        className="block text-gray-700 hover:text-primary-400 transition-colors text-lg font-medium"
                      >
                        +91 7977 612 659
                      </a>
                      <a 
                        href="tel:+918169292112" 
                        className="block text-gray-700 hover:text-primary-400 transition-colors text-lg font-medium"
                      >
                        +91 8169 292 112
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">Email</h3>
                    <a 
                      href="mailto:info@genechord.com" 
                      className="text-gray-700 hover:text-primary-400 transition-colors text-lg font-medium"
                    >
                      info@genechord.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Website */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Globe className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">Website</h3>
                    <a 
                      href="https://genechord.com" 
                      className="text-primary-400 hover:text-primary-300 transition-colors text-lg font-semibold"
                    >
                      www.genechord.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Map and Social */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 pb-0">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">Find Us Here</h3>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8!2d72.9081!3d19.0868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d45b%3A0xc0e83270bfa9ac6e!2sDamji%20Shamji%20Corporate%20Square%2C%20Laxmi%20Nagar%2C%20Ghatkopar%20East%2C%20Mumbai%2C%20Maharashtra%20400075!5e0!3m2!1sen!2sin!4v1615465631467!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                  title="Genechord Location"
                ></iframe>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-6 text-center">Connect With Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 ${social.color} group transition-all duration-300`}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.0 + index * 0.1 }}
                    >
                      <span className="text-gray-600 group-hover:text-white transition-colors mb-2">
                        {social.icon}
                      </span>
                      <span className="text-xs text-gray-600 group-hover:text-white transition-colors font-medium text-center">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="bg-secondary-900 text-white py-6 px-4 mt-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Genechord Pharmaceuticals Private Limited. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default QRInfo;