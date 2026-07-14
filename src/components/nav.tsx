"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";

export function Nav() {
  const [activeHref, setActiveHref] = useState<string>("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050814]/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="brand-mark" aria-label="Yuva Bhatta home">
          <span>YB</span>
          <div>
            <strong>Yuva Bhatta</strong>
            <small>Developer Portfolio</small>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={activeHref === item.href ? "true" : undefined}
              data-active={activeHref === item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" data-open={menuOpen} />
        </button>
      </nav>

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        className="nav-panel md:hidden"
        data-open={menuOpen}
        hidden={!menuOpen}
      >
        <div className="grid gap-1 px-5 pb-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-panel-link"
              aria-current={activeHref === item.href ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
