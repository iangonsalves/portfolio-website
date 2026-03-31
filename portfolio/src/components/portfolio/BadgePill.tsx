import type { Badge } from "@/components/portfolio/types";

type BadgePillProps = {
  badge: Badge;
};

export default function BadgePill({ badge }: BadgePillProps) {
  const Icon = badge.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${badge.className}`}
    >
      <Icon className="shrink-0" />
      {badge.label}
    </span>
  );
}
