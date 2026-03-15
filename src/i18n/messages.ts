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
        { id: "home", label: "00 فصل الرئيسية", href: "#home" },
        { id: "skills", label: "فصل المهارات 01", href: "#skills" },
        { id: "services", label: " 02 فصل الخدمات", href: "#services" },
        { id: "process", label: " 03 فصل العمليات", href: "#process" },
        { id: "about", label: "فصل من أنا 04", href: "#about" },
        { id: "projects", label: " 05 فصل المشاريع", href: "#projects" },
        { id: "experience", label: " 06 فصل الخبرة", href: "#experience" },
        { id: "testimonials", label: " 07 فصل التوصيات", href: "#testimonials" },
    ],

    // Testimonials
    testimonials: {
        sectionLabel: "// التوصيات",
        heading: "التقييمات",
        images: [
            "/testmonials/testimonial (1).jpeg",
            "/testmonials/testimonial (1).png",
            "/testmonials/testimonial (2).jpeg",
            "/testmonials/testimonial (2).png",
            "/testmonials/testimonial (3).jpeg",
            "/testmonials/testimonial (4).jpeg",
        ],
    },

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

    // Web Services
    webServices: {
        sectionLabel: "// الخدمات",
        subtitle: "ما يمكنني مساعدتك في بنائه (واقعي لمطور مبتدئ)",
        note: "النطاق يعتمد على الجدول الزمني والمتطلبات",
        cta: "لنناقش مشروعك",
        services: [
            {
                title: "تطبيقات CRUD",
                bestFor: "الأدوات الداخلية أو أنظمة الإدارة.",
                includes: [
                    "هيكلية جاهزة للمصادقة",
                    "واجهات مستخدم مبنية على الأدوار",
                    "التحقق من البيانات والمنطق",
                    "صفحات واجهة مستخدم نظيفة",
                ],
                tools: ["ASP.NET MVC/Core", "SQL Server", "EF Core"],
            },
            {
                title: "واجهات برمجة REST API",
                bestFor: "تشغيل تطبيقات الهاتف أو الويب.",
                includes: [
                    "نهايات طرفية (Endpoints) نظيفة",
                    "DTOs و AutoMapper",
                    "تكامل EF Core",
                    "أنماط الترقيم والفلترة",
                ],
                tools: [".NET 8", "SQL Server", "Postman"],
            },
            {
                title: "تنفيذ واجهات المستخدم",
                bestFor: "تحويل التصاميم إلى كود تفاعلي.",
                includes: [
                    "مكونات متجاوبة",
                    "دعم الوضع الليلي",
                    "نماذج سهلة الوصول",
                    "مكتبة واجهة مستخدم قابلة لإعادة الاستخدام",
                ],
                tools: ["React", "TypeScript", "Tailwind CSS"],
            },
            {
                title: "تحسين الأداء و SEO",
                bestFor: "جعل موقعك مرئيًا وسريعًا.",
                includes: [
                    "بيانات Metadata ووسوم OG",
                    "ملفات Sitemap و Robots.txt",
                    "أساسيات Core Web Vitals",
                    "تحسين الصور",
                ],
                tools: ["Next.js", "Vercel", "Lighthouse"],
            },
        ],
    },

    // Creative Process
    creativeProcess: {
        sectionLabel: "// العمليات",
        steps: [
            {
                number: "01",
                title: "الاكتشاف",
                goal: "توضيح المتطلبات والأولويات",
                outputs: ["قائمة الميزات + الحالات الاستثنائية", "مخطط هيكلي للموقع"],
            },
            {
                number: "02",
                title: "التخطيط",
                goal: "الهيكلية + نموذج البيانات",
                outputs: ["رسم توضيحي لجداول قاعدة البيانات", "هيكل المجلدات والنهايات الطرفية"],
            },
            {
                number: "03",
                title: "البناء",
                goal: "التنفيذ التدريجي",
                outputs: ["أجزاء ميزات تعمل", "اختبارات أساسية والتحقق من البيانات"],
            },
            {
                number: "04",
                title: "الصقل",
                goal: "الجودة + النشر",
                outputs: ["فحوصات الاستجابة", "مراجعة الأداء", "النشر عبر Vercel"],
            },
        ],
    },

    // About Me
    aboutMe: {
        sectionLabel: "// من أنا",
        intro: "أنا مطور .NET مبتدئ أركز على بناء واجهات خلفية قوية وواجهات مستخدم نظيفة وعملية. أؤمن بكتابة كود قابل للصيانة واتباع الأنماط المعمارية المعترف بها.",
        quickFacts: [
            { label: "الموقع", value: "مصر" },
            { label: "التقنيات", value: ".NET + SQL Server + React" },
            { label: "التركيز", value: "العمارة النظيفة (Clean Architecture)" },
            { label: "متاح لـ", value: "تدريب / أدوار جونيور" },
        ],
        currentlyBuilding: "أقوم حاليًا ببناء معرض أعمالي هذا وتحسين تطبيق الأفلام الخاص بي بميزات متقدمة.",
    },

    projects: [
        {
            episode: "ح.01",
            title: "تطبيق الأفلام",
            impact: "هيكلية ثلاثية الطبقات + مصادقة + نمط المستودع/وحدة العمل.",
            techChips: ["ASP.NET MVC", "SQL Server", "EF"],
            github: "https://github.com/refa3ydev-dotNet/Cinema-WepApp",
            image: "/projects/movies-app.png",
        },
        {
            episode: "ح.02",
            title: "تيك إكسبريس",
            impact: "مدفوعات Stripe + لوحة تحكم + وحدات CRUD كاملة.",
            techChips: ["ASP.NET Core", "SQL Server", "Stripe"],
            github: "https://github.com/Marwan-Farouk/TechXpress-Project/tree/main/TechXpress",
            image: "/projects/teckxpress.png",
        },
        {
            episode: "ح.03",
            title: "فالنتاين تريند",
            impact: "تطبيق تفاعلي لتحليل التريندات، تم نشره على Netlify.",
            techChips: ["React", "واجهة أمامية", "Netlify"],
            github: "https://github.com/refa3ydev-dotNet/Valentine_Trend",
            link: "https://valentinetrend.netlify.app/",
            image: "/projects/Valentine-trend.png",
        },
        {
            episode: "ح.04",
            title: "معرض الأعمال الإصدار 1",
            impact: "النسخة السابقة من معرض أعمالي الشخصي.",
            techChips: ["HTML/CSS", "JavaScript"],
            github: "https://github.com/Omar-Ref3y/portfolio",
            link: "https://3marportfolio.netlify.app/",
            image: "/projects/Portfolio-1.png",
        },
        {
            episode: "ح.05",
            title: "معرض الأعمال الإصدار 2",
            impact: "الإصدار الثاني من معرض أعمالي بواجهة مستخدم محسنة.",
            techChips: ["React", "تحريك"],
            github: "https://github.com/Omar-Ref3y/My_portfolio",
            link: "https://p3mar.netlify.app/",
            image: "/projects/Portfolio-2.png",
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
