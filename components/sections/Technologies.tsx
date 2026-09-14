"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { technologies } from "@/data/content";

/**
 * Helper to select category header icons
 */
const renderCategoryIcon = (categoryName: string) => {
  const props = { className: "w-5 h-5 text-accent" };
  switch (categoryName.toLowerCase()) {
    case "languages":
      return <Code2 {...props} />;
    case "ai/ml":
      return <Brain {...props} />;
    case "frameworks & tools":
      return <Wrench {...props} />;
    case "soft skills":
      return <Sparkles {...props} />;
    default:
      return <CheckCircle2 {...props} />;
  }
};

/**
 * ==============================================================================
 * TECHNOLOGIES SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Skill pills grouped by category ("Languages", "AI/ML", "Frameworks & Tools", "Soft Skills").
 * - Solid color background surfaces, subtle borders, and neon cyan hover box-shadow glows.
 * - Staggered Framer Motion entrance animations.
 * 
 * HOW TO EDIT SKILLS / CATEGORIES:
 * Update the `technologies` array in `data/content.ts`.
 * To add a new skill to a category, simply append `{ name: "New Skill" }` inside the skills array.
 * To add a new category, copy an entire category object structure in `data/content.ts`.
 * ==============================================================================
 */
export const Technologies: React.FC = () => {
  return (
    <Section
      id="technologies"
      title="Tech Stack & Skills"
      subtitle="Capabilities"
    >
      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* EDIT SKILLS IN: data/content.ts -> technologies */}
        {technologies.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className="bg-bg-surface border border-border p-6 rounded-xl space-y-4 shadow-card hover:border-border-hover transition-colors"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-border/70">
              <div className="p-2 rounded-lg bg-bg-muted border border-border">
                {renderCategoryIcon(cat.category)}
              </div>
              <h3 className="font-heading font-bold text-lg text-fg tracking-tight">
                {cat.category}
              </h3>
              <span className="ml-auto text-xs font-mono text-fg-dim px-2 py-0.5 bg-bg-muted rounded border border-border">
                {cat.skills.length} skills
              </span>
            </div>

            {/* Skill Pill Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-fg-muted bg-bg-muted hover:text-accent hover:bg-bg-surface-hover border border-border hover:border-accent rounded-lg transition-all duration-200 hover:shadow-glow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Technologies;
