import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ActionButton from "@/components/portfolio/ActionButton";
import Reveal from "@/components/portfolio/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-6">
      <Reveal>
        <div className="cta-surface grid gap-6 p-6 sm:grid-cols-[1.2fr_0.8fr] sm:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              Let&apos;s Connect
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Open to new opportunities, collaborations, and meaningful conversations.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Feel free to connect through the links below to discuss opportunities, projects, or
              anything else worth exploring.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <ActionButton
                link={{ label: "Get in Touch", href: "mailto:iangonsalves29@gmail.com", variant: "primary", icon: FaEnvelope }}
                className="!bg-white !text-slate-900 hover:!bg-slate-100 hover:!text-slate-900"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionButton
                link={{ label: "GitHub", href: "https://github.com/iangonsalves", variant: "secondary", icon: FaGithub }}
              />
              <ActionButton
                link={{ label: "LinkedIn", href: "https://www.linkedin.com/in/iangonsalves", variant: "secondary", icon: FaLinkedin }}
              />
            </div>
          </div>
        </div>
      </Reveal>
      <footer className="flex flex-col gap-2 px-1 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2024 Ian Gonsalves. All rights reserved.</p>
      </footer>
    </section>
  );
}
