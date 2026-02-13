"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import CharacterCard from "./CharacterCard";
import SectionReveal from "./SectionReveal";
import {
    staggerContainer,
    fadeUp,
    fadeRight,
    stampIn,
} from "./AnimeAnimations";

export default function Hero() {
    const { hero } = profile;

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <SectionReveal
            id="home"
            className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
        >
            {/* Horizontal dashed background lines */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-0 right-0 border-t border-dashed border-ink/10"
                        style={{ top: `${8 + i * 7}%` }}
                    />
                ))}
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
                                Junior .NET Developer building scalable{" "}
                                <strong className="text-ink font-bold">ASP.NET MVC/Core</strong>{" "}
                                backends and clean{" "}
                                <strong className="text-ink font-bold">React</strong> frontends.
                                3-Tier Architecture • SQL Server • Maintainable systems.
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
                                onClick={() => scrollTo("#projects")}
                                className="bg-blood text-white text-xs font-bold tracking-wider uppercase px-6 py-3 border-2 border-blood hover:bg-blood/90 transition-colors"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View Projects
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
                        <CharacterCard />

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
