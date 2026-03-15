"use client";

import { m, useMotionValue, animate, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HolographicCard from "./HolographicCard";

// Dynamically import the 3D background to keep initial bundle light
const CyberpunkGridBg = dynamic(() => import("./CyberpunkGridBg"), { ssr: false });

import HeroInteractiveBackground from "./HeroInteractiveBackground";
import { Dictionary } from "@/i18n/messages";
import {
    staggerContainer,
    fadeUp,
    stampIn,
} from "./AnimeAnimations";

interface HeroProps {
    dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
    const { hero } = dict;

    // Delayed mounting for heavy 3D components to optimize TBT
    const [show3D, setShow3D] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow3D(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Mouse position state (Normalized -1 to 1)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        // Calculate normalized position [-1, 1]
        const x = ((e.clientX - left) / width) * 2 - 1;
        const y = ((e.clientY - top) / height) * 2 - 1;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handlePointerLeave = () => {
        // Smoothly animate back to center (0,0) on leave
        animate(mouseX, 0, { duration: 0.5 });
        animate(mouseY, 0, { duration: 0.5 });
    };

    // Button loading state
    const [isLoadingProjects, setIsLoadingProjects] = React.useState(false);

    const handleProjectsClick = () => {
        setIsLoadingProjects(true);
        setTimeout(() => {
            const el = document.querySelector("#projects");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsLoadingProjects(false);
        }, 800);
    };

    return (
        <section
            id="home"
            className="relative w-full min-h-screen overflow-hidden flex items-center pt-24 pb-16"
        >
            {/* 3D Cyberpunk Grid Background - Layer 0 - Delayed Mounting for TBT Optimization */}
            <AnimatePresence>
                {show3D && (
                    <m.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0 w-full h-full"
                    >
                        <CyberpunkGridBg />
                    </m.div>
                )}
            </AnimatePresence>

            {/* Dark Overlay for Depth and Readability - Layer 10 */}
            <div className="absolute inset-0 z-10 bg-paper/60 dark:bg-black/60 pointer-events-none" />

            {/* Interactive Anime Container - Tracks mouse - Background Layer */}
            <div
                className="absolute inset-0 z-0"
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
            >
                <HeroInteractiveBackground mouseX={mouseX} mouseY={mouseY} />
            </div>

            {/* Main Content - Layer 20 */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center">
                <div className="mx-auto max-w-6xl px-6 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        {/* ── Left: Text content (7 cols) ────────────────── */}
                        <m.div
                            className="lg:col-span-7 space-y-6 pt-4"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Badge — stamp animation */}
                            <m.div variants={stampIn}>
                                <span className="inline-block bg-blood text-white text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border border-blood">
                                    {hero.badge}
                                </span>
                            </m.div>

                            {/* ARC 01 — large black + WEB DEV — large red */}
                            <m.div variants={fadeUp}>
                                <h1>
                                    <m.span
                                        className="block text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-ink dark:text-white"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {hero.arcLabel}
                                    </m.span>
                                    <m.span
                                        className="block text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-blood"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.35 }}
                                    >
                                        {hero.mainTitle}
                                    </m.span>
                                </h1>
                            </m.div>

                            {/* Subtitle — bordered left panel */}
                            <m.div
                                className="border-l-[3px] border-ink dark:border-white pl-4 max-w-md"
                                variants={fadeUp}
                            >
                                <p className="text-sm sm:text-base leading-relaxed text-ink-light dark:text-white/80">
                                    {hero.subtitle}
                                </p>
                            </m.div>

                            {/* Quick stats line */}
                            <m.p
                                className="text-[0.75rem] text-ink-light dark:text-white/60 tracking-wider font-medium"
                                variants={fadeUp}
                            >
                                {hero.stats}
                            </m.p>

                            {/* CTA buttons */}
                            <m.div
                                className="flex flex-wrap gap-3 pt-1"
                                variants={fadeUp}
                            >
                                <m.button
                                    onClick={handleProjectsClick}
                                    disabled={isLoadingProjects}
                                    className="bg-blood text-white text-xs font-bold tracking-wider uppercase px-6 py-3 border-2 border-blood hover:bg-blood/90 transition-colors disabled:opacity-70 disabled:cursor-wait relative overflow-hidden"
                                    whileHover={{ scale: 1.04, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    {isLoadingProjects ? (
                                        <span className="flex items-center gap-2">
                                            LOADING
                                            <m.span
                                                className="block w-1.5 h-1.5 bg-white rounded-full"
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                        </span>
                                    ) : (
                                        dict.buttonLabels.viewProjects
                                    )}
                                </m.button>
                                <m.a
                                    href={hero.cvLink}
                                    download="Omar_Ayman_Allam_CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-transparent text-ink dark:text-white text-xs font-bold tracking-wider uppercase px-6 py-3 border-2 border-ink dark:border-white hover:bg-ink dark:hover:bg-white hover:text-paper dark:hover:text-ink transition-colors"
                                    whileHover={{ scale: 1.04, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    {dict.buttonLabels.downloadCv}
                                </m.a>
                            </m.div>
                        </m.div>

                        {/* ── Right: Character Card (5 cols) ─────────────── */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                            <HolographicCard dict={dict} />

                            {/* Vertical Japanese katakana — decorative */}
                            <m.div
                                className="absolute -right-8 top-10 hidden xl:flex flex-col gap-1 text-ink/15 dark:text-white/10 text-2xl font-black"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                aria-hidden="true"
                            >
                                {"レベルアップ".split("").map((char, i) => (
                                    <m.span
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 + i * 0.1 }}
                                    >
                                        {char}
                                    </m.span>
                                ))}
                            </m.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative horizontal line at bottom */}
            <m.div
                className="absolute bottom-0 left-0 right-0 h-px bg-ink/20 dark:bg-white/10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
                style={{ transformOrigin: "left" }}
            />
        </section>
    );
}
