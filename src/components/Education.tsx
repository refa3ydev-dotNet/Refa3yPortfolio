"use client";

import { m } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import { staggerContainer, fadeUp } from "./AnimeAnimations";

interface EducationProps {
    dict: Dictionary;
}

/**
 * Education & Training section with anime-style animations.
 */
export default function Education({ dict }: EducationProps) {
    return (
        <SectionReveal className="py-16">
            <div className="mx-auto max-w-6xl px-6">
                {/* Heading — animated slide */}
                <m.h2
                    className="text-xl font-black tracking-wider uppercase mb-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    {dict.sectionHeadings.education}
                </m.h2>

                <m.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Degree cards */}
                    {dict.education.map((edu, i) => (
                        <m.div
                            key={i}
                            className="manga-frame p-5"
                            variants={fadeUp}
                            whileHover={{
                                y: -3,
                                boxShadow: "6px 6px 0 0 #111111",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <m.span
                                className="text-[0.65rem] font-bold tracking-widest uppercase text-blood"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                {edu.type}
                            </m.span>
                            <h3 className="text-base font-black uppercase mt-1">
                                {edu.title}
                            </h3>
                            <p className="text-sm text-ink-light mt-1">{edu.institution}</p>
                            <p className="text-xs text-ink-light mt-1">{edu.detail}</p>
                        </m.div>
                    ))}

                    {/* Certifications card */}
                    <m.div
                        className="manga-frame p-5"
                        variants={fadeUp}
                        whileHover={{
                            y: -3,
                            boxShadow: "6px 6px 0 0 #111111",
                            transition: { duration: 0.2 },
                        }}
                    >
                        <m.span
                            className="text-[0.65rem] font-bold tracking-widest uppercase text-blood"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {dict.sectionHeadings.internshipBadge}
                        </m.span>
                        <h3 className="text-base font-black uppercase mt-1 dark:text-dark-text">
                            {dict.sectionHeadings.certifications}
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {dict.certifications.map((cert, i) => (
                                <m.div
                                    key={cert.name}
                                    className="chip"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.5 + i * 0.1,
                                        duration: 0.25,
                                        ease: [0.34, 1.56, 0.64, 1],
                                    }}
                                >
                                    {cert.name}{" "}
                                    <span className="text-ink-light ml-1 font-normal">
                                        ({cert.date})
                                    </span>
                                </m.div>
                            ))}
                        </div>
                    </m.div>
                </m.div>
            </div>
        </SectionReveal>
    );
}
