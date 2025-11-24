import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mockData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* --- AURORA BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7A5BFF]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2F8CFF]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* --- TEXT SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-[#7A5BFF]/40 rounded-full text-sm font-semibold text-[#A885FF] shadow-lg shadow-[#7A5BFF]/10"
            >
              Welcome to my website
            </motion.div>

            {/* HEADLINE */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F4F7FA] drop-shadow-2xl">
              {personalInfo.tagline}
            </h1>

            {/* TYPE ANIM */}
            <div className="text-2xl md:text-3xl font-semibold text-[#A885FF] h-20 drop-shadow-lg">
              <TypeAnimation
                sequence={[
                  'I build web applications', 2000,
                  'I create AI solutions', 2000,
                  'I design robotics systems', 2000,
                  'I solve real problems', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-[#B8C2CC] leading-relaxed drop-shadow-md">
              {personalInfo.description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">

              {/* PRIMARY BUTTON */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="
                    bg-gradient-to-br 
                    from-[#2F8CFF] via-[#7A5BFF] to-[#C05CFF]
                    text-white px-8 py-6 text-lg rounded-full font-semibold
                    shadow-[0_0_18px_#7A5BFF]
                    hover:shadow-[0_0_28px_#C05CFF]
                    transition-all duration-300
                  "
                >
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>

              {/* OUTLINE BUTTON */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open(personalInfo.cvUrl, '_blank')}
                  variant="outline"
                  className="
                    border-2 border-[#7A5BFF]
                    text-[#A885FF]
                    hover:bg-[#7A5BFF]/10 
                    hover:border-[#C05CFF]
                    px-8 py-6 text-lg rounded-full font-semibold 
                    backdrop-blur-sm bg-white/5 
                    shadow-lg shadow-[#7A5BFF]/10
                    hover:shadow-[#C05CFF]/30
                    transition-all duration-300
                  "
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </motion.div>

            </div>
          </motion.div>

          {/* --- IMAGE SECTION --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F8CFF]/20 to-[#C05CFF]/20 rounded-3xl blur-2xl opacity-50"></div>

              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="
                  relative w-80 h-80 md:w-96 md:h-96 
                  rounded-3xl border-4 border-[#7A5BFF]/40 
                  shadow-2xl shadow-[#7A5BFF]/20 
                  object-cover ring-4 ring-[#7A5BFF]/10
                "
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#7A5BFF]/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-[#A885FF] rounded-full mt-2"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
