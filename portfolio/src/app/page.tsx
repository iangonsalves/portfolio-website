"use client";

import { useState } from "react";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ImageModal from "@/components/portfolio/ImageModal";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import { aboutPoints, projectCards, technologyGroups } from "@/data/portfolioData";

export default function Home() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

  return (
    <>
      <main className="portfolio-shell mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-8 sm:gap-16 sm:px-6 sm:py-12">
        <HeroSection />
        <TechStackSection groups={technologyGroups} />
        <ProjectsSection
          projects={projectCards}
          prefix={prefix}
          onOpenImage={(src, alt) => setModalImage({ src, alt })}
        />
        <AboutSection points={aboutPoints} />
        <ContactSection />
      </main>
      <ImageModal image={modalImage} prefix={prefix} onClose={() => setModalImage(null)} />
    </>
  );
}
