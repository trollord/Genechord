import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Shield, Heart, Users, Baby, Clock } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const ProductDetails = () => {
  const { id } = useParams();
  
  const products = [
    {
      id: 'oofrag',
      name: 'OOFRAG',
      category: 'Female Fertility',
      tagline: 'Because the strength of life begins with the strength of the oocyte.',
      description: 'Every hopeful heartbeat in the IVF journey carries a silent question: Will this embryo hold on? For too many women, the answer is shaped not by chance—but by a critical, often overlooked factor: oocyte fragmentation. OOFRAG is the first scientifically formulated supplement targeting oocyte fragmentation at its root with dual-action precision.',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
      keyFeatures: [
        'Cellular energy by day',
        'Deep cellular repair by night',
        'Stabilizes microtubules',
        'Restores spindle assembly',
        'Prevents chromatin breakdown'
      ],
      benefits: [
        'Supports oocyte resilience and quality',
        'Reduces fragmentation-related failures',
        'Enhances embryo development potential',
        'Improves implantation success rates'
      ],
      mechanism: 'OOFRAG works by targeting cytoskeletal integrity, the key missing link identified by our medical team. It delivers cellular energy during the day while providing deep cellular repair at night, supporting the oocyte\'s ability to sustain fertilization and development.',
      dosage: 'Take as directed by your fertility specialist. Typically administered in cycles aligned with IVF protocols.',
      icon: <Heart className="w-8 h-8 text-primary-400" />
    },
    {
      id: 'blastocare',
      name: 'BLASTOCARE',
      category: 'IVF Support',
      tagline: 'Even a perfect embryo needs the perfect home.',
      description: 'For many couples navigating IVF, success isn\'t just about creating a healthy embryo—it\'s about giving it the best chance to implant and grow. Blastocare is designed to change that by offering comprehensive endometrial support that goes beyond single-molecule solutions.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
      keyFeatures: [
        'Enhances decidualization and immune tolerance',
        'Improves uteroplacental blood flow',
        'Manages hydrocortisone-induced stress',
        'Relaxes uterine musculature',
        'Supports trophoblast-endometrium communication'
      ],
      benefits: [
        'Creates optimal uterine environment',
        'Improves implantation success rates',
        'Supports embryo accommodation',
        'Enhances blastocyst adherence'
      ],
      mechanism: 'Blastocare targets multiple critical aspects of implantation, supporting the endometrium so that when the embryo arrives, it finds a home that\'s ready. It helps manage the complex interplay between immune tolerance and vascular support.',
      dosage: 'Begin supplementation as recommended by your fertility specialist, typically starting before embryo transfer.',
      icon: <Shield className="w-8 h-8 text-primary-400" />
    },
    {
      id: 'chromosafe',
      name: 'CHROMOSAFE',
      category: 'Male Fertility',
      tagline: 'Because your DNA carries more than genes—it carries generations.',
      description: 'Male infertility can hide in plain sight. Even men with normal semen parameters may face unseen challenges like DNA fragmentation or abnormal methylation. Chromosafe is a next-generation solution rooted in reproductive epigenetics, going deeper to support sperm health at the genomic level.',
      image: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg',
      keyFeatures: [
        'Reduces DNA strand fragmentation',
        'Enhances methylation precision',
        'Supports chromatin remodeling during spermatogenesis',
        'Protects genetic blueprint',
        'Improves overall sperm DNA integrity'
      ],
      benefits: [
        'Protects genetic material for future generations',
        'Improves fertilization outcomes',
        'Supports healthy embryo development',
        'Reduces pregnancy complications'
      ],
      mechanism: 'Unlike traditional approaches, Chromosafe works at the epigenetic level, supporting the processes that protect and maintain sperm DNA integrity throughout spermatogenesis.',
      dosage: 'Take daily as recommended by your healthcare provider. Allow 3 months for full spermatogenesis cycle benefits.',
      icon: <Users className="w-8 h-8 text-primary-400" />
    },
    {
      id: 'embrotrans',
      name: 'EMBROTRANS',
      category: 'IVF Support',
      tagline: 'For the woman who has done everything right.',
      description: 'In IVF, the embryo transfer is often seen as the final step. But in truth, it is the beginning of the most critical phase—implantation. Even a genetically perfect embryo can fail if the uterine environment is inflamed, contracted, or immunologically misaligned. Embrotrans is first-in-class to overcome this challenge.',
      image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg',
      keyFeatures: [
        'Optimizes endometrial environment',
        'Facilitates trophoblast adhesion',
        'Modulates immune activity',
        'Maintains uterine calm',
        'First-in-class post-transfer support'
      ],
      benefits: [
        'Supports critical 48-72 hour window post-transfer',
        'Reduces inflammation and contractions',
        'Enhances immune tolerance',
        'Improves implantation success'
      ],
      mechanism: 'Embrotrans is scientifically designed to support the critical window after embryo transfer, optimizing the endometrial environment when it matters most.',
      dosage: 'Begin immediately after embryo transfer as directed by your fertility specialist.',
      icon: <Baby className="w-8 h-8 text-primary-400" />
    },
    {
      id: 'manseed',
      name: 'MANSEED',
      category: 'Male Fertility',
      tagline: 'Reclaim your role in the journey to parenthood.',
      description: 'In a world where dreams of parenthood are often fought quietly behind closed doors, male infertility remains one of the most under-discussed challenges. Modern lifestyles, rising stress, environmental toxins, and age-related decline have led to a steady rise in male infertility. ManSeed is designed to fill key gaps in spermatogenesis.',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
      keyFeatures: [
        'Improves sperm count',
        'Enhances motility and morphology',
        'Supports DNA integrity',
        'Optimizes fertilization potential',
        'Science-backed formulation'
      ],
      benefits: [
        'Comprehensive male fertility support',
        'Suitable for natural conception and ART',
        'Addresses multiple fertility parameters',
        'Trusted by fertility specialists'
      ],
      mechanism: 'Rooted in advanced reproductive science, ManSeed offers focused, science-backed support to optimize male fertility parameters essential for healthy fertilization.',
      dosage: 'Take daily as recommended. Allow 3 months for optimal results due to spermatogenesis cycle.',
      icon: <Users className="w-8 h-8 text-primary-400" />
    },
    {
      id: 'oreserve',
      name: 'ORESERVE',
      category: 'Female Fertility',
      tagline: "Because there shouldn't be a deadline on starting a family.",
      description: 'When time feels like it\'s slipping away, you need more than reassurance—you need something that stands with you. For many women, Diminished Ovarian Reserve (DOR) doesn\'t announce itself—it reveals itself through questions, delays, and unexpected detours. It\'s like racing a clock you didn\'t know had started. The eggs are fewer, the options narrower—and the dream of motherhood suddenly feels like it comes with an expiration date. That\'s where ORESERVE steps in.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
      keyFeatures: [
        'Improves Antral Follicle Count (AFC)',
        'Enhances ovarian response',
        'Supports mitochondrial function',
        'Reduces oxidative stress',
        'Restores follicular integrity'
      ],
      benefits: [
        'Targeted support for Diminished Ovarian Reserve',
        'Improves ovarian response to stimulation',
        'Enhances egg quality and viability',
        'Transforms uncertainty into action'
      ],
      mechanism: 'Blending cutting-edge reproductive science with clinical insight, Oreserve works by enhancing mitochondrial function, reducing oxidative stress, and restoring follicular integrity—gently but effectively.',
      dosage: 'Take as recommended by your fertility specialist. Typically started 3 months before planned treatment cycles.',
      icon: <Clock className="w-8 h-8 text-primary-400" />
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button variant="primary">
              <ArrowLeft className="mr-2" size={16} />
              Back to Products
            </Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <PageTransition>
      <div className="relative pt-32 pb-20">
        <div className="container-custom">
          <Link 
            to="/products"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                {product.icon}
                <h1 className="text-4xl font-semibold text-secondary-900 ml-3">{product.name}</h1>
              </div>
              <div className="bg-primary-400 text-white px-4 py-2 rounded-full inline-block mb-4">
                {product.category}
              </div>
              <p className="text-primary-400 font-medium text-lg mb-6 italic">
                {product.tagline}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-400 mr-2" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Clinical Benefits</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Mechanism of Action</h3>
              <p className="text-gray-700 leading-relaxed">{product.mechanism}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Usage Guidelines</h3>
              <p className="text-gray-700 leading-relaxed">{product.dosage}</p>
              <div className="mt-4 p-4 bg-primary-100 rounded-lg">
                <p className="text-sm text-primary-600">
                  <strong>Important:</strong> Always consult with your fertility specialist before starting any new supplement regimen.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-primary-400 text-white rounded-xl p-8 mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to Learn More?</h3>
            <p className="text-white/90 mb-6">
              Speak with your fertility specialist about how {product.name} can support your journey to parenthood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/for-doctors">
                <Button variant="secondary">For Healthcare Providers</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-400">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetails;