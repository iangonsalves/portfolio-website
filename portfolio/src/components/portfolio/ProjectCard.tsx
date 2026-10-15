import Image from "next/image";
import ActionButton from "@/components/portfolio/ActionButton";
import BadgePill from "@/components/portfolio/BadgePill";
import ProjectHighlightsDisclosure from "@/components/portfolio/ProjectHighlightsDisclosure";
import type { Project } from "@/components/portfolio/types";

type ProjectCardProps = {
  project: Project;
  prefix: string;
  onOpenImage: (src: string, alt: string) => void;
  compact?: boolean;
};

export default function ProjectCard({
  project,
  prefix,
  onOpenImage,
  compact = false,
}: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? "project-card-compact" : "project-card-selected"}`}>
      <div className="project-card-main">
        <button
          type="button"
          className="project-image-trigger"
          onClick={() => onOpenImage(project.image, project.imageAlt)}
          aria-label={`Open a larger preview of ${project.title}`}
        >
          <Image
            src={prefix + project.image}
            alt={project.imageAlt}
            width={520}
            height={300}
            className="project-card-image"
            sizes={compact ? "(max-width: 767px) 100vw, 40vw" : "(max-width: 1023px) 100vw, 50vw"}
          />
          <span className="image-preview-label">View screenshot</span>
        </button>

        <div className="project-card-copy">
          <p className="project-category">{project.category}</p>
          <div className="project-badges">
            {project.badges.map((badge) => (
              <BadgePill key={`${project.slug}-${badge.label}`} badge={badge} />
            ))}
          </div>
          <div>
            <h3 className={compact ? "project-title project-title-compact" : "project-title"}>
              {project.title}
            </h3>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-actions">
            {project.links.map((link) => (
              <ActionButton key={`${project.slug}-${link.label}`} link={link} />
            ))}
          </div>
        </div>
      </div>

      <ProjectHighlightsDisclosure
        id={`${project.slug}-highlights`}
        bullets={project.bullets}
      />
    </article>
  );
}
