import { profile, ProfileData } from "@/data/profile";

export type Dictionary = ProfileData;

const en: Dictionary = {
    ...profile,
};

const ar: Dictionary = {
    name: "رفاعي",
    fullName: "عمر أيمن",
    title: "مطور واجهات ومحاكاة", // Approximate
    location: "سوهاج، مصر",
    expectedGraduation: "يونيو 2026",

    hero: {
        arcLabel: "المرحلة 01",
        mainTitle: "تطوير الويب",
        subtitle: "مطور .NET Junior يبني واجهات خلفية قابلة للتطوير باستخدام ASP.NET MVC/Core وواجهات أمامية نظيفة باستخدام React. هيكلية ثلاثية الطبقات • SQL Server • أنظمة قابلة للصيانة.",
        stats: "مشروعان كبيران + • تدريب 50+ طالب • التخرج المتوقع: 2026",
        badge: "فصل جديد متاح الآن",
        cvLink: "/CV/Omar_Ayman_Allam.pdf",
    },

    characterStats: {
        int: "ذكاء",
        intLabel: "منطق",
        cre: "إبداع",
        creLabel: "تصميم",
    },

    stackChips: [".NET Core", "React", "SQL", "MVC"],

    avatarSrc: "/projects/OmarAyman.jpeg",

    nav: [
        { id: "home", label: "ف 01 الرئيسية", href: "#home" },
        { id: "skills", label: "ف 02 المهارات", href: "#skills" },
        { id: "projects", label: "ف 03 المشاريع", href: "#projects" },
        { id: "experience", label: "ف 04 الخبرة", href: "#experience" },
    ],

    skills: {
        sectionLabel: "// المعدات",
        columns: [
            {
                title: "الأساسية",
                items: ["C# / .NET", "SQL Server", "3-Tier Architecture", "ASP.NET MVC/Core"],
            },
            {
                title: "قوية",
                items: ["React", "JavaScript", "Tailwind CSS", "Git"],
            },
            {
                title: "مألوفة",
                items: ["Postman", "Docker", "Figma", "DSA"],
            },
        ],
    },

    projects: [
        {
            episode: "ح.01",
            title: "تطبيق الأفلام",
            impact: "هيكلية ثلاثية الطبقات + مصادقة + نمط المستودع/وحدة العمل.",
            techChips: ["ASP.NET MVC", "SQL Server", "EF"],
            github: "https://github.com/refa3ydev-dotNet/movies-web-app",
            image: "/projects/movies-app.svg",
        },
        {
            episode: "ح.02",
            title: "تيك إكسبريس",
            impact: "مدفوعات Stripe + لوحة تحكم + وحدات CRUD كاملة.",
            techChips: ["ASP.NET Core", "SQL Server", "Stripe"],
            github: "https://github.com/refa3ydev-dotNet/teckxpress",
            image: "/projects/teckxpress.svg",
        },
    ],

    caseStudy: {
        heading: "دراسة حالة مميزة",
        problemLabel: "المشكلة",
        approachLabel: "النهج",
        architectureLabel: "الهيكلية",
        resultLabel: "النتيجة",
        diagram: {
            presentation: "العرض",
            businessLogic: "منطق العمل",
            dataAccess: "الوصول للبيانات",
        },
        problem: "الحاجة إلى واجهة خلفية قابلة للتطوير والاختبار تفصل الاهتمامات وتتجنب الارتباط الوثيق بين الطبقات.",
        approach: "تطبيق أنماط المستودع + وحدة العمل مع حقن التبعية، مما يتيح اختبارًا معزولًا وصيانة سهلة.",
        architecture: "العرض ← منطق العمل ← الوصول للبيانات. تتواصل كل طبقة عبر الواجهات فقط.",
        result: "كود نظيف ونمطي مع تقليل 40% من الكود المتكرر. فصل كامل للمصادقة وعمليات CRUD.",
    },

    timeline: [
        {
            role: "قائد فريق",
            organization: "نشاط طلابي SMART",
            period: "2023 – الآن",
            bullets: [
                "قيادة فريق من 7+ مطورين في ورش عمل تقنية شاملة للطلاب.",
                "إدارة توزيع المهام ومراجعة الكود لضمان جودة المشروع.",
            ],
        },
        {
            role: "موجه (Mentor)",
            organization: "Code Spark",
            period: "مارس 2024 – الآن",
            bullets: [
                "توجيه 50+ طالب في أساسيات C# والبرمجة كائنية التوجه.",
                "تقديم جلسات تقنية عملية ومراجعات للكود فردية.",
            ],
        },
        {
            role: "متسابق",
            organization: "مسابقة ECPC",
            period: "2023 / 2024",
            bullets: [
                "المشاركة في المسابقة المصرية للبرمجة للجامعات (ECPC) باستخدام حل المشكلات الخوارزمي.",
            ],
        },
    ],

    education: [
        {
            type: "درجة علمية",
            title: "بكالوريوس علوم الحاسب وتقنية المعلومات",
            institution: "EELU",
            detail: "تاريخ التخرج المتوقع: يونيو 2026",
        },
    ],
    certifications: [
        { name: "ITI", date: "يونيو 2023" },
        { name: "DEPI", date: "يونيو 2025" },
    ],

    contact: {
        heading: "جاهز للفصل التالي؟",
        subtext: "لنتعاون لبناء شيء أسطوري.",
        availability: "متاح للتدريب / الوظائف المبدئية",
        email: "refa3y.dev@gmail.com",
        linkedin: "https://www.linkedin.com/in/omar-refaey-b20081253/",
        github: "https://github.com/refa3ydev-dotNet",
    },

    sectionHeadings: {
        projects: "أقواس المشاريع",
        experience: "قوس التوجيه",
        education: "التعليم والتدريب",
        certifications: "الشهادات",
        internshipBadge: "تدريب ITI",
        techLoadout: "التجهيزات التقنية",
    },
    projectsPage: {
        heading: "كل المشاريع",
        subtext: "مجموعة من أعمالي والمهام والمشاريع الجانبية.",
    },
    buttonLabels: {
        viewProjects: "عرض المشاريع",
        downloadCv: "تحميل السيرة الذاتية",
        readMore: "قراءة المزيد من الفصول ←",
        caseStudy: "دراسة حالة",
        github: "جيت هب",
        emailMe: "✉ راسلني",
        linkedin: "لينكد إن",
        repo: "◆ جيت هب",
    },
    footer: {
        copyright: "المعرض © 2026. جميع الحقوق محفوظة.",
    }
};

export const messages = { en, ar };
