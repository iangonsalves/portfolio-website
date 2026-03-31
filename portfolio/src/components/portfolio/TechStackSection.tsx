import BadgePill from "@/components/portfolio/BadgePill";
import Reveal from "@/components/portfolio/Reveal";
import SectionHeading from "@/components/portfolio/SectionHeading";
import type { TechnologyGroup } from "@/components/portfolio/types";

type TechStackSectionProps = {
  groups: TechnologyGroup[];
};

export default function TechStackSection({ groups }: TechStackSectionProps) {
  return (
    <section id="technologies" className="section-shell section-shell-tech flex flex-col gap-6">
      <SectionHeading title="Technologies" subtitle="The tools and technologies I work with." />
      <Reveal>
        <div className="section-surface p-4 sm:p-5">
          <div className="flex flex-col gap-4">
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <h3 className="min-w-24 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
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
