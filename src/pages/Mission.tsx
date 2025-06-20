import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import { ArrowRightCircle, Heart, TrendingUp, Users, Zap, Sun, Stethoscope } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: <Stethoscope className="h-12 w-12 text-primary-400" />,
      title: 'Clinician-Focused',
      description: 'We champion the vital role of infertologists and fertility specialists, supporting them with precise, research-backed solutions that enhance their expertise.',
    },
    {
      icon: <Heart className="h-12 w-12 text-primary-400" />,
      title: 'Patient-Centered',
      description: 'We put patients at the heart of our mission, creating therapies that aim to improve both outcomes and quality of life.',
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary-400" />,
      title: 'Innovation',
      description: 'We relentlessly pursue forward-thinking solutions to meet the evolving needs of reproductive healthcare.',
    },
    {
      icon: <Users className="h-12 w-12 text-primary-400" />,
      title: 'Collaboration',
      description: 'We believe in the strength of partnerships—with clinicians, researchers, and industry leaders—to accelerate progress and expand access.',
    },
    {
      icon: <Zap className="h-12 w-12 text-primary-400" />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in science, development, and delivery—because good enough isn\'t good enough.',
    },
    {
      icon: <Sun className="h-12 w-12 text-primary-400" />,
      title: 'Integrity',
      description: 'We lead with transparency, responsibility, and unwavering ethical standards in everything we do.',
    },
  ];

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
              Our Mission & Vision
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              To redefine reproductive therapy by delivering innovative, science-driven solutions 
              that enhance fertility outcomes and bring new possibilities to life.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-lg">
              To redefine reproductive therapy by delivering innovative, science-driven solutions 
              that enhance fertility outcomes and bring new possibilities to life.
            </p>
            <ul className="space-y-4">
              {[
                'Develop targeted, safe, and effective treatments for complex reproductive challenges',
                'Make our solutions accessible to clinicians and patients across India',
                'Uphold the highest standards of quality, ethics, and clinical relevance',
                'Foster a culture of research, innovation, and continuous improvement',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRightCircle className="text-primary-400 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-6 text-lg">
              To become the most admired pharmaceutical company in reproductive healthcare—known for 
              our cutting-edge formulations, ethical foundations, and meaningful impact on fertility journeys.
            </p>
            <ul className="space-y-4">
              {[
                'Advance reproductive medicine through scientific excellence',
                'Set new benchmarks in supplement and therapeutic innovation for ART',
                'Expand our reach across India and international markets',
                'Build enduring partnerships that improve reproductive health outcomes',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRightCircle className="text-primary-400 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-gray-50">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GeneChord, our values are the foundation of everything we do—guiding every decision, 
            every formulation, and every partnership we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Commitment Section */}
      <Section className="bg-primary-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Commitment
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At GeneChord, we're dedicated to addressing the unique reproductive healthcare challenges 
            faced by patients and clinicians across India. Through targeted research, innovative 
            formulations, and accessible, effective solutions, we strive to enhance fertility 
            outcomes and improve quality of life.
          </motion.p>
          <motion.p 
            className="text-white/90 text-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Together, we're nurturing the future—one successful fertility journey at a time.
          </motion.p>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Mission;