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
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
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
    id: "resumelens-ai",
    title: "ResumeLens",
    subtitle: "AI Resume Review & ATS Readiness Analysis",
    description:
      "A Streamlit application that reviews resumes with Google Gemini and turns the analysis into clear, prioritized guidance for job seekers.",
    bullets: [
      "Scores content, impact, keywords, and formatting while comparing a resume with an optional target job description.",
      "Surfaces matched and missing keywords, section-level feedback, and stronger rewrites for existing resume bullets.",
      "Supports PDF, DOCX, and TXT uploads and produces a downloadable JSON analysis report.",
    ],
    tags: ["Python", "Streamlit", "Google Gemini", "pypdf", "python-docx", "ATS"],
    githubUrl: "https://github.com/mubashir72/resumelens-ai",
    liveUrl: "https://resumelens--ai.streamlit.app/",
    featured: true,
    gallery: [
      {
        src: "/images/projects/resumelens-ats.png",
        alt: "ResumeLens ATS score and overall assessment screen",
        caption: "ATS score, overall assessment, and category-level breakdown",
      },
      {
        src: "/images/projects/resumelens-recommendations.png",
        alt: "ResumeLens strengths and recommended improvements screen",
        caption: "Resume strengths and a prioritized improvement plan",
      },
    ],
  },
  {
    id: "khatgroq-ai",
    title: "KhatGroq AI",
    subtitle: "Groq-Powered Professional Email Generator",
    description:
      "A polished AI email generator that transforms a short brief into a professional, editable message in seconds.",
    bullets: [
      "Generates a subject, greeting, body, and sign-off based on purpose, tone, length, language, and creativity controls.",
      "Lets users refine the generated draft in place, copy a ready-to-send version, or download it as a text file.",
      "Keeps Groq credentials server-side and provides clear handling for configuration, authentication, and rate-limit errors.",
    ],
    tags: ["Python", "Streamlit", "Groq", "LLMs", "Prompt Engineering", "UI/UX"],
    githubUrl: "https://github.com/mubashir72/KhatGroq-AI",
    liveUrl: "https://khatgroq.streamlit.app/",
    featured: true,
    gallery: [
      {
        src: "/images/projects/khatgroq-landing.png",
        alt: "KhatGroq AI landing page",
        caption: "Responsive landing page and email brief interface",
      },
      {
        src: "/images/projects/khatgroq-generator.png",
        alt: "KhatGroq AI professional outreach email generator",
        caption: "Editable, business-ready email generated from a focused brief",
      },
    ],
  },
  {
    id: "ai-content-assistant",
    title: "Bluebird AI Content Assistant",
    subtitle: "Platform-Aware Social Content Generation",
    description:
      "A responsive Streamlit app that turns a concise content brief into a polished, platform-aware post with a caption and relevant hashtags.",
    bullets: [
      "Tailors content by format, publishing platform, target audience, tone, length, call to action, and supporting context.",
      "Generates a ready-to-publish post, caption, and hashtag set that users can preview, copy, or download as a text file.",
      "Uses fast Groq inference with server-side credentials and clear handling for configuration, connection, and rate-limit errors.",
    ],
    tags: ["Python", "Streamlit", "Groq", "LLMs", "Content Generation", "Prompt Engineering"],
    githubUrl: "https://github.com/mubashir72/AI-content-assistant",
    liveUrl: "https://ai-content-assistant-m72.streamlit.app/",
    featured: true,
    gallery: [
      {
        src: "/images/projects/ai-content-assistant-homepage.png",
        alt: "Bluebird AI Content Assistant homepage",
        caption: "Blue frosted-glass workspace for creating platform-aware content",
      },
    ],
  },
  {
    id: "hr-policy-assistant",
    title: "HR Policy Assistant",
    subtitle: "Evidence-Grounded Policy Q&A with RAG",
    description:
      "A document question-answering app that searches an uploaded HR policy PDF and returns grounded answers with page-level evidence.",
    bullets: [
      "Extracts and chunks page-aware PDF text, then performs local semantic retrieval with Sentence Transformers and FAISS.",
      "Uses Groq to answer only from retrieved policy passages and displays page citations with expandable source excerpts.",
      "Supports replaceable documents, session-scoped chat history, and focused unit tests for the retrieval pipeline.",
    ],
    tags: ["Python", "Streamlit", "RAG", "Groq", "FAISS", "Sentence Transformers"],
    githubUrl: "https://github.com/mubashir72/HR-policy-handbook",
    liveUrl: "https://sthmjflgjphrqjlvp3hff5.streamlit.app/",
    featured: true,
  },
  {
    id: "papersensei",
    title: "PaperSensei",
    subtitle: "Adaptive AI Study & Exam Preparation Assistant",
    description:
      "An AI learning workspace that turns a student's own notes and textbooks into conceptual practice, explanations, and guided tutoring.",
    bullets: [
      "Generates source-based quizzes and adapts topic difficulty from answer streaks, with simpler follow-ups after mistakes.",
      "Combines PDF study material, an AI tutor, past-paper topic insights, progress reports, and downloadable session summaries.",
      "Adds verified Firebase accounts and Firestore-backed sessions while retaining a guest mode for local practice.",
    ],
    tags: ["Python", "Streamlit", "Groq", "Firebase", "Firestore", "pdfplumber"],
    githubUrl: "https://github.com/mubashir72/PaperSensei",
    liveUrl: "https://papersensei.streamlit.app/",
    featured: true,
    gallery: [
      {
        src: "/images/projects/papersensei-workspace.png",
        alt: "PaperSensei study workspace",
        caption: "Study workspace for adding material and starting practice",
      },
      {
        src: "/images/projects/papersensei-tutor.png",
        alt: "PaperSensei AI tutor chat",
        caption: "AI tutor conversations grounded in the current study material",
      },
      {
        src: "/images/projects/papersensei-progress.png",
        alt: "PaperSensei learning progress dashboard",
        caption: "Quiz results, topic performance, and adaptive difficulty progress",
      },
    ],
  },
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
