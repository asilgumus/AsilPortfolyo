import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages } from '../mockData';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Calculate visible images (current + 2 on each side)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + galleryImages.length) % galleryImages.length;
      visible.push({ ...galleryImages[index], offset: i });
    }
    return visible;
  };

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#A885FF] dark:text-[#A885FF] mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of moments from my journey in tech and development
          </p>
        </motion.div>

        {/* Main Gallery Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="p-4 bg-[#7A5BFF] dark:bg-[#7A5BFF] text-[#0c0f14] dark:text-[#0c0f14] rounded-full hover:bg-[#A885FF] dark:hover:bg-[#A885FF] transition-colors z-10 shadow-lg shadow-[#7A5BFF]/50"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </motion.button>

            {/* Image Container */}
            <div className="relative w-full max-w-4xl h-96 overflow-hidden">
              <div className="flex items-center justify-center h-full">
                {getVisibleImages().map((image, idx) => {
                  const isCenter = image.offset === 0;
                  return (
                    <motion.div
                      key={`${image.id}-${idx}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isCenter ? 1 : 0.3,
                        scale: isCenter ? 1 : 0.7,
                        x: image.offset * 320,
                        zIndex: isCenter ? 10 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                      onClick={() => isCenter && setSelectedImage(currentIndex)}
                    >
                      <div
                        className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                          isCenter
                            ? 'shadow-2xl border-4 border-[#7A5BFF] dark:border-[#7A5BFF]'
                            : 'pointer-events-none'
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-80 h-96 object-cover"
                        />
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c0f14]/80 to-transparent p-6"
                          >
                            <h3 className="text-[#A885FF] dark:text-[#A885FF] text-xl font-bold mb-1">{image.title}</h3>
                            <p className="text-gray-300 dark:text-gray-300 text-sm">{image.description}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="p-4 bg-[#7A5BFF] dark:bg-[#7A5BFF] text-[#0c0f14] dark:text-[#0c0f14] rounded-full hover:bg-[#A885FF] dark:hover:bg-[#A885FF] transition-colors z-10 shadow-lg shadow-[#7A5BFF]/50"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </motion.button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((image, idx) => (
              <motion.button
                key={image.id}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentIndex
                            ? 'bg-[#A885FF] dark:bg-[#A885FF] w-8'
                            : 'bg-[#7A5BFF]/50 dark:bg-[#7A5BFF]/50'
                        }`}
              />
            ))}
          </div>

          {/* Keyboard Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8 text-sm text-gray-400 dark:text-gray-400"
          >
            Use arrow keys ← → to navigate | Click on image to view fullscreen
          </motion.div>
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0c0f14]/95 dark:bg-[#0c0f14]/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-[#7A5BFF]/20 dark:bg-[#7A5BFF]/20 hover:bg-[#7A5BFF]/30 dark:hover:bg-[#7A5BFF]/30 rounded-full text-[#A885FF] dark:text-[#A885FF] transition-colors"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 p-4 bg-[#7A5BFF]/20 dark:bg-[#7A5BFF]/20 hover:bg-[#7A5BFF]/30 dark:hover:bg-[#7A5BFF]/30 rounded-full text-[#A885FF] dark:text-[#A885FF] transition-colors"
              >
                <ChevronLeft size={40} />
              </button>

              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 p-4 bg-[#7A5BFF]/20 dark:bg-[#7A5BFF]/20 hover:bg-[#7A5BFF]/30 dark:hover:bg-[#7A5BFF]/30 rounded-full text-[#A885FF] dark:text-[#A885FF] transition-colors"
              >
                <ChevronRight size={40} />
              </button>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-[#A885FF] dark:text-[#A885FF] text-2xl font-bold mb-2">
                  {galleryImages[currentIndex].title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 text-lg">
                  {galleryImages[currentIndex].description}
                </p>
                <p className="text-gray-400 dark:text-gray-400 text-sm mt-2">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
