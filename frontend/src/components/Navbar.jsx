import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#0c0f14]/90 bg-[#0c0f14]/90 backdrop-blur-xl border-b border-[#7A5BFF]/30 shadow-lg shadow-[#7A5BFF]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-semibold text-[#A885FF] cursor-pointer tracking-tight"
              onClick={handleLogoClick}
            >
              Asil.dev
            </motion.div>

            {/* Page Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/honors-awards">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full transition-colors font-medium ${
                    location.pathname === '/honors-awards'
                      ? 'bg-[#7A5BFF]/20 text-[#A885FF]'
                      : 'text-[#A885FF] hover:bg-[#7A5BFF]/10'
                  }`}
                >
                  Honors & Awards
                </motion.button>
              </Link>
              <Link to="/experience">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full transition-colors font-medium ${
                    location.pathname === '/experience'
                      ? 'bg-[#7A5BFF]/20 text-[#A885FF]'
                      : 'text-[#A885FF] hover:bg-[#7A5BFF]/10'
                  }`}
                >
                  Experience
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Projects', 'Gallery', 'About', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-full text-[#A885FF] hover:bg-[#7A5BFF]/10 transition-colors font-medium"
              >
                {item}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="ml-2 p-2 rounded-full bg-[#241c2b]/20 text-[#A885FF] hover:bg-[#4b2862]/30 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-[#241c2b]/20 text-[#A885FF] hover:bg-[#4b2862]/30 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#A885FF]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#0c0f14]/95 backdrop-blur-xl border-b border-[#7A5BFF]/30"
      >
        <div className="px-4 py-4 space-y-2">
          <Link to="/honors-awards" onClick={() => setIsOpen(false)}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                location.pathname === '/honors-awards'
                  ? 'bg-[#7A5BFF]/20 text-[#A885FF]'
                  : 'text-[#A885FF] hover:bg-[#7A5BFF]/10'
              }`}
            >
              Honors & Awards
            </motion.button>
          </Link>
          <Link to="/experience" onClick={() => setIsOpen(false)}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium ${
                location.pathname === '/experience'
                  ? 'bg-[#7A5BFF]/20 text-[#A885FF]'
                  : 'text-[#A885FF] hover:bg-[#7A5BFF]/10'
              }`}
            >
              Experience
            </motion.button>
          </Link>
          {['Home', 'Projects', 'Gallery', 'About', 'Contact'].map((item) => (
            <motion.button
              key={item}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="w-full text-left px-4 py-3 rounded-lg text-[#A885FF] hover:bg-[#7A5BFF]/10 font-medium transition-colors"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
