"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Dictionary } from "@/i18n/messages";

interface ScrollIntroProps {
    dict: Dictionary;
}

const AnimatedText = ({ 
    text, 
    progress, 
    range, 
    isLast 
}: { 
    text: string; 
    progress: MotionValue<number>; 
    range: [number, number, number, number];
    isLast?: boolean;
}) => {
    // Sharp Anime-style transitions
    const opacity = useTransform(progress, range, [0, 1, 1, 0]);
    const y = useTransform(progress, range, [80, 0, 0, -80]);
    const skewX = useTransform(progress, range, [10, 0, 0, -10]);
    const scale = useTransform(progress, range, [1.1, 1, 1, 0.9]);

    return (
        <motion.div
            style={{
                opacity,
                y,
                skewX,
                scale,
                WebkitTextStroke: !isLast ? "2px rgba(255,255,255,0.9)" : "none",
                color: !isLast ? "transparent" : "white",
            }}
            className={`absolute inset-0 flex items-center justify-center text-center uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter px-6 select-none z-10 ${
                isLast ? "drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]" : ""
            }`}
        >
            {text}
        </motion.div>
    );
};

export default function ScrollIntro({ dict }: ScrollIntroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Snappy but smooth physics
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 30,
        restDelta: 0.001
    });

    const bgScale = useTransform(smoothProgress, [0, 1], [1.05, 1.15]);
    const bgOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3]);

    const { scrollIntro } = dict;
    const texts = [
        scrollIntro.text1,
        scrollIntro.text2,
        scrollIntro.text3,
        scrollIntro.text4,
        scrollIntro.text5,
    ];

    // Balanced ranges for 1200vh - Final sentence stays much longer
    const ranges: [number, number, number, number][] = [
        [0.00, 0.10, 0.15, 0.25],
        [0.22, 0.32, 0.37, 0.47],
        [0.44, 0.54, 0.59, 0.69],
        [0.66, 0.76, 0.81, 0.91],
        [0.85, 0.92, 1.00, 1.00], // Finale statement locks into place
    ];

    return (
        <div ref={containerRef} className="relative h-[1200vh] bg-[#020202]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                
                {/* Background Layer */}
                <motion.div 
                    style={{ scale: bgScale, opacity: bgOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/background.png"
                        alt="Background"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
                </motion.div>

                {/* Progress Marker */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
                    <div className="w-[2px] h-40 bg-white/10 relative overflow-hidden">
                        <motion.div 
                            style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                            className="absolute top-0 left-0 w-full bg-blood shadow-[0_0_15px_#B3261E]"
                        />
                    </div>
                </div>

                {/* Narrative Text */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {texts.map((text, index) => (
                        <AnimatedText
                            key={index}
                            text={text}
                            progress={smoothProgress}
                            range={ranges[index]}
                            isLast={index === texts.length - 1}
                        />
                    ))}
                </div>

                {/* Avatar Foreground */}
                <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 flex items-end justify-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full aspect-square md:aspect-square lg:aspect-[4/5] h-full max-h-[88vh] md:max-h-[92vh]"
                    >
                        <Image
                            src="/omar-Ayman-nobg.png"
                            alt="Omar Refay"
                            fill
                            className="object-contain object-bottom drop-shadow-[0_20px_100px_rgba(0,0,0,0.8)]"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 z-30 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020202] to-transparent z-40" />
            </div>
        </div>
    );
}
