"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Mail,
  Phone,
  FileText,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { personalInfo, socials, SocialLink } from "@/data/content";

/**
 * Helper to render Lucide icons dynamically based on string name.
 */
const renderSocialIcon = (iconName: SocialLink["icon"]) => {
  const props = { className: "w-5 h-5" };
  switch (iconName) {
    case "Linkedin":
      return <Linkedin {...props} />;
    case "Github":
      return <Github {...props} />;
    case "Instagram":
      return <Instagram {...props} />;
    case "Facebook":
      return <Facebook {...props} />;
    case "Mail":
      return <Mail {...props} />;
    case "Phone":
      return <Phone {...props} />;
    case "FileText":
      return <FileText {...props} />;
    default:
      return <Mail {...props} />;
  }
};

/**
 * ==============================================================================
 * HERO SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Full viewport height min-h-screen layout.
 * - Rotating animated text tagline ("AI Engineer" / "PEC Registered Software Engineer" / etc.)
 * - Profile avatar placeholder pointing to /images/profile-placeholder.jpg.
 * - Social icons row dynamically rendered from data/content.ts socials array.
 * - Animated scroll-down indicator.
 * - STRICT NO GRADIENTS: Solid neon cyan accents & box-shadow glows.
 * ==============================================================================
 */
export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Rotate tagline text every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex(
        (prev) => (prev + 1) % personalInfo.rotatingTitles.length
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Text & Intro Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* PEC Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-bg-surface border border-accent/40 text-accent shadow-glow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>{personalInfo.pecRegistration}</span>
          </motion.div>

          {/* Main Headline Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading font-extrabold text-fg tracking-tight leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-accent underline decoration-accent/40 decoration-2 underline-offset-8">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Rotating Tagline Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center font-mono text-xl sm:text-2xl text-fg-muted"
          >
            <span className="text-accent mr-2 font-bold">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-fg font-semibold"
              >
                {personalInfo.rotatingTitles[currentTitleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="w-2.5 h-6 bg-accent ml-2 animate-pulse" />
          </motion.div>

          {/* Professional Bio Summary (rephrased from CV) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-fg-muted leading-relaxed max-w-2xl"
          >
            {personalInfo.bioSummary}
          </motion.p>

          {/* Social Icons Row & CTA Buttons */}
          {/* EDIT SOCIAL LINKS IN: data/content.ts -> socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center gap-3"
          >
            {socials.map((social) => {
              // Primary CTA Button (e.g. Download CV)
              if (social.isPrimaryAction) {
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-bg bg-accent hover:bg-accent-hover rounded-md transition-all duration-200 shadow-glow-md"
                  >
                    {renderSocialIcon(social.icon)}
                    <span>{social.platform}</span>
                  </a>
                );
              }

              // Standard Social Icon Button
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="p-3 text-fg-muted hover:text-accent bg-bg-surface hover:bg-bg-surface-hover border border-border hover:border-accent rounded-md transition-all duration-200 hover:shadow-glow-sm"
                >
                  {renderSocialIcon(social.icon)}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Profile Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Outer Solid Neon Box Glow Container */}
            <div className="absolute -inset-1.5 rounded-2xl bg-accent opacity-30 group-hover:opacity-60 blur-sm transition-all duration-300" />

            {/* Profile Avatar Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-accent/60 bg-bg-surface shadow-glow-md">
              {/* TODO: Replace with your real photo by overwriting public/images/profile-placeholder.jpg */}
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 0.8 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="mt-8 flex flex-col items-center gap-1 text-fg-dim hover:text-accent transition-colors"
        aria-label="Scroll to About Section"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-accent" />
      </motion.a>
    </section>
  );
};

export default Hero;
