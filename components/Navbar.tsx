"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { personalInfo, navLinks } from "@/data/content";

/**
 * ==============================================================================
 * NAVBAR COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Transparent-to-solid dark background transition on scroll.
 * - IntersectionObserver active scroll link tracking.
 * - Accessibility keyboard focus ring states (`focus-visible`).
 * - Framer Motion slide-in mobile navigation menu.
 * 
 * HOW TO EDIT NAV LINKS:
 * Update `data/content.ts -> navLinks`.
 * ==============================================================================
 */

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track scroll position for header background style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "about", "technologies", "projects", "experience", "certifications", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies upper-middle viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-fg hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
        >
          <div className="p-1.5 rounded-md bg-bg-surface border border-border group-hover:border-accent group-hover:shadow-glow-sm transition-all">
            <Terminal className="w-5 h-5 text-accent" />
          </div>
          <span className="font-heading font-bold text-lg sm:text-xl tracking-tight">
            {personalInfo.shortName}
            <span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links with Active Highlight */}
        {/* EDIT NAV LINKS IN: data/content.ts -> navLinks */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const linkTargetId = link.href.replace("#", "");
            const isActive = activeSection === linkTargetId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wide rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-accent font-semibold bg-bg-surface border border-accent/40 shadow-glow-sm"
                    : "text-fg-muted hover:text-accent hover:bg-bg-surface/60 border border-transparent"
                }`}
              >
                <span className="text-accent/60 mr-1">#</span>
                {link.name}
              </a>
            );
          })}
          
          {/* Action CTA Button */}
          <a
            href="#contact"
            className="ml-3 px-4 py-1.5 text-xs font-mono text-bg bg-accent hover:bg-accent-hover font-semibold rounded-md transition-all shadow-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-fg-muted hover:text-accent bg-bg-surface border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Framer Motion Slide-In) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-bg-surface border-b border-border px-4 pt-2 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => {
                const linkTargetId = link.href.replace("#", "");
                const isActive = activeSection === linkTargetId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-sm font-mono rounded-md transition-all ${
                      isActive
                        ? "text-accent font-semibold bg-bg-surface-hover border-l-2 border-accent"
                        : "text-fg-muted hover:text-accent hover:bg-bg-surface-hover"
                    }`}
                  >
                    <span className="text-accent mr-2">#</span>
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center w-full px-4 py-2.5 text-xs font-mono text-bg bg-accent hover:bg-accent-hover font-semibold rounded-md transition-all shadow-glow-sm"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
