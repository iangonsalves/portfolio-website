import { FaCircle } from "react-icons/fa";
import Reveal from "@/components/portfolio/Reveal";
import SectionHeading from "@/components/portfolio/SectionHeading";

type AboutSectionProps = {
  points: string[];
};

export default function AboutSection({ points }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell section-shell-about flex flex-col gap-6">
      <SectionHeading title="About Me" />
      <Reveal>
        <div className="section-surface p-6 sm:p-8">
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <FaCircle className="mt-2 shrink-0 text-[8px] text-blue-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
