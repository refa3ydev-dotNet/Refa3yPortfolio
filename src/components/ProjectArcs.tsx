"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import {
    staggerContainer,
    fadeUp,
    scaleUp,
    clipRevealLeft,
    HorizontalSpeedLines,
} from "./AnimeAnimations";

interface ProjectArcsProps {
    dict: Dictionary;
}

export default function ProjectArcs({ dict }: ProjectArcsProps) {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    // Limit to first 2 projects
    const displayedProjects = dict.projects.slice(0, 2);

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
                    {dict.sectionHeadings.projects}
                </motion.h2>

                {/* Project cards grid — staggered */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {displayedProjects.map((project: any) => (
                        <motion.article
                            key={project.episode}
                            className="manga-frame overflow-hidden group cursor-pointer"
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                boxShadow: "8px 8px 0 0 #111111",
                                transition: { duration: 0.25 },
                            }}
                            onClick={() => setSelectedProject(project)}
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
                                    unoptimized
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
                                    <span
                                        className="text-ink group-hover:text-blood transition-colors shrink-0 text-sm font-bold border-b border-transparent group-hover:border-blood"
                                    >
                                        [VIEW]
                                    </span>
                                </div>

                                <p className="text-sm text-ink-light leading-relaxed line-clamp-2">
                                    {project.impact}
                                </p>

                                {/* Tech chips */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techChips.map((chip: string, i: number) => (
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
                    <Link href="/projects" prefetch={false}>
                        <motion.button
                            className="text-sm font-bold tracking-wider uppercase text-ink hover:text-blood transition-colors"
                            whileHover={{ x: 8 }}
                        >
                            {dict.buttonLabels.readMore}
                        </motion.button>
                    </Link>
                </motion.p>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                labels={{
                    github: dict.buttonLabels.github,
                    live: "Live Demo"
                }}
            />
        </SectionReveal>
    );
}
