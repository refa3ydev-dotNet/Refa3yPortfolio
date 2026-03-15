"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import {
    staggerContainer,
    fadeUp,
} from "./AnimeAnimations";

interface WebServicesSectionProps {
    dict: Dictionary;
}

export default function WebServicesSection({ dict }: WebServicesSectionProps) {
    const { webServices } = dict;

    return (
        <SectionReveal id="services" className="py-20 bg-paper dark:bg-[#0F111A]">
            <div className="mx-auto max-w-6xl px-6">
                {/* Divider */}
                <motion.div
                    className="section-divider mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "left" }}
                />

                {/* Heading */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-baseline gap-4 mb-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="section-heading uppercase">{webServices.sectionLabel.replace("// ", "")}</h2>
                    <span className="section-label">{webServices.subtitle}</span>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {webServices.services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            className="manga-frame p-6 flex flex-col h-full dark:bg-[#131724] dark:border-[rgba(242,239,232,0.22)]"
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                boxShadow: "8px 8px 0 0 #111111",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <h3 className="text-lg font-black uppercase mb-2 border-b-2 border-ink dark:border-[rgba(242,239,232,0.16)] pb-2 min-h-[3rem] flex items-center">
                                {service.title}
                            </h3>
                            <p className="text-xs font-bold mb-4 italic text-blood">
                                Best for: <span className="text-ink dark:text-paper-dark">{service.bestFor}</span>
                            </p>
                            
                            <ul className="space-y-2 mb-6 flex-grow">
                                {service.includes.map((item) => (
                                    <li key={item} className="text-sm flex items-start gap-2">
                                        <span className="text-blood mt-1 shrink-0">◆</span>
                                        <span className="leading-tight opacity-90">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-ink/10 dark:border-[rgba(242,239,232,0.10)]">
                                {service.tools.map((tool) => (
                                    <span key={tool} className="chip text-[0.6rem] px-2 py-0.5">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Note & CTA */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 manga-frame border-dashed dark:bg-[#131724]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-sm font-medium italic opacity-70">
                        * {webServices.note}
                    </p>
                    <a href="#contact" className="w-full md:w-auto">
                        <motion.button
                            className="w-full md:w-auto px-8 py-3 bg-ink text-paper dark:bg-blood dark:text-white font-black uppercase tracking-widest text-sm hover:bg-blood transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {webServices.cta}
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </SectionReveal>
    );
}
