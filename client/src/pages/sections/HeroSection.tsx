import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeIn, textVariant } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.div
          variants={fadeIn()}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={textVariant(0.1)}
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-accent"
          >
            Hi, I'm <span className="text-primary">Praneesh Piragash</span>
          </motion.h1>
          
          <motion.p 
            variants={textVariant(0.2)}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Aspiring Software Engineer and Future Entrepreneur
          </motion.p>
          
          <motion.div 
            variants={textVariant(0.3)}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-lg transition-all"
            >
              Get to Know Me
            </motion.a>
            
            <motion.a
              href="#future"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-surface hover:bg-surface/90 text-white font-medium rounded-lg shadow-lg transition-all"
            >
              My Aspirations
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-16"
        >
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={24} className="text-primary mx-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
