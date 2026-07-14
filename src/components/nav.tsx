"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

export function Nav() {
  const activeHrefRef = useRef<string>("#home");
  const linkRefs = useRef<Map<string, HTMLAnchorElement[]>>(new Map());
  const stripRef = useRef<HTMLDivElement>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

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

  useEffect(() => {
    const node = stripRef.current;
    if (!node) return;

    let dismissed = false;

    const checkOverflow = () => {
      if (dismissed) return;
      setShowSwipeHint(node.scrollWidth > node.clientWidth + 4);
    };

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(node);

    const handleScroll = () => {
      dismissed = true;
      setShowSwipeHint(false);
    };
    node.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      node.removeEventListener("scroll", handleScroll);
    };
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

      <div className="nav-strip-wrap md:hidden">
        <div ref={stripRef} className="nav-strip flex" aria-label="Section navigation">
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

        {showSwipeHint ? (
          <span
            className={`nav-strip-hint ${reduceMotion ? "" : "nav-strip-hint-animated"}`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : null}
      </div>
    </header>
  );
}
