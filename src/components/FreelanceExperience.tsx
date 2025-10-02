"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Trophy, Users, Code, TrendingUp, Briefcase, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Freelance projects data
const freelanceProjects = [
    {
        id: "freelance-1",
        title: "Football Field Booking Mobile App",
        client: "Football Field Owner Network",
        duration: "2021 - 2022",
        type: "Mobile Development",
        description: "Graduation project: Android app for football field booking system serving 100+ daily customers with revenue analytics, customer loyalty management, and field availability tracking.",
        technologies: ["Java", "Android Studio", "SQLite", "Firebase", "Material Design"],
        achievements: [
            "Built comprehensive booking system handling 100+ daily customers",
            "Implemented revenue analytics and reporting dashboard for field owners",
            "Created customer loyalty program with reward tracking system",
            "Developed real-time field availability and scheduling management",
            "Designed intuitive mobile interface with Material Design principles"
        ],
        budget: "Graduation Project",
        status: "Completed"
    },
    {
        id: "freelance-2",
        title: "Restaurant Inventory Management System",
        client: "Local Restaurant Chain",
        duration: "2022 - 2023",
        type: "Full Stack Development",
        description: "Desktop application for restaurant inventory management with import/export tracking, low stock alerts, and automated weekly reporting using Flexcel library.",
        technologies: ["C#", ".NET 4.5.2", "DevExpress WinForms", "Flexcel", "SQL Server"],
        achievements: [
            "Developed comprehensive inventory management for import/export tracking",
            "Implemented automated low stock alerts and reorder notifications",
            "Created weekly reporting system using Flexcel library for Excel integration",
            "Built role-based access control for different restaurant staff levels",
            "Handled on-site deployment and system setup training for restaurant staff"
        ],
        budget: "$1,500 - $2,500",
        status: "Completed"
    },
    {
        id: "freelance-3",
        title: "Shoe Store E-commerce Platform",
        client: "Online Shoe Retailer",
        duration: "2023 - 2024",
        type: "Full Stack Development",
        description: "Complete e-commerce solution for shoe retail business using Next.js and MongoDB, processing 50+ daily orders with modern shopping experience.",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe", "Vercel", "Node.js"],
        achievements: [
            "Built responsive e-commerce platform handling 50+ daily orders",
            "Implemented product catalog with size/color variations and filtering",
            "Integrated secure payment processing with Stripe integration",
            "Created admin dashboard for inventory and order management",
            "Optimized performance with Next.js SSR and image optimization"
        ],
        budget: "$2,000 - $3,500",
        status: "Completed"
    },
    {
        id: "freelance-4",
        title: "Scan Service Landing Page",
        client: "Document Scanning Service",
        duration: "2024",
        type: "Frontend Development",
        description: "Modern landing page for document scanning service with service showcase, pricing plans, and contact integration.",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Vercel"],
        achievements: [
            "Created modern, responsive landing page with smooth animations",
            "Implemented service showcase with detailed pricing information",
            "Built contact forms with MongoDB backend integration",
            "Achieved 98+ Google PageSpeed score for optimal user experience",
            "Deployed and maintained on Vercel with continuous integration"
        ],
        budget: "$100",
        status: "Live",
        demo: "https://landing-inky-one.vercel.app/"
    }
];

export default function FreelanceExperience() {
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

    return (
        <section id="freelance" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
                        <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                            <Briefcase className="inline w-4 h-4 mr-2" />
                            Freelance Portfolio
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Freelance Projects & Consulting
                        </h2>
                        <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Independent projects and consulting work since 2021, delivering custom solutions for diverse clients
                        </p>
                    </motion.div>

                    {/* Freelance Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {freelanceProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                                        <CardContent className="p-6 h-full flex flex-col">
                                            {/* Project Header */}
                                            <div className="mb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.type === 'Frontend Development' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                                                        project.type === 'Backend Development' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' :
                                                            project.type === 'Mobile Development' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' :
                                                                'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                                        }`}>
                                                        {project.type}
                                                    </span>
                                                    <span className={`flex items-center gap-1 text-xs ${project.status === 'Live' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                                                        }`}>
                                                        <Star size={12} fill="currentColor" />
                                                        {project.status}
                                                    </span>
                                                </div>

                                                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                    {project.title}
                                                </h3>

                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-1">
                                                    <MapPin size={14} />
                                                    <span>{project.client}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                                                    <Calendar size={14} />
                                                    <span>{project.duration}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="font-body text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="mb-4">
                                                <h4 className="font-heading text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                                                    <Code size={12} />
                                                    Tech Stack
                                                </h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div className="flex-grow">
                                                <h4 className="font-heading text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                                                    <Trophy size={12} />
                                                    Key Deliverables
                                                </h4>
                                                <ul className="space-y-1">
                                                    {project.achievements.slice(0, 3).map((achievement, idx) => (
                                                        <li key={idx} className="flex items-start gap-1 text-xs text-gray-600 dark:text-gray-300">
                                                            <TrendingUp size={10} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: achievement
                                                                    .replace(/(\d+[\+\%]*\s*(?:orders?|users?|customers?|score|daily|PageSpeed))/gi, '<strong class="text-blue-600 dark:text-blue-400">$1</strong>')
                                                                    .replace(/(Next\.js|React|Laravel|PHP|MySQL|Stripe|Node\.js|MongoDB|Java|Android|C#|\.NET|DevExpress|Flexcel)/gi, '<strong class="text-purple-600 dark:text-purple-400">$1</strong>')
                                                                    .replace(/(responsive|real-time|secure|comprehensive|advanced|automated|modern|intuitive)/gi, '<strong class="text-green-600 dark:text-green-400">$1</strong>')
                                                            }} />
                                                        </li>
                                                    ))}
                                                    {project.achievements.length > 3 && (
                                                        <li className="text-xs text-gray-500 dark:text-gray-400">
                                                            +{project.achievements.length - 3} more achievements
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Budget & Demo */}
                                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">Project Value</span>
                                                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                                        {project.budget}
                                                    </span>
                                                </div>
                                                {project.demo && (
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-500 dark:text-gray-400">Live Demo</span>
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                                        >
                                                            View Demo →
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Freelance Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-4 gap-6"
                    >
                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-3"
                                >
                                    <Briefcase size={20} />
                                </motion.div>
                                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-1">20+</h3>
                                <p className="font-body text-sm text-gray-600 dark:text-gray-300">Freelance Projects</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-3"
                                >
                                    <Users size={20} />
                                </motion.div>
                                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-1">10+</h3>
                                <p className="font-body text-sm text-gray-600 dark:text-gray-300">Happy Clients</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full mb-3"
                                >
                                    <Star size={20} />
                                </motion.div>
                                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-1">4.9/5</h3>
                                <p className="font-body text-sm text-gray-600 dark:text-gray-300">Client Rating</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                            <CardContent className="p-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full mb-3"
                                >
                                    <TrendingUp size={20} />
                                </motion.div>
                                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-1">100%</h3>
                                <p className="font-body text-sm text-gray-600 dark:text-gray-300">Project Success</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <CardContent className="p-8">
                                <h3 className="font-heading text-2xl font-bold mb-4">
                                    Looking for Freelance Development?
                                </h3>
                                <p className="font-body text-lg mb-6 opacity-90">
                                    Available for custom web development projects and consulting services
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    Start Your Project
                                </motion.button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}