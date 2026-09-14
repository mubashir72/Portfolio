"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { projects } from "@/data/content";

/**
 * ==============================================================================
 * PROJECTS SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Responsive grid layout (1 column mobile, 2-3 columns desktop).
 * - Detailed project cards featuring title, subtitle, description, bullet points,
 *   technology tag badges, and GitHub / Live Demo action links.
 * - Solid color surfaces, subtle borders, and neon cyan hover box-shadow glows.
 * - Framer Motion viewport entrance and hover lift animations.
 * 
 * HOW TO ADD / EDIT PROJECTS:
 * Update the `projects` array in `data/content.ts`.
 * Copy an existing project object structure and populate its fields.
 * ==============================================================================
 */
export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="AI & Software Engineering Portfolio"
    >
      {/* Grid of Project Cards */}
      {/* EDIT PROJECTS IN: data/content.ts -> projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative bg-bg-surface border border-border hover:border-accent p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-glow-md"
          >
            {/* Header Badge & Title */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider text-accent bg-bg-muted border border-accent/30">
                  <Sparkles className="w-3 h-3 text-accent" />
                  Featured Project
                </span>

                {/* External Links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-fg-dim hover:text-accent hover:bg-bg-muted rounded-md transition-colors"
                      aria-label="View Source Code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-fg-dim hover:text-accent hover:bg-bg-muted rounded-md transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl font-heading font-bold text-fg group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-accent/80 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* High-level Description */}
              <p className="text-sm text-fg-muted leading-relaxed pt-1">
                {project.description}
              </p>

              {/* Bullet Points */}
              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-2 pt-2 border-t border-border/60">
                  {project.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs text-fg-muted flex items-start gap-2 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bottom Tech Stack Tags */}
            <div className="pt-6 mt-6 border-t border-border/80">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-mono text-fg-muted bg-bg-muted rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
