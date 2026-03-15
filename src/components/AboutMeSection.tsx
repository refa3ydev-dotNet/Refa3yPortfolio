"use client";

import { m } from "framer-motion";
import { Dictionary } from "@/i18n/messages";
import SectionReveal from "./SectionReveal";
import {
    staggerContainer,
    fadeUp,
} from "./AnimeAnimations";

interface AboutMeSectionProps {
    dict: Dictionary;
}

export default function AboutMeSection({ dict }: AboutMeSectionProps) {
    const { aboutMe, contact, buttonLabels, hero } = dict;

    const links = [
        { 
            label: buttonLabels.github, 
            href: contact.github, 
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
                </svg>
            )
        },
        { 
            label: buttonLabels.linkedin, 
            href: contact.linkedin, 
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            )
        },
        { 
            label: buttonLabels.downloadCv, 
            href: hero.cvLink, 
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            ),
            primary: true 
        },
    ];

    return (
        <SectionReveal id="about" className="py-24 dark:bg-[#0F111A]">
            <div className="mx-auto max-w-4xl px-6">
                {/* Heading */}
                <m.div
                    className="flex items-center gap-6 mb-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-heading uppercase m-0">{aboutMe.sectionLabel.replace("// ", "")}</h2>
                    <div className="h-0.5 bg-ink/10 dark:bg-white/10 flex-grow" />
                </m.div>

                <div className="manga-frame p-8 md:p-12 relative overflow-hidden dark:bg-[#131724] dark:border-[rgba(242,239,232,0.22)]">
                    {/* Character Sprite Placeholder / Decorative Element */}
                    <div className="absolute -top-10 -right-10 opacity-[0.03] dark:opacity-[0.07] pointer-events-none rotate-12">
                        <span className="text-[12rem] font-black tracking-tighter select-none">REFAY</span>
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <m.p 
                            className="text-xl md:text-2xl font-bold leading-tight mb-8"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {aboutMe.intro}
                        </m.p>

                        {/* Quick Facts Chips */}
                        <m.div 
                            className="flex flex-wrap gap-3 mb-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {aboutMe.quickFacts.map((fact) => (
                                <m.div 
                                    key={fact.label}
                                    className="px-4 py-2 bg-paper-dark dark:bg-[#1C2132] border border-ink/10 dark:border-white/10 rounded-sm"
                                    variants={fadeUp}
                                >
                                    <span className="text-[0.6rem] block font-black uppercase text-blood tracking-wider mb-0.5">{fact.label}</span>
                                    <span className="text-sm font-bold uppercase">{fact.value}</span>
                                </m.div>
                            ))}
                        </m.div>

                        {/* Currently Building */}
                        <m.div 
                            className="p-5 border-l-4 border-blood bg-blood/5 mb-12 dark:bg-blood/10"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="text-[0.6rem] block font-black uppercase text-blood mb-1 tracking-widest">Active Task</span>
                            <p className="text-sm font-medium leading-relaxed italic opacity-80">{aboutMe.currentlyBuilding}</p>
                        </m.div>

                        {/* Social/Action Links */}
                        <div className="flex flex-wrap gap-4">
                            {links.map((link, idx) => (
                                <m.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-6 py-3 text-sm font-black uppercase tracking-widest transition-all
                                        ${link.primary 
                                            ? 'bg-blood text-white hover:bg-ink' 
                                            : 'border-2 border-ink dark:border-paper-dark hover:bg-ink hover:text-white dark:hover:bg-paper-dark dark:hover:text-ink'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.icon}
                                    {link.label}
                                </m.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionReveal>
    );
}
