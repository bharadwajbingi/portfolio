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
      proficiency: number; // 1-5
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
    title: "Aspiring Software Engineer | Full-Stack Developer",
    tagline: "Building scalable, user-first web apps — MERN & modern frontend",
    location: "India",
    email: "bharadwaj.bingi@example.com",
    phone: "+91-9876543210",
    availability: "Open to Internship (Summer 2026)",
    bio: [
      "Passionate full-stack developer with strong foundations in Data Structures & Algorithms and modern web technologies.",
      "Experienced in the MERN stack with hands-on project experience building scalable applications.",
      "Interested in system design and creating efficient, user-centric solutions.",
      "Currently seeking Summer 2026 internship opportunities to contribute to innovative tech teams.",
    ],
    quickFacts: {
      education: "Bachelor of Technology in Computer Science",
      degree: "B.Tech CSE",
      gradDate: "May 2026",
      gpa: "8.5/10",
    },
  },
  skills: [
    {
      category: "Frontend",
      color: "blue",
      skills: [
        { name: "React", proficiency: 4 },
        { name: "Next.js", proficiency: 4 },
        { name: "TypeScript", proficiency: 4 },
        { name: "Tailwind CSS", proficiency: 5 },
        { name: "HTML5", proficiency: 5 },
        { name: "CSS3", proficiency: 4 },
      ],
    },
    {
      category: "Backend",
      color: "green",
      skills: [
        { name: "Node.js", proficiency: 4 },
        { name: "Express.js", proficiency: 4 },
        { name: "REST APIs", proficiency: 4 },
        { name: "JWT", proficiency: 3 },
      ],
    },
    {
      category: "Database",
      color: "purple",
      skills: [
        { name: "MongoDB", proficiency: 4 },
        { name: "MySQL", proficiency: 3 },
        { name: "Mongoose", proficiency: 4 },
      ],
    },
    {
      category: "Languages",
      color: "orange",
      skills: [
        { name: "JavaScript", proficiency: 4 },
        { name: "Python", proficiency: 3 },
        { name: "Java", proficiency: 3 },
        { name: "C++", proficiency: 4 },
      ],
    },
    {
      category: "Tools & DevOps",
      color: "red",
      skills: [
        { name: "Git", proficiency: 4 },
        { name: "GitHub", proficiency: 4 },
        { name: "VS Code", proficiency: 5 },
        { name: "Postman", proficiency: 4 },
        { name: "Vercel", proficiency: 3 },
      ],
    },
    {
      category: "DSA & Concepts",
      color: "indigo",
      skills: [
        { name: "Data Structures", proficiency: 4 },
        { name: "Algorithms", proficiency: 4 },
        { name: "Problem Solving", proficiency: 4 },
        { name: "System Design", proficiency: 3 },
      ],
    },
  ],
  projects: [
    {
      id: "boilergen",
      title: "Boilergen - Boilerplate Code Generator",
      description:
        "A SaaS platform that lets developers instantly generate production-ready project codebases. Users can pick their preferred tech stack (React, Node.js, Express, MySQL, etc.) and select modular features like authentication, payments, dashboards, and notifications. The platform then delivers a clean, ready-to-use starter project with mini documentation.",
      problem:
        "Developers waste days or weeks setting up repetitive boilerplate (login, billing, API structure, database, dashboards) before working on their actual idea. Every new project starts with rebuilding the same foundations from scratch.",
      impact:
        "Boilergen saves developers time and cost by automating the setup process. Instead of spending weeks on configuration, they can start coding their unique product features within minutes. This improves productivity, reduces errors, and makes projects modular and scalable from the start.",
      tech: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Clerk/Auth.js",
        "Recharts",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "Redis",
        "BullMQ",
        "S3/MinIO",
        "Stripe",
        "Docker",
        "GitHub Actions",
        "Vercel",
        "Render",
      ],
      image: "/images/boilergen.png",
      demo: "https://boilergen.vercel.app",
      github: "https://github.com/bharadwajbingi/boilergen-frontend",
      featured: true,
      category: "Full-Stack",
    },
    {
      id: "writebase",
      title: "Writebase",
      description:
        "A comprehensive blogging platform with rich text editing and content management",
      problem:
        "Content creators needed a modern, feature-rich platform for publishing and managing articles with advanced editing capabilities.",
      impact:
        "Built scalable blogging platform with JWT authentication, file uploads, and AI integration serving multiple content creators.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "ImageKit",
        "Google Gemini",
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
      id: "lazyvastra-founder",
      company: "LazyVastra",
      position: "Founder & Lead Developer",
      duration: "Jan 2024 - Present",
      location: "Remote, India",
      description: [
        "Founded and developed custom e-commerce solutions, designing responsive Shopify themes that increased client conversion rates by 25%",
        "Integrated secure payment gateways including Stripe and PayPal, processing over ₹2L in transactions",
        "Led a 3-person development team to successfully launch MVP within 3 months, managing project timelines and deliverables",
        "Implemented inventory management systems and optimized site performance, reducing load times by 40%",
        "Collaborated directly with 15+ clients to gather requirements and deliver tailored e-commerce solutions",
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Razorpay API"],
    },
    {
      id: "freelance-developer",
      company: "Freelance",
      position: "Full-Stack Developer",
      duration: "Aug 2023 - Dec 2023",
      location: "Remote, India",
      description: [
        "Developed and deployed 5+ full-stack web applications using MERN stack for various clients",
        "Created responsive, mobile-first designs that improved user engagement by 30%",
        "Implemented RESTful APIs and database optimization techniques, reducing query response time by 50%",
        "Managed client relationships and project deliverables, maintaining 100% client satisfaction rate",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Git",
      ],
    },
  ],
  certifications: [
    {
      name: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      url: "https://www.freecodecamp.org/certification/bharadwajbingi/full-stack",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      url: "https://www.freecodecamp.org/certification/bharadwajbingi/javascript-algorithms-and-data-structures",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      url: "https://www.freecodecamp.org/certification/bharadwajbingi/responsive-web-design",
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
    {
      platform: "InterviewBit",
      username: "bharadwajbingi",
      url: "https://www.interviewbit.com/profile/bharadwajbingi",
      icon: "briefcase",
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
    {
      platform: "Twitter",
      url: "https://twitter.com/bharadwajbingi",
      icon: "twitter",
    },
  ],
};
