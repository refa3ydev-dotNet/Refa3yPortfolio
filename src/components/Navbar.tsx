"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { profile } from "@/data/profile";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    /* Track active section via IntersectionObserver */
    useEffect(() => {
        if (pathname !== "/") {
            setActive("");
            return;
        }

        const ids = profile.nav.map((n) => n.id);
        const observers: IntersectionObserver[] = [];

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActive(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [pathname]);

    const handleClick = (href: string) => {
        setMobileOpen(false);
        if (pathname !== "/") {
            router.push(`/${href}`);
            return;
        }
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            ref={navRef}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${scrolled
                ? "bg-paper/95 backdrop-blur-sm border-b-2 border-ink"
                : "bg-transparent"
                }`}
        >
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
                aria-label="Main navigation"
            >
                {/* Logo — AM DEV circle + REFAY */}
                <button
                    onClick={() => handleClick("#home")}
                    className="flex items-center gap-2.5 text-ink"
                    aria-label="Go to top"
                >
                    {/* AM DEV circle logo */}
                    <svg
                        viewBox="0 0 48 48"
                        className="w-9 h-9 shrink-0"
                        aria-hidden="true"
                        style={{ rotate: "-30deg" }}
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="21"
                            fill="none"
                            stroke="#B3261E"
                            strokeWidth="2.5"
                        />
                        <text
                            x="24"
                            y="19"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="11"
                            fontWeight="900"
                            fill="#B3261E"
                            fontFamily="Inter, sans-serif"
                        >
                            AM
                        </text>
                        <text
                            x="24"
                            y="32"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="11"
                            fontWeight="900"
                            fill="#B3261E"
                            fontFamily="Inter, sans-serif"
                        >
                            DEV
                        </text>
                    </svg>
                    <span className="text-xl font-black tracking-wide">
                        {profile.name}
                    </span>
                </button>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-6">
                    {profile.nav.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleClick(item.href)}
                                className={`relative text-xs font-bold tracking-wider uppercase transition-colors ${active === item.id
                                    ? "text-blood"
                                    : "text-ink hover:text-blood"
                                    }`}
                                aria-current={active === item.id ? "page" : undefined}
                            >
                                {item.label}
                                {active === item.id && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blood"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handleClick("#contact")}
                            className="btn-primary text-xs py-2 px-4"
                        >
                            CONTACT
                        </button>
                    </li>
                    {/* Theme toggle */}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-ink hover:text-blood transition-colors"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "dark" ? (
                                /* Sun icon */
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                /* Moon icon */
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>
                    </li>
                </ul>

                {/* Mobile: theme toggle + hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-ink hover:text-blood transition-colors"
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                    <button
                        className="flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        <span
                            className={`block h-[2px] w-6 bg-ink transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-ink transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {
                mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-paper border-b-2 border-ink px-6 pb-6"
                    >
                        <ul className="flex flex-col gap-4">
                            {profile.nav.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleClick(item.href)}
                                        className={`text-sm font-bold tracking-wider uppercase ${active === item.id
                                            ? "text-blood"
                                            : "text-ink"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => handleClick("#contact")}
                                    className="btn-primary text-xs py-2 px-4 w-full justify-center"
                                >
                                    CONTACT
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )
            }
        </motion.header >
    );
}
