# Muhammad Mubashir - AI Engineer Portfolio

A modern, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for **Muhammad Mubashir** (AI Engineer & PEC-Registered Software Engineer).

---

## 🚀 Quick Start & Development

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Start the local Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to preview the site.

### 3. Production Build
Verify type safety and compile optimized static pages:
```bash
npm run build
```

---

## 🛠️ How to Customize & Edit Content

All content across the portfolio is controlled by a **SINGLE SOURCE OF TRUTH** data store located at:
📁 **`data/content.ts`**

You do **NOT** need to edit JSX component files to update your text, bio, or links.

### 1. Update Personal Info & Social Links
Open `data/content.ts` and modify the `personalInfo` and `socials` objects:
- **Email, Phone & Location**: Edit `email`, `phone`, and `location`.
- **Bio & Summary**: Update `bioSummary` and `aboutParagraphs`.
- **Social URLs**: Update your LinkedIn (`url`), GitHub (`url`), Instagram, and Facebook profiles in the `socials` array.

---

### 2. How to Swap the Profile Photo
1. Prepare your photo in JPG or PNG format.
2. Place your photo file in the **`public/images/`** directory.
3. Rename your photo to `profile-placeholder.jpg` **OR** update the `avatarUrl` property in `data/content.ts`:
   ```typescript
   avatarUrl: "/images/your-photo-name.jpg",
   ```

---

### 3. How to Swap the CV / Resume PDF
1. Place your actual resume PDF inside **`public/cv/`**.
2. Rename the file to `Muhammad_Mubashir_CV.pdf` **OR** update `resumeUrl` in `data/content.ts`:
   ```typescript
   resumeUrl: "/cv/Muhammad_Mubashir_CV.pdf",
   ```

---

### 4. How to Add a New Project
In `data/content.ts`, append a new object to the `projects` array:
```typescript
{
  id: "my-new-project",
  title: "New Project Title",
  subtitle: "Short Tagline / Category",
  description: "Brief overview of what the project accomplishes.",
  bullets: [
    "Key technical accomplishment or model metric",
    "Deployment architecture or integration detail"
  ],
  tags: ["Python", "PyTorch", "FastAPI"],
  githubUrl: "https://github.com/mubashir72/your-repo", // Optional
  liveUrl: "https://your-demo-url.com",                  // Optional
  featured: true,
}
```

---

### 5. How to Add a New Work Experience Entry
In `data/content.ts`, append a new object to the `experience` array:
```typescript
{
  id: "exp-company-role",
  company: "Company Name",
  role: "Job Title / Role",
  location: "City, Country",
  period: "Month Year – Present",
  description: [
    "Key responsibility or achievement bullet 1",
    "Key responsibility or achievement bullet 2"
  ],
  technologies: ["Tech 1", "Tech 2", "Tech 3"],
}
```

---

### 6. How to Add a New Certification
In `data/content.ts`, append a new object to the `certifications` array:
```typescript
{
  id: "cert-unique-id",
  title: "Certification Course Name",
  issuer: "Issuing Organization (e.g. DeepLearning.AI)",
  platform: "Coursera",
  instructor: "Instructor Name (e.g. Andrew Ng)",
  issueDate: "Completed 2024",
  credentialUrl: "https://coursera.org/verify/..." // Optional
}
```

---

### 7. How to Change the Accent Color
The portfolio uses a **Strict Solid Color Theme** (NO gradients). The primary neon accent color is set to **Electric Cyan (`#00f0ff`)**.

To change the accent color across the entire website:
1. Open **`tailwind.config.ts`**.
2. Update the `accent` color definition:
   ```typescript
   accent: {
     DEFAULT: "#00f0ff", // Replace with your desired hex color (e.g. #7928CA or #00FF66)
     hover: "#33f3ff",
     active: "#00c8d6",
     muted: "rgba(0, 240, 255, 0.15)",
   }
   ```

---

## 🎨 Tech Stack & Design System

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Headings) & [Inter](https://fonts.google.com/specimen/Inter) (Body)
