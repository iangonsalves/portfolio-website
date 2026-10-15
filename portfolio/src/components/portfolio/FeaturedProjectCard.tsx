import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import ActionButton from "@/components/portfolio/ActionButton";
import BadgePill from "@/components/portfolio/BadgePill";
import type { Project } from "@/components/portfolio/types";

type FeaturedProjectCardProps = {
  project: Project;
  prefix: string;
  onOpenImage: (src: string, alt: string) => void;
};

export default function FeaturedProjectCard({
  project,
  prefix,
  onOpenImage,
}: FeaturedProjectCardProps) {
  return (
    <article className="featured-project-card">
      <button
        type="button"
        className="featured-project-image-trigger"
        onClick={() => onOpenImage(project.image, project.imageAlt)}
        aria-label={`Open a larger preview of ${project.title}`}
      >
        <Image
          src={prefix + project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 54vw"
          className="featured-project-image"
        />
        <span className="image-preview-label">View screenshot</span>
      </button>

      <div className="featured-project-content">
        <p className="featured-project-kicker">Flagship project</p>
        <p className="project-category">{project.category}</p>
        <h3 className="featured-project-title">{project.title}</h3>
        <p className="featured-project-description">{project.description}</p>

        <ul className="featured-project-highlights">
          {project.bullets.map((bullet) => (
            <li key={bullet}>
              <FaCheck aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {project.architecture && (
          <dl className="featured-project-architecture" aria-label="Architecture and deployment">
            {project.architecture.map(({ label, value }) => (
              <div className="featured-project-architecture-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="project-badges featured-project-badges">
          <span className="featured-project-stack-label">Core stack</span>
          {project.badges.map((badge) => (
            <BadgePill key={`${project.slug}-${badge.label}`} badge={badge} />
          ))}
        </div>
        <div className="project-actions">
          {project.links.map((link) => (
            <ActionButton key={`${project.slug}-${link.label}`} link={link} />
          ))}
        </div>
      </div>
    </article>
  );
}
