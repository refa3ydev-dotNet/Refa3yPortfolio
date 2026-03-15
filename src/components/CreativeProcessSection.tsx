"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import {
    staggerContainer,
    fadeUp,
    HorizontalSpeedLines,
} from "./AnimeAnimations";

interface CreativeProcessSectionProps {
    dict: Dictionary;
}

export default function CreativeProcessSection({ dict }: CreativeProcessSectionProps) {
    const { creativeProcess } = dict;

    return (
        <SectionReveal id="process" className="py-20 relative overflow-hidden dark:bg-[#0F111A]">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="mx-auto max-w-6xl px-6 relative">
                {/* Divider */}
                <motion.div
                    className="section-divider mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "right" }}
                />

                {/* Heading */}
                <motion.h2
                    className="section-heading text-start mb-14 uppercase"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {creativeProcess.sectionLabel.replace("// ", "")}
                </motion.h2>

                {/* Steps as Manga Panels */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {creativeProcess.steps.map((step, idx) => (
                        <motion.div
                            key={step.number}
                            className={`manga-frame p-6 bg-paper dark:bg-[#131724] dark:border-[rgba(242,239,232,0.22)] relative overflow-hidden group
                                ${idx % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'} hover:rotate-0 transition-transform duration-300`}
                            variants={fadeUp}
                        >
                            {/* Panel Index Overlay */}
                            <div className="absolute top-0 right-0 p-2 opacity-10 font-black text-6xl leading-none select-none group-hover:opacity-20 transition-opacity">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <span className="text-[0.6rem] font-black bg-blood text-white px-2 py-0.5 uppercase tracking-tighter mb-2 inline-block">
                                    Step {step.number}
                                </span>
                                <h3 className="text-xl font-black uppercase mb-4 tracking-tight border-b border-ink dark:border-[rgba(242,239,232,0.16)] pb-1">
                                    {step.title}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-[0.65rem] font-black uppercase text-blood mb-1 tracking-widest">Goal</h4>
                                        <p className="text-sm font-bold leading-snug">{step.goal}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[0.65rem] font-black uppercase text-blood mb-1 tracking-widest">Outputs</h4>
                                        <ul className="space-y-1">
                                            {step.outputs.map((output, i) => (
                                                <li key={i} className="text-xs font-medium flex items-start gap-1.5 opacity-80">
                                                    <span className="text-blood mt-0.5">•</span>
                                                    {output}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative manga accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-ink/5 dark:bg-white/5 group-hover:bg-blood transition-colors" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative Speed Lines */}
                <HorizontalSpeedLines className="bottom-0 right-0 w-1/3 h-20 opacity-20" />
            </div>
        </SectionReveal>
    );
}
