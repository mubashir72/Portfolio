"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { experience } from "@/data/content";

/**
 * ==============================================================================
 * EXPERIENCE SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Vertical timeline layout with illuminated left accent line and node dots.
 * - Work experience cards detailing role, company, location, date, and bullet points.
 * - Framer Motion viewport scroll entrance animations.
 * 
 * HOW TO ADD / EDIT TIMELINE ENTRIES:
 * Update the `experience` array inside `data/content.ts`.
 * To add a new position, copy an existing entry object in `data/content.ts`.
 * ==============================================================================
 */
export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Career Journey & Internships"
    >
      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8">
        {/* Left Illuminated Vertical Timeline Line (Solid Accent Color - NO GRADIENTS) */}
        <div
          aria-hidden="true"
          className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-0.5 bg-border hover:bg-accent transition-colors"
        />

        {/* EDIT EXPERIENCE ENTRIES IN: data/content.ts -> experience */}
        <div className="space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Illuminated Timeline Node Dot */}
              <div
                aria-hidden="true"
                className="absolute left-[-11px] sm:left-[-7px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-accent group-hover:bg-accent group-hover:shadow-glow-sm transition-all duration-300"
              />

              {/* Experience Card */}
              <div className="bg-bg-surface border border-border hover:border-accent p-6 sm:p-8 rounded-xl space-y-4 shadow-card transition-all duration-300 hover:shadow-glow-sm">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/70 pb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-fg group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-fg-muted font-mono mt-1">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <span className="text-fg font-semibold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-fg-dim">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Date Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-accent bg-bg-muted border border-accent/30 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullet Point Accomplishments */}
                <ul className="space-y-2.5 pt-1">
                  {item.description.map((desc, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-sm text-fg-muted flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="pt-3 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-fg-muted bg-bg-muted rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
