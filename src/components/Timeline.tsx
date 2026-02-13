"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import { staggerContainer, fadeUp } from "./AnimeAnimations";

interface TimelineProps {
    dict: Dictionary;
}

/**
 * Mentor Arc — vertical timeline with anime-animated experience cards.
 */
export default function Timeline({ dict }: TimelineProps) {
    return (
        <SectionReveal id="experience" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Divider — animated draw from left */}
                <motion.div
                    className="section-divider mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "left" }}
                />

                {/* Heading — slide from left with bounce */}
                <motion.h2
                    className="section-heading mb-14"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    {dict.sectionHeadings.experience}
                </motion.h2>

                {/* Timeline — animated vertical line + staggered cards */}
                <div className="relative pl-8">
                    {/* Animated timeline line */}
                    <motion.div
                        className="absolute left-0 top-0 w-[2px] bg-ink"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                        style={{ transformOrigin: "top", height: "100%" }}
                    />

                    <motion.div
                        className="space-y-10"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {dict.timeline.map((item, i) => (
                            <motion.div key={i} className="relative" variants={fadeUp}>
                                {/* Timeline dot — pops in */}
                                <motion.span
                                    className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 border-2 border-ink bg-blood"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15,
                                        delay: 0.2 + i * 0.15,
                                    }}
                                />

                                <motion.div
                                    className="manga-frame p-5"
                                    whileHover={{
                                        y: -3,
                                        x: 4,
                                        boxShadow: "6px 6px 0 0 #111111",
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                        <h3 className="text-base font-black uppercase tracking-wide">
                                            {item.role}
                                        </h3>
                                        <span className="text-xs text-ink-light">
                                            — {item.organization}
                                        </span>
                                    </div>
                                    <p className="text-xs text-ink-light mb-3 tracking-wide">
                                        {item.period}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {item.bullets.map((b, j) => (
                                            <motion.li
                                                key={j}
                                                className="text-sm text-ink-light leading-relaxed flex gap-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + i * 0.15 + j * 0.1 }}
                                            >
                                                <span className="text-blood mt-0.5 shrink-0">▸</span>
                                                {b}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionReveal>
    );
}
