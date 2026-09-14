"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ==============================================================================
 * SECTION WRAPPER COMPONENT
 * ==============================================================================
 * 
 * Reusable container wrapper for all portfolio page sections.
 * Enforces consistent vertical padding, layout boundaries, heading typography,
 * and view-triggered animations using Framer Motion.
 * 
 * PROPS:
 * @param id        - Section DOM element ID (used for smooth scroll navigation anchors)
 * @param title     - Primary section header text
 * @param subtitle  - Optional section category badge or subheader text
 * @param children   - Section body node content
 * @param className - Additional Tailwind utility classes
 * ==============================================================================
 */

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Optional Header Block */}
        {(title || subtitle) && (
          <div className="mb-12">
            {subtitle && (
              <span className="inline-block px-3 py-1 mb-3 text-xs font-mono tracking-widest text-accent uppercase bg-accent-muted border border-accent/30 rounded-md">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-fg tracking-tight">
                {title}
                {/* Accent solid dot indicator */}
                <span className="text-accent ml-1">.</span>
              </h2>
            )}
            {/* Solid Accent Line Divider (NO GRADIENT) */}
            <div className="mt-4 h-0.5 w-16 bg-accent" />
          </div>
        )}

        {/* Section Main Content */}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
