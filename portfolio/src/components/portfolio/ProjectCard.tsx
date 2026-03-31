"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaCircle } from "react-icons/fa";
import ActionButton from "@/components/portfolio/ActionButton";
import BadgePill from "@/components/portfolio/BadgePill";
import type { Project } from "@/components/portfolio/types";

type ProjectCardProps = {
  project: Project;
  prefix: string;
  onOpenImage: (src: string, alt: string) => void;
};

export default function ProjectCard({ project, prefix, onOpenImage }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`project-card ${expanded ? "project-card-expanded" : ""}`}>
      <button
        type="button"
        className="w-full text-left"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="project-image-frame overflow-hidden">
            <Image
              src={prefix + project.image}
              alt={project.imageAlt}
              width={520}
              height={300}
              className="h-auto w-full object-contain transition duration-500 hover:scale-[1.01]"
              onClick={(event) => {
                event.stopPropagation();
                onOpenImage(project.image, project.imageAlt);
              }}
            />
          </div>
          <div className="flex h-full flex-col justify-between gap-5">
            <div className="space-y-3.5">
              {project.category ? (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {project.category}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <BadgePill key={`${project.slug}-${badge.label}`} badge={badge} />
                ))}
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2.5">
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">{project.title}</h3>
                  <p className="text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{project.description}</p>
                </div>
                <span
                  className={`mt-1 inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition ${expanded ? "rotate-180" : ""}`}
                >
                  <FaChevronDown className="text-xs" />
                </span>
              </div>
            </div>
            <div className="hidden flex-wrap gap-3 lg:flex">
              {project.links.map((link) => (
                <ActionButton key={`${project.slug}-${link.label}-preview`} link={link} />
              ))}
            </div>
          </div>
        </div>
      </button>

      <div className={`details-panel ${expanded ? "details-panel-open" : ""}`}>
        <div className="space-y-4 border-t border-slate-200 pt-5">
          <ul className="grid gap-2.5">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                <FaCircle className="mt-2 shrink-0 text-[8px] text-blue-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ActionButton key={`${project.slug}-${link.label}`} link={link} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
