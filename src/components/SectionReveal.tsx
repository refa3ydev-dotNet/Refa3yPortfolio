"use client";

import { motion } from "framer-motion";

/**
 * Wrapper that fades + slides children into view when they scroll
 * into the viewport. Uses Framer Motion's whileInView.
 */
export default function SectionReveal({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
}
