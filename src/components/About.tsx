"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Zap, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { personalInfo, uiContent } from '@/data/portfolioData.js';

const iconMap = {
    Code,
    Database,
    Cloud,
    Zap,
    Users,
    Award
};

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
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
                            About Me
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {uiContent.about.title}
                        </h2>
                        <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {uiContent.about.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left Column - Image & Stats */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="relative">
                                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold">TT</div>
                                </div>
                                {/* Floating cards with stats */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={inView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
                                >
                                    <div className="text-2xl font-bold text-blue-600">100+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={inView ? { x: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.7 }}
                                    className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
                                >
                                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Uptime Achieved</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Column - Description */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                                Building the Future, One API at a Time
                            </h3>

                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p className="font-body text-lg leading-relaxed">
                                    {uiContent.about.description1}
                                </p>

                                <p className="font-body text-lg leading-relaxed">
                                    {uiContent.about.description2}
                                </p>

                                <p className="font-body text-lg leading-relaxed">
                                    {uiContent.about.description3}
                                </p>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <a
                                    href={personalInfo.resume}
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                                >
                                    Download Resume
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Highlights Grid */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
                            What I Bring to the Table
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {uiContent.about.highlights.map((highlight) => {
                                const Icon = iconMap[highlight.icon as keyof typeof iconMap];
                                return (
                                    <motion.div
                                        key={highlight.title}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                                            <CardContent className="p-6 text-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4"
                                                >
                                                    <Icon size={24} />
                                                </motion.div>
                                                <h4 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                    {highlight.title}
                                                </h4>
                                                <p className="font-body text-gray-600 dark:text-gray-300">
                                                    {highlight.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
