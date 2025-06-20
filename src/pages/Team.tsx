import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import IndiaMap from '../components/IndiaMap';
import { ArrowRightCircle, Heart, TrendingUp, Users, Zap, Sun, Stethoscope, Linkedin, Mail, ExternalLink, Award, Globe, Target, Brain, Handshake, Shield, Trophy, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jaineel Mehta',
      role: 'Founder & CEO',
      education: 'Biotechnology Degree, United States',
      bio: 'Jaineel is the visionary behind Genechord Pharmaceuticals, driven by personal passion and deep professional expertise. Coming from a legacy family with over 25 years in the pharmaceutical industry, he co-founded Nutragene Biotech before launching Genechord—a deeply personal venture dedicated to transforming reproductive healthcare through scientific innovation.',
      keyStrengths: [
        'Strategic vision and leadership in pharmaceutical innovation',
        'International business development and partnerships',
        'Deep understanding of reproductive healthcare challenges',
        'Expertise in pharmaceutical manufacturing and development'
      ],
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg'
    },
    {
      name: 'Gautam Mehta',
      role: 'Co-Founder',
      education: 'Management and Entrepreneurship, Atlas Skilltech University | Bachelor\'s in Commerce, University of Mumbai',
      bio: 'Gautam is a finance professional with a strong foundation in investment strategy, capital markets, and business leadership. He currently manages an ₹800 crore Alternative Investment Fund and has prior experience at a venture capital firm. He is also a co-founder at Nutragene Biotech and a Managing Partner at Mehta Finvest. With a focused and analytical approach, he brings financial discipline and strategic insight to the companies he is associated with, ensuring long-term growth and governance.',
      keyStrengths: [
        'Investment strategy and capital markets expertise',
        'Alternative Investment Fund management (₹800 crore)',
        'Venture capital and business leadership experience',
        'Financial discipline and strategic governance'
      ],
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
    },
    {
      name: 'Palaniappan Subbiah Chettiar',
      role: 'Vice President – Sales',
      education: 'Pharmaceutical Sales & Marketing',
      experience: '35+ years',
      bio: 'Palaniappan began his journey as a Medical Representative and steadily climbed the ranks, building an unmatched understanding of pharmaceutical sales dynamics in India. Known for his strategic insight and extensive network, he now leads the Genechord sales team across the country.',
      keyStrengths: [
        'Extensive pharmaceutical sales network across India',
        'Deep market insights and customer relationships',
        'Strategic sales planning and territory management',
        'Team leadership and sales force development'
      ],
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg'
    }
  ];

  const operatingStates = ['Maharashtra', 'Goa', 'Gujarat', 'Chhattisgarh', 'Madhya Pradesh'];
  
  const operatingCities = ['Mumbai'];

  return (
    <PageTransition>
      {/* Hero Section with merged content */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-primary-100 via-primary-100/30 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-secondary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Leadership Team
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Meet the dedicated professionals behind Genechord Pharmaceuticals. Our diverse leadership team 
              combines decades of experience in pharmaceutical research, development, business management, 
              and healthcare to deliver innovative solutions that improve lives.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <Section className="bg-white">
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Image Section - Now smaller (1/3 width) */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="h-64 lg:h-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Experience Badge (only for Palaniappan) */}
                  {member.experience && (
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-primary-400 text-white px-3 py-2 rounded-lg shadow-lg">
                        <div className="text-base font-bold">{member.experience}</div>
                        <div className="text-xs opacity-90">Experience</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section - Now larger (2/3 width) */}
                <div className={`lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-secondary-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 font-semibold text-lg mb-6">{member.role}</p>
                  
                  {/* Education & Experience Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2 text-primary-400" />
                      <span className="text-sm">{member.education}</span>
                    </div>
                    {member.experience && (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                        <span className="text-sm">{member.experience} experience</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Key Strengths */}
                  <div className="mb-6">
                    <h4 className="font-bold text-secondary-900 mb-4 text-lg">Key Strengths:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {member.keyStrengths.map((strength, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/genechord-pharmaceuticals/about/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 hover:bg-primary-400 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="mailto:info@genechord.com" 
                      className="w-10 h-10 bg-gray-100 hover:bg-primary-400 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Beyond Leadership */}
      <Section className="bg-gray-50">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary-900 mb-4">Our Dynamic Team</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Beyond our leadership, Genechord is backed by a dynamic team of professionals across marketing, 
            administration, and operations. From seasoned pharmaceutical experts to bright minds with pedigrees 
            from institutions like IIM, our team brings together deep industry experience and fresh, data-driven thinking. 
            Together, they form the backbone of Genechord's mission—ensuring innovation flows seamlessly from lab to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-12 w-12 text-primary-400" />,
              title: 'Marketing & Strategy',
              description: 'Bright minds from premier institutions like IIM bringing data-driven insights and innovative marketing strategies to amplify our mission.',
            },
            {
              icon: <Stethoscope className="h-12 w-12 text-primary-400" />,
              title: 'Pharmaceutical Experts',
              description: 'Seasoned professionals with deep industry experience ensuring quality, compliance, and excellence in every aspect of our operations.',
            },
            {
              icon: <Target className="h-12 w-12 text-primary-400" />,
              title: 'Operations & Administration',
              description: 'Dedicated professionals managing day-to-day operations, ensuring smooth workflow from research to market delivery.',
            },
          ].map((team, index) => (
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
                {team.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 text-center">
                {team.title}
              </h3>
              <p className="text-gray-600 text-center">
                {team.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Guided by Experience */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary-400 mr-3" />
              <h2 className="text-secondary-900">Guided by Experience</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              At Genechord, we are supported by a trusted circle of consultants and mentors—veterans 
              of the IVF and reproductive pharma industry with over 30 years of experience.
            </p>
            <p className="text-gray-700 mb-8">
              Their insights and guidance help shape our strategies, ensuring every decision is grounded 
              in proven expertise and aligned with the evolving needs of the field.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-400 mb-2">30+ Years Industry Experience</h4>
                <p className="text-gray-600 text-sm">Veteran consultants from IVF and reproductive pharma industry</p>
              </div>
              <div className="bg-primary-100 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-400 mb-2">Strategic Guidance</h4>
                <p className="text-gray-600 text-sm">Proven expertise shaping our decisions and strategies</p>
              </div>
              <div className="bg-primary-100 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-400 mb-2">Industry Alignment</h4>
                <p className="text-gray-600 text-sm">Ensuring our approach meets evolving field requirements</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Industry Mentors" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Strategic Consultation" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                alt="Expert Guidance" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg" 
                alt="Industry Veterans" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
              />
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

              <h3 className="text-2xl font-semibold mt-8 mb-6 text-secondary-900">
                Headquarters
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="bg-primary-100 p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: operatingStates.length * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-primary-400 mr-4 mt-1"></div>
                    <div>
                      <span className="font-medium text-gray-800 block">Mumbai, Maharashtra</span>
                      <p className="text-sm text-gray-600 mt-1">B-811, Damji Shamji Corporate Square</p>
                      <p className="text-sm text-gray-600">Laxmi Nagar, Ghatkopar East</p>
                      <p className="text-sm text-gray-600">Mumbai – 400075</p>
                    </div>
                  </div>
                </motion.div>
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

      {/* Our Culture */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary-900 mb-6">Our Culture</h2>
            <p className="text-gray-700 mb-6 text-lg">
              At Genechord, we cultivate a culture rooted in innovation, collaboration, and uncompromising excellence. 
              We believe that our diverse and passionate team is our greatest strength—bringing together a wealth of 
              perspectives, scientific expertise, and shared purpose to solve the complex challenges of reproductive healthcare.
            </p>
            <p className="text-gray-700 mb-6">
              We are committed to creating an environment where individuals grow, ideas thrive, and every contribution 
              directly impacts lives. Because here, every breakthrough begins with people who care.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Brain className="h-5 w-5 text-primary-400 mr-2" />
                  <h4 className="font-semibold text-primary-400">Innovation</h4>
                </div>
                <p className="text-gray-600 text-sm">We encourage bold thinking, fresh ideas, and novel approaches that push boundaries in reproductive medicine.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Handshake className="h-5 w-5 text-primary-400 mr-2" />
                  <h4 className="font-semibold text-primary-400">Collaboration</h4>
                </div>
                <p className="text-gray-600 text-sm">We work seamlessly across teams and disciplines—because real progress happens when we move forward together.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-primary-400 mr-2" />
                  <h4 className="font-semibold text-primary-400">Integrity</h4>
                </div>
                <p className="text-gray-600 text-sm">We lead with transparency, trust, and ethical responsibility in everything we do.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Trophy className="h-5 w-5 text-primary-400 mr-2" />
                  <h4 className="font-semibold text-primary-400">Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm">We hold ourselves to the highest standards in every detail—from product development to patient impact.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Team Meeting" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                alt="Research Discussion" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg" 
                alt="Office Culture" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Join Our Team */}
      <Section className="bg-primary-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Team
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Passionate about transforming healthcare? At Genechord Pharmaceuticals, we're always looking for driven, 
            purpose-led individuals to help us shape the future of reproductive medicine. Explore exciting opportunities 
            and become part of a team that's innovating to make a real difference.
          </motion.p>
          <motion.a
            href="mailto:info@genechord.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-400 font-medium rounded-md hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            View Open Positions <ExternalLink size={16} className="ml-2" />
          </motion.a>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Team;