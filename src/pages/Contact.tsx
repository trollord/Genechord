import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import IndiaMap from '../components/IndiaMap';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Youtube, Twitter, CheckCircle2, Send, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['B-811, Damji Shamji Corporate Square', 'Laxmi Nagar, Ghatkopar East', 'Mumbai – 400075, Maharashtra, India'],
      color: 'bg-rose-100',
      iconColor: 'text-rose-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91 7977 612 659', '+91 8169 292 112'],
      color: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@genechord.com'],
      color: 'bg-violet-100',
      iconColor: 'text-violet-500'
    }
  ];

  const socialLinks = [
    { icon: <Linkedin />, name: 'LinkedIn', color: 'hover:bg-blue-700', href: 'https://www.linkedin.com/company/genechord-pharmaceuticals/about/' },
    { 
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          width="20" 
          height="20" 
          fill="currentColor"
          className="text-gray-600 group-hover:text-white transition-colors"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ), 
      name: 'WhatsApp', 
      color: 'hover:bg-green-600', 
      href: 'https://wa.me/917977612659' 
    },
    { icon: <Instagram />, name: 'Instagram', color: 'hover:bg-pink-600', href: 'https://www.instagram.com/genechord?igsh=YXdsODNieWo3ajZo' },
    { icon: <Twitter />, name: 'Twitter', color: 'hover:bg-blue-500', href: 'https://x.com/genechord' },
    { icon: <Facebook />, name: 'Facebook', color: 'hover:bg-blue-600', href: 'https://www.facebook.com/share/1Bd1h8PYCn/' },
    { icon: <Youtube />, name: 'YouTube', color: 'hover:bg-red-600', href: 'https://www.youtube.com/@GenechordPharma' }
  ];

  const operatingStates = ['Maharashtra', 'Goa', 'Gujarat', 'Chhattisgarh', 'Madhya Pradesh'];

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-primary-100 via-primary-100/30 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-secondary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions about our products or services? We'd love to hear from you. 
              Whether you're a healthcare professional, a business partner, or someone exploring 
              our mission—we're here to help.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <Section className="bg-white py-12 -mt-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`${info.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <span className={info.iconColor}>{info.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form - Takes 2/3 width */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="input focus:ring-primary-400"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input focus:ring-primary-400"
                          required
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="input focus:ring-primary-400"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="input focus:ring-primary-400"
                        required
                      ></textarea>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button type="submit" className="w-full">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out! We'll get back to you within 24-48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Sidebar - Takes 1/3 width */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 pb-0">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Find Us Here</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8!2d72.9081!3d19.0868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d45b%3A0xc0e83270bfa9ac6e!2sDamji%20Shamji%20Corporate%20Square%2C%20Laxmi%20Nagar%2C%20Ghatkopar%20East%2C%20Mumbai%2C%20Maharashtra%20400075!5e0!3m2!1sen!2sin!4v1615465631467!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
                title="Genechord Location"
              ></iframe>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Connect With Us</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 ${social.color} group transition-all`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-gray-600 group-hover:text-white transition-colors mb-1">
                      {social.icon}
                    </span>
                    <span className="text-xs text-gray-600 group-hover:text-white transition-colors text-center">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Global Presence */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center mb-3">
                <Globe className="w-5 h-5 text-primary-400 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">Global Presence</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Headquartered in Mumbai, Genechord Pharmaceuticals currently serves six states across India and is rapidly expanding. 
                Through our sister company, Nutragene Biotech, we are proud to be connected with trusted international partners across 
                Japan, the USA, Korea, Spain, and more—bringing global innovation to Indian reproductive healthcare.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                <span>Currently serving 6 states across India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Reach - India Map */}
      <Section className="bg-gray-50">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary-900 mb-4">Our Reach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Genechord Pharmaceuticals has established a strong presence across key states in India,
            serving patients and healthcare providers with our innovative solutions.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-secondary-900">
                States We Serve
              </h3>
              <div className="space-y-4">
                {operatingStates.map((state, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary-400 mr-4"></div>
                    <span className="font-medium text-gray-800">{state}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 p-4 rounded-lg">
                <IndiaMap 
                  operatingStates={operatingStates}
                  className="h-96"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-secondary-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'How can I learn more about your products?',
                answer: (
                  <>
                    Visit our <Link to="/products" className="text-primary-400 hover:text-primary-300 underline">Products page</Link> for detailed insights on our fertility-focused formulations. For specific questions, our team is just a message away.
                  </>
                ),
              },
              {
                question: 'Are your products available internationally?',
                answer: 'Our products are currently available in select Indian states. We are actively expanding and already have plans in motion for a pan-India rollout, with international availability on the roadmap.',
              },
              {
                question: 'How can healthcare professionals collaborate with Genechord?',
                answer: (
                  <>
                    We welcome partnerships with IVF specialists and reproductive healthcare providers. Visit our <Link to="/for-doctors" className="text-primary-400 hover:text-primary-300 underline">For Doctors page</Link> to register and gain access to exclusive professional resources.
                  </>
                ),
              },
              {
                question: 'What career opportunities are available at Genechord?',
                answer: 'We\'re always looking for passionate, driven individuals to join our mission. Explore our Careers page for current openings or send your resume to info@genechord.com for future opportunities.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-4">
                    <span className="font-medium text-secondary-900 text-sm">{faq.question}</span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: 0 }}
                      className="transition-transform group-open:rotate-180"
                    >
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </summary>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-4 pb-4 text-gray-600 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </PageTransition>
  );
};

export default Contact;