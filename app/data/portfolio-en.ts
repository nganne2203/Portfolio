import type { Project, SkillGroup } from "@/app/data/portfolio";

export const skillGroupsEn: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    code: "01",
    skills: ["ReactJS", "React Native", "Flutter", "TypeScript", "Dart"],
  },
  {
    title: "Backend & Database",
    code: "02",
    skills: ["Node.js", "RESTful API", "MongoDB", "MySQL", "SQLite", "JWT"],
  },
  {
    title: "Quality & Product",
    code: "03",
    skills: [
      "UI Testing",
      "Requirement Clarification",
      "Bug Fixing",
      "Form Validation",
      "Role-based Access",
    ],
  },
  {
    title: "Tools",
    code: "04",
    skills: ["GitHub", "Figma", "Draw.io", "Trello", "Docker"],
  },
  {
    title: "Languages",
    code: "05",
    skills: [
      "English · professional communication & technical reading",
      "Japanese · JLPT N4",
    ],
  },
];

export const projectsEn: Project[] = [
  {
    id: "phone-accessories",
    number: "01",
    title: "Phone Accessories System",
    shortTitle: "E-commerce · Web + Mobile",
    role: "Team Leader | Full-stack Developer",
    period: "Jan 2026 — Mar 2026",
    description:
      "A web and mobile commerce system where customers can discover, purchase, and review phone accessories, while staff and administrators manage products, orders, inventory, users, branches, and pricing.",
    contributions: [
      "Built product discovery, cart, payment, order tracking, and review flows.",
      "Integrated RESTful APIs, Redux Toolkit, and role-based authorization.",
      "Performed UI testing, form validation, and experience-focused bug fixing.",
    ],
    technologies: [
      "TypeScript",
      "ReactJS",
      "React Native",
      "MongoDB",
      "Redux Toolkit",
      "Ant Design",
      "Tailwind CSS",
      "VNPay",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/nganne2203/SDN302_PROJECT_FE",
      },
      {
        label: "Backend",
        href: "https://github.com/nganne2203/SDN302_PROJECT_BE",
      },
    ],
    accent: "cobalt",
  },
  {
    id: "hackathon-management",
    number: "02",
    title: "Hackathon Management System",
    shortTitle: "Event platform · Multi-role",
    role: "Team Leader | Full-stack Developer",
    period: "May 2026 — Jul 2026",
    description:
      "A web and mobile hackathon management platform supporting participants, coordinators, judges, mentors, and administrators throughout the journey from registration to final results.",
    contributions: [
      "Developed team registration, submissions, scoring, results, workshops, and check-in flows.",
      "Built role-specific interfaces, access control, and navigation.",
      "Integrated Socket.IO for chat and notifications, then tested and refined the UI.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "Redis",
      "Docker",
      "Supabase",
      "Cloudinary",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_FE",
      },
      {
        label: "Backend",
        href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_BE",
      },
      {
        label: "Mobile",
        href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_RN",
      },
    ],
    accent: "cyan",
  },
  {
    id: "maihongo",
    number: "03",
    title: "Maihongo",
    shortTitle: "Japanese learning · Mobile",
    role: "Team Leader | Full-stack Developer",
    period: "May 2026 — Jul 2026",
    description:
      "A cross-platform Japanese learning application featuring flashcards, quizzes, listening, speaking and writing practice, progress tracking, and offline learning.",
    contributions: [
      "Developed Flutter learning flows, authentication, and token refresh.",
      "Implemented audio, offline SQLite storage, and data synchronization.",
      "Built backend services for speaking and writing assessment and vocabulary audio generation.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Dio",
      "SQLite",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Gemini API",
      "Cloudflare R2",
      "BullMQ",
    ],
    links: [
      {
        label: "Mobile",
        href: "https://github.com/nganne2203/PRM393_MaiHonGo_MB",
      },
      {
        label: "Backend",
        href: "https://github.com/nganne2203/PRM393_MaiHonGo_BE",
      },
    ],
    accent: "indigo",
  },
];
