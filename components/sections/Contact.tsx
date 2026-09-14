"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { personalInfo } from "@/data/content";

/**
 * ==============================================================================
 * CONTACT SECTION COMPONENT
 * ==============================================================================
 * 
 * Features:
 * - Left column: Contact info cards (Email, Phone, Location) pulling from data/content.ts.
 * - Right column: Interactive contact form UI with solid dark input styling and neon cyan focus states.
 * - STRICT NO GRADIENTS: Solid background surfaces & box-shadow glows only.
 * 
 * HOW TO WIRE UP FORM SUBMISSION:
 * @see TODO comment in handleFormSubmit below. You can integrate Formspree, Resend,
 * or a Next.js API route (/app/api/contact/route.ts).
 * ==============================================================================
 */
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ==============================================================================
    // TODO: WIRE UP FORM SUBMISSION HERE
    // Options:
    // 1. Formspree: fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(formData) })
    // 2. Resend / SendGrid API: fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) })
    // 3. EmailJS or Web3Forms
    // ==============================================================================
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);

    // Reset feedback after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact & Collaboration">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-bg-surface border border-border p-6 sm:p-8 rounded-xl space-y-6 shadow-card">
            <div>
              <h3 className="text-xl font-heading font-bold text-fg">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-fg-muted mt-2 leading-relaxed">
                Whether you have an opportunity, an AI project in mind, or just want to connect, feel free to drop me a message.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-4 bg-bg-muted border border-border hover:border-accent rounded-lg flex items-center gap-4 transition-all duration-200 hover:shadow-glow-sm"
              >
                <div className="p-2.5 rounded-md bg-bg-surface border border-border group-hover:border-accent">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono text-fg-dim uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-sm font-mono text-fg group-hover:text-accent transition-colors font-medium">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="group p-4 bg-bg-muted border border-border hover:border-accent rounded-lg flex items-center gap-4 transition-all duration-200 hover:shadow-glow-sm"
              >
                <div className="p-2.5 rounded-md bg-bg-surface border border-border group-hover:border-accent">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono text-fg-dim uppercase tracking-wider">
                    Phone
                  </div>
                  <div className="text-sm font-mono text-fg group-hover:text-accent transition-colors font-medium">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 bg-bg-muted border border-border rounded-lg flex items-center gap-4">
                <div className="p-2.5 rounded-md bg-bg-surface border border-border">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-mono text-fg-dim uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-sm font-mono text-fg font-medium">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <motion.form
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-border p-6 sm:p-8 rounded-xl space-y-5 shadow-card"
          >
            <h3 className="text-xl font-heading font-bold text-fg">
              Send a Message
            </h3>

            {isSubmitted && (
              <div className="p-4 bg-accent-muted border border-accent/40 rounded-lg text-accent text-sm font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-fg-muted uppercase tracking-wider"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 bg-bg-muted border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-lg text-sm text-fg placeholder:text-fg-dim transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-fg-muted uppercase tracking-wider"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-2.5 bg-bg-muted border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-lg text-sm text-fg placeholder:text-fg-dim transition-all"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="block text-xs font-mono text-fg-muted uppercase tracking-wider"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. AI Engineering Collaboration"
                className="w-full px-4 py-2.5 bg-bg-muted border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-lg text-sm text-fg placeholder:text-fg-dim transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-xs font-mono text-fg-muted uppercase tracking-wider"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 bg-bg-muted border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-lg text-sm text-fg placeholder:text-fg-dim transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-bg bg-accent hover:bg-accent-hover rounded-lg transition-all shadow-glow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
