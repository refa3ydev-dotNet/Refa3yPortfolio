"use client";

import { motion } from "framer-motion";

export default function MangaLoader() {
    // Prevent hydration mismatch by rendering null initially if needed, 
    // but for a loader, we usually want it immediately from server or client.
    // However, to respect prefers-reduced-motion, we check media query via matchMedia in JS or CSS.
    // Since this is a simple component, I'll use framer-motion's accessibility features.

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper text-ink dark:bg-[#0B0D10] dark:text-[#F2EFE8]">
            {/* Halftone / Grain texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Loader Container - Double Ink Frame */}
                <div className="relative p-1 border-2 border-ink dark:border-[#F2EFE8]/20">
                    <div className="border border-ink/30 dark:border-[#F2EFE8]/10 p-8 min-w-[280px] flex flex-col items-center gap-4 bg-paper dark:bg-[#131724]">

                        {/* Text */}
                        <h2 className="text-lg font-black tracking-[0.2em] uppercase text-center animate-pulse">
                            LOADING...
                        </h2>

                        <div className="w-full h-px bg-ink/10 dark:bg-[#F2EFE8]/10" />

                        <p className="text-xs font-bold tracking-widest text-accent uppercase">
                            NEXT CHAPTER
                        </p>

                        {/* Animated Progress Bar (Blood Red) */}
                        <div className="relative w-full h-1 bg-ink/10 dark:bg-[#F2EFE8]/10 overflow-hidden mt-2">
                            <motion.div
                                className="absolute inset-0 bg-blood"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.4,
                                    ease: "easeInOut",
                                    repeatDelay: 0.2
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
