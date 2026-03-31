import Reveal from "@/components/portfolio/Reveal";
import SectionHeading from "@/components/portfolio/SectionHeading";
import ProjectCard from "@/components/portfolio/ProjectCard";
import type { Project } from "@/components/portfolio/types";

type ProjectsSectionProps = {
  projects: Project[];
  prefix: string;
  onOpenImage: (src: string, alt: string) => void;
};

export default function ProjectsSection({
  projects,
  prefix,
  onOpenImage,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-shell section-shell-projects flex flex-col gap-6">
      <SectionHeading
        title="Projects"
        subtitle="Each project opens into a fuller case-study view with the core implementation details, stack, and links."
      />
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} prefix={prefix} onOpenImage={onOpenImage} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
