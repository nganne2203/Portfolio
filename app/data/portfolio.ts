export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  technologies: string[];
  links: ProjectLink[];
  accent: "cobalt" | "cyan" | "indigo";
}

export interface SkillGroup {
  title: string;
  code: string;
  skills: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  type: "award" | "certificate";
  thumbnail: string | null;
  credentialUrl: string | null;
}

export const profile = {
  name: "Mai Thị Thanh Ngân",
  initials: "MN",
  avatar: "/images/avatar.jpg",
  role: "Software Engineering Student | Full-stack & Mobile Developer",
  location: "Thu Duc City, Ho Chi Minh City, Vietnam",
  email: "thanhngan.pt2004@gmail.com",
  github: "https://github.com/nganne2203",
};

export const skillGroups: SkillGroup[] = [
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
    title: "Ngôn ngữ",
    code: "05",
    skills: [
      "Tiếng Anh · giao tiếp & đọc tài liệu kỹ thuật",
      "Tiếng Nhật · JLPT N4",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "phone-accessories",
    number: "01",
    title: "Phone Accessories System",
    shortTitle: "E-commerce · Web + Mobile",
    role: "Team Leader | Full-stack Developer",
    period: "01/2026 — 03/2026",
    description:
      "Hệ thống thương mại điện tử web và mobile cho phép khách hàng tìm kiếm, mua và đánh giá phụ kiện điện thoại; đồng thời hỗ trợ quản lý sản phẩm, đơn hàng, tồn kho, người dùng, chi nhánh và giá.",
    contributions: [
      "Xây dựng luồng duyệt sản phẩm, giỏ hàng, thanh toán và theo dõi đơn hàng.",
      "Tích hợp RESTful API, Redux Toolkit và phân quyền theo vai trò.",
      "Thực hiện UI testing, form validation và sửa lỗi trải nghiệm.",
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
    period: "05/2026 — 07/2026",
    description:
      "Nền tảng web và mobile quản lý hackathon, phục vụ người tham gia, điều phối viên, giám khảo, mentor và quản trị viên xuyên suốt từ đăng ký đến công bố kết quả.",
    contributions: [
      "Phát triển đăng ký nhóm, nộp bài, chấm điểm, kết quả, workshop và check-in.",
      "Xây dựng giao diện đa vai trò và điều hướng theo quyền người dùng.",
      "Tích hợp Socket.IO cho chat, thông báo và xử lý lỗi giao diện.",
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
    period: "05/2026 — 07/2026",
    description:
      "Ứng dụng học tiếng Nhật đa nền tảng với flashcard, quiz, luyện nghe, nói, viết, theo dõi tiến độ và khả năng học ngoại tuyến.",
    contributions: [
      "Phát triển luồng học bằng Flutter, xác thực và token refresh.",
      "Triển khai audio, SQLite offline và đồng bộ dữ liệu.",
      "Xây dựng backend đánh giá nói/viết và tạo audio từ vựng.",
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

export const credentials: Credential[] = [
  {
    title: "Excellent Student, Semester SP25",
    issuer: "FPT University",
    date: "2025",
    type: "award",
    thumbnail: null,
    credentialUrl: null,
  },
  {
    title: "Top 100 Excellent Student, Semester FA24",
    issuer: "FPT University",
    date: "2024",
    type: "award",
    thumbnail: null,
    credentialUrl: null,
  },
  {
    title: "Project Management Principles and Practices Specialization",
    issuer: "Coursera",
    date: "01/2026",
    type: "certificate",
    thumbnail: null,
    credentialUrl: null,
  },
  {
    title: "User Experience Research and Design",
    issuer: "Coursera",
    date: "05/2025",
    type: "certificate",
    thumbnail: null,
    credentialUrl: null,
  },
  {
    title: "Software Development Lifecycle",
    issuer: "Coursera",
    date: "01/2025",
    type: "certificate",
    thumbnail: null,
    credentialUrl: null,
  },
  {
    title: "Amazon Junior Software Developer",
    issuer: "Amazon",
    date: "01/2025",
    type: "certificate",
    thumbnail: null,
    credentialUrl: null,
  },
  {
    title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    issuer: "Coursera",
    date: "09/2024",
    type: "certificate",
    thumbnail: null,
    credentialUrl: null,
  },
];
