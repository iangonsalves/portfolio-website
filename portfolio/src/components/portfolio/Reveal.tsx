import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

// Keep the original component API while rendering content immediately and
// avoiding client-side observers for a static portfolio page.
export default function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
