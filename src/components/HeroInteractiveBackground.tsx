"use client";

import { MotionValue, motion, useTransform, useSpring } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface HeroInteractiveBackgroundProps {
    mouseX: MotionValue<number>; // Normalized -1 to 1
    mouseY: MotionValue<number>; // Normalized -1 to 1
}

/**
 * HeroInteractiveBackground (Dark Mode Enchanced)
 *
 * Implements a premium anime-inspired background with subtle parallax depth.
 * 
 * Layers & Parallax Intensity (Dark Mode / Light Mode):
 * 1. Base Paper/Ink
 * 2. Speedlines (Opposite direction): 26px / 18px (Low opacity)
 * 3. Guide Lines (New): Parallax + Idle Drift.
 * 4. Halftone Dots: 12px / 8px
 * 5. Ink Grain: 22px / 14px
 * 6. Spotlight: Follows cursor, soft-light blend.
 */
export default function HeroInteractiveBackground({ mouseX, mouseY }: HeroInteractiveBackgroundProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Smooth physics-based lerp
    const springConfig = { damping: 25, stiffness: 120, mass: 0.8 }; // Increased damping for "camera drift" feel
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // --- PARALLAX CONSTANTS ---
    const DOTS_SHIFT = isDark ? "12px" : "8px";
    const GRAIN_SHIFT = isDark ? "22px" : "14px";
    const LINES_SHIFT = isDark ? "26px" : "18px";
    const GUIDE_SHIFT = "6px"; // Subtle guide line shift

    // --- TRANSFORMS ---
    const xDots = useTransform(smoothX, [-1, 1], [`-${DOTS_SHIFT}`, DOTS_SHIFT]);
    const yDots = useTransform(smoothY, [-1, 1], [`-${DOTS_SHIFT}`, DOTS_SHIFT]);

    const xGrain = useTransform(smoothX, [-1, 1], [`-${GRAIN_SHIFT}`, GRAIN_SHIFT]);
    const yGrain = useTransform(smoothY, [-1, 1], [`-${GRAIN_SHIFT}`, GRAIN_SHIFT]);

    // Speedlines move OPPOSITE to cursor for depth
    const xLines = useTransform(smoothX, [-1, 1], [LINES_SHIFT, `-${LINES_SHIFT}`]);
    const yLines = useTransform(smoothY, [-1, 1], [LINES_SHIFT, `-${LINES_SHIFT}`]);

    // Guide Lines (Parallax)
    const xGuide = useTransform(smoothX, [-1, 1], [`-${GUIDE_SHIFT}`, GUIDE_SHIFT]);
    const yGuide = useTransform(smoothY, [-1, 1], [`-${GUIDE_SHIFT}`, GUIDE_SHIFT]);

    // Spotlight positioning
    const spotlightLeft = useTransform(smoothX, (v) => `${(v + 1) * 50}%`);
    const spotlightTop = useTransform(smoothY, (v) => `${(v + 1) * 50}%`);

    // --- COLORS & OPACITY ---

    // Halftone: Increased contrast in dark mode for visibility
    const halftoneColor = isDark ? "rgba(242, 239, 232, 0.12)" : "rgba(17, 17, 17, 0.05)";

    // Speedlines opacity
    const linesOpacity = isDark ? 0.05 : 0.03;
    const linesColor = isDark ? "rgba(242, 239, 232, 1)" : "rgba(17, 17, 17, 1)";

    // Guide Lines opacity (Dark Mode: Lower opacity ~0.12 to not overpower text)
    const guideOpacity = isDark ? 0.12 : 0.15;
    const guideColor = isDark ? "rgba(242, 239, 232, 1)" : "rgba(17, 17, 17, 1)";

    // Spotlight settings
    const spotlightOpacity = isDark ? 0.09 : 0.05;
    const spotlightGradient = `radial-gradient(circle at center, rgba(255,255,255,${spotlightOpacity}) 0%, transparent 55%)`;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* 1. Base Layer */}
            <div className="absolute inset-0 bg-paper transition-colors duration-300" />

            {/* 2. Speedlines (Opposite Movement, Deepest) */}
            <motion.div
                className="absolute inset-[-40px] mix-blend-soft-light"
                style={{ x: xLines, y: yLines, opacity: linesOpacity }}
            >
                {/* CSS repeating gradient for speedlines */}
                <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${linesColor} 10px, ${linesColor} 11px)`,
                }} />
            </motion.div>

            {/* 3. Guide Lines (Mid Layer - Parallax + Idle Drift) */}
            <motion.div
                className="absolute inset-[-20px]"
                style={{ x: xGuide, y: yGuide, opacity: guideOpacity }}
                animate={{ y: ["0px", "-15px", "0px"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-0 right-0 border-t border-dashed"
                        style={{
                            top: `${8 + i * 8}%`,
                            borderColor: guideColor,
                            borderWidth: "1px" // Ensure crisp lines
                        }}
                    />
                ))}
            </motion.div>

            {/* 4. Halftone Dots (Mid Layer) */}
            <motion.div
                className="absolute inset-[-20px]"
                style={{ x: xDots, y: yDots }}
            >
                <svg width="100%" height="100%">
                    <pattern id="halftone" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r={isDark ? 1.8 : 1.5} fill={halftoneColor} />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#halftone)" />
                </svg>
            </motion.div>

            {/* 5. Ink Grain / Noise (Static CSS Replacement) */}
            <motion.div
                className="absolute inset-[-30px] opacity-10 mix-blend-overlay"
                style={{ x: xGrain, y: yGrain }}
            >
                <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 50%)`,
                    backgroundSize: "4px 4px",
                    filter: isDark ? "invert(1)" : "none",
                }} />
            </motion.div>

            {/* 6. Spotlight (Overlay) */}
            <motion.div
                className="absolute w-[80rem] h-[80rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-soft-light"
                style={{
                    left: spotlightLeft,
                    top: spotlightTop,
                    background: spotlightGradient,
                }}
            />

            {/* Vignette (Static - Subtle depth) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.02)_100%)] dark:bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.3)_100%)]" />
        </div>
    );
}
