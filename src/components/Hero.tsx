"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData.js';

// Animated particles background
function AnimatedStars() {
    const ref = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        const colors = new Float32Array(5000 * 3);

        for (let i = 0; i < 5000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

            const color = new THREE.Color();
            color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.5);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return [positions, colors];
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.1;
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={2}
                sizeAttenuation={false}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
            },
        },
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            {/* Three.js Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <AnimatedStars />
                </Canvas>
            </div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    {/* Greeting */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                            {"👋 Hello, I'm "} {personalInfo.name}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                    >
                        <span className="block">Middle</span>
                        <span className="text-gradient block">Fullstack Developer</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="font-heading text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto"
                    >
                        {personalInfo.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="font-body text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {personalInfo.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <Button
                            onClick={() => scrollToSection('projects')}
                            size="lg"
                            className="group bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            View My Work
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant="outline"
                            size="lg"
                            className="bg-gray-500 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center"
                    >
                        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
                        <motion.button
                            onClick={() => scrollToSection('about')}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                        >
                            <ChevronDown size={24} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/20 rounded-lg"
                />
                <motion.div
                    animate={{
                        x: [0, -150, 0],
                        y: [0, 100, 0],
                        rotate: [0, -180, -360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-3/4 right-1/4 w-24 h-24 border border-cyan-500/20 rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -80, 0],
                        rotate: [0, 90, 180],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg"
                />
            </div>
        </section>
    );
}
