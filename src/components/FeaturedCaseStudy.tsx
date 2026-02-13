"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import { staggerContainer, fadeUp } from "./AnimeAnimations";

interface FeaturedCaseStudyProps {
    dict: Dictionary;
}

/**
 * Featured Case Study — 4-column block with anime reveal animations.
 */
export default function FeaturedCaseStudy({ dict }: FeaturedCaseStudyProps) {
    const { caseStudy } = dict;

    const columns = [
        { label: caseStudy.problemLabel, content: caseStudy.problem, key: "PROBLEM" },
        { label: caseStudy.approachLabel, content: caseStudy.approach, key: "APPROACH" },
        { label: caseStudy.architectureLabel, content: caseStudy.architecture, key: "ARCHITECTURE" },
        { label: caseStudy.resultLabel, content: caseStudy.result, key: "RESULT" },
    ];

    return (
        <SectionReveal className="py-12">
            <div className="mx-auto max-w-6xl px-6">
                <motion.h3
                    className="text-sm font-black tracking-wider uppercase mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    {caseStudy.heading}
                </motion.h3>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {columns.map((col, i) => (
                        <motion.div
                            key={col.label}
                            className="manga-frame-static p-4 space-y-2"
                            variants={fadeUp}
                            whileHover={{
                                y: -3,
                                boxShadow: "6px 6px 0 0 #111111",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <motion.h4
                                className="text-xs font-black tracking-widest uppercase text-blood"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            >
                                {col.label}
                            </motion.h4>

                            {col.key === "ARCHITECTURE" ? (
                                <div className="space-y-2">
                                    <p className="text-xs text-ink-light leading-relaxed">
                                        {col.content}
                                    </p>
                                    {/* Simple 3-tier diagram SVG — animated draw-in */}
                                    <motion.svg
                                        viewBox="0 0 160 100"
                                        className="w-full max-w-[140px] mx-auto"
                                        aria-label="3-Tier Architecture diagram"
                                        role="img"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                    >
                                        <rect x="20" y="5" width="120" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <text x="80" y="20" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">{caseStudy.diagram.presentation}</text>
                                        <line x1="80" y1="27" x2="80" y2="38" stroke="currentColor" strokeWidth="1" />
                                        <polygon points="76,36 84,36 80,42" fill="currentColor" />
                                        <rect x="20" y="42" width="120" height="22" fill="none" stroke="#B3261E" strokeWidth="1.5" />
                                        <text x="80" y="57" textAnchor="middle" fontSize="8" fontWeight="700" fill="#B3261E">{caseStudy.diagram.businessLogic}</text>
                                        <line x1="80" y1="64" x2="80" y2="75" stroke="currentColor" strokeWidth="1" />
                                        <polygon points="76,73 84,73 80,79" fill="currentColor" />
                                        <rect x="20" y="79" width="120" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <text x="80" y="94" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">{caseStudy.diagram.dataAccess}</text>
                                    </motion.svg>
                                </div>
                            ) : (
                                <p className="text-xs text-ink-light leading-relaxed">
                                    {col.content}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionReveal>
    );
}
