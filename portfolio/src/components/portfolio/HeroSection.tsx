import Image from "next/image";
import { FaFolderOpen, FaGithub } from "react-icons/fa";
import ActionButton from "@/components/portfolio/ActionButton";

export default function HeroSection() {
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

  return (
    <section id="top" className="hero-panel" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="hero-kicker">Software Engineer <span aria-hidden="true">·</span> Backend &amp; Full-Stack</p>
        <h1 id="hero-heading">Hi, I&apos;m Ian Gonsalves.</h1>
        <p className="hero-lede">
          I build reliable backend systems and full-stack applications, with a focus on APIs,
          data-intensive applications, and practical AI integration.
        </p>
        <div className="hero-actions">
          <ActionButton
            link={{ label: "View Projects", href: "#projects", variant: "primary", icon: FaFolderOpen }}
          />
          <ActionButton
            link={{
              label: "GitHub",
              href: "https://github.com/iangonsalves",
              variant: "secondary",
              icon: FaGithub,
            }}
          />
        </div>
      </div>

      <div className="hero-profile">
        <div className="hero-avatar-frame">
          <Image
            src={`${prefix}/images/profile.jpg`}
            alt="Portrait of Ian Gonsalves"
            width={220}
            height={220}
            priority
            className="hero-avatar"
          />
        </div>
        <p className="availability-indicator">
          <span aria-hidden="true" /> Available for opportunities
        </p>
      </div>
    </section>
  );
}
