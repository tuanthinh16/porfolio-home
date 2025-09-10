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
    programming: 'from-slate-600 to-slate-800',
    database: 'from-slate-700 to-slate-900',
    cloud: 'from-slate-600 to-slate-800',
    tools: 'from-slate-700 to-slate-900',
    framework: 'from-slate-600 to-slate-800',
};

// Technology icon URLs using DevIcon CDN
const skillIcons = {
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Rust": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "ReactJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "NextJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "GitLab CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "VPS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "SVN": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg",
    "WebSocket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
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
                        <motion.span 
                            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-bold mb-6 border border-blue-200 dark:border-blue-800"
                            style={{
                                color: 'transparent',
                                backgroundClip: 'text',
                                backgroundImage: 'linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))'
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            ⚡ Technical Skills ⚡
                        </motion.span>
                        <motion.h2 
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Technologies I Master
                        </motion.h2>
                        <motion.p 
                            className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            A comprehensive overview of my technical expertise across various domains
                        </motion.p>
                        
                        {/* Decorative elements */}
                        <div className="flex justify-center mt-8 space-x-2">
                            <motion.div 
                                className="w-2 h-2 bg-blue-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                                className="w-2 h-2 bg-purple-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.div 
                                className="w-2 h-2 bg-cyan-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            />
                        </div>
                    </motion.div>

                    {/* Skills by Category */}
                    <div className="space-y-12">
                        {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                            const Icon = categoryIcons[category as keyof typeof categoryIcons];
                            const colorClass = categoryColors[category as keyof typeof categoryColors];

                            return (
                                <motion.div key={category} variants={itemVariants}>
                                    <Card className="overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-900 hover:shadow-xl transition-all duration-300 group">
                                        <CardContent className="p-8">
                                            {/* Category Header */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorClass} text-white rounded-lg`}>
                                                    <Icon size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 capitalize">
                                                        {category === 'programming' ? 'Programming Languages' :
                                                            category === 'database' ? 'Databases' :
                                                                category === 'cloud' ? 'Cloud & DevOps' :
                                                                    category === 'tools' ? 'Tools & Platforms' :
                                                                        'Frameworks & Libraries'}
                                                    </h3>
                                                    <p className="text-slate-600 dark:text-slate-400">
                                                        {categorySkills.length} technologies
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Skills Grid */}
                                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                                {categorySkills.map((skill, index) => {
                                                    const iconUrl = skillIcons[skill.name as keyof typeof skillIcons];
                                                    return (
                                                        <motion.div
                                                            key={skill.id}
                                                            variants={skillVariants}
                                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                                            whileHover={{ 
                                                                y: -4,
                                                                scale: 1.05,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                            className="group/skill cursor-pointer"
                                                        >
                                                            <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-4 transition-all duration-300 border border-slate-100 dark:border-slate-700 group-hover/skill:border-slate-300 dark:group-hover/skill:border-slate-600 group-hover/skill:shadow-lg min-h-[100px] flex flex-col justify-center items-center">
                                                                {/* Tech Icon */}
                                                                <div className="flex justify-center mb-3">
                                                                    <motion.div 
                                                                        className="w-10 h-10 flex items-center justify-center"
                                                                        whileHover={{ 
                                                                            rotate: [0, -5, 5, 0],
                                                                            transition: { duration: 0.3 }
                                                                        }}
                                                                    >
                                                                        {iconUrl ? (
                                                                            <img 
                                                                                src={iconUrl} 
                                                                                alt={skill.name}
                                                                                className="w-8 h-8 object-contain filter group-hover/skill:brightness-110 transition-all duration-300"
                                                                            />
                                                                        ) : (
                                                                            <Code size={20} className="text-slate-600 dark:text-slate-400" />
                                                                        )}
                                                                    </motion.div>
                                                                </div>
                                                                
                                                                {/* Skill Name */}
                                                                <div className="text-center">
                                                                    <h4 className="font-medium text-xs text-slate-700 dark:text-slate-300 leading-tight">
                                                                        {skill.name}
                                                                    </h4>
                                                                </div>
                                                                
                                                                {/* Hover effect indicator */}
                                                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-600 dark:bg-slate-400 transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-300 rounded-full" />
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
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
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Years of Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">23</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
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
