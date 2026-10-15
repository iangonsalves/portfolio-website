"use client";

import { useState } from "react";
import { FaCircle } from "react-icons/fa";

type ProjectHighlightsDisclosureProps = {
  id: string;
  bullets: string[];
};

export default function ProjectHighlightsDisclosure({
  id,
  bullets,
}: ProjectHighlightsDisclosureProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-details">
      <button
        type="button"
        className="project-details-toggle"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded((current) => !current)}
      >
        Engineering highlights
      </button>
      <ul id={id} className="project-highlights" hidden={!expanded}>
        {bullets.map((bullet) => (
          <li key={bullet}>
            <FaCircle aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
