"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Trophy, Users, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/data/portfolioData.js';

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <section id="experience" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                            Career Journey
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Professional Experience
                        </h2>
                        <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            A timeline of my professional growth and achievements in backend development
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

                        {/* Experience items */}
                        <div className="space-y-12">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.id}
                                    variants={itemVariants}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative flex items-center ${index % 2 === 0
                                        ? 'md:flex-row-reverse md:text-right'
                                        : 'md:flex-row md:text-left'
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                                    />

                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                        }`}>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                                <CardContent className="p-6">
                                                    {/* Header */}
                                                    <div className="mb-4">
                                                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                                                            <Calendar size={16} />
                                                            <span className="font-medium">{experience.duration}</span>
                                                        </div>

                                                        <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                            {experience.title}
                                                        </h3>

                                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                            <MapPin size={16} />
                                                            <span className="font-medium">{experience.company}</span>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="font-body text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                                        {experience.description}
                                                    </p>

                                                    {/* Technologies */}
                                                    <div className="mb-6">
                                                        <h4 className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                                            <Code size={16} />
                                                            Technologies
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {experience.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Achievements */}
                                                    <div>
                                                        <h4 className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                                            <Trophy size={16} />
                                                            Key Achievements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {experience.achievements.map((achievement, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                                    <TrendingUp size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                                    <span>{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </div>

                                    {/* Side decoration (hidden on mobile) */}
                                    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
                                        }`}>
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                rotate: [0, 5, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center"
                                        >
                                            <div className="text-3xl">
                                                {index === 0 && '🚀'}
                                                {index === 1 && '💼'}
                                                {index === 2 && '🌱'}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-20 grid md:grid-cols-3 gap-8"
                    >
                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4"
                                >
                                    <Users size={24} />
                                </motion.div>
                                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">95%</h3>
                                <p className="font-body text-gray-600 dark:text-gray-300">Happy Clients</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mb-4"
                                >
                                    <Code size={24} />
                                </motion.div>
                                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
                                <p className="font-body text-gray-600 dark:text-gray-300">Projects Delivered</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 text-white rounded-full mb-4"
                                >
                                    <TrendingUp size={24} />
                                </motion.div>
                                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">99.9%</h3>
                                <p className="font-body text-gray-600 dark:text-gray-300">System Uptime</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
