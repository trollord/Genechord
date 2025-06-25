import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import { Clock, Beaker, Sparkles } from 'lucide-react';

const Products = () => {
  // COMMENTED OUT: Product categories and filtering - will be restored later
  /*
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Products', icon: <Pill className="h-5 w-5" /> },
    { id: 'reproductive', name: 'Reproductive Health', icon: <Baby className="h-5 w-5" /> },
    { id: 'male-fertility', name: 'Male Fertility', icon: <Users className="h-5 w-5" /> },
    { id: 'female-fertility', name: 'Female Fertility', icon: <Heart className="h-5 w-5" /> },
    { id: 'ivf-support', name: 'IVF Support', icon: <Shield className="h-5 w-5" /> },
  ];

  const products = [
    {
      id: 'oofrag',
      name: 'OOFRAG',
      category: 'female-fertility',
      description: 'The first scientifically formulated supplement targeting oocyte fragmentation at its root with dual-action precision.',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
      keyFeatures: [
        'Cellular energy by day',
        'Deep cellular repair by night',
        'Stabilizes microtubules',
        'Restores spindle assembly',
        'Prevents chromatin breakdown'
      ],
      tagline: 'Because the strength of life begins with the strength of the oocyte.'
    },
    {
      id: 'blastocare',
      name: 'BLASTOCARE',
      category: 'ivf-support',
      description: 'Comprehensive endometrial support designed to enhance implantation success by creating the optimal uterine environment.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
      keyFeatures: [
        'Enhances decidualization and immune tolerance',
        'Improves uteroplacental blood flow',
        'Manages hydrocortisone-induced stress',
        'Relaxes uterine musculature',
        'Supports trophoblast-endometrium communication'
      ],
      tagline: 'Even a perfect embryo needs the perfect home.'
    },
    {
      id: 'chromosafe',
      name: 'CHROMOSAFE',
      category: 'male-fertility',
      description: 'Next-generation solution rooted in reproductive epigenetics, supporting sperm health at the genomic level.',
      image: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg',
      keyFeatures: [
        'Reduces DNA strand fragmentation',
        'Enhances methylation precision',
        'Supports chromatin remodeling',
        'Protects genetic blueprint',
        'Improves sperm DNA integrity'
      ],
      tagline: 'Because your DNA carries more than genes—it carries generations.'
    },
    {
      id: 'embrotrans',
      name: 'EMBROTRANS',
      category: 'ivf-support',
      description: 'Scientifically designed formula supporting the critical 48-72 hour window after embryo transfer.',
      image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg',
      keyFeatures: [
        'Optimizes endometrial environment',
        'Facilitates trophoblast adhesion',
        'Modulates immune activity',
        'Maintains uterine calm',
        'First-in-class post-transfer support'
      ],
      tagline: 'For the woman who has done everything right.'
    },
    {
      id: 'manseed',
      name: 'MANSEED',
      category: 'male-fertility',
      description: 'Advanced reproductive science designed to fill key gaps in spermatogenesis and optimize male fertility.',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
      keyFeatures: [
        'Improves sperm count',
        'Enhances motility and morphology',
        'Supports DNA integrity',
        'Optimizes fertilization potential',
        'Science-backed formulation'
      ],
      tagline: 'Reclaim your role in the journey to parenthood.'
    },
    {
      id: 'oreserve',
      name: 'ORESERVE',
      category: 'female-fertility',
      description: 'Targeted support for women navigating Diminished Ovarian Reserve with a science-backed approach to improving ovarian response.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
      keyFeatures: [
        'Improves Antral Follicle Count (AFC)',
        'Enhances ovarian response',
        'Supports mitochondrial function',
        'Reduces oxidative stress',
        'Restores follicular integrity'
      ],
      tagline: "Because there shouldn't be a deadline on starting a family."
    }
  ];

  const filteredProducts = selectedCategory && selectedCategory !== 'all'
    ? products.filter(product => product.category === selectedCategory)
    : products;
  */

  return (
    <PageTransition>
      {/* Coming Soon - Full Page */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-primary-50 pt-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Beaker className="w-24 h-24 text-primary-400" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3"
                  >
                    <Sparkles className="w-8 h-8 text-primary-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-secondary-900 mb-8"
            >
              Coming Soon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              We are developing innovative reproductive health solutions that will revolutionize fertility care. 
              Our groundbreaking products are in the final stages of development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary-200 max-w-md mx-auto"
            >
              <Clock className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <p className="text-primary-600 font-medium mb-2 text-lg">Expected Launch</p>
              <p className="text-secondary-900 font-bold text-3xl">Q2 2025</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-600 mt-8"
            >
              Stay tuned for updates on our revolutionary fertility solutions
            </motion.p>
          </div>
        </div>
      </div>

      {/* COMMENTED OUT: Hero Section - will be restored later
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-primary-100 via-primary-100/30 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-secondary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Products
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We are developing innovative reproductive health solutions designed to support every step of the fertility journey.
              Each product will be developed with the highest standards of quality, safety, and efficacy.
            </motion.p>
          </div>
        </div>
      </div>
      */}

      {/* COMMENTED OUT: Product Categories and Filters - will be restored later
      <Section className="bg-white pb-0">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-5 py-3 rounded-full transition-all ${
                selectedCategory === category.id || (category.id === 'all' && selectedCategory === null)
                  ? 'bg-primary-400 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </Section>
      */}

      {/* COMMENTED OUT: Products List - will be restored later
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-primary-400 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  {categories.find(c => c.id === product.category)?.name}
                </div>
              </div>
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
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-secondary-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/products/${product.id}`}
                  className="text-primary-400 font-medium hover:text-primary-300 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      */}

      {/* COMMENTED OUT: Research & Development - will be restored later
      <Section className="bg-gray-50">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary-900 mb-4">Research & Development</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to innovation drives our extensive research and development efforts,
            resulting in breakthrough treatments for reproductive health challenges.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-secondary-900">
                Our Innovation Pipeline
              </h3>
              <p className="text-gray-700 mb-6">
                We continually invest in research and development to address unmet medical needs 
                in reproductive health. Our current pipeline includes promising
                candidates targeting various aspects of fertility and IVF success.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-400">Oocyte Quality Enhancement</h4>
                  <p className="text-gray-600">Advanced formulations targeting cellular energy and DNA integrity</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-400">Endometrial Receptivity</h4>
                  <p className="text-gray-600">Novel approaches to optimize implantation success</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-400">Male Fertility Solutions</h4>
                  <p className="text-gray-600">Epigenetic approaches to sperm health and DNA protection</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" 
                alt="Research Laboratory" 
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </Section>
      */}

      {/* COMMENTED OUT: Quality Standards - will be restored later
      <Section className="bg-primary-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Quality Standards
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Genechord, we maintain the highest standards of quality and safety throughout
            our manufacturing process, ensuring that every product meets rigorous criteria
            before reaching patients and healthcare providers.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Good Manufacturing Practices (GMP) certified facilities',
              'Rigorous quality control and clinical validation protocols',
              'Commitment to sustainable and ethical manufacturing practices',
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <p className="text-white font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      */}
    </PageTransition>
  );
};

export default Products;