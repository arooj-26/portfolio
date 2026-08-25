import {
  Brain,
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";

export const personalInfo = {
  name: "Arooj Sehar",
  title: "Aspiring AI Engineer",
  bio: "Passionate about building intelligent systems with modern AI frameworks. I specialize in agentic AI, retrieval-augmented generation, and full-stack development with a focus on Python and cloud-native technologies.",
  email: "sehararooj126@gmail.com",
  location: "Karachi, Pakistan",
  resumeUrl: "/Arooj_resume.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/arooj-26",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arooj-sehar-662396306/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:sehararooj126@gmail.com",
    icon: "mail",
  },
];

export interface Skill {
  category: string;
  icon: typeof Brain;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Agentic AI",
    icon: Brain,
    items: [
      "OpenAI Agent SDK",
      "LangGraph",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Claude Code",
    ],
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Web Development",
    icon: Globe,
    items: [
      "Next.js",
      "React",
      "FastAPI",
      "Streamlit",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Server,
    items: ["Docker", "Kubernetes", "GitHub Actions", "Vercel"],
  },
  {
    category: "Data & Databases",
    icon: Database,
    items: ["PostgreSQL", "Neon", "Apache Kafka", "Pandas"],
  },
  {
    category: "Tools & Protocols",
    icon: Wrench,
    items: ["MCP", "Git", "VS Code", "Jupyter", "Linux"],
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [

  {
    title: "TODO App",
    description:
      "A full-stack task management application with user authentication, CRUD operations, and a clean responsive UI built with modern web technologies.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Kubernetes", "Kafka", "better auth"],
    githubUrl: "https://github.com/arooj-26/todo-hackathon",
  },
  {
    title: "Python Learning Platform",
    description:
      "An interactive educational platform designed to help beginners learn Python through structured lessons, quizzes, and hands-on coding exercises.",
    techStack: ["Python", "pyodide","docosaurus", "OpenAI", "Markdown", "better auth", "google authentication", "chatbot"],
    githubUrl: "https://github.com/arooj-26/learn-flow-app",
  },
  {
    title: "Interactive Python Book",
    description:
      "A digital interactive book for Python programming with embedded code editors, live execution, and progressive learning paths from basics to advanced topics.",
    techStack: ["Python", "Jupyter", "FastAPI", "React", "docosaurus", "qdrant vector database", "neon database"],
    githubUrl: "https://github.com/arooj-26/python-book",
  },
];

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "learning" | "work";
}

export const experience: Experience[] = [
  {
    title: "Master's in Information Management & Library Science",
    organization: "University of Punjab",
    period: "Completed",
    description:
      "Gained strong foundations in information systems, data management, and research methodologies.",
    type: "education",
  },
  {
    title: "Agentic AI & Cloud Native Development",
    organization: "PIAIC / Governor Initiative",
    period: "Ongoing",
    description:
      "Intensive program covering Agentic AI, OpenAI Agent SDK, LangGraph, Docker, Kubernetes, and cloud-native application development.",
    type: "learning",
  },
  {
    title: "Self-Directed AI Learning",
    organization: "Self-Paced",
    period: "Ongoing",
    description:
      "Building projects with RAG pipelines, multi-agent systems, and full-stack AI applications. Active contributor on GitHub.",
    type: "learning",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
