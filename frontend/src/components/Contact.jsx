import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { socialLinks, personalInfo } from '../mockData';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon!",
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    const iconMap = {
        github: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        instagram: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        mail: <Mail className="w-6 h-6" />
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#A885FF] mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border-2 border-[#A885FF]/30 dark:bg-slate-900 bg-white">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#A885FF]">
                                            Name
                                        </label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="border-2 border-[#A885FF]/30 dark:bg-slate-900 bg-white dark:text-gray-300 text-slate-900"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#A885FF]">
                                            Email
                                        </label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="border-2 border-[#A885FF]/30 dark:bg-slate-900 bg-white dark:text-gray-300 text-slate-900"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#A885FF]">
                                            Subject
                                        </label>
                                        <Input
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="What's this about?"
                                            className="border-2 border-[#A885FF]/30 dark:bg-slate-900 bg-white dark:text-gray-300 text-gray-900"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#A885FF]">
                                            Message
                                        </label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your message here..."
                                            rows={6}
                                            className="border-2 border-[#A885FF]/30 dark:bg-slate-900 bg-white dark:text-gray-300 text-gray-900 resize-none"
                                        />
                                    </div>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-[#A885FF] to-[#BE85FF] hover:from-[#9875FF] hover:to-[#C299FF] text-white py-6 text-lg rounded-full font-semibold shadow-lg shadow-[#A885FF]/50 hover:shadow-xl hover:shadow-[#BE85FF]/60 transition-all"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <Send className="ml-2" size={20} />
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Contact Info */}
                        <Card className="border-2 border-[#A885FF]/30 dark:bg-[#0c0f14] bg-[#0c0f14]">
                            <CardContent className="p-8 space-y-6">
                                <h3 className="text-2xl font-bold text-[#A885FF] mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 dark:text-gray-400 text-slate-700"
                                    >
                                        <div className="p-3 dark:bg-[#A885FF]/15 bg-slate-100 rounded-full">
                                            <Mail className="dark:text-[#A885FF] text-slate-700" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm dark:text-gray-400 text-slate-600">Email</p>
                                            <a
                                                href={`mailto:${personalInfo.email}`}
                                                className="font-medium hover:underline dark:text-[#A885FF] text-slate-700"
                                            >
                                                {personalInfo.email}
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="border-2 border-[#A885FF]/30 dark:bg-slate-900 bg-white">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold dark:text-[#A885FF] text-slate-900 mb-6">
                                    Connect With Me
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((link, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex flex-col items-center justify-center p-6 border-2 border-[#A885FF]/30 rounded-xl hover:border-[#BE85FF] transition-colors dark:bg-slate-900 bg-white"
                                        >
                                            <div className="dark:text-[#A885FF] text-slate-700 mb-2">
                                                {iconMap[link.icon]}
                                            </div>
                                            <span className="text-sm font-medium dark:text-[#A885FF] text-slate-700">
                                                {link.name}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Fun Fact Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br dark:from-[#A885FF]/60 dark:to-[#BE85FF]/70 from-slate-800 to-slate-900 p-8 rounded-2xl text-center shadow-xl"
                        >
                            <p className="text-2xl font-bold text-white mb-2">
                                Let's build something amazing together!
                            </p>
                            <p className="text-slate-200">
                                I'm always open to discussing new projects and opportunities
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
