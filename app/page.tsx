import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

/**
 * ==============================================================================
 * PORTFOLIO HOMEPAGE ASSEMBLY
 * ==============================================================================
 * 
 * Assembly order with smooth scroll anchors matching the Navbar links:
 * 1. Navbar (#hero, #about, #technologies, #projects, #experience, #certifications, #contact)
 * 2. Hero Section (#hero)
 * 3. About Section (#about)
 * 4. Technologies Section (#technologies)
 * 5. Projects Section (#projects)
 * 6. Experience Section (#experience)
 * 7. Certifications Section (#certifications)
 * 8. Contact Section (#contact)
 * 9. Footer
 * ==============================================================================
 */
export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation Header */}
      <Navbar />

      <main className="flex-1 space-y-12">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. ABOUT SECTION */}
        <About />

        {/* 3. TECHNOLOGIES & SKILLS SECTION */}
        <Technologies />

        {/* 4. FEATURED PROJECTS SECTION */}
        <Projects />

        {/* 5. WORK EXPERIENCE SECTION */}
        <Experience />

        {/* 6. CERTIFICATIONS & CREDENTIALS SECTION */}
        <Certifications />

        {/* 7. CONTACT SECTION */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
