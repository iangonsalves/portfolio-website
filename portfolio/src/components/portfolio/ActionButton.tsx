import type { ProjectLink } from "@/components/portfolio/types";

type ActionButtonProps = {
  link: ProjectLink;
  className?: string;
};

export default function ActionButton({ link, className = "" }: ActionButtonProps) {
  const Icon = link.icon;
  const isExternal = Boolean(link.href?.startsWith("http"));
  const baseClassName =
    link.variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
      : "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-slate-50 hover:text-blue-600";
  const resolvedClassName = `${baseClassName} ${className}`.trim();

  if (link.disabled || !link.href) {
    return (
      <span className={`${resolvedClassName} cursor-not-allowed opacity-60`} aria-disabled="true">
        <Icon className="text-xs" />
        {link.label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={resolvedClassName}
    >
      <Icon className="text-xs" />
      {link.label}
    </a>
  );
}
