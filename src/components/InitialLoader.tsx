"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MangaLoader from "./MangaLoader";

export default function InitialLoader() {
    // Start true to show immediately on mount (if logic allows)
    // blocking paint slightly, but we need to check storage first.
    // To avoid flash, we can default to true, then in useEffect check storage.
    // However, if storage says "seen", we might flash the loader for a split second.
    // A better approach for hydration-safe initial load is to check immediately if possible, 
    // but we can't access window during SSR.
    // So we render nothing initially, and in useEffect check. 
    // BUT the requirement says "Show fullscreen overlay immediately on client mount".
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Check session storage
        const hasSeenLoader = sessionStorage.getItem("seenLoader");

        if (hasSeenLoader) {
            // Already seen in this session, don't show specific initial loader
            // (Standard route transitions might still trigger their own loading.tsx if set up)
            setIsLoading(false);
            setShouldRender(false);
            return;
        }

        // Has not seen loader -> Show it
        // Mark as seen
        sessionStorage.setItem("seenLoader", "true");

        // Keep visible for min time (e.g. 1.2s total including animation)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600); // reduced from 1200ms for speed

        return () => clearTimeout(timer);
    }, []);

    // Remove from DOM after animation complete
    const onExitComplete = () => {
        setShouldRender(false);
    };

    if (!shouldRender) return null;

    return (
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] pointer-events-auto"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <MangaLoader />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
