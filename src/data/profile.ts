// ============================================================
// PROFILE DATA — Edit this file to update all portfolio content
// ============================================================

export const profile = {
    name: "REFAY",
    fullName: "Omar Ayman",
    title: "Junior Full-Stack Developer",
    location: "Sohag, Egypt",
    expectedGraduation: "June 2026",

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
        { id: "home", label: "CH.01 HOME", href: "#home" },
        { id: "skills", label: "CH.02 SKILLS", href: "#skills" },
        { id: "projects", label: "CH.03 PROJECTS", href: "#projects" },
        { id: "experience", label: "CH.04 EXPERIENCE", href: "#experience" },
    ],

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
        linkedin: "https://www.linkedin.com/in/omar-refaey-b20081253/", // Replace
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
