"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Dictionary } from "@/i18n/messages";

interface HolographicCardProps {
    dict: Dictionary;
}

export default function HolographicCard({ dict }: HolographicCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position relative to card center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for rotations
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    // Rotate the card on X and Y axes
    // Note: mouse Y moves card on X axis, mouse X moves card on Y axis
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Dynamic Glare Position
    const glareOpacity = useTransform(
        mouseXSpring, 
        [-0.5, 0, 0.5], 
        [0.4, 0.1, 0.4]
    );
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Normalize position to -0.5 to 0.5
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <m.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[340px] aspect-[3/4] bg-paper dark:bg-[#131724] border-2 border-ink dark:border-blood/50 shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(179,38,30,0.2)] group cursor-crosshair"
        >
            {/* Holographic Glare Overlay */}
            <m.div
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                    opacity: glareOpacity,
                    transform: "translateZ(50px)",
                }}
                className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay"
            />

            {/* Depth Layer 1: Avatar */}
            <div className="absolute inset-0 p-3 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
                <div className="relative w-full h-full bg-paper-dark dark:bg-ink/40 border border-ink/10 dark:border-white/5 overflow-hidden">
                    <Image
                        src={dict.avatarSrc}
                        alt={dict.fullName}
                        fill
                        className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-500 scale-110"
                        priority
                    />
                    
                    {/* Character Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <m.div 
                            style={{ transform: "translateZ(40px)" }}
                            className="text-white font-black text-2xl tracking-tighter italic"
                        >
                            {dict.name}
                        </m.div>
                    </div>
                </div>
            </div>

            {/* Depth Layer 2: Stats (Floating Chips) */}
            <div className="absolute top-6 -right-4 flex flex-col gap-2 z-20" style={{ transform: "translateZ(60px)" }}>
                <div className="bg-blood text-white px-3 py-1 font-black text-[0.6rem] tracking-[0.2em] shadow-lg border-2 border-ink dark:border-white/20 skew-x-[-12deg]">
                    LVL_24
                </div>
                <div className="bg-ink text-paper dark:bg-[#0F111A] dark:text-white px-3 py-1 font-black text-[0.6rem] tracking-[0.2em] shadow-lg border-2 border-ink dark:border-white/20 skew-x-[-12deg]">
                    {dict.characterStats.int}_{dict.characterStats.intLabel}
                </div>
                <div className="bg-ink text-paper dark:bg-[#0F111A] dark:text-white px-3 py-1 font-black text-[0.6rem] tracking-[0.2em] shadow-lg border-2 border-ink dark:border-white/20 skew-x-[-12deg]">
                    {dict.characterStats.cre}_{dict.characterStats.creLabel}
                </div>
            </div>

            {/* Depth Layer 3: Tech Badges (Bottom Left) */}
            <div className="absolute bottom-6 -left-4 flex flex-col gap-1.5 z-20" style={{ transform: "translateZ(40px)" }}>
                {dict.stackChips.slice(0, 3).map((chip) => (
                    <div key={chip} className="bg-paper dark:bg-[#1C2132] text-ink dark:text-blood px-2 py-0.5 border-2 border-ink dark:border-blood/30 font-black text-[0.55rem] tracking-tighter">
                        {chip}
                    </div>
                ))}
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-blood z-30" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-blood z-30" />
        </m.div>
    );
}
