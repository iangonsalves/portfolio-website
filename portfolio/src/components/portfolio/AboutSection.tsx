import { FaCircle } from "react-icons/fa";
import SectionHeading from "@/components/portfolio/SectionHeading";

type AboutSectionProps = {
  points: string[];
};

export default function AboutSection({ points }: AboutSectionProps) {
  return (
    <section id="experience" className="content-section" aria-labelledby="experience-heading">
      <SectionHeading title="About & Experience" id="experience-heading" />
      <div className="profile-section-card">
        <div className="profile-intro">
          <p>
            I have more than two years of professional backend and software development experience,
            building reliable services and full-stack applications from API and data design through
            to user-facing workflows. My recent work also includes practical AI integration using
            local embeddings, hybrid retrieval, and source-grounded evidence.
          </p>
        </div>
        <ul className="profile-focus-list">
          {points.map((point) => (
            <li key={point}>
              <FaCircle aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
