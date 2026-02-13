"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import React from "react";
import CharacterCard from "./CharacterCard";
import SectionReveal from "./SectionReveal";
import HeroInteractiveBackground from "./HeroInteractiveBackground";
import { Dictionary } from "@/i18n/messages";
import {
    staggerContainer,
    fadeUp,
    fadeRight,
    stampIn,
} from "./AnimeAnimations";

interface HeroProps {
    dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
    const { hero } = dict;

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
        // Simulate delay or let next.js router handle it, but for effect we show state
        // In a real app the router.push would happen. 
        // Since scrollTo uses document.querySelector it's instant, but we can fake a "load"
        setTimeout(() => {
            const el = document.querySelector("#projects");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsLoadingProjects(false);
        }, 800);
    };

    return (
        <SectionReveal
            id="home"
            className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
        >
            {/* Interactive Anime Container - Tracks mouse */}
            <div
                className="absolute inset-0 z-0"
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
            >
                <HeroInteractiveBackground mouseX={mouseX} mouseY={mouseY} />
            </div>

            <div className="mx-auto max-w-6xl px-6 w-full relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* ── Left: Text content (7 cols) ────────────────── */}
                    <motion.div
                        className="lg:col-span-7 space-y-6 pt-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge — stamp animation */}
                        <motion.div variants={stampIn}>
                            <span className="inline-block bg-blood text-white text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border border-blood">
                                {hero.badge}
                            </span>
                        </motion.div>

                        {/* ARC 01 — large black + WEB DEV — large red */}
                        <motion.div variants={fadeUp}>
                            <h1>
                                <motion.span
                                    className="block text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-ink"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {hero.arcLabel}
                                </motion.span>
                                <motion.span
                                    className="block text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-blood"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.35 }}
                                >
                                    {hero.mainTitle}
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Subtitle — bordered left panel */}
                        <motion.div
                            className="border-l-[3px] border-ink pl-4 max-w-md"
                            variants={fadeUp}
                        >
                            <p className="text-sm sm:text-base leading-relaxed text-ink-light">
                                {hero.subtitle}
                            </p>
                        </motion.div>

                        {/* Quick stats line */}
                        <motion.p
                            className="text-[0.75rem] text-ink-light tracking-wider font-medium"
                            variants={fadeUp}
                        >
                            {hero.stats}
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            className="flex flex-wrap gap-3 pt-1"
                            variants={fadeUp}
                        >
                            <motion.button
                                onClick={handleProjectsClick}
                                disabled={isLoadingProjects}
                                className="bg-blood text-white text-xs font-bold tracking-wider uppercase px-6 py-3 border-2 border-blood hover:bg-blood/90 transition-colors disabled:opacity-70 disabled:cursor-wait relative overflow-hidden"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {isLoadingProjects ? (
                                    <span className="flex items-center gap-2">
                                        LOADING
                                        <motion.span
                                            className="block w-1.5 h-1.5 bg-white rounded-full"
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    </span>
                                ) : (
                                    "View Projects"
                                )}
                            </motion.button>
                            <motion.a
                                href={hero.cvLink}
                                download="Omar_Ayman_Allam_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent text-ink text-xs font-bold tracking-wider uppercase px-6 py-3 border-2 border-ink hover:bg-ink hover:text-paper transition-colors"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Download CV
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Character Card (5 cols) ─────────────── */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center lg:justify-end relative"
                        variants={fadeRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <CharacterCard dict={dict} />

                        {/* Vertical Japanese katakana — decorative */}
                        <motion.div
                            className="absolute -right-8 top-10 hidden xl:flex flex-col gap-1 text-ink/15 text-2xl font-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            aria-hidden="true"
                        >
                            {"レベルアップ".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + i * 0.1 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative horizontal line at bottom */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-ink/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
                style={{ transformOrigin: "left" }}
            />
        </SectionReveal>
    );
}
