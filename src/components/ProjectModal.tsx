"use client";

import { m, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

// Define a subset of the project interface we need
interface ProjectData {
    title: string;
    image: string;
    impact: string;
    techChips: string[];
    github: string;
    link?: string; // Live link
    episode?: string;
}

interface ProjectModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
    labels: {
        github: string;
        live?: string;
        screenshot?: string;
        preview?: string;
    };
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, y: 10 },
};

export default function ProjectModal({ project, isOpen, onClose, labels }: ProjectModalProps) {
    const [mounted, setMounted] = useState(false);
    const [viewMode, setViewMode] = useState<"screenshot" | "preview">("preview");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Reset view mode when project changes
    useEffect(() => {
        setViewMode(project?.link ? "preview" : "screenshot");
        setIsLoading(true);
    }, [project]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    const hasLiveLink = !!project?.link;

    return createPortal(
        <AnimatePresence>
            {isOpen && project && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <m.div
                        className="absolute inset-0 bg-paper-dark/90 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <m.div
                        className="relative w-full max-w-5xl bg-paper border-2 border-ink shadow-2xl flex flex-col max-h-[90vh] overflow-hidden rounded-sm"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-ink bg-paper-light">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-black uppercase text-ink tracking-wide">
                                    {project.title}
                                </h2>
                                {hasLiveLink && (
                                    <div className="hidden sm:flex bg-ink/10 p-1 rounded-sm">
                                        <button
                                            onClick={() => setViewMode("screenshot")}
                                            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-tighter transition-colors ${viewMode === "screenshot" ? "bg-ink text-paper" : "text-ink hover:bg-ink/5"}`}
                                        >
                                            {labels.screenshot || "Screenshot"}
                                        </button>
                                        <button
                                            onClick={() => setViewMode("preview")}
                                            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-tighter transition-colors ${viewMode === "preview" ? "bg-blood text-paper" : "text-ink hover:bg-blood/5"}`}
                                        >
                                            {labels.preview || "Live Preview"}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="text-ink hover:text-blood transition-colors text-2xl leading-none px-2"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Content Scrollable Area */}
                        <div className="flex-1 overflow-y-auto p-0">
                            {/* Media Section (Iframe or Image) */}
                            <div className="w-full bg-black aspect-video relative border-b border-ink/10">
                                {hasLiveLink && viewMode === "preview" ? (
                                    <>
                                        {isLoading && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-paper-light/50 z-10">
                                                <div className="w-8 h-8 border-4 border-blood border-t-transparent rounded-full animate-spin" />
                                            </div>
                                        )}
                                        <iframe
                                            src={project.link}
                                            title={project.title}
                                            className="w-full h-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                            onLoad={() => setIsLoading(false)}
                                        />
                                    </>
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1024px) 100vw, 80vw"
                                            priority
                                        />
                                        {hasLiveLink && (
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden">
                                                <button
                                                    onClick={() => setViewMode("preview")}
                                                    className="btn-primary py-2 px-4 text-xs"
                                                >
                                                    {labels.preview || "View Live Preview"}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Details Section */}
                            <div className="p-6 space-y-6">
                                {/* Mobile View Mode Toggle */}
                                {hasLiveLink && (
                                    <div className="flex sm:hidden w-full bg-ink/10 p-1 rounded-sm mb-4">
                                        <button
                                            onClick={() => setViewMode("screenshot")}
                                            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-tighter transition-colors ${viewMode === "screenshot" ? "bg-ink text-paper" : "text-ink"}`}
                                        >
                                            {labels.screenshot || "Screenshot"}
                                        </button>
                                        <button
                                            onClick={() => setViewMode("preview")}
                                            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-tighter transition-colors ${viewMode === "preview" ? "bg-blood text-paper" : "text-ink"}`}
                                        >
                                            {labels.preview || "Live Preview"}
                                        </button>
                                    </div>
                                )}
                                {/* Description */}
                                <div>
                                    <h3 className="text-sm font-bold text-blood uppercase tracking-wider mb-2">
                                        {"// Project Details"}
                                    </h3>
                                    <p className="text-ink text-base leading-relaxed">
                                        {project.impact}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-sm font-bold text-blood uppercase tracking-wider mb-2">
                                        {"// Tech Stack"}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techChips.map((chip) => (
                                            <span key={chip} className="chip text-xs">
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-4 pt-4 border-t border-ink/10">
                                    {/* Github Button */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary flex items-center gap-2"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                        {labels.github}
                                    </a>

                                    {/* Live Link Button */}
                                    {hasLiveLink && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                            {labels.live || "Live Demo"}
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    </m.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
