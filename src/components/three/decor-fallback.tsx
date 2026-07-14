export function DecorFallback({ tone = "cyan" }: { tone?: "cyan" | "violet" }) {
  const gradient =
    tone === "violet"
      ? "from-violet-400/20 via-blue-500/10 to-cyan-400/15"
      : "from-cyan-400/20 via-blue-500/10 to-violet-500/15";

  return (
    <div aria-hidden="true" className="relative flex h-full w-full items-center justify-center">
      <div className={`h-2/3 w-2/3 rounded-full bg-gradient-to-br ${gradient} blur-2xl`} />
      <div className="absolute h-16 w-16 rounded-2xl border border-white/10 bg-white/5" />
    </div>
  );
}
