"use client";

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData.js';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            href: personalInfo.github,
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            href: personalInfo.linkedin,
        },
        {
            icon: Mail,
            name: 'Email',
            href: `mailto:${personalInfo.email}`,
        },
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Description */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-display text-2xl font-bold mb-4">
                                <span className="text-gradient">{personalInfo.name}</span>
                            </h3>
                            <p className="font-body text-gray-300 mb-6 max-w-md">
                                {personalInfo.subtitle}. Building scalable, high-performance backend systems
                                that power amazing user experiences.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
                                            aria-label={social.name}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="font-body text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
                            <div className="space-y-2">
                                <p className="font-body text-gray-300">
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </p>
                                {personalInfo.phone && (
                                    <p className="font-body text-gray-300">
                                        <a
                                            href={`tel:${personalInfo.phone}`}
                                            className="hover:text-white transition-colors duration-200"
                                        >
                                            {personalInfo.phone}
                                        </a>
                                    </p>
                                )}
                                <p className="font-body text-gray-300">{personalInfo.location}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 font-body text-gray-400"
                    >
                        <span>© {currentYear} {personalInfo.name}. Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart size={16} className="text-red-500 fill-current" />
                        </motion.div>
                        <span>and lots of ☕</span>
                    </motion.div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 font-body text-sm"
                    >
                        <ArrowUp size={16} />
                        Back to Top
                    </motion.button>
                </div>

                {/* Additional Credits */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-8 pt-8 border-t border-gray-800"
                >
                    <p className="font-body text-xs text-gray-500">
                        Built with Next.js, TypeScript, Tailwind CSS, Framer Motion & Three.js
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
