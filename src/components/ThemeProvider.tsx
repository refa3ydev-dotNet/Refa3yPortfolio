"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeCtx = createContext<ThemeContext>({
    theme: "light",
    toggleTheme: () => { },
});

export function useTheme() {
    return useContext(ThemeCtx);
}

/**
 * ThemeProvider — hydration-safe dark mode toggle.
 *
 * Reads localStorage → falls back to system prefers-color-scheme →
 * defaults to "light". Applies/removes the `.dark` class on <html>.
 *
 * The inline <script> in layout.tsx sets the initial class before paint
 * to prevent a flash of wrong theme.
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // Read persisted / system preference on mount
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
        setMounted(true);
    }, []);

    // Sync <html> class + localStorage whenever theme changes
    useEffect(() => {
        if (!mounted) return;
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return (
        <ThemeCtx.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeCtx.Provider>
    );
}
