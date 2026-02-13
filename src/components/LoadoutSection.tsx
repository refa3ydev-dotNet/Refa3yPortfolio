"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionReveal from "./SectionReveal";
import {
    staggerContainer,
    fadeUp,
} from "./AnimeAnimations";

// Deterministic widths for the decorative progress lines
const progressWidths = [
    [92, 88, 78, 95],
    [82, 85, 75, 90],
    [68, 62, 70, 72],
];

export default function LoadoutSection() {
    const { skills } = profile;

    return (
        <SectionReveal id="skills" className="py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Divider — animated draw-in */}
                <motion.div
                    className="section-divider mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "left" }}
                />

                {/* Heading — animated */}
                <motion.div
                    className="flex items-baseline gap-4 mb-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="section-heading">TECH LOADOUT</h2>
                    <span className="section-label">{skills.sectionLabel}</span>
                </motion.div>

                {/* Three column cards — staggered entrance */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.columns.map((col, colIdx) => (
                        <motion.div
                            key={col.title}
                            className="manga-frame p-6"
                            variants={fadeUp}
                            whileHover={{
                                y: -4,
                                boxShadow: "6px 6px 0 0 #111111",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <h3 className="text-sm font-black tracking-wider uppercase mb-5 pb-2 border-b border-ink">
                                {col.title}
                            </h3>
                            <ul className="space-y-3">
                                {col.items.map((item, itemIdx) => (
                                    <li key={item}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-semibold">{item}</span>
                                        </div>
                                        {/* Decorative red progress line — animated draw */}
                                        <div className="h-1 bg-paper-dark border border-ink/20 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blood"
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.3 + colIdx * 0.15 + itemIdx * 0.08,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                }}
                                                style={{
                                                    transformOrigin: "left",
                                                    width: `${progressWidths[colIdx]?.[itemIdx] ?? 75}%`,
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionReveal>
    );
}
