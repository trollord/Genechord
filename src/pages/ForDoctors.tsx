import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { CheckCircle2, AlertCircle, User, Mail, Key, FileText, Phone } from 'lucide-react';

const ForDoctors = () => {
  const [formData, setFormData] = useState({
    name: '',
    medicalRegNo: '',
    mobile: '',
    email: '',
    specialty: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateMedicalRegNo = (regNo: string) => {
    // Basic validation - this would be replaced with actual validation logic
    // return regNo.length >= 6 && /^[A-Za-z0-9]+$/.test(regNo);
    return true;
  };

  const validateMobile = (mobile: string) => {
    // Indian mobile number validation
    const re = /^[6-9]\d{9}$/;
    return re.test(mobile);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.medicalRegNo.trim()) {
      newErrors.medicalRegNo = 'Medical Registration Number is required';
    } else if (!validateMedicalRegNo(formData.medicalRegNo)) {
      newErrors.medicalRegNo = 'Please enter a valid medical registration number';
    }
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.specialty) {
      newErrors.specialty = 'Please select your specialty';
    }
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setFormStep(2);
    }
  };

  const handleBack = () => {
    setFormStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only proceed if we're on the final step
    if (formStep !== 2) {
      handleNext();
      return;
    }
    
    if (!validateStep2()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format the message to include all the extra fields
      const messageContent = `
Medical Registration Request:

Name: ${formData.name}
Medical Registration Number: ${formData.medicalRegNo}
Mobile: ${formData.mobile}
Email: ${formData.email}
Specialty: ${formData.specialty}

Additional Information:
${formData.message || 'None provided'}
      `.trim();

      const reqBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        message: messageContent,
        To: 'mskasan30@gmail.com' // Change this to your desired recipient
      };

      const response = await fetch('https://cqgo2gggpg.execute-api.ap-northeast-1.amazonaws.com/default/mailer_function', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(reqBody),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form if needed
        // setFormData({ name: '', medicalRegNo: '', mobile: '', email: '', specialty: '', message: '' });
        // setFormStep(1);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-primary-100 via-primary-100/30 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-secondary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              For Healthcare Professionals
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with Genechord Pharmaceuticals to access resources, clinical trial information,
              and innovative solutions for your patients. Our team is dedicated to supporting healthcare
              professionals in delivering the best possible care.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
              alt="Healthcare professional in pharmaceutical laboratory"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary-900 mb-6">Clinical Trial Access</h2>
            <p className="text-gray-700 mb-6">
              At Genechord, we value the expertise and insights of healthcare professionals. 
              By registering with us, you'll gain access to information about our ongoing 
              clinical trials, research initiatives, and opportunities for collaboration.
            </p>
            <p className="text-gray-700 mb-8">
              Our team will promptly review your information and reach out to discuss how 
              we can work together to advance patient care and medical innovation.
            </p>
            
            {!submitted ? (
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-secondary-900">Register for Access</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-4">
                    <div className={`flex items-center ${formStep === 1 ? 'text-primary-400' : 'text-gray-400'}`}>
                      <div className="w-8 h-8 rounded-full bg-primary-400 text-white flex items-center justify-center mr-2">
                        1
                      </div>
                      <span className="font-medium">Identification</span>
                    </div>
                    <div className="flex-grow border-t border-gray-300 mx-4 self-center"></div>
                    <div className={`flex items-center ${formStep === 2 ? 'text-primary-400' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full ${formStep === 2 ? 'bg-primary-400 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center mr-2`}>
                        2
                      </div>
                      <span className="font-medium">Contact Details</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {formStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
                          <User size={18} className="mr-2 text-primary-400" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`input ${errors.name ? 'border-error' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-error text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="medicalRegNo" className="block text-gray-700 font-medium mb-2 flex items-center">
                          <Key size={18} className="mr-2 text-primary-400" />
                          Medical Registration Number
                        </label>
                        <input
                          type="text"
                          id="medicalRegNo"
                          name="medicalRegNo"
                          value={formData.medicalRegNo}
                          onChange={handleInputChange}
                          className={`input ${errors.medicalRegNo ? 'border-error' : ''}`}
                          placeholder="Enter your medical registration number"
                        />
                        {errors.medicalRegNo ? (
                          <p className="text-error text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.medicalRegNo}
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm mt-1">
                            Your registration number will be validated for healthcare professional status
                          </p>
                        )}
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="button" 
                          onClick={handleNext}
                        >
                          Next Step
                        </Button>
                      </div>
                    </motion.div>
                  )}
                  
                  {formStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2 flex items-center">
                          <Phone size={18} className="mr-2 text-primary-400" />
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className={`input ${errors.mobile ? 'border-error' : ''}`}
                          placeholder="Enter your 10-digit mobile number"
                          maxLength={10}
                        />
                        {errors.mobile && (
                          <p className="text-error text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.mobile}
                          </p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
                          <Mail size={18} className="mr-2 text-primary-400" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`input ${errors.email ? 'border-error' : ''}`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-error text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="specialty" className="block text-gray-700 font-medium mb-2">
                          Medical Specialty
                        </label>
                        <select
                          id="specialty"
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleInputChange}
                          className={`input ${errors.specialty ? 'border-error' : ''}`}
                        >
                          <option value="">Select your specialty</option>
                          <option value="reproductive-medicine">Reproductive Medicine</option>
                          <option value="obstetrics-gynecology">Obstetrics & Gynecology</option>
                          <option value="urology">Urology</option>
                          <option value="endocrinology">Endocrinology</option>
                          <option value="general-medicine">General Medicine</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.specialty && (
                          <p className="text-error text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.specialty}
                          </p>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
                          <FileText size={18} className="mr-2 text-primary-400" />
                          Additional Information (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="input h-32"
                          placeholder="Share any specific interests or questions"
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={handleBack}
                        >
                          Back
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-100/50 rounded-xl p-8 text-center shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle2 size={60} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-900">Registration Successful!</h3>
                <p className="text-gray-700 mb-4">
                  Thank you for your interest, Dr. {formData.name}. A member of our clinical research team will review your information and contact you at {formData.email} or {formData.mobile} within 2-3 business days.
                </p>
                <p className="text-gray-700">
                  We look forward to exploring potential collaboration opportunities with you.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Resources Section */}
      <Section className="bg-gray-50">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary-900 mb-4">Resources for Healthcare Professionals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access valuable information to support your practice and enhance patient care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Product Information',
              description: 'Detailed information about our pharmaceutical products, including indications, dosing, and safety profiles.',
              link: '#',
            },
            {
              title: 'Clinical Research',
              description: 'Learn about our ongoing clinical trials and opportunities for patient enrollment.',
              link: '#',
            },
            {
              title: 'Continuing Education',
              description: 'Access educational resources and opportunities for professional development.',
              link: '#',
            },
          ].map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {resource.description}
              </p>
              <a 
                href={resource.link} 
                className="text-primary-400 font-medium hover:text-primary-300 transition-colors"
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Healthcare Professional Network
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stay updated with the latest developments, research findings, and product information
            from Genechord Pharmaceuticals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              variant="secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Register Now
            </Button>
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default ForDoctors;