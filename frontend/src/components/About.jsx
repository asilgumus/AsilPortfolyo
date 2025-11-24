import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Rocket, Heart } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { personalInfo, skills } from '../mockData';
import ElectricBorder from './reactBits/ElectricBorder/ElectricBorder';

const iconMap = {
    'code': Code,
    'code-2': Code,
    'atom': Cpu,
    'hash': Code,
    'palette': Heart,
    'server': Cpu,
    'git-branch': Code,
    'database': Cpu
};

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#A885FF] mb-4">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get to know more about who I am and what I do
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT SIDE (BIO) */}
                    <ElectricBorder
                        color="#9e6ef8ff"
                        speed={0.5}
                        chaos={0.1}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-2 border-[#7A5BFF]/30 bg-[#0c0f14]">
                                <CardContent className="p-8 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <motion.div>
                                            <img
                                                src={personalInfo.avatar}
                                                alt={personalInfo.name}
                                                className="w-24 h-24 rounded-full border-4 border-[#7A5BFF]/30"
                                            />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#A885FF]">
                                                {personalInfo.name}
                                            </h3>
                                            <p className="text-lg text-gray-300">
                                                {personalInfo.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-gray-300">
                                        <p className="text-lg leading-relaxed">
                                            {personalInfo.description}
                                        </p>

                                        <Card className="bg-[#0c0f14] border-2 border-[#7A5BFF]/30">
                                            <CardContent className="p-6">
                                                <h4 className="text-xl font-bold text-[#A885FF] mb-4 flex items-center gap-2">
                                                    <Rocket size={24} />
                                                    GitHub Activity
                                                </h4>

                                                <img
                                                    src={`https://github-readme-stats.vercel.app/api?username=${personalInfo.github}&show_icons=true&theme=default&bg_color=0c0f14&title_color=a885ff&text_color=94a3b8&icon_color=7a5bff`}
                                                    alt="GitHub Stats"
                                                    className="w-full rounded-lg dark:hidden"
                                                />

                                                <img
                                                    src={`https://github-readme-stats.vercel.app/api?username=${personalInfo.github}&show_icons=true&theme=dark&bg_color=0c0f14&title_color=a885ff&text_color=94a3b8&icon_color=7a5bff`}
                                                    alt="GitHub Stats"
                                                    className="w-full rounded-lg hidden dark:block"
                                                />
                                            </CardContent>
                                        </Card>

                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div className="space-y-2">
                                                <p className="text-sm text-gray-400">Age</p>
                                                <p className="text-lg font-semibold text-[#A885FF]">
                                                    {personalInfo.age} years old
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="text-sm text-gray-400">Education</p>
                                                <p className="text-lg font-semibold text-[#A885FF]">
                                                    {personalInfo.school}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <p className="text-sm text-gray-400 mb-3">Interests</p>
                                            <div className="flex flex-wrap gap-2">
                                                {personalInfo.interests.map((interest, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Badge className="bg-[#7A5BFF]/20 text-[#A885FF] border border-[#7A5BFF]/30 text-sm py-1">
                                                            {interest}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </ElectricBorder>

                    {/* RIGHT SIDE (SKILLS) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#A885FF] mb-6">
                                Technical Skills
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, idx) => {
                                    const Icon = iconMap[skill.icon] || Code;

                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                        >
                                            <Card className="border-2 border-[#7A5BFF]/30 bg-[#0c0f14] cursor-pointer">
                                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.6 }}
                                                        className="p-3 rounded-full bg-[#241c2b]/20"
                                                    >
                                                        <Icon
                                                            size={28}
                                                            className="text-[#A885FF]"
                                                        />
                                                    </motion.div>
                                                    <p className="font-semibold text-lg text-[#A885FF]">
                                                        {skill.name}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
