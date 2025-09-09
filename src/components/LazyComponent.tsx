"use client";

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

interface LazyComponentProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

const DefaultFallback = () => (
    <div className="flex items-center justify-center py-20">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
    </div>
);

export default function LazyComponent({ children, fallback = <DefaultFallback /> }: LazyComponentProps) {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    );
}

// Lazy load components for better performance
export const LazyAbout = lazy(() => import('@/components/About'));
export const LazyExperience = lazy(() => import('@/components/Experience'));
export const LazyProjects = lazy(() => import('@/components/Projects'));
export const LazySkills = lazy(() => import('@/components/Skills'));
export const LazyContact = lazy(() => import('@/components/Contact'));
