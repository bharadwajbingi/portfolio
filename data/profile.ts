export interface Profile {
  personal: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
    bio: string[];
    quickFacts: {
      education: string;
      degree: string;
      gradDate: string;
      gpa?: string;
    };
  };
  skills: {
    category: string;
    color: string;
    skills: Array<{
      name: string;
      proficiency: number;
      icon?: string;
    }>;
  }[];
  projects: Array<{
    id: string;
    title: string;
    description: string;
    problem: string;
    impact: string;
    tech: string[];
    image: string;
    demo?: string;
    github?: string;
    featured: boolean;
    category: string;
  }>;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }>;
  codingProfiles: Array<{
    platform: string;
    username: string;
    url: string;
    icon: string;
  }>;
  social: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export const profile: Profile = {
  personal: {
    name: "Bharadwaj Bingi",
    title: "Backend Engineer",
    tagline: "Building production backend systems in Java/Spring Boot and Node.js/TypeScript. Shipping transaction processors and AI-powered chat agents.",
    location: "Hyderabad, India",
    email: "bharadwajbingi555@gmail.com",
    phone: "+91-9866640181",
    availability: "Open to Full-Time Opportunities",
    bio: [
      "Backend-heavy full-stack engineer with production experience in Java/Spring Boot and Node.js/TypeScript. I build systems that handle real workloads — from async batch pipelines processing 100K+ records to AI chat agents with LLM integration.",
      "At Mphasis, I built core backend modules for a Trade Processing platform — Spring Batch pipelines, REST APIs, JWT + OAuth2 authentication, and automated testing with 90% coverage. After the internship, I took the same concept and built TradeStream Engine end-to-end as a solo project.",
      "I care about clean architecture, proper testing, graceful error handling, and shipping things that actually work in production.",
    ],
    quickFacts: {
      education: "Sreyas Institute of Engineering and Technology, Hyderabad",
      degree: "B.Tech, Electronics and Communication Engineering",
      gradDate: "2026",
    },
  },
  skills: [
    {
      category: "Languages",
      color: "orange",
      skills: [
        { name: "Java 17", proficiency: 5 },
        { name: "SQL", proficiency: 4 },
        { name: "TypeScript", proficiency: 3 },
        { name: "Python", proficiency: 3 },
      ],
    },
    {
      category: "Backend & Frameworks",
      color: "green",
      skills: [
        { name: "Spring Boot 4.0", proficiency: 5 },
        { name: "Spring Batch", proficiency: 5 },
        { name: "Spring Security", proficiency: 4 },
        { name: "Spring Data JPA", proficiency: 5 },
        { name: "Hibernate ORM", proficiency: 4 },
        { name: "REST API Design", proficiency: 5 },
        { name: "MapStruct", proficiency: 4 },
      ],
    },
    {
      category: "Database",
      color: "purple",
      skills: [
        { name: "PostgreSQL 15", proficiency: 5 },
        { name: "Flyway Migrations", proficiency: 4 },
        { name: "HikariCP", proficiency: 4 },
        { name: "JPA Specifications", proficiency: 4 },
        { name: "Native SQL", proficiency: 4 },
      ],
    },
    {
      category: "Cloud & DevOps",
      color: "blue",
      skills: [
        { name: "AWS S3", proficiency: 4 },
        { name: "AWS EC2", proficiency: 4 },
        { name: "Docker", proficiency: 4 },
        { name: "Docker Compose", proficiency: 4 },
        { name: "GitHub Actions CI/CD", proficiency: 4 },
        { name: "Git", proficiency: 5 },
      ],
    },
    {
      category: "Security",
      color: "red",
      skills: [
        { name: "JWT (HMAC-SHA256)", proficiency: 5 },
        { name: "Google OAuth2", proficiency: 4 },
        { name: "TOTP 2FA", proficiency: 4 },
        { name: "AES-256-GCM", proficiency: 4 },
        { name: "BCrypt", proficiency: 4 },
        { name: "Rate Limiting", proficiency: 4 },
      ],
    },
    {
      category: "Testing & Quality",
      color: "indigo",
      skills: [
        { name: "JUnit 5", proficiency: 5 },
        { name: "Mockito", proficiency: 4 },
        { name: "Testcontainers", proficiency: 4 },
        { name: "JaCoCo", proficiency: 4 },
        { name: "Parameterized Tests", proficiency: 4 },
      ],
    },
    {
      category: "Frontend",
      color: "blue",
      skills: [
        { name: "React", proficiency: 3 },
        { name: "TypeScript", proficiency: 3 },
        { name: "Tailwind CSS", proficiency: 3 },
      ],
    },
    {
      category: "Concepts & CS Fundamentals",
      color: "indigo",
      skills: [
        { name: "Data Structures & Algorithms", proficiency: 4 },
        { name: "DBMS", proficiency: 4 },
        { name: "Operating Systems", proficiency: 4 },
        { name: "Networking", proficiency: 4 },
        { name: "OOP", proficiency: 5 },
        { name: "System Design", proficiency: 4 },
        { name: "Agile / Scrum", proficiency: 4 },
      ],
    },
  ],
  projects: [
    {
      id: "tradestream-engine",
      title: "TradeStream Engine",
      description:
        "Production-grade transaction processing platform. Processes CSV files up to 1GB with sub-second upload response, validates 21 fields per record, detects duplicates at 3 levels, and manages full transaction lifecycle.",
      problem:
        "Financial institutions need to process massive trade CSV files reliably — validating every field, detecting duplicates, handling failures gracefully, and maintaining audit trails — all while serving multiple users concurrently.",
      impact:
        "Deployed on AWS EC2 with 5 Maven modules, 9 database tables, 20+ REST endpoints, Spring Batch pipeline (250 records/chunk), multi-layer security (JWT + OAuth2 + TOTP 2FA), and automated CI/CD.",
      tech: [
        "Java 17",
        "Spring Boot",
        "Spring Batch",
        "PostgreSQL",
        "AWS (EC2, S3)",
        "Docker",
        "GitHub Actions",
        "JWT",
        "OAuth2",
        "TOTP 2FA",
        "JUnit 5",
        "Testcontainers",
      ],
      image: "/images/tradestream-preview.png",
      demo: "https://d2i9y8go17l95q.cloudfront.net/",
      github: "https://github.com/bharadwajbingi/tradestream-engine-api",
      featured: true,
      category: "Backend",
    },
    {
      id: "ai-chat-agent",
      title: "AI Support Chat Agent",
      description:
        "Real-time AI-powered customer support agent with LLM integration, conversation persistence, session management, and robust error handling. Built end-to-end in TypeScript.",
      problem:
        "Businesses need always-available customer support that answers FAQs accurately, maintains conversation context, and handles failures gracefully — without human agents.",
      impact:
        "Extensible architecture supporting WhatsApp, Instagram, and other channels. Context-aware prompting with conversation history. Zero crashes on adversarial testing.",
      tech: [
        "Node.js",
        "TypeScript",
        "Svelte",
        "PostgreSQL",
        "Redis",
        "OpenAI API",
      ],
      image: "/images/portfolio-gen-preview.jpg",
      demo: undefined,
      github: undefined,
      featured: true,
      category: "Full-Stack / AI",
    },
    {
      id: "writebase",
      title: "Writebase",
      description:
        "Full-stack blogging platform with AI-powered writing assistance, rich text editing, content management, and cloud media uploads.",
      problem:
        "Content creators needed a modern platform with AI-assisted writing, secure publishing, and responsive reading experience.",
      impact:
        "Deployed platform with JWT auth, Google Gemini AI integration for writing suggestions, and cloud-based media via ImageKit.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Google Gemini AI",
      ],
      image: "/images/writebase-preview.png",
      demo: "https://writebase.vercel.app/",
      github: "https://github.com/bharadwajbingi/writebase",
      featured: true,
      category: "Full-Stack",
    },
  ],
  experience: [
    {
      id: "mphasis-intern",
      company: "Mphasis",
      position: "Backend Engineering Intern",
      duration: "Jan 2026 – Apr 2026",
      location: "Chennai, India",
      description: [
        "Engineered fault-tolerant Spring Batch pipelines processing 100K+ transaction records in 63 seconds with chunk-based processing, validation, and duplicate detection.",
        "Designed and shipped 11 production REST APIs powering authentication, transaction workflows, and real-time analytics across 3 service modules.",
        "Achieved ~90% test coverage across service layers using JUnit 5, Mockito, and Testcontainers, reducing post-release defects.",
      ],
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Batch",
        "PostgreSQL",
        "Docker",
        "JUnit 5",
        "Mockito",
        "Testcontainers",
      ],
    },
  ],
  certifications: [
    {
      name: "Smart Coder Program — Data Structures & Algorithms",
      issuer: "Smart Interviews",
      date: "2024",
    },
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      username: "bharadwajbingi",
      url: "https://leetcode.com/bharadwajbingi",
      icon: "code",
    },
    {
      platform: "CodeChef",
      username: "bharadwaj_bingi",
      url: "https://www.codechef.com/users/bharadwaj_bingi",
      icon: "chef-hat",
    },
    {
      platform: "Codeforces",
      username: "bharadwajbingi",
      url: "https://codeforces.com/profile/bharadwajbingi",
      icon: "trophy",
    },
    {
      platform: "HackerRank",
      username: "bharadwajbingi",
      url: "https://www.hackerrank.com/bharadwajbingi",
      icon: "terminal",
    },
  ],
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/bharadwajbingi",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/bharadwajbingi",
      icon: "linkedin",
    },
  ],
};
