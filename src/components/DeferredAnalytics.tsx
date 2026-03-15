"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Optimization: This component defers the loading of analytics scripts
 * until the page is idle or the user interacts with the page.
 * This contributes 0ms to Total Blocking Time (TBT) during initial load.
 */
export default function DeferredAnalytics() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (shouldLoad) return;

        const loadAnalytics = () => {
            setShouldLoad(true);
        };

        // If page is already loaded, schedule loading
        if (typeof window !== "undefined") {
            if (document.readyState === "complete") {
                // If the load event already fired, wait a bit then load
                const timer = setTimeout(loadAnalytics, 3000);
                
                // Also listen for interactions to load immediately
                const interactionEvents = ["mousedown", "mousemove", "keydown", "touchstart", "scroll"];
                const handleInteraction = () => {
                    clearTimeout(timer);
                    loadAnalytics();
                    interactionEvents.forEach(event => window.removeEventListener(event, handleInteraction));
                };

                interactionEvents.forEach(event => window.addEventListener(event, handleInteraction, { passive: true }));

                return () => {
                    clearTimeout(timer);
                    interactionEvents.forEach(event => window.removeEventListener(event, handleInteraction));
                };
            } else {
                // Wait for the load event
                const handleLoad = () => {
                    setTimeout(loadAnalytics, 2000);
                };
                window.addEventListener("load", handleLoad);

                // Also load on first interaction
                const interactionEvents = ["mousedown", "mousemove", "keydown", "touchstart", "scroll"];
                const handleInteraction = () => {
                    loadAnalytics();
                    interactionEvents.forEach(event => window.removeEventListener(event, handleInteraction));
                    window.removeEventListener("load", handleLoad);
                };

                interactionEvents.forEach(event => window.addEventListener(event, handleInteraction, { passive: true }));

                return () => {
                    window.removeEventListener("load", handleLoad);
                    interactionEvents.forEach(event => window.removeEventListener(event, handleInteraction));
                };
            }
        }
    }, [shouldLoad]);

    if (!shouldLoad) return null;

    return (
        <>
            <Analytics />
            <SpeedInsights />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        </>
    );
}
