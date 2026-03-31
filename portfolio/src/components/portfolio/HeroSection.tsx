import Image from "next/image";
import { FaEnvelope, FaFolderOpen } from "react-icons/fa";
import ActionButton from "@/components/portfolio/ActionButton";
import Reveal from "@/components/portfolio/Reveal";

export default function HeroSection() {
  return (
    <Reveal>
      <section className="hero-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center rounded-full border border-blue-200/80 bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
              Backend and Full Stack Developer
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-blue-700 sm:text-5xl lg:text-[3.35rem]">
                Hi, I&apos;m Ian Gonsalves
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                I build scalable web applications and APIs with a strong focus on clean
                architecture, production-ready systems, and practical user experiences.
              </p>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                I work with Node.js, Laravel, React, Django, and PostgreSQL across ecommerce,
                booking, and SaaS products.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionButton
                link={{ label: "View Projects", href: "#projects", variant: "primary", icon: FaFolderOpen }}
              />
              <ActionButton
                link={{ label: "Contact Me", href: "#contact", variant: "secondary", icon: FaEnvelope }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="hero-avatar-frame">
              <Image
                src="/images/profile.png"
                alt="Portrait of Ian Gonsalves"
                width={220}
                height={220}
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </div>
            <div className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Available for opportunities
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
