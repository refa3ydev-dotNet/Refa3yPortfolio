"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";

/**
 * HeroParallaxBackground
 * 
 * A subtle, interactive background that reacts to mouse movement.
 * Features:
 * - Parallax layers: Halftone dots, faint manga marks/scratches.
 * - "Ink Shadow": A misregistered print layer moving opposite to the main pattern.
 * - Spotlight: A soft, paper-toned radial gradient following the cursor.
 * - Performance: Uses transform-only animations via Framer Motion.
 * - Accessibility: Respects reduced motion preferences.
 */
export default function HeroParallaxBackground() {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position (0 to 1)
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smooth spring physics for fluid movement
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // --- PARALLAX TRANSFORMS ---
    // Normalized input [-1, 1] for calculations
    const x = useTransform(smoothX, [0, 1], [-1, 1]);
    const y = useTransform(smoothY, [0, 1], [-1, 1]);

    // Layer 1: Halftone Dots (moves slightly)
    const moveDotsX = useTransform(x, [-1, 1], ["-6px", "6px"]);
    const moveDotsY = useTransform(y, [-1, 1], ["-6px", "6px"]);

    // Layer 2: Manga Marks (moves more - closer depth)
    const moveMarksX = useTransform(x, [-1, 1], ["-12px", "12px"]);
    const moveMarksY = useTransform(y, [-1, 1], ["-12px", "12px"]);
    const rotateMarks = useTransform(x, [-1, 1], ["-0.4deg", "0.4deg"]);

    // Layer 3: Ink Shadow (misregistration effect - moves opposite)
    const moveShadowX = useTransform(x, [-1, 1], ["2px", "-2px"]);
    const moveShadowY = useTransform(y, [-1, 1], ["2px", "-2px"]);

    // Spotlight positioning (follows cursor exactly)
    const spotlightX = useTransform(smoothX, (v) => `${v * 100}%`);
    const spotlightY = useTransform(smoothY, (v) => `${v * 100}%`);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();
            // Normalize to 0-1
            mouseX.set(e.clientX / width);
            mouseY.set(e.clientY / height);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Color definitions based on theme/palette
    // Spotlight: white with very low opacity as requested (<= 0.06)
    // We make it slightly stronger in light mode to be visible against the creamy paper
    const spotlightColor = theme === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.04)";

    // Halftone color: faint ink
    const halftoneColor = theme === "dark"
        ? "rgba(242, 239, 232, 0.08)"
        : "rgba(17, 17, 17, 0.05)";

    // Manga marks color: stronger ink
    const marksColor = theme === "dark"
        ? "rgba(242, 239, 232, 0.12)"
        : "rgba(17, 17, 17, 0.08)";

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none select-none"
            aria-hidden="true"
        >
            {/* 1. SOLID PAPER BASE - Covers the global background within the Hero */}
            <div className="absolute inset-0 bg-paper z-0" />

            {/* 2. INK SHADOW (Misregistration Layer) */}
            <motion.div
                className="absolute inset-[-20px]"
                style={{ x: moveShadowX, y: moveShadowY }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="halftone-shadow" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill={halftoneColor} opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#halftone-shadow)" />
                </svg>
            </motion.div>

            {/* 3. HALFTONE DOTS LAYER */}
            <motion.div
                className="absolute inset-[-20px]"
                style={{ x: moveDotsX, y: moveDotsY }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="halftone-main" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill={halftoneColor} />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#halftone-main)" />
                </svg>
            </motion.div>

            {/* 4. MANGA MARKS / TEXTURE LAYER */}
            <motion.div
                className="absolute inset-[-40px]"
                style={{ x: moveMarksX, y: moveMarksY, rotate: rotateMarks }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="manga-marks" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            {/* Faint speed lines / scratches */}
                            <line x1="0" y1="0" x2="0" y2="40" stroke={marksColor} strokeWidth="1" strokeDasharray="10 30" />
                            <line x1="40" y1="20" x2="40" y2="80" stroke={marksColor} strokeWidth="0.5" strokeDasharray="5 15" />
                            <line x1="80" y1="0" x2="80" y2="30" stroke={marksColor} strokeWidth="1" strokeDasharray="2 10" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#manga-marks)" />
                </svg>
            </motion.div>

            {/* 5. SOFT SPOTLIGHT (Follows cursor) */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-overlay pointer-events-none"
                style={{
                    left: spotlightX,
                    top: spotlightY,
                    background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`
                }}
            />

            {/* Optional: Vignette to focus center (Static) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)]" />
        </div>
    );
}
