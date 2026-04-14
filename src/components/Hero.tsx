import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="hero-text mb-8">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[32px] font-serif leading-[1.1] mb-2 text-heritage-ink"
      >
        Discover India's Stories of Stone
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm text-[#666] leading-[1.4]"
      >
        Upload a photo to identify Indian ancient wonders and plan your cultural pilgrimage.
      </motion.p>
    </div>
  );
}

