export default function Logo({ tone = 'dark', compact = false, className = '' }) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-slate-900';
  const accentColor = tone === 'light' ? 'text-cyan-300' : 'text-violet-600';
  const markRing = tone === 'light' ? 'border-white/15 bg-white/10 shadow-white/10' : 'border-slate-200 bg-white shadow-slate-200/70';
  const markGlow = tone === 'light' ? 'from-cyan-400 via-violet-500 to-indigo-500' : 'from-violet-500 via-indigo-500 to-cyan-400';
  const subtitleColor = tone === 'light' ? 'text-white/65' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border ${markRing}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${markGlow} opacity-95`} />
        <div className="absolute inset-[1px] rounded-[15px] bg-slate-950/10" />
        <svg viewBox="0 0 48 48" className="relative z-10 h-8 w-8 text-white" aria-hidden="true">
          <path
            d="M15 31.5C18.8 28.4 21.3 25.4 24.1 22.9C27.2 20.2 29.9 17.1 33 12.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.2 12.8H35.2V17.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="31.5" r="2.5" fill="currentColor" />
          <circle cx="24.1" cy="22.9" r="2.4" fill="currentColor" opacity="0.9" />
          <circle cx="33" cy="12.8" r="2.6" fill="white" />
          <path
            d="M18 34.2c1.8 1.1 3.9 1.6 6.1 1.6 5.5 0 10-4.5 10-10"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
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
