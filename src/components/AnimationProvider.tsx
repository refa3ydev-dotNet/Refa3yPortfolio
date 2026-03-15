"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Optimization: LazyMotion and domAnimation reduce the initial 
 * JavaScript bundle size by only loading the necessary animation logic.
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
}
