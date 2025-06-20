import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Section from '../ui/Section';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Section className="bg-white py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-secondary-900 mb-4">Discover Genechord</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           Watch our corporate video to discover our mission, our facilities, and the impact we're making in the reproductive healthcare space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-xl max-w-3xl mx-auto"
        >
          {!isPlaying ? (
            <>
              <img
                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg"
                alt="Genechord Pharmaceuticals - Modern pharmaceutical facility"
                className="w-full h-auto max-h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button 
                  onClick={handlePlay} 
                  className="bg-primary-400 hover:bg-primary-300 text-white w-20 h-20 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Play video"
                >
                  <Play size={32} fill="white" />
                </button>
              </div>
            </>
          ) : (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Genechord Corporate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default VideoSection;