import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../mockData';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden border-2 border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30 bg-[#0c0f14] dark:bg-[#0c0f14] h-full flex flex-col shadow-lg shadow-[#7A5BFF]/50 hover:shadow-xl hover:shadow-[#7A5BFF]/60 transition-shadow duration-300">
        {/* Image Carousel */}
          <div className="relative h-64 bg-[#0c0f14] dark:bg-[#0c0f14] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#7A5BFF]/50 dark:bg-[#7A5BFF]/50 hover:bg-[#7A5BFF]/70 dark:hover:bg-[#7A5BFF]/70 text-[#0c0f14] dark:text-[#0c0f14] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#7A5BFF]/50 dark:bg-[#7A5BFF]/50 hover:bg-[#7A5BFF]/70 dark:hover:bg-[#7A5BFF]/70 text-[#0c0f14] dark:text-[#0c0f14] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'bg-[#A885FF] dark:bg-[#A885FF] w-6'
                        : 'bg-[#7A5BFF]/50 dark:bg-[#7A5BFF]/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-2xl font-bold text-[#A885FF] dark:text-[#A885FF]">
              {project.title}
            </CardTitle>
            {project.featured && (
              <Badge className="bg-[#7A5BFF]/20 dark:bg-[#7A5BFF]/20 text-[#A885FF] dark:text-[#A885FF] border border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30">
                Featured
              </Badge>
            )}
          </div>
          <CardDescription className="text-gray-300 dark:text-gray-300 text-base">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30 text-gray-300 dark:text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
            <Button
              onClick={() => window.open(project.github, '_blank')}
              variant="outline"
              className="w-full border-2 border-[#7A5BFF]/40 dark:border-[#7A5BFF]/40 text-[#A885FF] dark:text-[#A885FF] hover:bg-[#7A5BFF]/20 dark:hover:bg-[#7A5BFF]/20 transition-all"
            >
              <Github className="mr-2" size={18} />
              Code
            </Button>
          </motion.div>

          {project.demo && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button
                onClick={() => window.open(project.demo, '_blank')}
                className="w-full bg-[#7A5BFF] dark:bg-[#7A5BFF] text-[#0c0f14] dark:text-[#0c0f14] hover:bg-[#A885FF] dark:hover:bg-[#A885FF] shadow-lg shadow-[#7A5BFF]/20 dark:shadow-[#7A5BFF]/20 hover:shadow-xl hover:shadow-[#7A5BFF]/30 dark:hover:shadow-[#7A5BFF]/30 transition-all"
              >
                <ExternalLink className="mr-2" size={18} />
                Demo
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#A885FF] dark:text-[#A885FF] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
