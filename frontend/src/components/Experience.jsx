import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../mockData';

const Experience = () => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Freelance':
        return 'dark:bg-teal-500/20 dark:text-teal-400 bg-teal-50 text-teal-700';
      case 'Internship':
        return 'dark:bg-blue-500/20 dark:text-blue-400 bg-blue-50 text-blue-700';
      case 'Volunteer':
        return 'dark:bg-purple-500/20 dark:text-purple-400 bg-purple-50 text-purple-700';
      case 'Personal':
        return 'dark:bg-orange-500/20 dark:text-orange-400 bg-orange-50 text-orange-700';
      default:
        return 'dark:bg-slate-500/20 dark:text-slate-400 bg-slate-50 text-slate-700';
    }
  };

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
            Experience
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and contributions in technology and development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <Card className="border-2 border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30 bg-[#0c0f14] dark:bg-[#0c0f14] shadow-lg shadow-[#7A5BFF]/50 hover:shadow-xl hover:shadow-[#7A5BFF]/60 transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-2 rounded-full bg-[#241c2b]/20"
                        >
                          <Briefcase size={20} className="text-[#A885FF] dark:text-[#A885FF]" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-[#A885FF] dark:text-[#A885FF]">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 dark:text-gray-300 mb-3 ml-10">
                        <div className="flex items-center gap-1">
                          <Building2 size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.date}</span>
                        </div>
                      </div>
                      <Badge className={`${getTypeColor(exp.type)} border-0`}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-base text-gray-300 dark:text-gray-300 leading-relaxed mb-4 ml-10">
                    {exp.description}
                  </p>

                  <div className="ml-10 space-y-3">
                    <h4 className="text-sm font-semibold text-[#A885FF] dark:text-[#A885FF] mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, ridx) => (
                        <motion.li
                          key={ridx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + ridx * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-300 dark:text-gray-300"
                        >
                          <CheckCircle2 size={16} className="text-[#A885FF] dark:text-[#A885FF] mt-0.5 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-sm font-semibold text-[#A885FF] dark:text-[#A885FF] mr-2">
                        Skills:
                      </span>
                      {exp.technologies.map((tech, tidx) => (
                        <Badge
                          key={tidx}
                          variant="outline"
                          className="border-[#7A5BFF]/30 dark:border-[#7A5BFF]/30 text-gray-300 dark:text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
