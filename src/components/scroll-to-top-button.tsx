"use client";

export function ScrollToTopButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className="fixed right-4 bottom-4 z-50 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-sm font-semibold text-[var(--color-ivory)] shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-black/72 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sand)]"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/8 text-xs"
      >
        ↑
      </span>
      Top
    </button>
  );
}
