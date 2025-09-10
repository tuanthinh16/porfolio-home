"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolioData.js';

const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'api', name: 'API' },
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

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

    const projectVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
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
                            Portfolio
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Featured Projects
                        </h2>
                        <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            A showcase of my recent work in backend development, system architecture, and infrastructure
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div variants={itemVariants} className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-2 p-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                            <Filter size={16} className="text-gray-500 ml-2" />
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    variants={projectVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                    onHoverStart={() => setHoveredProject(project.id)}
                                    onHoverEnd={() => setHoveredProject(null)}
                                    className="group"
                                >
                                    <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                        {/* Project Image/Icon */}
                                        <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    animate={{
                                                        scale: hoveredProject === project.id ? 1.1 : 1,
                                                        rotate: hoveredProject === project.id ? 5 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-6xl text-white font-bold opacity-20"
                                                >
                                                    {project.category === 'backend' && '⚙️'}
                                                    {project.category === 'fullstack' && '🌐'}
                                                    {project.category === 'infrastructure' && '🏗️'}
                                                    {project.category === 'api' && '🔌'}
                                                </motion.div>
                                            </div>

                                            {/* Overlay */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                                className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4"
                                            >
                                                {project.github && (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-white/50 text-white hover:bg-white/20 bg-gray-600"
                                                        onClick={() => window.open(project.github, '_blank')}
                                                    >
                                                        <Github size={16} />
                                                    </Button>
                                                )}
                                                {project.demo && (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-white/50 text-white hover:bg-white/20 bg-gray-600"
                                                        onClick={() => window.open(project.demo, '_blank')}
                                                    >
                                                        <ExternalLink size={16} />
                                                    </Button>
                                                )}
                                            </motion.div>
                                        </div>

                                        <CardContent className="p-6">
                                            {/* Category Badge */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium capitalize">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Title & Description */}
                                            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="font-body text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.slice(0, 4).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-mono"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 4 && (
                                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                                                            +{project.technologies.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Features Preview */}
                                            <div className="mb-6">
                                                <h4 className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                    Key Features:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {project.features.slice(0, 3).map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                            <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                                            <span className="line-clamp-1">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => window.open(project.github, '_blank')}
                                                        className="flex-1"
                                                    >
                                                        <Github size={16} className="mr-2" />
                                                        Code
                                                    </Button>
                                                )}
                                                {project.demo && (
                                                    <Button
                                                        size="sm"
                                                        onClick={() => window.open(project.demo, '_blank')}
                                                        className="flex-1"
                                                    >
                                                        <ExternalLink size={16} className="mr-2" />
                                                        Demo
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* View More CTA */}
                    <motion.div variants={itemVariants} className="text-center mt-16">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open('https://github.com/tuanthinh16', '_blank')}
                            className="group"
                        >
                            View All Projects on GitHub
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
