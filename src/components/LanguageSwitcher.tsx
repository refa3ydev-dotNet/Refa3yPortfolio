"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
    const pathname = usePathname();
    const router = useRouter();

    const toggleLanguage = () => {
        // If current locale is 'en', we want to go to 'ar'
        // 'en' creates paths like '/' or '/projects' (rewritten by middleware)
        // 'ar' creates paths like '/ar' or '/ar/projects'
        if (locale === "en") {
            // English -> Arabic
            // If on root '/', go to '/ar'
            // If on '/projects', go to '/ar/projects'
            router.push(`/ar${pathname}`);
        } else {
            // Arabic -> English
            // If on '/ar', replace with '/' -> '//' which is fine or better ''
            // '/ar/projects' -> '/projects'
            const newPath = pathname.replace(/^\/ar/, "") || "/";
            router.push(newPath);
        }
    };

    return (
        <button
            onClick={toggleLanguage}
            className="text-xs font-bold tracking-wider uppercase text-ink hover:text-blood transition-colors px-2"
            aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
        >
            {locale === "en" ? "AR" : "EN"}
        </button>
    );
}
