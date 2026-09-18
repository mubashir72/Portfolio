import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import GridPattern from "@/components/ui/GridPattern";
import { personalInfo, socials } from "@/data/content";

// Heading Display Font (Space Grotesk - Futuristic / Tech)
const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Body Sans Font (Inter - Clean & Readable)
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mubashir-portfolio.vercel.app"),
  title: `${personalInfo.name} | ${personalInfo.headlineTitle}`,
  description: personalInfo.bioSummary,
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "PEC Registered",
    "Deep Learning",
    "LLM Developer",
    "Machine Learning",
    "Muhammad Mubashir",
    "FAST NUCES",
    "RAG Specialist",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.headlineTitle}`,
    description: personalInfo.bioSummary,
    type: "website",
    locale: "en_US",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.avatarUrl,
        width: 800,
        height: 800,
        alt: `${personalInfo.name} Profile Photo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.headlineTitle}`,
    description: personalInfo.bioSummary,
    images: [personalInfo.avatarUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ND9eZdWa-GMnoJmzLXqriryecve7dzrFhgD4LC1NMPo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: "https://mubashir-portfolio.vercel.app",
    image: `https://mubashir-portfolio.vercel.app${personalInfo.avatarUrl}`,
    jobTitle: personalInfo.role,
    sameAs: socials
      .map((social) => social.url)
      .filter((url) => url !== "#" && !url.startsWith("mailto:")),
  };

  return (
    <html
      lang="en"
      className={`dark ${fontHeading.variable} ${fontSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-fg font-sans antialiased min-h-screen relative selection:bg-accent selection:text-bg">
        {/* Futuristic Background Grid Pattern */}
        <GridPattern />

        {/* Main Application Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
