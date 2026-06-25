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
    title: "Backend Engineer | Java 17 & Spring Boot",
    tagline: "Building enterprise-grade distributed systems that process high-volume financial data with zero data loss",
    location: "Hyderabad, India",
    email: "bharadwajbingi555@gmail.com",
    phone: "+91-9866640181",
    availability: "Open to Full-Time Opportunities",
    bio: [
      "Backend Engineer specializing in building enterprise-grade distributed systems with Java 17 and Spring Boot. I design architectures that handle 1GB file ingestion with sub-second response, process records through validated batch pipelines, and deploy with automated CI/CD.",
      "At Mphasis, I was a key contributor to the TradeStream Engine — a multi-module platform with asynchronous batch processing, multi-layer security (JWT + OAuth2 + TOTP 2FA + AES-256-GCM), ownership-based multi-tenant isolation, and auto-recovery from crashes. Collaborated with a team in Agile sprints, code reviews, and backend optimization.",
      "Strong fundamentals in Data Structures & Algorithms, DBMS, Operating Systems, and Networking — certified through the Smart Interviews program. I write code that's tested (JUnit 5 + Testcontainers), secure (AES-GCM encryption, no hardcoded secrets), and observable (structured logging, request correlation).",
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
      ],
    },
    {
      category: "Backend & Frameworks",
      color: "green",
      skills: [
        { name: "Spring Boot", proficiency: 5 },
        { name: "Spring Batch", proficiency: 5 },
        { name: "Spring Security", proficiency: 4 },
        { name: "REST APIs", proficiency: 5 },
        { name: "Microservices", proficiency: 4 },
        { name: "Maven", proficiency: 4 },
      ],
    },
    {
      category: "Database & Caching",
      color: "purple",
      skills: [
        { name: "PostgreSQL", proficiency: 5 },
        { name: "Redis", proficiency: 4 },
      ],
    },
    {
      category: "Cloud & DevOps",
      color: "blue",
      skills: [
        { name: "AWS", proficiency: 4 },
        { name: "Docker", proficiency: 4 },
        { name: "GitHub Actions", proficiency: 4 },
        { name: "CI/CD", proficiency: 4 },
        { name: "Git", proficiency: 5 },
      ],
    },
    {
      category: "Testing & Quality",
      color: "indigo",
      skills: [
        { name: "JUnit 5", proficiency: 5 },
        { name: "Mockito", proficiency: 4 },
        { name: "Testcontainers", proficiency: 4 },
      ],
    },
  ],
  projects: [
    {
      id: "tradestream-engine",
      title: "TradeStream Engine",
      description:
        "Enterprise-grade asynchronous trade file ingestion and validation platform. Processes CSV files up to 1GB with sub-second upload response, validates 21 fields per record, detects duplicates, and manages full transaction lifecycle with real-time progress tracking.",
      problem:
        "Financial institutions need to process massive trade CSV files reliably — validating every field, detecting duplicates across millions of records, handling failures gracefully, and maintaining complete audit trails — all while serving multiple users concurrently without data leakage.",
      impact:
        "Built a production-deployed system on AWS EC2 with 5 Maven modules, 9 database tables, 20+ REST endpoints, Spring Batch pipeline processing 250 records/chunk, multi-layer security (JWT + OAuth2 + TOTP 2FA + AES-256-GCM), and automated CI/CD with zero-downtime deployment.",
      tech: [
        "Java 17",
        "Spring Boot",
        "Spring Batch",
        "Spring Security",
        "PostgreSQL",
        "AWS S3",
        "AWS EC2",
        "Docker",
        "GitHub Actions",
        "JWT",
        "OAuth2",
        "TOTP 2FA",
        "AES-256-GCM",
        "MapStruct",
        "JUnit 5",
        "Testcontainers",
      ],
      image: "/images/tradestream-preview.png",
      demo: "https://d2i9y8go17l95q.cloudfront.net/",
      github: "https://github.com/bharadwajbingi",
      featured: true,
      category: "Backend / Enterprise",
    },
  ],
  experience: [
    {
      id: "mphasis-intern",
      company: "Mphasis",
      position: "Backend Engineering Intern",
      duration: "Jan 2026 – Apr 2026",
      location: "India",
      description: [
        "Contributed to the architecture and development of a multi-module Spring Boot platform that ingests financial trade CSV files up to 1GB with sub-second HTTP 202 response and processes them asynchronously via a scheduler-driven queue",
        "Engineered Spring Batch pipeline with chunk-based execution (250 records/chunk) featuring 21-field validation, in-batch duplicate detection, and bulk database deduplication for reliable high-throughput ingestion",
        "Implemented production-grade security: stateless JWT (HMAC-SHA256, 30-min expiry), Google OAuth2 auto-registration, TOTP 2FA for exports with AES-256-GCM encrypted secrets, and IP-based rate limiting (120 req/min)",
        "Designed PostgreSQL schema with 9 tables, Flyway-managed migrations, performance indexes on critical query paths, and Hibernate validate mode — eliminating schema drift risk",
        "Built async S3 export pipeline with pre-signed URL generation, job tracking, automatic cleanup of expired files, and soft-delete architecture preserving full audit trails",
        "Collaborated in Agile sprint cycles, participated in code reviews, debugging, API testing, and backend optimization activities with the team",
      ],
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Batch",
        "Spring Security",
        "PostgreSQL",
        "AWS S3",
        "AWS EC2",
        "Docker",
        "GitHub Actions",
        "JUnit 5",
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
