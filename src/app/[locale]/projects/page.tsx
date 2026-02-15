"use client";

import FooterCTA from "@/components/FooterCTA";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    staggerContainer,
    fadeUp,
    scaleUp,
} from "@/components/AnimeAnimations";
import { Locale } from "@/i18n/config";
import { messages } from "@/i18n/messages";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/data/profile";

interface ProjectsPageProps {
    params: { locale: Locale };
}

export default function ProjectsPage({ params: { locale } }: ProjectsPageProps) {
    const dict = messages[locale] || messages.en;
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
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
                            {dict.projectsPage.heading}
                        </motion.h1>
                        <motion.p
                            className="text-ink-light max-w-2xl mx-auto"
                            variants={fadeUp}
                        >
                            {dict.projectsPage.subtext}
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dict.projects.map((project: Project, index: number) => (
                            <motion.article
                                key={project.episode + index}
                                className="manga-frame overflow-hidden group flex flex-col h-full bg-paper-light border border-ink/10 hover:border-ink transition-colors duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedProject(project)}
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
                                        </div>
                                        <h2 className="text-xl font-black uppercase text-ink mb-1 group-hover:text-blood transition-colors">
                                            {project.title}
                                        </h2>
                                    </div>

                                    <p className="text-sm text-ink-light leading-relaxed flex-grow line-clamp-3">
                                        {project.impact}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.techChips.map((chip: string) => (
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
            <FooterCTA dict={dict} />

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                labels={{
                    github: dict.buttonLabels.github,
                    live: "Live Demo"
                }}
            />
        </>
    );
}
