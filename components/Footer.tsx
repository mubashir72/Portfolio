"use client";

import React from "react";
import { Terminal, Linkedin, Github, Instagram, Facebook, Mail, Phone, FileText } from "lucide-react";
import { personalInfo, socials, SocialLink } from "@/data/content";

/**
 * Helper to render Lucide icons
 */
const renderFooterSocialIcon = (iconName: SocialLink["icon"]) => {
  const props = { className: "w-4 h-4" };
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
 * FOOTER COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Brand logo & name ("Muhammad Mubashir").
 * - Dynamic copyright year (new Date().getFullYear()).
 * - Social icons row dynamically rendered from data/content.ts.
 * - Tech stack acknowledgment ("Built with Next.js & Tailwind CSS").
 * ==============================================================================
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Name */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-bg-muted border border-border">
            <Terminal className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-fg tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-accent ml-0.5 font-bold">.</span>
            <p className="text-xs font-mono text-fg-dim">
              {personalInfo.pecRegistration}
            </p>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target={s.isPrimaryAction ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.platform}
              className="p-2.5 text-fg-muted hover:text-accent bg-bg-muted hover:bg-bg-surface-hover border border-border hover:border-accent rounded-lg transition-all duration-200"
            >
              {renderFooterSocialIcon(s.icon)}
            </a>
          ))}
        </div>

        {/* Copyright & Built-with Notice */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-xs font-mono text-fg-muted">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-fg-dim">
            Built with <span className="text-accent font-semibold">Next.js 14</span>, <span className="text-accent font-semibold">TypeScript</span> & <span className="text-accent font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
