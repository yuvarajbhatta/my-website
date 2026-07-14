export function HeroStaticFallback({ animated }: { animated: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div
        className={`h-[70%] w-[70%] rounded-full border border-cyan-300/25 ${animated ? "animate-[spin_60s_linear_infinite]" : ""}`}
      />
      <div
        className={`absolute h-[52%] w-[52%] rounded-full border border-violet-300/20 ${animated ? "animate-[spin_44s_linear_infinite_reverse]" : ""}`}
      />
      <div className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/15 to-violet-500/25 blur-2xl" />
      <div className="absolute h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm" />
    </div>
  );
}
