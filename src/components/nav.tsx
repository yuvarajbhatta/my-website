"use client";

import { useEffect, useRef } from "react";
import { navItems } from "@/lib/data";

export function Nav() {
  const activeHrefRef = useRef<string>("#home");
  const linkRefs = useRef<Map<string, HTMLAnchorElement[]>>(new Map());

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const applyActive = (href: string) => {
      if (activeHrefRef.current === href) return;
      activeHrefRef.current = href;

      linkRefs.current.forEach((els, key) => {
        const isActive = key === href;
        els.forEach((el) => {
          el.dataset.active = String(isActive);
          if (isActive) {
            el.setAttribute("aria-current", "true");
            el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          } else {
            el.removeAttribute("aria-current");
          }
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          applyActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function registerLink(href: string) {
    return (el: HTMLAnchorElement | null) => {
      const existing = linkRefs.current.get(href) ?? [];
      const withoutEl = existing.filter((item) => item !== el);
      linkRefs.current.set(href, el ? [...withoutEl, el] : withoutEl);
    };
  }

  return (
    <header className="site-header border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl">
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

        <div className="hidden items-center gap-2 text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              ref={registerLink(item.href)}
              href={item.href}
              className="nav-link"
              data-active={item.href === "#home"}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="nav-strip flex md:hidden" aria-label="Section navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            ref={registerLink(item.href)}
            href={item.href}
            className="nav-strip-link"
            data-active={item.href === "#home"}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
