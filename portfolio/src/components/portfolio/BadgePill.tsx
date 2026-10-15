import type { Badge } from "@/components/portfolio/types";

type BadgePillProps = {
  badge: Badge;
};

export default function BadgePill({ badge }: BadgePillProps) {
  const Icon = badge.icon;

  return (
    <span
      className={`technology-pill inline-flex items-center gap-2 rounded-full font-semibold ${badge.className}`}
    >
      <Icon className="shrink-0" aria-hidden="true" />
      {badge.label}
    </span>
  );
}
