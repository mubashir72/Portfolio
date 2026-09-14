import type { Config } from "tailwindcss";

/**
 * ==============================================================================
 * TAILWIND CSS CONFIGURATION - DESIGN SYSTEM (DARK & FUTURISTIC)
 * ==============================================================================
 * 
 * DESIGN PRINCIPLES:
 * 1. ZERO GRADIENTS: All background, text, and border styles must use SOLID colors.
 * 2. DARK THEME: Base background is a near-black slate (#0a0a0f).
 * 3. SINGLE ACCENT: Electric Cyan (#00f0ff) is the primary accent tone used sparingly.
 * 4. SHADOW GLOWS: Subtle element highlighting is achieved via box-shadow glows.
 * 
 * HOW TO EDIT:
 * - To change the primary accent color across the app, update the `accent` object below.
 * - To adjust surface/card colors, update `bg-surface` or `bg-surface-hover`.
 * - To modify font stacks, edit `fontFamily` (synced with app/layout.tsx next/font).
 * ==============================================================================
 */

const config: Config = {
  // Specify paths to all template files where Tailwind classes are used
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core Background Colors (Solid Near-Black Slate)
        bg: {
          DEFAULT: "#0a0a0f",    // Main canvas background
          surface: "#12121a",    // Card & container background
          "surface-hover": "#1a1a26", // Interactive surface hover state
          muted: "#181824",      // Secondary muted container
        },

        // Primary Accent Color System (Electric Cyan / Neon Solid Tone - NO GRADIENTS)
        accent: {
          DEFAULT: "#00f0ff",    // Primary neon cyan highlight
          hover: "#33f3ff",      // Slightly brighter tone for hover states
          active: "#00c8d6",     // Darker cyan for pressed states
          muted: "rgba(0, 240, 255, 0.15)", // Translucent fill for badges & subtle borders
        },

        // Text & Foreground Color Palette
        fg: {
          DEFAULT: "#f1f5f9",    // High-contrast primary text (slate-100)
          muted: "#94a3b8",      // Secondary body & description text (slate-400)
          dim: "#64748b",        // Footer/de-emphasized text (slate-500)
        },

        // Border & Divider Color System
        border: {
          DEFAULT: "#1e1e2d",    // Subtle card & section divider border
          accent: "#00f0ff",     // Solid accent border for active/focused elements
          hover: "#2d2d42",      // Card border on hover
        },
      },

      // Typography Font Families (Variables configured in app/layout.tsx)
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },

      // Custom Box Shadows for Neon Glow Effects (Replaces Gradients)
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0, 240, 255, 0.2)",
        "glow-md": "0 0 20px rgba(0, 240, 255, 0.35)",
        "glow-lg": "0 0 35px rgba(0, 240, 255, 0.5)",
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },

      // Consistent Spacing Scale Token Extensions if needed
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
