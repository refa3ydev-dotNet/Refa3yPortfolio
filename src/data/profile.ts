// ============================================================
// PROFILE DATA — Edit this file to update all portfolio content
// ============================================================

export interface Project {
    episode: string;
    title: string;
    impact: string;
    techChips: string[];
    github: string;
    image: string;
    link?: string;
}

export interface WebService {
    title: string;
    bestFor: string;
    includes: string[];
    tools: string[];
}

export interface CreativeStep {
    number: string;
    title: string;
    goal: string;
    outputs: string[];
}

export interface AboutMe {
    intro: string;
    quickFacts: { label: string; value: string }[];
    currentlyBuilding: string;
}

export interface ScrollIntro {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}

export const profile = {
    name: "REFAY",
    fullName: "Omar Ayman",
    title: "Junior Full-Stack Developer",
    location: "Sohag, Egypt",
    expectedGraduation: "June 2026",

    // Scroll Intro
    scrollIntro: {
        text1: "HI, I'M OMAR REFAY",
        text2: "FULL-STACK WEB DEVELOPER",
        text3: "BUILDING ROBUST .NET BACKENDS",
        text4: "CRAFTING INTERACTIVE REACT UIs",
        text5: "READY FOR THE NEXT ARC",
    },

    // Hero
    hero: {
        arcLabel: "ARC 01",
        mainTitle: "WEB DEV",
        subtitle:
            "Junior .NET Developer building scalable ASP.NET MVC/Core backends and clean React frontends. 3-Tier Architecture • SQL Server • Maintainable systems.",
        stats: "2+ major projects • Mentored 50+ students • Expected grad: 2026",
        badge: "NEW CHAPTER AVAILABLE NOW",
        cvLink: "/CV/Omar_Ayman_Allam.pdf", // Place your CV in /public/resume.pdf
    },

    // Character Card Stats
    characterStats: {
        int: "INT",
        intLabel: "Logic",
        cre: "CRE",
        creLabel: "Design",
    },

    // Stack chips shown on character card
    stackChips: [".NET Core", "React", "SQL", "MVC"],

    // Avatar
    avatarSrc: "/projects/OmarAyman.jpeg",

    // Navigation
    nav: [
        { id: "home", label: "CH.00 HOME", href: "#home" },
        { id: "skills", label: "CH.01 SKILLS", href: "#skills" },
        { id: "services", label: "CH.02 SERVICES", href: "#services" },
        { id: "projects", label: "CH.03 PROJECTS", href: "#projects" },
        { id: "process", label: "CH.04 PROCESS", href: "#process" },
        { id: "experience", label: "CH.05 EXPERIENCE", href: "#experience" },
        { id: "testimonials", label: "CH.06 REVIEWS", href: "#testimonials" },
        { id: "about", label: "CH.07 ABOUT", href: "#about" },
    ],

    // Testimonials
    testimonials: {
        sectionLabel: "// REVIEWS",
        heading: "Testimonials Arc",
        images: [
            "/testmonials/testimonial (1).jpeg",
            "/testmonials/testimonial (1).png",
            "/testmonials/testimonial (2).jpeg",
            "/testmonials/testimonial (2).png",
            "/testmonials/testimonial (3).jpeg",
            "/testmonials/testimonial (4).jpeg",
        ],
    },

    // Skills / Tech Loadout
    skills: {
        sectionLabel: "// EQUIPMENT",
        columns: [
            {
                title: "CORE",
                items: ["C# / .NET", "SQL Server", "3-Tier Architecture", "ASP.NET MVC/Core"],
            },
            {
                title: "STRONG",
                items: ["React", "JavaScript", "Tailwind CSS", "Git"],
            },
            {
                title: "FAMILIAR",
                items: ["Postman", "Docker", "Figma", "DSA"],
            },
        ],
    },

    // Web Services
    webServices: {
        sectionLabel: "// SERVICES",
        subtitle: "What I can help you build (realistic for a junior)",
        note: "Scope depends on timeline and requirements",
        cta: "Let's discuss your project",
        services: [
            {
                title: "CRUD Web Apps",
                bestFor: "Internal tools or management systems.",
                includes: [
                    "Auth-ready structure",
                    "Role-based UI placeholders",
                    "Validation & logic",
                    "Clean UI pages",
                ],
                tools: ["ASP.NET MVC/Core", "SQL Server", "EF Core"],
            },
            {
                title: "REST API Backends",
                bestFor: "Powering mobile or web applications.",
                includes: [
                    "Clean endpoints",
                    "DTOs & AutoMapper",
                    "EF Core Integration",
                    "Pagination & Filtering",
                ],
                tools: [".NET 8", "SQL Server", "Postman"],
            },
            {
                title: "UI Implementation",
                bestFor: "Converting designs to interactive code.",
                includes: [
                    "Responsive components",
                    "Dark mode support",
                    "Accessible forms",
                    "Reusable UI library",
                ],
                tools: ["React", "TypeScript", "Tailwind CSS"],
            },
            {
                title: "Performance + SEO Setup",
                bestFor: "Making your site visible and fast.",
                includes: [
                    "Metadata & OG tags",
                    "Sitemap & Robots.txt",
                    "Core Web Vitals basics",
                    "Image optimization",
                ],
                tools: ["Next.js", "Vercel", "Lighthouse"],
            },
        ],
    },

    // Creative Process
    creativeProcess: {
        sectionLabel: "// PROCESS",
        steps: [
            {
                number: "01",
                title: "DISCOVER",
                goal: "Clarify requirements and priorities",
                outputs: ["Feature list + edge cases", "Rough sitemap"],
            },
            {
                number: "02",
                title: "PLAN",
                goal: "Architecture + data model",
                outputs: ["Database tables sketch", "Folder structure & endpoints"],
            },
            {
                number: "03",
                title: "BUILD",
                goal: "Implement incrementally",
                outputs: ["Working feature slices", "Basic tests/validation"],
            },
            {
                number: "04",
                title: "POLISH",
                goal: "Quality + deploy",
                outputs: ["Responsive checks", "Performance pass", "Vercel deploy"],
            },
        ],
    },

    // About Me
    aboutMe: {
        sectionLabel: "// ABOUT",
        intro: "I am a Junior .NET Developer focused on building solid backends and clean, functional user interfaces. I believe in writing maintainable code and following established architectural patterns.",
        quickFacts: [
            { label: "Location", value: "Egypt" },
            { label: "Stack", value: ".NET + SQL Server + React" },
            { label: "Focus", value: "Clean Architecture" },
            { label: "Open to", value: "Internships / Junior roles" },
        ],
        currentlyBuilding: "Currently building this portfolio and enhancing my Movies Web App with advanced features.",
    },

    // Projects


    projects: [
        {
            episode: "EP.01",
            title: "Movies Web App",
            impact: "3-Tier architecture + auth + repository/UoW structure.",
            techChips: ["ASP.NET MVC", "SQL Server", "EF"],
            github: "https://github.com/refa3ydev-dotNet/Cinema-WepApp",
            image: "/projects/movies-app.png",
        },
        {
            episode: "EP.02",
            title: "TechXpress",
            impact: "Stripe payments + admin dashboard + full CRUD modules.",
            techChips: ["ASP.NET Core", "SQL Server", "Stripe"],
            github: "https://github.com/Marwan-Farouk/TechXpress-Project/tree/main/TechXpress",
            image: "/projects/teckxpress.png",
        },
        {
            episode: "EP.03",
            title: "ValentineTrend",
            impact: "Interactive trend analysis application deployed on Netlify.",
            techChips: ["React", "Frontend", "Netlify"],
            github: "https://github.com/refa3ydev-dotNet/Valentine_Trend",
            link: "https://valentinetrend.netlify.app/",
            image: "/projects/Valentine-trend.png",
        },
        {
            episode: "EP.04",
            title: "Portfolio v1",
            impact: "Previous version of my personal portfolio.",
            techChips: ["HTML/CSS", "JavaScript"],
            github: "https://github.com/Omar-Ref3y/portfolio",
            link: "https://3marportfolio.netlify.app/",
            image: "/projects/Portfolio-1.png",
        },
        {
            episode: "EP.05",
            title: "Portfolio v2",
            impact: "Second iteration of my portfolio with enhanced UI.",
            techChips: ["React", "Animation"],
            github: "https://github.com/Omar-Ref3y/My_portfolio",
            link: "https://p3mar.netlify.app/",
            image: "/projects/Portfolio-2.png",
        },
    ],

    // Featured Case Study
    caseStudy: {
        heading: "Featured Case Study",
        problemLabel: "PROBLEM",
        approachLabel: "APPROACH",
        architectureLabel: "ARCHITECTURE",
        resultLabel: "RESULT",
        diagram: {
            presentation: "Presentation",
            businessLogic: "Business Logic",
            dataAccess: "Data Access",
        },
        problem:
            "Needed a scalable, testable backend that separates concerns and avoids tight coupling across layers.",
        approach:
            "Implemented repository + Unit of Work patterns with dependency injection, enabling isolated testing and easy maintainability.",
        architecture:
            "Presentation → Business Logic → Data Access. Each layer communicates through interfaces only.",
        result:
            "Clean, modular codebase with ~40% reduction in boilerplate. Auth and CRUD fully separated.",
    },

    // Experience / Mentor Arc Timeline
    timeline: [
        {
            role: "Team Leader",
            organization: "SMART Student Activity",
            period: "2023 – Present",
            bullets: [
                "Led a team of 7+ developers in full-stack technical workshops for students.",
                "Managed task distribution and code reviews to ensure project quality.",
            ],
        },
        {
            role: "Mentor",
            organization: "Code Spark",
            period: "Mar 2024 – Present",
            bullets: [
                "Mentored 50+ students in C# and OOP fundamentals.",
                "Provided hands-on technical sessions and 1-on-1 code reviews.",
            ],
        },
        {
            role: "Contestant",
            organization: "ECPC Competition",
            period: "2023 / 2024",
            bullets: [
                "Participated in the Egyptian Collegiate Programming Contest (ECPC) using algorithmic problem-solving.",
            ],
        },
    ],

    // Education & Training
    education: [
        {
            type: "Degree",
            title: "B.Sc. Computer Science & IT",
            institution: "EELU",
            detail: "Expected graduation: June 2026",
        },
    ],
    certifications: [
        { name: "ITI", date: "Jun 2023" },
        { name: "DEPI", date: "Jun 2025" },
    ],

    // Footer CTA / Contact
    contact: {
        heading: "READY FOR THE NEXT ARC?",
        subtext: "Let's collaborate to build something legendary.",
        availability: "Open for internships / junior roles",
        email: "refa3y.dev@gmail.com", // Replace with your email
        linkedin: "https://www.linkedin.com/in/omar-ayman-refay/", // Replace
        github: "https://github.com/refa3ydev-dotNet", // Replace
    },

    // UI Strings (for localization)
    sectionHeadings: {
        projects: "PROJECT ARCS",
        experience: "MENTOR ARC",
        education: "Education & Training",
        certifications: "Certifications",
        internshipBadge: "ITI Internship",
        techLoadout: "TECH LOADOUT",
    },
    projectsPage: {
        heading: "All Projects",
        subtext: "A collection of my work, assignments, and side projects.",
    },
    buttonLabels: {
        viewProjects: "View Projects",
        downloadCv: "Download CV",
        readMore: "READ MORE CHAPTERS →",
        caseStudy: "Case Study",
        github: "GitHub",
        emailMe: "✉ Email Me",
        linkedin: "LinkedIn",
        repo: "◆ GitHub",
    },
    footer: {
        copyright: "Portfolio © 2026. All rights reserved.",
    }
};

export type ProfileData = typeof profile;
