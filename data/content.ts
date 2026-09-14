/**
 * ==============================================================================
 * PORTFOLIO CONTENT DATA STORE - SINGLE SOURCE OF TRUTH
 * ==============================================================================
 * 
 * Instructions for Editing:
 * - This file contains ALL text, links, and content displayed on the website.
 * - Do NOT hardcode text in components — edit this data file instead.
 * - Clear inline guidelines demonstrate how to add or remove links and items.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// TYPES & INTERFACES
// ------------------------------------------------------------------------------

export interface PersonalInfo {
  name: string;
  shortName: string;
  headlineTitle: string;
  rotatingTitles: string[];
  role: string;
  pecRegistration: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  bioSummary: string;
  aboutParagraphs: string[];
  education: {
    degree: string;
    institution: string;
    period?: string;
  }[];
  statHighlights: {
    label: string;
    value: string;
    description: string;
  }[];
  avatarUrl: string;
  resumeUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: "Linkedin" | "Github" | "Instagram" | "Facebook" | "Mail" | "Phone" | "FileText";
  isPrimaryAction?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface TechCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  instructor?: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// ------------------------------------------------------------------------------
// NAVIGATION LINKS
// ------------------------------------------------------------------------------
export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

// ------------------------------------------------------------------------------
// 1. PERSONAL INFORMATION (MUHAMMAD MUBASHIR)
// ------------------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  name: "Muhammad Mubashir",
  shortName: "M. Mubashir",
  headlineTitle: "AI Engineer & PEC-Registered Software Engineer",
  rotatingTitles: [
    "AI Engineer",
    "PEC Registered Software Engineer",
    "MS AI Student",
    "RAG & LLM Specialist",
  ],
  role: "AI Engineer / Full-Stack ML Specialist",
  pecRegistration: "PEC Registered (Software Engineer)",
  email: "mmubashirmemon@gmail.com",
  phone: "+92-333-7588703",
  location: "Islamabad, Pakistan",
  availability: "Open for AI Engineering & RAG/LLM Consulting",

  bioSummary:
    "Passionate AI Engineer and PEC-registered Software Engineer specializing in Generative AI, Retrieval-Augmented Generation (RAG), and production Large Language Model (LLM) architectures. Dedicated to building scalable, high-impact intelligent systems.",

  aboutParagraphs: [
    "I am Muhammad Mubashir, an AI Engineer dedicated to advancing artificial intelligence and intelligent software systems. Currently pursuing my Master of Science in Artificial Intelligence at FAST NUCES, I hold a Bachelor of Engineering in Software Engineering from Mehran University of Engineering & Technology (MUET) and am officially licensed with the Pakistan Engineering Council (PEC).",
    "My core expertise revolves around designing robust Retrieval-Augmented Generation (RAG) pipelines, fine-tuning LLMs, computer vision, and deploying full-stack machine learning solutions into production environments. I combine rigorous software engineering practices with cutting-edge AI techniques to create scalable, high-performance systems.",
  ],

  education: [
    {
      degree: "MS in Artificial Intelligence",
      institution: "FAST NUCES (National University of Computer and Emerging Sciences)",
      period: "In Progress",
    },
    {
      degree: "BE in Software Engineering",
      institution: "MUET (Mehran University of Engineering & Technology)",
      period: "Graduated",
    },
  ],

  statHighlights: [
    {
      label: "Education",
      value: "MS AI",
      description: "FAST NUCES Islamabad",
    },
    {
      label: "Engineering",
      value: "PEC Licensed",
      description: "Software Engineer (PEC)",
    },
    {
      label: "Specialization",
      value: "RAG & LLMs",
      description: "Generative AI Systems",
    },
    {
      label: "Foundations",
      value: "BE Software",
      description: "MUET Engineering Degree",
    },
  ],

  avatarUrl: "/images/dp.jpeg",
  // TODO: Replace public/cv/Muhammad_Mubashir_CV.pdf with your actual CV PDF file
  resumeUrl: "/cv/Muhammad_Mubashir_CV.pdf",
};

// ------------------------------------------------------------------------------
// 2. SOCIAL LINKS & ACTIONS
// ------------------------------------------------------------------------------
export const socials: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/mmubashir72",
    icon: "Linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/mubashir72",
    icon: "Github",
  },
  {
    platform: "Instagram",
    // TODO: Add your real Instagram URL below when available
    url: "#",
    icon: "Instagram",
  },
  {
    platform: "Facebook",
    // TODO: Add your real Facebook URL below when available
    url: "#",
    icon: "Facebook",
  },
  {
    platform: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "Mail",
  },
  {
    platform: "Download CV",
    url: personalInfo.resumeUrl,
    icon: "FileText",
    isPrimaryAction: true,
  },
];

// ------------------------------------------------------------------------------
// 3. TECHNOLOGIES & SKILLS
// ------------------------------------------------------------------------------
export const technologies: TechCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "SQL" },
      { name: "Java" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "MongoDB" },
      { name: "FastAPI" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-Learn" },
      { name: "LangChain" },
      { name: "OpenAI API" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "Gradio" },
      { name: "Git" },
      { name: "VS Code" },
      { name: "PyCharm" },
      { name: "Visual Studio" },
      { name: "Eclipse" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving" },
      { name: "Technical Communication" },
      { name: "Analytical Thinking" },
      { name: "Team Collaboration" },
    ],
  },
];

// ------------------------------------------------------------------------------
// 4. FEATURED PROJECTS
// ------------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "youtube-rag-qa",
    title: "YouTube Video Q&A System using RAG",
    subtitle: "Retrieval-Augmented Generation & Audio Transcription",
    description:
      "Developed a conversational video intelligence system using RAG to query and extract precise answers from lengthy YouTube video transcripts.",
    bullets: [
      "Extracted video audio using OpenAI Whisper API and chunked transcripts into dense vector embeddings stored in Pinecone.",
      "Implemented a LangChain RAG pipeline for context-aware question answering with source timestamp attribution.",
      "Built an interactive web interface using Gradio for real-time transcript retrieval and QA interactions.",
    ],
    tags: ["Python", "OpenAI", "Pinecone", "Whisper", "LangChain", "Gradio"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "brain-tumor-cnn",
    title: "Brain Tumor Classification using CNN",
    subtitle: "Medical Imaging Deep Learning Pipeline",
    description:
      "Architected and trained a Convolutional Neural Network (CNN) for multi-class brain tumor detection and classification from MRI medical scans.",
    bullets: [
      "Trained custom CNN models in TensorFlow/Keras on a dataset of 19,000+ brain MRI images, achieving 95% classification accuracy.",
      "Applied data augmentation, batch normalization, and dropout techniques to prevent overfitting across diverse patient scans.",
      "Evaluated model diagnostic metrics using confusion matrices, precision-recall curves, and ROC-AUC scores.",
    ],
    tags: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "Medical AI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "chest-xray-analysis-agent",
    title: "Medical Chest X-ray Analysis Agent",
    subtitle: "Explainable AI & Diagnostic Vision Agent",
    description:
      "Built a multimodal AI diagnostic assistant integrating deep vision models with LLM reasoning for automated chest radiography interpretation.",
    bullets: [
      "Integrated PyTorch vision backbones with LLM reasoning agents for pathology analysis and diagnostic reporting.",
      "Applied Grad-CAM (Gradient-weighted Class Activation Mapping) explainability techniques to generate visual pathology heatmaps.",
      "Generated automated clinical report summaries highlighting abnormal anatomical regions for radiologist reference.",
    ],
    tags: ["Python", "PyTorch", "LLMs", "Computer Vision", "Grad-CAM", "Healthcare AI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
];

// ------------------------------------------------------------------------------
// 5. WORK EXPERIENCE
// ------------------------------------------------------------------------------
export const experience: ExperienceItem[] = [
  {
    id: "exp-flyrank-ai",
    company: "FlyRank.AI",
    role: "Backend AI Engineering Intern",
    location: "Remote",
    period: "Aug 2026 – Present",
    description: [
      "Developed backend APIs and asynchronous microservices using Python and FastAPI.",
      "Engineered clean architecture using the repository pattern to decouple data access layers from core business logic and API routes.",
      "Currently configuring multi-container environments using Docker and Docker Compose to integrate persistent PostgreSQL databases with volume management.",
    ],
    technologies: ["Python", "FastAPI", "Docker", "Docker Compose", "PostgreSQL", "Clean Architecture"],
  },
  {
    id: "exp-brinicle-ai",
    company: "Brinicle AI",
    role: "AI Engineering Intern",
    location: "Remote",
    period: "July 2026",
    description: [
      "Worked on AI engineering tasks involving LLMs, generative AI, and practical AI application development.",
      "Conducted technical experiments, documented findings, and strengthened practical AI/ML development skills.",
    ],
    technologies: ["LLMs", "Generative AI", "AI/ML"],
  },
  {
    id: "exp-kgt-global",
    company: "KGT Global",
    role: "WordPress Developer Intern",
    location: "Karachi, PK",
    period: "July 2025 – Aug 2025",
    description: [
      "Customised WordPress themes and plugins to enhance user experience and website functionality.",
      "Resolved front-end bugs, optimized website loading speeds, and ensured mobile responsiveness across devices.",
      "Collaborated with senior developers and client teams to implement UI/UX best practices and SEO structure.",
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

// ------------------------------------------------------------------------------
// 6. CERTIFICATIONS & CREDENTIALS
// ------------------------------------------------------------------------------
// ==============================================================================
// ADDING A NEW CERTIFICATION INSTRUCTION:
// Copy this object shape and add it to the `certifications` array below:
// {
//   id: "unique-cert-id",
//   title: "Certification Title",
//   issuer: "Issuing Organization",
//   platform: "Coursera / Udemy / EdX",
//   instructor: "Instructor Name(s)",
//   issueDate: "Year / Date",
//   credentialUrl: "#" // Optional link to certificate
// }
// ==============================================================================
export const certifications: Certification[] = [
  {
    id: "supervised-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    instructor: "Andrew Ng",
    issueDate: "Completed",
  },
  {
    id: "advanced-learning-algos",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    instructor: "Andrew Ng",
    issueDate: "Completed",
  },
  {
    id: "pytorch-fundamentals",
    title: "PyTorch: Fundamentals",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    instructor: "Laurence Moroney",
    issueDate: "Completed",
  },
  {
    id: "intro-web-dev",
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM",
    platform: "Coursera",
    instructor: "Upkar Lidder, Rav Ahuja, Michelle Saltoun",
    issueDate: "Completed",
  },
  {
    id: "pec-license",
    title: "Registered Software Engineer",
    issuer: "Pakistan Engineering Council (PEC)",
    platform: "Official License",
    instructor: "PEC Registration Board",
    issueDate: "Licensed",
  },
];
