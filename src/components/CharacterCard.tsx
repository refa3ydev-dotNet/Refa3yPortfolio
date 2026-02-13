"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { clipRevealUp, fadeUp, fastStagger } from "./AnimeAnimations";

interface CharacterCardProps {
    /** Override the default avatar image path */
    image?: string;
    /** "photo" applies manga filters to a real photo; "illustration" renders as-is */
    portraitMode?: "photo" | "illustration";
}

/**
 * Character Card — manga frame with avatar, stats, and chips.
 *
 * Colors come from CSS vars, so light ↔ dark just works.
 * No green, no neon, no cyberpunk cues.
 */
export default function CharacterCard({
    image,
    portraitMode = "photo",
}: CharacterCardProps) {
    const src = image ?? profile.avatarSrc;
    const isPhoto = portraitMode === "photo";

    return (
        <motion.div
            className="w-full max-w-[340px] border-2 border-ink bg-paper relative"
            style={{ boxShadow: "var(--shadow-manga)" }}
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
                y: -6,
                boxShadow: "var(--shadow-manga-hover)",
                transition: { duration: 0.3 },
            }}
        >
            {/* Avatar image — fills card top */}
            <motion.div
                className="relative w-full aspect-[3/4] bg-paper-dark overflow-hidden"
                variants={clipRevealUp}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src={src}
                    alt={`${profile.fullName} — avatar`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 340px"
                    priority
                    style={
                        isPhoto
                            ? {
                                filter:
                                    "grayscale(0.55) contrast(1.12) sepia(0.1) brightness(1.0)",
                            }
                            : undefined
                    }
                />

                {/* Scan line overlay — subtle print texture */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(17,17,17,0.02) 2px, rgba(17,17,17,0.02) 4px)",
                    }}
                />

                {/* Subtle grain (photo mode only) */}
                {isPhoto && (
                    <div
                        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.06]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                            backgroundSize: "128px 128px",
                        }}
                    />
                )}

                {/* Info strip at bottom of image — graduation info only */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 px-4 py-2.5"
                    style={{ background: "rgba(0,0,0,0.7)" }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    <p className="text-[0.6rem] text-white/60 tracking-wide">
                        Expected Graduation:{" "}
                        <span className="text-white/90 font-semibold">
                            {profile.expectedGraduation}
                        </span>
                    </p>
                </motion.div>
            </motion.div>

            {/* Info block below image */}
            <motion.div
                className="p-4 space-y-3 border-t-2 border-ink"
                variants={fastStagger}
                initial="hidden"
                animate="visible"
            >
                {/* Stats bars */}
                <motion.div className="space-y-2.5" variants={fadeUp}>
                    {/* INT (Logic) */}
                    <div>
                        <div className="flex justify-between text-[0.65rem] font-bold uppercase tracking-widest mb-1">
                            <span>
                                {profile.characterStats.int}{" "}
                                <span className="font-normal text-ink-light">
                                    ({profile.characterStats.intLabel})
                                </span>
                            </span>
                        </div>
                        <div className="h-1.5 bg-paper-dark border border-ink/20 overflow-hidden">
                            <motion.div
                                className="h-full bg-blood"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 0.85 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.8,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                style={{ transformOrigin: "left", width: "100%" }}
                            />
                        </div>
                    </div>

                    {/* CRE (Design) */}
                    <div>
                        <div className="flex justify-between text-[0.65rem] font-bold uppercase tracking-widest mb-1">
                            <span>
                                {profile.characterStats.cre}{" "}
                                <span className="font-normal text-ink-light">
                                    ({profile.characterStats.creLabel})
                                </span>
                            </span>
                        </div>
                        <div className="h-1.5 bg-paper-dark border border-ink/20 overflow-hidden">
                            <motion.div
                                className="h-full bg-blood"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 0.65 }}
                                transition={{
                                    duration: 1,
                                    delay: 1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                style={{ transformOrigin: "left", width: "100%" }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Stack chips */}
                <motion.div className="flex flex-wrap gap-1.5" variants={fadeUp}>
                    {profile.stackChips.map((chip, i) => (
                        <motion.span
                            key={chip}
                            className="chip text-[0.6rem]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: 1.2 + i * 0.08,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                        >
                            {chip}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
