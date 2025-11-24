import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Certificate, Star, Calendar, Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { honorsAwards } from '../mockData';

const iconMap = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  certificate: Certificate,
  star: Star
};

const HonorsAwards = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#A885FF] dark:text-[#A885FF] mb-4">
            Honors & Awards
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and achievements throughout my journey in technology and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {honorsAwards.map((honor, idx) => {
            const Icon = iconMap[honor.icon] || Trophy;
            return (
              <motion.div
                key={honor.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-2 border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30 bg-[#0c0f14] dark:bg-[#0c0f14] h-full flex flex-col shadow-lg shadow-[#7A5BFF]/50 hover:shadow-xl hover:shadow-[#7A5BFF]/60 transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-full bg-[#241c2b]/20 flex-shrink-0"
                      >
                        <Icon size={28} className="text-[#A885FF] dark:text-[#A885FF]" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#A885FF] dark:text-[#A885FF] mb-2">
                          {honor.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 dark:text-gray-300 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 size={16} />
                            <span>{honor.organization}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{honor.date}</span>
                          </div>
                        </div>
                        <Badge
                          className="bg-[#7A5BFF]/20 dark:bg-[#7A5BFF]/20 text-[#A885FF] dark:text-[#A885FF] border border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30"
                          variant="outline"
                        >
                          {honor.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-base text-gray-300 dark:text-gray-300 leading-relaxed flex-grow">
                      {honor.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HonorsAwards;
