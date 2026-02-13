"use client";

import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    staggerContainer,
    fadeUp,
    scaleUp,
} from "@/components/AnimeAnimations";

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-paper pt-24 pb-20">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-16 space-y-4"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-ink"
                            variants={scaleUp}
                        >
                            All Projects
                        </motion.h1>
                        <motion.p
                            className="text-ink-light max-w-2xl mx-auto"
                            variants={fadeUp}
                        >
                            A collection of my work, assignments, and side projects.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {profile.projects.map((project, index) => (
                            <motion.article
                                key={project.episode + index}
                                className="manga-frame overflow-hidden group flex flex-col h-full bg-paper-light border border-ink/10 hover:border-ink transition-colors duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative w-full aspect-video bg-paper-dark overflow-hidden border-b border-ink/10">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[0.65rem] font-bold text-blood tracking-widest uppercase border border-blood/20 px-2 py-0.5 rounded-sm">
                                                {project.episode}
                                            </span>
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-ink hover:text-blood transition-colors"
                                                    aria-label="GitHub"
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-black uppercase text-ink mb-1 group-hover:text-blood transition-colors">
                                            {project.title}
                                        </h2>
                                    </div>

                                    <p className="text-sm text-ink-light leading-relaxed flex-grow">
                                        {project.impact}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.techChips.map((chip) => (
                                            <span
                                                key={chip}
                                                className="text-[0.65rem] font-medium px-2 py-1 bg-ink/5 text-ink/70 rounded-sm"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>
            <FooterCTA />
        </>
    );
}
