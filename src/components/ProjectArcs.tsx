"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionReveal from "./SectionReveal";
import {
    staggerContainer,
    fadeUp,
    scaleUp,
    clipRevealLeft,
    HorizontalSpeedLines,
} from "./AnimeAnimations";

export default function ProjectArcs() {
    return (
        <SectionReveal id="projects" className="py-20 relative overflow-hidden">
            {/* Decorative speed lines */}
            <HorizontalSpeedLines className="top-20 left-0 w-full h-40" />

            <div className="mx-auto max-w-6xl px-6">
                {/* Divider — animated draw from center */}
                <motion.div
                    className="section-divider mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "center" }}
                />

                {/* Heading — scale punch-in */}
                <motion.h2
                    className="section-heading text-center mb-14"
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    PROJECT ARCS
                </motion.h2>

                {/* Project cards grid — staggered */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {profile.projects.map((project) => (
                        <motion.article
                            key={project.episode}
                            className="manga-frame overflow-hidden group"
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                boxShadow: "8px 8px 0 0 #111111",
                                transition: { duration: 0.25 },
                            }}
                        >
                            {/* Project image — clip reveal */}
                            <motion.div
                                className="relative w-full aspect-video bg-paper-dark border-b-2 border-ink overflow-hidden"
                                variants={clipRevealLeft}
                            >
                                <Image
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Episode badge */}
                                <motion.span
                                    className="absolute top-3 left-3 chip-blood chip text-[0.6rem]"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.3 }}
                                >
                                    {project.episode}
                                </motion.span>

                                {/* Hover overlay with scan lines */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background:
                                            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(17,17,17,0.04) 3px, rgba(17,17,17,0.04) 6px)",
                                    }}
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="p-5 space-y-4">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-lg font-black uppercase tracking-wide">
                                        {project.title}
                                    </h3>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-ink hover:text-blood transition-colors shrink-0 text-lg"
                                        aria-label={`${project.title} on GitHub`}
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                    >
                                        ↗
                                    </motion.a>
                                </div>

                                <p className="text-sm text-ink-light leading-relaxed">
                                    {project.impact}
                                </p>

                                {/* Tech chips — pop-in */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techChips.map((chip, i) => (
                                        <motion.span
                                            key={chip}
                                            className="chip text-[0.65rem]"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.5 + i * 0.08,
                                                duration: 0.25,
                                                ease: [0.34, 1.56, 0.64, 1],
                                            }}
                                        >
                                            {chip}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-1">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary text-xs py-2 px-4"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        GitHub
                                    </motion.a>
                                    <motion.button
                                        className="btn-primary text-xs py-2 px-4"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Case Study
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Read more chapters link */}
                <motion.p
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a href="/projects">
                        <motion.button
                            className="text-sm font-bold tracking-wider uppercase text-ink hover:text-blood transition-colors"
                            whileHover={{ x: 8 }}
                        >
                            READ MORE CHAPTERS →
                        </motion.button>
                    </a>
                </motion.p>

            </div>
        </SectionReveal>
    );
}
