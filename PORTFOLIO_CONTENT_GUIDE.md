# Portfolio Content Customization Guide

This guide explains how to customize and update all content in your personal developer portfolio.

All personal information, project details, skills, social links, and resume links are centralized in a single, clean TypeScript data file:

```
data/portfolio.ts
```

---

## 1. Updating Personal Information & Social Links

Open `data/portfolio.ts` and modify the `personal` object:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "John Doe",                              // Your full name
    title: "AI & Full-Stack Developer",            // Primary professional title
    subtitle: "Building intelligent applications...", // High-impact subtitle
    bio: "Passionate software engineer...",         // Short 2-line intro
    longBio: [                                     // Detailed paragraphs for About section
      "Paragraph 1 about your background...",
      "Paragraph 2 about your engineering focus...",
      "Paragraph 3 about your career direction..."
    ],
    email: "john.doe@example.com",                  // Contact email
    github: "https://github.com/johndoe",          // GitHub profile URL
    linkedin: "https://linkedin.com/in/johndoe",    // LinkedIn profile URL
    location: "San Francisco, CA",                 // Location (or Remote)
    status: "Available for Software Engineering roles", // Live status pill badge
    resumeUrl: "/resume.pdf",                       // Path to resume PDF in public/
  },
  // ...
```

---

## 2. Adding / Updating Projects

Projects are rendered dynamically from the `projects` array in `data/portfolio.ts`:

```typescript
projects: [
  {
    id: "project-1",
    title: "AI Recommendation Engine",
    shortDescription: "An intelligent platform for real-time recommendation systems.",
    problem: "Manual data processing caused slow response times.",
    solution: "Engineered a Next.js frontend with Python RAG backend.",
    keyFeatures: [
      "Real-time analytics dashboard",
      "Vector search integration",
      "Sub-100ms API query latency"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/yourname/project-repo",
    liveUrl: "https://your-demo-url.vercel.app",
    imageUrl: "/projects/project1.png", // Path to image in public/projects/
    featured: true,                      // Set to true for large spotlight layout
    category: "Full-Stack & AI"
  }
]
```

### Adding Project Screenshots:
1. Save your project screenshot image inside:
   ```
   public/projects/project1.png
   ```
2. Update `imageUrl` in `data/portfolio.ts` to match: `"/projects/project1.png"`.
3. If an image is not added yet, the portfolio automatically displays a stylish tech visual card fallback.

---

## 3. Updating Work Experience & Internships

Add or edit entries in the `experience` array:

```typescript
experience: [
  {
    id: "exp-1",
    company: "Acme Tech Solutions",
    role: "Software Engineering Intern",
    location: "Remote",
    period: "Summer 2024",
    type: "Internship", // Internship, Full-time, Contract, etc.
    description: "Built scalable web features...",
    responsibilities: [
      "Developed full-stack features using React and REST APIs.",
      "Optimized SQL queries for 30% faster response times."
    ],
    technologies: ["React", "Python", "MySQL", "Git"],
    achievements: [
      "Delivered production features with zero high-priority bugs."
    ]
  }
]
```

---

## 4. Updating Skills & Specializations

Skills are organized by category in `data/portfolio.ts`:

```typescript
skills: [
  {
    title: "Programming Languages",
    description: "Core languages for application development",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "TypeScript", highlight: true }
    ]
  }
]
```
- Set `highlight: true` to display an emerald check badge for your top skills.

---

## 5. Adding Your Resume PDF

1. Place your resume PDF in the `public/` directory:
   ```
   public/resume.pdf
   ```
2. The portfolio's **Download Resume** buttons in the Hero, Navbar, and Resume section will automatically download this file.

---

## 6. Updating Education & Certifications

Modify `education`, `certifications`, or `achievements` arrays in `data/portfolio.ts`:

```typescript
education: [
  {
    id: "edu-1",
    degree: "Bachelor of Technology",
    institution: "State University",
    branch: "Computer Science & Engineering",
    period: "2021 - 2025",
    cgpa: "3.9 / 4.0",
    highlights: ["Relevant Coursework: Data Structures, Algorithms, Web Engineering"]
  }
]
```

---

## 7. Re-deploying Your Portfolio

Once you have updated your information:
```bash
npm run build
```
Push your changes to your Git repository (e.g. GitHub linked to Vercel/Netlify), and your deployed website will update automatically!
