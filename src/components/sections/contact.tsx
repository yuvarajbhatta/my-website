"use client";

import { useState } from "react";
import { SocialIcon } from "@/components/ui/social-icon";
import { ConnectVisual } from "@/components/three/connect-visual";
import { emails, socialLinks } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  async function handleCopy(email: string) {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied((current) => (current === email ? null : current)), 2000);
    } catch {
      // Clipboard API unavailable; the mailto link below still works.
    }
  }

  return (
    <section id="contact" className="section-wrap pb-20">
      <div className="connect-visual-frame reveal-up">
        <ConnectVisual />
      </div>

      <div className="contact-panel">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="contact-title">Connect for engineering, automation, infrastructure, or data-focused conversations.</h2>
          <p>
            I am open to professional connections, meaningful technical
            conversations, and opportunities that align with backend systems,
            cloud infrastructure, AI automation, and full-stack engineering.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span className="icon-badge">
                <SocialIcon label={item.label} />
              </span>
              <div>
                <p>{item.label}</p>
                <span>{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {emails.map((email, index) => (
            <div key={email} className="flex items-stretch gap-2">
              <a
                href={`mailto:${email}`}
                className={index === 0 ? "button-primary" : "button-secondary"}
              >
                {email}
              </a>
              <button
                type="button"
                className="copy-email-button"
                onClick={() => handleCopy(email)}
                aria-label={`Copy ${email} to clipboard`}
              >
                {copied === email ? "Copied" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
