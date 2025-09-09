"use client";

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/usePortfolio';

export default function ScrollProgress() {
    const scrollProgress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left"
            style={{ scaleX: scrollProgress }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
    );
}
