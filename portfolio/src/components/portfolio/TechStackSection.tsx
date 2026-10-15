import BadgePill from "@/components/portfolio/BadgePill";
import Reveal from "@/components/portfolio/Reveal";
import SectionHeading from "@/components/portfolio/SectionHeading";
import type { TechnologyGroup } from "@/components/portfolio/types";

type TechStackSectionProps = {
  groups: TechnologyGroup[];
};

export default function TechStackSection({ groups }: TechStackSectionProps) {
  return (
    <section id="technologies" className="content-section" aria-labelledby="technologies-heading">
      <SectionHeading
        id="technologies-heading"
        title="Technologies"
        subtitle="Tools I have used across my backend, full-stack, and data-focused projects."
      />
      <Reveal>
        <div className="technology-card">
          <div className="technology-groups">
            {groups.map((group) => (
              <div key={group.title} className="technology-group">
                <h3 className="technology-group-title">
                  {group.title}
                </h3>
                <div className="technology-badges">
                  {group.items.map((item) => (
                    <BadgePill key={`${group.title}-${item.label}`} badge={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
