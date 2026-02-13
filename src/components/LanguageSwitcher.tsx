"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
    const pathname = usePathname();
    const router = useRouter();

    const toggleLanguage = () => {
        const newLocale = locale === "en" ? "ar" : "en";
        // Default replacement: assumes pathname starts with /en or /ar
        // If pathname is just /en, replace with /ar
        // If pathname is /en/projects, replace with /ar/projects
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
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
