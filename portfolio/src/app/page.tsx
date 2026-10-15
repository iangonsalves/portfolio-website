import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsGallery from "@/components/portfolio/ProjectsGallery";
import TechStackSection from "@/components/portfolio/TechStackSection";
import { aboutPoints, technologyGroups } from "@/data/portfolioData";

export default function Home() {
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

  return (
    <>
      <main className="portfolio-shell mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-6 sm:py-12 lg:py-14">
        <HeroSection />
        <ProjectsGallery prefix={prefix} />
        <AboutSection points={aboutPoints} />
        <TechStackSection groups={technologyGroups} />
        <ContactSection />
      </main>
    </>
  );
}
