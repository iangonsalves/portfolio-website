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
      ? "action-button action-button-primary"
      : "action-button action-button-secondary";
  const resolvedClassName = `${baseClassName} ${className}`.trim();

  if (link.disabled || !link.href) {
    return (
      <span className={`${resolvedClassName} cursor-not-allowed opacity-60`} aria-disabled="true">
        <Icon className="text-sm" aria-hidden="true" />
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
      aria-label={link.label}
    >
      <Icon className="text-sm" aria-hidden="true" />
      {link.label}
    </a>
  );
}
