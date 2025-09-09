"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Wrench, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/data/portfolioData.js';

const categoryIcons = {
    programming: Code,
    database: Database,
    cloud: Cloud,
    tools: Wrench,
    framework: Package,
};

const categoryColors = {
    programming: 'from-blue-500 to-blue-600',
    database: 'from-green-500 to-green-600',
    cloud: 'from-purple-500 to-purple-600',
    tools: 'from-orange-500 to-orange-600',
    framework: 'from-cyan-500 to-cyan-600',
};

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const skillVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>); return (
        <section id="skills" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                            Technical Skills
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Technologies I Master
                        </h2>
                        <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            A comprehensive overview of my technical expertise across various domains
                        </p>
                    </motion.div>

                    {/* Skills by Category */}
                    <div className="space-y-12">
                        {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                            const Icon = categoryIcons[category as keyof typeof categoryIcons];
                            const colorClass = categoryColors[category as keyof typeof categoryColors];

                            return (
                                <motion.div key={category} variants={itemVariants}>
                                    <Card className="overflow-hidden border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                        <CardContent className="p-8">
                                            {/* Category Header */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorClass} text-white rounded-lg`}>
                                                    <Icon size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white capitalize">
                                                        {category === 'programming' ? 'Programming Languages' :
                                                            category === 'database' ? 'Databases' :
                                                                category === 'cloud' ? 'Cloud & DevOps' :
                                                                    category === 'tools' ? 'Tools & Platforms' :
                                                                        'Frameworks & Libraries'}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {categorySkills.length} technologies
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Skills Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {categorySkills.map((skill, index) => (
                                                    <motion.div
                                                        key={skill.id}
                                                        variants={skillVariants}
                                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                                        whileHover={{ y: -5 }}
                                                        className="group"
                                                    >
                                                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
                                                            {/* Skill Name */}
                                                            <div className="flex items-center justify-between mb-3">
                                                                <h4 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                                                                    {skill.name}
                                                                </h4>
                                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                                                    {skill.level}%
                                                                </span>
                                                            </div>

                                                            {/* Progress Bar */}
                                                            <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClass} rounded-full`}
                                                                />

                                                                {/* Glow effect */}
                                                                <motion.div
                                                                    initial={{ opacity: 0 }}
                                                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                                                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClass} rounded-full opacity-50 blur-sm`}
                                                                    style={{ width: `${skill.level}%` }}
                                                                />
                                                            </div>

                                                            {/* Proficiency Level */}
                                                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                                                {skill.level >= 90 ? 'Expert' :
                                                                    skill.level >= 80 ? 'Advanced' :
                                                                        skill.level >= 70 ? 'Proficient' :
                                                                            skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Skills Summary */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                            <CardContent className="p-8 text-center">
                                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Continuous Learning Journey
                                </h3>
                                <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                                    {"Technology evolves rapidly, and I'm committed to staying current with the latest tools, frameworks, and best practices in backend development and system architecture."}
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Years of Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Technologies Mastered</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">∞</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Learning Mindset</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
