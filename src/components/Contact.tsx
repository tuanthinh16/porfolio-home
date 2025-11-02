"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personalInfo, uiContent } from '@/data/portfolioData.js';
import { useState } from 'react';

export default function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' });
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all fields.'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
                });

                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            color: 'from-blue-500 to-blue-600',
            description: 'Send me an email anytime'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
            color: 'from-green-500 to-green-600',
            description: 'Call for urgent matters'
        },
        {
            icon: Phone,
            title: 'Zalo',
            value: personalInfo.zalo,
            href: `https://zalo.me/${personalInfo.zalo}`,
            color: 'from-green-500 to-green-600',
            description: 'Message me on Zalo'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: personalInfo.location,
            href: '#',
            color: 'from-purple-500 to-purple-600',
            description: 'Based in beautiful California'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            href: personalInfo.github,
            color: 'hover:text-gray-900'
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            href: personalInfo.linkedin,
            color: 'hover:text-blue-600'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                            Get In Touch
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {uiContent.contact.title}
                        </h2>
                        <p className="font-body text-xl text-blue-200 max-w-3xl mx-auto">
                            {uiContent.contact.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    {contactMethods.map((method) => {
                                        const Icon = method.icon;
                                        return (
                                            <motion.div
                                                key={method.title}
                                                variants={itemVariants}
                                                whileHover={{ x: 10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                                                    <CardContent className="p-6">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.color} text-white rounded-lg`}>
                                                                <Icon size={24} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-heading text-lg font-semibold text-white mb-1">
                                                                    {method.title}
                                                                </h4>
                                                                <p className="text-blue-200 mb-1">{method.value}</p>
                                                                <p className="text-sm text-blue-300">{method.description}</p>
                                                            </div>
                                                            {method.href !== '#' && (
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => window.open(method.href, '_blank')}
                                                                    className="text-white hover:bg-white/10"
                                                                >
                                                                    <Send size={16} />
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="font-heading text-xl font-bold text-white mb-4">
                                    Connect With Me
                                </h3>
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
                                                className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                                            >
                                                <Icon size={20} />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Availability Status */}
                            <motion.div variants={itemVariants}>
                                <Card className="bg-green-500/20 border-green-500/30 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-green-200 font-medium">{uiContent.contact.availability}</span>
                                        </div>
                                        <p className="text-green-300 text-sm mt-2">
                                            {uiContent.contact.availabilityDesc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                                <CardContent className="p-8">
                                    <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                        <MessageCircle size={24} />
                                        Send a Message
                                    </h3>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Status Message */}
                                        {submitStatus.type && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`p-4 rounded-lg border ${submitStatus.type === 'success'
                                                    ? 'bg-green-500/20 border-green-500/30 text-green-200'
                                                    : 'bg-red-500/20 border-red-500/30 text-red-200'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {submitStatus.type === 'success' ? (
                                                        <CheckCircle size={20} />
                                                    ) : (
                                                        <AlertCircle size={20} />
                                                    )}
                                                    <span className="text-sm">{submitStatus.message}</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-blue-200 mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-blue-200 mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    placeholder="Doe"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-blue-200 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-blue-200 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="Project Inquiry"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-blue-200 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                                rows={5}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="Tell me about your project..."
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
