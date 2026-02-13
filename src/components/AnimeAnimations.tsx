"use client";

import { motion, Variants } from "framer-motion";

/* ===================================================
   ANIME ANIMATION VARIANTS
   Reusable Framer Motion variants for manga/anime FX
   =================================================== */

/** Staggered children container */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

/** Fast stagger for many items (chips, list items) */
export const fastStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

/** Fade up from below */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/** Fade in from left (manga panel wipe) */
export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

/** Fade in from right */
export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

/** Scale up from center (impact frame) */
export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
};

/** Clip reveal from left (manga panel sweep) */
export const clipRevealLeft: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
        clipPath: "inset(0 0% 0 0)",
        transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] },
    },
};

/** Clip reveal from bottom */
export const clipRevealUp: Variants = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: {
        clipPath: "inset(0% 0 0 0)",
        transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
    },
};

/** Draw-in line animation (for progress bars) */
export const drawLine: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
    },
};

/** Stamp/punch-in effect (for badges) */
export const stampIn: Variants = {
    hidden: { opacity: 0, scale: 1.8, rotate: -8 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
    },
};

/** Character reveal (letter by letter) */
export const letterReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

/** Floating / breathing animation for cards */
export const floatingCard: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-4, 4, -4],
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

/** Speed lines component — decorative anime burst */
export function SpeedLines({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`absolute pointer-events-none overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                aria-hidden="true"
            >
                {Array.from({ length: 20 }).map((_, i) => {
                    const angle = (i * 18) * (Math.PI / 180);
                    const x2 = 200 + Math.cos(angle) * 200;
                    const y2 = 200 + Math.sin(angle) * 200;
                    return (
                        <line
                            key={i}
                            x1="200"
                            y1="200"
                            x2={x2}
                            y2={y2}
                            stroke="#111"
                            strokeWidth={i % 3 === 0 ? 2 : 1}
                        />
                    );
                })}
            </svg>
        </motion.div>
    );
}

/** Horizontal manga speed lines */
export function HorizontalSpeedLines({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.04, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
        >
            <svg viewBox="0 0 600 200" className="w-full h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                    <line
                        key={i}
                        x1="0"
                        y1={8 + i * 16}
                        x2="600"
                        y2={8 + i * 16}
                        stroke="#111"
                        strokeWidth={i % 4 === 0 ? 2 : 0.5}
                    />
                ))}
            </svg>
        </motion.div>
    );
}

/** Ink splatter decorative dot */
export function InkDot({
    className = "",
    delay = 0,
}: {
    className?: string;
    delay?: number;
}) {
    return (
        <motion.span
            className={`inline-block rounded-full bg-ink ${className}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                delay,
            }}
            aria-hidden="true"
        />
    );
}
