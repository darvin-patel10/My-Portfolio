const projects = [
  {
    title: "NodeTrep – Strategic Board Game",
    description:
      "A two-player strategic board game with turn-based logic, timers, faults, and win conditions.",
    tech: ["React", "JavaScript", "SVG", "CSS"],
    live: "https://nodetrep.netlify.app/",
    github: "https://github.com/darvin-patel10/NodeTrap.git",
  },
  {
    title: "GlobeTrekkers",
    description:
      "Developed a travel details management platform using the MERN stack with CRUD functionalities.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    live: "https://globetrekker-1.onrender.com/",
    github: "https://github.com/darvin-patel10/GlobeTrekker.git",
  },
  {
    title: "HardHub – Hardware E-Commerce Platform",
    description:
      "Built a full-stack web application that connects hardware product buyers and sellers through dedicated interfaces. Implemented key features like user authentication, form validation, and RESTful APIs. Currently working on this project.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "JWT", "MongoDB"],
    live: "https://hardhub.onrender.com/",
    github: "https://github.com/darvin-patel10/HardHub.git",
  },
  {
    title: "Full-Stack Clinic Management System",
    description:
      "Architected a responsive full-stack healthcare management web application using React, Node.js, and Express with Vite and Tailwind CSS, streamlining patient registration, medicine inventory tracking, and operational dashboard analytics. Engineered role-based access control with JWT authentication and Nodemailer OTP verification, while leveraging node-cron to automate background log cleanup and session management tasks.",
    tech: ["React", "Node.js", "Express", "Vite", "Tailwind CSS", "JavaScript", "JWT", "MongoDB", "Nodemailer", "node-cron"],
    live: "https://clinic-management-system-djsx.vercel.app/",
    github: "https://github.com/darvin-patel10/Clinic-Management-System.git",
  },
  {
    title: "Pantry Pulse - Personal Inventory & Pantry Manager",
    description:
      "Built a full-stack pantry inventory management app using React, TypeScript, and Tailwind CSS with a Supabase (PostgreSQL) backend, featuring a dual-mode architecture that falls back to localStorage when Supabase isn't configured, enabling zero-backend demo deployments. Designed the PostgreSQL schema and Row Level Security (RLS) policies for per-user data isolation, implemented type-safe form validation with React Hook Form and Zod, and built custom hooks for real-time stock value aggregation, debounced search, and expiration status tracking.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "React Hook Form", "Zod", "React Router"],
    live: "https://pantry-inventory-application.vercel.app/",
    github: "https://github.com/darvin-patel10/Pantry-Inventory-Application.git",
  }
];

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "Under Mentorship",
    type: "Freelance",
    duration: "September 2025 – December 2025",
    location: "Remote",
    description:
      "Collaborated on web development projects under mentor, applying MERN-Stack development concepts and contributing to real-world application development for practical learning.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    role: "ReactJS Developer Intern",
    company: "Nirami Solutions",
    type: "Internship",
    duration: "January 2026 – June 2026",
    location: "WFO",
    description:
      "In this internship working on real-world projects such as AthleteBnB and GNGC4Golf using ReactJS. Gained hands-on experience in frontend development and basic knowledge of Nextjs while collaborating on feature development and application enhancements.",
    tech: ["React", "Tailwind CSS", "REST API", "Git", "Basic Nextjs"],
  }
];

export { projects, experiences };