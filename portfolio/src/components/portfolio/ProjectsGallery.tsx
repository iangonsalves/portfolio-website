"use client";

import { useState } from "react";
import ImageModal from "@/components/portfolio/ImageModal";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import { featuredProject, otherProjects, selectedProjects } from "@/data/portfolioData";

type ProjectsGalleryProps = {
  prefix: string;
};

export default function ProjectsGallery(props: ProjectsGalleryProps) {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <ProjectsSection
        featuredProject={featuredProject}
        selectedProjects={selectedProjects}
        otherProjects={otherProjects}
        prefix={props.prefix}
        onOpenImage={(src, alt) => setModalImage({ src, alt })}
      />
      <ImageModal
        image={modalImage}
        prefix={props.prefix}
        onClose={() => setModalImage(null)}
      />
    </>
  );
}
