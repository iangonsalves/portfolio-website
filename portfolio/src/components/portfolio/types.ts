import type { IconType } from "react-icons";

export type Badge = {
  label: string;
  icon: IconType;
  className: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
  variant: "primary" | "secondary";
  icon: IconType;
  disabled?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category?: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: Badge[];
  bullets: string[];
  links: ProjectLink[];
};

export type TechnologyGroup = {
  title: string;
  items: Badge[];
};
