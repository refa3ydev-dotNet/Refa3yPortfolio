"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import { staggerContainer, fadeUp, scaleUp } from "./AnimeAnimations";

interface FooterCTAProps {
    dict: Dictionary;
}

/**
 * Footer CTA — "Ready for the next arc?" with anime reveal animations.
 */
export default function FooterCTA({ dict }: FooterCTAProps) {
    const { contact } = dict;

    // Split heading into words for staggered animation
    const headingWords = contact.heading.split(" ");

    return (
        <SectionReveal id="contact" className="py-20 bg-[#111111] text-white relative overflow-hidden">
            {/* Background decorative cross-hatch */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <svg width="100%" height="100%" aria-hidden="true">
                    <pattern
                        id="crosshatch"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <line x1="0" y1="0" x2="20" y2="20" stroke="#FAF7F0" strokeWidth="0.5" />
                        <line x1="20" y1="0" x2="0" y2="20" stroke="#FAF7F0" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#crosshatch)" />
                </svg>
            </motion.div>

            <motion.div
                className="mx-auto max-w-6xl px-6 text-center space-y-6 relative"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Heading — word by word stagger */}
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight flex flex-wrap justify-center gap-x-4"
                    variants={fadeUp}
                >
                    {headingWords.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40, rotateX: -60 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.15 + i * 0.1,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className={word === "ARC?" || word === "التالي؟" ? "text-blood" : ""}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.p
                    className="text-base text-white/70 max-w-md mx-auto"
                    variants={fadeUp}
                >
                    {contact.subtext}
                </motion.p>

                {/* Availability chip — stamp in */}
                <motion.span
                    className="inline-block border border-white/30 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-white/80"
                    variants={scaleUp}
                >
                    {contact.availability}
                </motion.span>

                {/* CTA buttons — staggered pop in */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 pt-4"
                    variants={fadeUp}
                >
                    <motion.a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blood text-white font-bold text-sm uppercase tracking-wide border-2 border-white/20"
                        whileHover={{
                            scale: 1.06,
                            y: -3,
                            boxShadow: "0 6px 20px rgba(179, 38, 30, 0.3)",
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {dict.buttonLabels.emailMe}
                    </motion.a>
                    <motion.a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-bold text-sm uppercase tracking-wide border-2 border-white/30"
                        whileHover={{
                            scale: 1.06,
                            y: -3,
                            borderColor: "rgba(250,247,240,0.8)",
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {dict.buttonLabels.linkedin}
                    </motion.a>
                    <motion.a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-bold text-sm uppercase tracking-wide border-2 border-white/30"
                        whileHover={{
                            scale: 1.06,
                            y: -3,
                            borderColor: "rgba(250,247,240,0.8)",
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {dict.buttonLabels.repo}
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Footer bottom — fade in */}
            <motion.div
                className="mt-16 border-t border-white/10 pt-6 text-center relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                    <motion.span
                        className="inline-block h-2 w-2 bg-blood"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span>
                        {dict.footer.copyright}
                    </span>
                </div>
            </motion.div>
        </SectionReveal>
    );
}
