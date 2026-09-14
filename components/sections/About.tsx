"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { personalInfo } from "@/data/content";

/**
 * Helper to pick icons for stat cards dynamically
 */
const renderStatIcon = (index: number) => {
  const props = { className: "w-6 h-6 text-accent" };
  switch (index % 4) {
    case 0:
      return <GraduationCap {...props} />;
    case 1:
      return <Award {...props} />;
    case 2:
      return <Cpu {...props} />;
    case 3:
      return <ShieldCheck {...props} />;
    default:
      return <GraduationCap {...props} />;
  }
};

/**
 * ==============================================================================
 * ABOUT SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Detailed bio text rendering education (FAST NUCES MS AI, MUET BE Software Engineering).
 * - Stat highlight cards dynamically loaded from data/content.ts personalInfo.statHighlights.
 * - Solid card borders, hover glows, and zero gradients.
 * ==============================================================================
 */
export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Engineering & AI Background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio & Academic Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-bg-surface border border-border p-6 sm:p-8 rounded-xl space-y-4 shadow-card">
            <h3 className="text-xl font-heading font-bold text-fg">
              Passionate about Building Intelligent AI Systems
            </h3>

            {/* Paragraphs rendered from data/content.ts */}
            {personalInfo.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-fg-muted leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            ))}

            {/* Academic Highlights List */}
            <div className="pt-4 border-t border-border/80 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                Education & Credentials
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-3 bg-bg-muted border border-border/60 rounded-lg flex flex-col justify-between"
                  >
                    <span className="font-heading font-semibold text-sm text-fg">
                      {edu.degree}
                    </span>
                    <span className="text-xs text-fg-dim font-mono mt-1">
                      {edu.institution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stat Cards Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {personalInfo.statHighlights.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-bg-surface border border-border hover:border-accent p-5 rounded-xl transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between"
            >
              <div className="mb-3">{renderStatIcon(idx)}</div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-fg">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-semibold text-accent uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-fg-dim mt-0.5">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
