import FeaturedProjectCard from "@/components/portfolio/FeaturedProjectCard";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionHeading from "@/components/portfolio/SectionHeading";
import type { Project } from "@/components/portfolio/types";

type ProjectsSectionProps = {
  featuredProject: Project;
  selectedProjects: Project[];
  otherProjects: Project[];
  prefix: string;
  onOpenImage: (src: string, alt: string) => void;
};

export default function ProjectsSection({
  featuredProject,
  selectedProjects,
  otherProjects,
  prefix,
  onOpenImage,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <SectionHeading
        title="Selected Projects"
        subtitle="A closer look at systems I have designed and built, from document intelligence to team collaboration."
        id="projects-heading"
      />

      <FeaturedProjectCard
        project={featuredProject}
        prefix={prefix}
        onOpenImage={onOpenImage}
      />

      <div className="project-group">
        <div className="project-group-heading">
          <div>
            <p className="eyebrow">Selected project</p>
            <h3>TeamFlow</h3>
          </div>
          <p>Multi-tenant SaaS platform for workspace and team collaboration.</p>
        </div>
        <div className="selected-project-list">
          {selectedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              prefix={prefix}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      </div>

      <div className="project-group">
        <div className="project-group-heading">
          <div>
            <h3>Other Projects</h3>
          </div>
          <p>Additional applications spanning commerce and booking workflows.</p>
        </div>
        <div className="other-project-grid">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              prefix={prefix}
              onOpenImage={onOpenImage}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
