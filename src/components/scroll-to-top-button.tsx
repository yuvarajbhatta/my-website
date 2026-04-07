"use client";

export function ScrollToTopButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 left-4 z-50 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-sm font-semibold text-[var(--color-ivory)] shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-black/72 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sand)]"
    >
      Top
    </button>
  );
}
