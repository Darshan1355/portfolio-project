export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  longBio: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  status: string;
  resumeUrl: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: string; // Internship, Full-time, Contract, etc.
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  featured: boolean;
  category: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  branch: string;
  period: string;
  cgpa?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  badge?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  aboutHighlights: {
    title: string;
    description: string;
    iconName: string;
  }[];
  services: ServiceItem[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Darshan Amane",
    title: "AI & Full-Stack Developer",
    subtitle: "Building intelligent applications, scalable web platforms, and data-driven systems.",
    bio: "Passionate software engineer specializing in modern web technologies, machine learning workflows, and cloud-ready backend architectures.",
    longBio: [
      "I am a software developer with a strong foundation in computer science, full-stack web engineering, and AI/Data Science applications.",
      "My work focuses on architecting intuitive frontend experiences, designing robust API interfaces, and training/deploying practical machine learning models.",
      "Driven by performance, clean code architecture, and modern UX standards, I strive to solve complex real-world problems with simple, scalable technology."
    ],
    email: "darshanamane083@gmail.com",
    github: "https://github.com/Darshan1355",
    linkedin: "https://www.linkedin.com/in/darshan-amane-4722512ba?utm_source=share_v",
    location: "Ichalkaranji, Maharashtra, India",
    status: "Available for Software Engineering & AI roles",
    resumeUrl: "/darshan_resume_2026%20(2).pdf",
  },

  aboutHighlights: [
    {
      title: "Core Specialization",
      description: "Combining modern Next.js/React architectures with intelligent machine learning pipelines.",
      iconName: "Cpu"
    },
    {
      title: "Academic Background",
      description: "Pursuing rigorous computer science fundamentals, data structures, algorithms, and system design.",
      iconName: "GraduationCap"
    },
    {
      title: "Engineering Mindset",
      description: "Focused on clean code, automated testing, responsive design, and optimal performance.",
      iconName: "Code2"
    }
  ],

  services: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Building predictive models, NLP text pipelines, and RAG-driven generative AI applications.",
      iconName: "Brain",
      tags: ["Python", "Generative AI", "LangChain", "RAG", "Machine Learning"]
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      description: "Crafting end-to-end responsive web applications using modern React, Next.js, and TypeScript.",
      iconName: "Layout",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"]
    },
    {
      id: "backend-api",
      title: "Backend & API Engineering",
      description: "Designing fast, secure microservices, database schemas, and robust API endpoints.",
      iconName: "Server",
      tags: ["Python / Flask", "Java / Spring Boot", "MySQL", "REST APIs", "Postman"]
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      description: "Extracting actionable insights through exploratory data analysis, data cleaning, and visualization.",
      iconName: "BarChart3",
      tags: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis"]
    }
  ],

  skills: [
    {
      title: "Programming Languages",
      description: "Core languages for systems, scripting, and application development",
      skills: [
        { name: "Python", highlight: true },
        { name: "Java", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "C", highlight: true }
      ]
    },
    {
      title: "Frontend Engineering",
      description: "Modern frameworks and UI styling systems for web clients",
      skills: [
        { name: "React", highlight: true },
        { name: "Next.js 15", highlight: true },
        { name: "Tailwind CSS v4", highlight: true },
        { name: "HTML5 / CSS3", highlight: true }
      ]
    },
    {
      title: "Backend & Databases",
      description: "Server-side web frameworks, database engines, and cloud storage",
      skills: [
        { name: "Flask", highlight: true },
        { name: "Spring Boot", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "MySQL", highlight: true },
        { name: "Supabase", highlight: true }
      ]
    },
    {
      title: "AI, Data & ML",
      description: "Tools for data science, artificial intelligence, and intelligent automation",
      skills: [
        { name: "Machine Learning", highlight: true },
        { name: "Generative AI", highlight: true },
        { name: "LangChain", highlight: true },
        { name: "RAG Architecture", highlight: true },
        { name: "Pandas & NumPy", highlight: true }
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Version control, API testing tools, and development workflows",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "VS Code", highlight: true },
        { name: "Postman", highlight: true }
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      company: "Sunbeam Infotech",
      role: "Gen AI Intern",
      location: "Pune, Maharashtra, India",
      period: "winter 2025-26",
      type: "Internship",
      description: "Helped develop and deploy generative AI solutions for enterprise applications, focusing on NLP and RAG-based systems.",
      responsibilities: [
        "Developed and fine-tuned NLP models for document summarization and question-answering tasks.",
        "Implemented RAG pipelines for efficient retrieval and generation of context-aware responses.",
        "Collaborated with cross-functional teams to integrate AI features into existing web applications."
      ],
      technologies: ["Python", "LangChain", "Streamlit", "OpenAI API", "REST APIs", "Selenium"],
      achievements: [
        "Successfully deployed a document analysis tool that reduced manual processing time by 40%.",
        "Received recognition from the team for innovative AI solutions and contributions to project success."
      ]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Library Management System ",
      shortDescription: "Library Management System using Spring boot and real-time analytics for efficient resource management.",
      problem: "The existing library management processes were inefficient, leading to delays in book tracking and user management.",
      solution: "Developed a full-stack library management system with Spring Boot backend, React frontend, and real-time analytics for efficient resource tracking.",
      keyFeatures: [
        "User-friendly interface for book cataloging and user management.",
        "Real-time analytics dashboard for tracking book availability and user activity.",
        "Secure authentication and role-based access control for library staff and users."
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/[YOUR_USERNAME]/[PROJECT_REPO]",
      liveUrl: "https://[YOUR_DEMO_URL].vercel.app",
      imageUrl: "/projects/project1.png",
      featured: true,
      category: "Full-Stack Development"
    },
    {
      id: "project-2",
      title: "AI Based Data Analyzer",
      shortDescription: "An AI-powered search engine for efficient document analysis and retrieval.",
      problem: "Users struggled to search through lengthy technical documentation quickly.",
      solution: "Engineered a vector-search application with LangChain and Python backend.",
      keyFeatures: [
        "Context-aware document query processing.",
        "Semantic similarity search and response generation.",
        "Minimalist fast-loading search interface."
      ],
      technologies: ["Python", "LangChain", "Groq API", "Streamlit", "Vector Databases"],
      githubUrl: "https://github.com/Darshan1355/AI-Based-Data-Analyzer",
      liveUrl: "https://[YOUR_DEMO_URL].vercel.app",
      imageUrl: "/projects/project2.png",
      featured: true,
      category: "AI & NLP"
    },
    {
      id: "project-3",
      title: "Trusttrip-Smart Tourist Safety Monitoring System(Mobile App)",
      shortDescription: "A smart safety monitoring system for tourists using IoT and real-time data analytics.",
      problem: "Tourists often face safety challenges in unfamiliar locations, and there was a need for a proactive monitoring system.",
      solution: "Developed a mobile application that integrates Safety features and real-time analytics to monitor tourist safety and provide alerts.",
      keyFeatures: [
        "Real-time location tracking and safety alerts for tourists.",
        "Integration with local authorities for emergency response.",
        "User-friendly interface for reporting incidents and receiving safety tips."
      ],
      technologies: ["React Native", "Python", "Flask", "MySQL", "Google Translate API"],
      githubUrl: "https://github.com/Darshan1355/TrustTrip",
      liveUrl: "[ADD LIVE DEMO URL]",
      imageUrl: "/projects/project3.png",
      featured: false,
      category: "Mobile App"
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: " Bachelor of Technology ",
      institution: "Dattajirao Kadam College of Engineering, Ichalkaranji",
      branch: "AI & Data Science",
      period: "2023 - 2027",
      cgpa: "8.09/10",
      highlights: [
        "Pursuing a rigorous curriculum in AI, Data Science, and Software Engineering.",
        "Engaged in hands-on projects involving machine learning, web development, and data analytics.",
        
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Deep Learning for Beginners",
      issuer: "SimpleLearn Skillup",
      issueDate: "4 sep 2026",
      credentialId: "10689089",
      credentialUrl: "https://lms.simplilearn.com/courses/4210/Deep%20Learning%20for%20Beginners/certificate/download-skillup"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "[ADD HACKATHON / AWARD TITLE]",
      event: "[ADD EVENT / ORGANIZER]",
      date: "[ADD DATE]",
      description: "[ADD BRIEF DESCRIPTION OF THE ACHIEVEMENT OR AWARD]",
      badge: "Winner / Top Finalist"
    }
  ]
};
