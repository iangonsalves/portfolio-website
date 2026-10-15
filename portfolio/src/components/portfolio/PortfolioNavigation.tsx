"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function closeMenuAfterNavigation(href: string) {
    setMenuOpen(false);
    const targetId = href.slice(1);
    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      const heading = target?.querySelector<HTMLElement>("h2, h3");
      heading?.focus({ preventScroll: true });
    });
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href="#top" aria-label="Ian Gonsalves, home">
          Ian Gonsalves<span aria-hidden="true">.</span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="navigation-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="navigation-link mobile-navigation-link"
            onClick={() => closeMenuAfterNavigation(item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
