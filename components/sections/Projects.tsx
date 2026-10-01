"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import Section from "@/components/ui/Section";
import { Project, projects } from "@/data/content";

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
  const [activeGallery, setActiveGallery] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  const closeGallery = () => setActiveGallery(null);

  const showPreviousImage = () => {
    setActiveGallery((current) => {
      if (!current?.project.gallery) return current;
      const imageCount = current.project.gallery.length;
      return {
        ...current,
        index: (current.index - 1 + imageCount) % imageCount,
      };
    });
  };

  const showNextImage = () => {
    setActiveGallery((current) => {
      if (!current?.project.gallery) return current;
      return {
        ...current,
        index: (current.index + 1) % current.project.gallery.length,
      };
    });
  };

  useEffect(() => {
    if (!activeGallery) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

  const activeImages = activeGallery?.project.gallery;
  const activeImage = activeImages?.[activeGallery?.index ?? 0];

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

              {/* Project Gallery Preview */}
              {project.gallery && project.gallery.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveGallery({ project, index: 0 })}
                  className="relative block w-full aspect-video overflow-hidden rounded-xl border border-border bg-bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
                  aria-label={`Open ${project.title} image gallery`}
                >
                  <img
                    src={project.gallery[0].src}
                    alt={project.gallery[0].alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-bg-main/90 px-3 py-2 text-xs font-mono text-fg">
                    <span className="truncate">{project.gallery[0].caption}</span>
                    <span className="flex shrink-0 items-center gap-1 text-accent">
                      <Expand className="h-3.5 w-3.5" />
                      {project.gallery.length} {project.gallery.length === 1 ? "image" : "images"}
                    </span>
                  </span>
                </button>
              )}

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

      {/* Full-screen, keyboard-accessible gallery lightbox */}
      {activeGallery && activeImage && activeImages && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGallery.project.title} image gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-glow-md">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate font-heading font-bold text-fg">
                  {activeGallery.project.title}
                </p>
                <p className="text-xs font-mono text-accent">
                  Image {activeGallery.index + 1} of {activeImages.length}
                </p>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                className="rounded-md p-2 text-fg-muted transition-colors hover:bg-bg-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close image gallery"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/30 p-3 sm:p-6">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[72vh] max-w-full rounded-lg object-contain"
              />

              {activeImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-bg-main/90 p-2.5 text-fg transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-6"
                    aria-label="View previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-bg-main/90 p-2.5 text-fg transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6"
                    aria-label="View next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="border-t border-border px-4 py-3 text-center text-sm text-fg-muted sm:px-5">
              {activeImage.caption}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
