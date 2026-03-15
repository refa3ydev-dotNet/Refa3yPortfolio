"use client";

import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import { useState, useRef, useEffect } from "react";
import {
    staggerContainer,
    fadeUp,
    scaleUp,
    HorizontalSpeedLines,
} from "./AnimeAnimations";

interface TestimonialsSectionProps {
    dict: Dictionary;
}

function TestimonialCard({ src, index }: { src: string, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className="mb-6 break-inside-avoid"
            variants={fadeUp}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="manga-frame overflow-hidden cursor-zoom-in group relative bg-paper-dark dark:bg-[#131724]"
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                    boxShadow: "12px 12px 0 0 #B3261E",
                    transition: { duration: 0.2 }
                }}
            >
                <div className="relative w-full">
                    <Image
                        src={src}
                        alt={`Testimonial ${index + 1}`}
                        width={500}
                        height={400}
                        className="w-full h-auto grayscale-[0.7] contrast-[1.1] sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500"
                        loading="lazy"
                    />
                </div>
                
                {/* Manga Print Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity"
                     style={{
                         backgroundImage: `radial-gradient(#111 0.5px, transparent 0.5px)`,
                         backgroundSize: '4px 4px'
                     }} />

                {/* Scanlines on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{
                         background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(179,38,30,0.1) 2px, rgba(179,38,30,0.1) 4px)"
                     }} />

                {/* Decorative Action Corner */}
                <div className="absolute top-0 right-0 p-2">
                    <div className="bg-blood text-white text-[0.5rem] font-black px-2 py-0.5 rotate-12 group-hover:rotate-0 transition-transform">
                        ARC_{index + 1}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function TestimonialsSection({ dict }: TestimonialsSectionProps) {
    const { testimonials } = dict;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Block scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <SectionReveal id="testimonials" className="py-24 relative overflow-hidden dark:bg-[#0F111A]">
            {/* Background Manga FX: Impact Stars */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                    className="absolute top-20 left-[10%] text-ink/5 dark:text-white/5 font-black text-9xl italic"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    WHAM!
                </motion.div>
                <motion.div 
                    className="absolute bottom-40 right-[5%] text-blood/10 font-black text-8xl"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    BOOM!
                </motion.div>
            </div>

            <div className="mx-auto max-w-6xl px-6 relative">
                {/* Heading with dynamic alignment */}
                <motion.div
                    className="text-start mb-20 relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-px w-12 bg-blood" />
                        <span className="section-label !m-0">{testimonials.sectionLabel}</span>
                    </div>
                    <h2 className="section-heading !text-6xl md:!text-7xl !mb-0 lowercase italic">
                        {testimonials.heading}
                    </h2>
                    
                    {/* Decorative brush stroke under heading */}
                    <motion.div 
                        className="h-2 bg-blood/20 mt-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    onClick={(e) => {
                        const target = e.target as HTMLElement;
                        const img = target.closest('img');
                        if (img) setSelectedImage(img.src);
                    }}
                >
                    {testimonials.images.map((src, idx) => (
                        <TestimonialCard key={src + idx} src={src} index={idx} />
                    ))}
                </motion.div>

                {/* Bottom Speed Lines */}
                <div className="mt-20">
                    <HorizontalSpeedLines className="relative w-full h-12 opacity-20" />
                </div>
            </div>

            {/* Modal for viewing images */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-ink/95 backdrop-blur-md cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative max-w-[95vw] md:max-w-[75vw] lg:max-w-[1000px] max-h-[80vh] w-fit h-fit flex flex-col bg-paper dark:bg-[#131724] border-2 border-ink dark:border-[rgba(242,239,232,0.2)] shadow-[20px_20px_0_0_rgba(0,0,0,0.4)] overflow-hidden"
                            variants={scaleUp}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Professional Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-ink dark:border-[rgba(242,239,232,0.1)] bg-paper-dark dark:bg-[#0F111A]">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-black uppercase tracking-widest text-blood">Evidence_File</span>
                                    <div className="h-4 w-px bg-ink/20 dark:bg-white/20" />
                                    <span className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase text-ink/60 dark:text-white/60">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blood">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        Verified Feedback
                                    </span>
                                </div>
                                <button
                                    className="flex items-center gap-2 group text-ink/40 hover:text-blood transition-colors"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <span className="text-[0.6rem] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Image Workspace */}
                            <div className="overflow-auto custom-scrollbar bg-[#F0F0F0] dark:bg-[#0A0C12] p-2 md:p-4 flex items-start justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative shadow-2xl border border-ink/5 block"
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Testimonial Evidence"
                                        width={1200}
                                        height={1600}
                                        unoptimized
                                        className="max-w-full h-auto block"
                                    />
                                </motion.div>
                            </div>
                            
                            {/* Footer / Status Bar */}
                            <div className="px-6 py-2 bg-paper-dark dark:bg-[#0F111A] border-t border-ink/10 dark:border-white/5 flex justify-between items-center">
                                <span className="text-[0.55rem] font-medium text-ink/30 dark:text-white/20 tracking-[0.2em] uppercase">
                                    Confidential_Refay_Portfolio_Review_v2.0
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-blood rounded-full animate-pulse" />
                                    <div className="w-1 h-1 bg-blood rounded-full animate-pulse delay-75" />
                                    <div className="w-1 h-1 bg-blood rounded-full animate-pulse delay-150" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionReveal>
    );
}
