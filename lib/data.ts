export const portfolio = {
  name: "Solomon Waja",
  title: "Full-Stack Developer",
  tagline: "Building beautiful, scalable web experiences",
  email: "nfjunia@gmail.com",
  phone: "0531942973",
  location: "Remote / Worldwide",
  bio: "I&apos;m a full-stack developer passionate about creating elegant solutions to complex problems. With 5+ years of experience, I specialize in React, Next.js, and Node.js.",

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "AI Content Generator",
      description:
        "A powerful AI-powered content generation platform that helps creators produce high-quality content in minutes.",
      image:
        "https://images.unsplash.com/photo-1676573267769-f6b1e0b7e7a0?w=500&h=300&fit=crop",
      tags: ["Next.js", "OpenAI", "Stripe", "TypeScript"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management Suite",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and advanced analytics.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "WebSocket", "MongoDB"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1bf4de8?w=500&h=300&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Analytics Dashboard",
      description:
        "Real-time analytics dashboard for monitoring social media performance across multiple platforms.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: false,
    },
  ],

  experience: [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Full-Stack Developer",
      period: "2022 - Present",
      description:
        "Leading development of multiple high-traffic applications, mentoring junior developers, and architecting scalable solutions.",
      highlights: [
        "Increased application performance by 45% through optimization",
        "Led migration of legacy codebase to Next.js",
        "Mentored 3 junior developers",
      ],
    },
    {
      id: 2,
      company: "Digital Solutions LLC",
      position: "Full-Stack Developer",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications using React and Node.js.",
      highlights: [
        "Built 5+ production-ready applications",
        "Implemented automated testing pipeline (90% coverage)",
        "Reduced API response time by 60%",
      ],
    },
    {
      id: 3,
      company: "StartupX",
      position: "Junior Developer",
      period: "2019 - 2020",
      description:
        "Started career building web applications and learning full-stack development in a fast-paced startup environment.",
      highlights: [
        "Built initial MVP with React and Firebase",
        "Implemented user authentication system",
        "Deployed applications to production",
      ],
    },
  ],

  social: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mailto:nfjunia@gmail.com",
  },
};
