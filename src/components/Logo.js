export default function Logo({ tone = 'dark', compact = false, className = '' }) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-slate-900';
  const accentColor = tone === 'light' ? 'text-cyan-300' : 'text-violet-600';
  const markRing = tone === 'light' ? 'border-white/15 shadow-cyan-950/30' : 'border-slate-200 shadow-slate-200/70';
  const subtitleColor = tone === 'light' ? 'text-white/65' : 'text-slate-500';
  const logoSrc = `${process.env.PUBLIC_URL}/career-advice-logo.png`;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border bg-slate-950 shadow-lg ${markRing}`}>
        <img
          src={logoSrc}
          alt="CareerGuide logo"
          className="h-full w-full object-cover"
          draggable="false"
        />
      </div>

      {!compact && (
        <div className="leading-tight">
          <div className={`font-semibold text-lg tracking-tight ${titleColor}`}>
            Career<span className={accentColor}>Guide</span>
          </div>
          <div className={`text-[11px] uppercase tracking-[0.24em] mt-1 ${subtitleColor}`}>
            Career roadmap hub
          </div>
        </div>
      )}
    </div>
  );
}
