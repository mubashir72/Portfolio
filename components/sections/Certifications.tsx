"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import { certifications } from "@/data/content";

/**
 * ==============================================================================
 * CERTIFICATIONS SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Grid layout of professional & academic certificates.
 * - Displays title, platform, issuing organization, and instructor names.
 * - Solid color surfaces, subtle borders, and neon cyan hover box-shadow glows.
 * - Framer Motion viewport entrance animations.
 * 
 * HOW TO ADD / EDIT CERTIFICATIONS:
 * Update the `certifications` array in `data/content.ts`.
 * Copy an existing certification object structure in `data/content.ts`.
 * ==============================================================================
 */
export const Certifications: React.FC = () => {
  return (
    <Section
      id="certifications"
      title="Certifications & Licensing"
      subtitle="Verified Professional Credentials"
    >
      {/* EDIT CERTIFICATIONS IN: data/content.ts -> certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group bg-bg-surface border border-border hover:border-accent p-6 rounded-xl space-y-3 transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-bg-muted border border-border group-hover:border-accent/40 transition-colors">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                {cert.issueDate && (
                  <span className="text-xs font-mono text-accent bg-bg-muted px-2.5 py-1 rounded border border-accent/20">
                    {cert.issueDate}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-base sm:text-lg text-fg group-hover:text-accent transition-colors leading-snug">
                {cert.title}
              </h3>

              {/* Issuer & Platform Info */}
              <div className="text-xs font-mono text-fg-muted space-y-1 pt-1">
                <div className="flex items-center gap-1.5 text-fg font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  <span>{cert.issuer}</span>
                  {cert.platform && (
                    <span className="text-fg-dim">({cert.platform})</span>
                  )}
                </div>
                {cert.instructor && (
                  <div className="text-fg-dim pl-5">
                    Instructor: {cert.instructor}
                  </div>
                )}
              </div>
            </div>

            {/* Optional Verification Link */}
            {cert.credentialUrl && (
              <div className="pt-2 border-t border-border/60">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
