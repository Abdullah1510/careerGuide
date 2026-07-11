import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onStartFlow, setCurrentPage }) {
  const { t } = useLanguage();
  const highlights = [
    { val: '25+', label: t('hero.stats.roadmaps') },
    { val: '12', label: t('hero.stats.exams') },
    { val: '200+', label: t('hero.stats.colleges') },
    { val: 'Apr 2026', label: t('hero.stats.latest') },
  ];

  const explainPoints = [
    t('hero.point1'),
    t('hero.point2'),
    t('hero.point3'),
  ];

  const orbitCards = [
    { label: 'Engineering', icon: '⚙️', top: '5%', left: '52%', delay: '0s', grad: 'from-violet-500 to-indigo-500' },
    { label: 'Medical', icon: '🏥', top: '22%', left: '87%', delay: '0.4s', grad: 'from-rose-500 to-pink-500' },
    { label: 'Commerce', icon: '📊', top: '70%', left: '84%', delay: '0.8s', grad: 'from-sky-500 to-cyan-500' },
    { label: 'Law', icon: '⚖️', top: '86%', left: '34%', delay: '1.2s', grad: 'from-amber-500 to-orange-500' },
    { label: 'Design', icon: '🎨', top: '17%', left: '9%', delay: '1.6s', grad: 'from-pink-500 to-rose-500' },
    { label: 'Pharmacy', icon: '💊', top: '58%', left: '7%', delay: '2s', grad: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 bg-[radial-gradient(circle_at_18%_18%,_rgba(34,211,238,0.22),_transparent_28%),radial-gradient(circle_at_82%_24%,_rgba(244,114,182,0.2),_transparent_24%),linear-gradient(135deg,_#020617_0%,_#111827_42%,_#312e81_100%)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute -bottom-28 right-1/3 w-72 h-72 bg-fuchsia-500/12 rounded-full blur-3xl animate-float-delay-2" />
        <div className="hero-aurora absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="hero-scanline absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-cyan-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              {t('hero.badge')}
            </span>

            <h1 className="text-[clamp(2rem,5vw,3.25rem)] lg:text-[clamp(2.35rem,3.25vw,3rem)] xl:text-[3.1rem] leading-[1.08] tracking-normal font-extrabold text-white animate-fade-in-up-delay max-w-3xl">
              {t('hero.titleLine1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300">
                {t('hero.titleLine2')}
              </span>
            </h1>

            <p className="mt-5 text-body-lg text-slate-200 max-w-2xl animate-fade-in-up-delay-2">
              {t('hero.description')}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 animate-fade-in-up-delay-2">
              {explainPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3">
                  <p className="text-sm text-slate-100 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <button
                onClick={() => onStartFlow('10th')}
                className="group flex items-center gap-3 px-6 py-3.5 bg-white text-slate-950 rounded-2xl font-bold shadow-xl shadow-violet-500/20 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <span className="text-xl">📘</span>
                {t('hero.after10th')}
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => onStartFlow('12th')}
                className="group relative overflow-hidden flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-2xl font-bold shadow-xl shadow-violet-500/20 hover:-translate-y-1 hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="text-xl">🎓</span>
                <span className="relative">{t('hero.after12th')}</span>
                <span className="relative text-white/75 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => setCurrentPage('exams')}
                className="flex items-center gap-3 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-bold border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📅</span>
                {t('hero.exams')}
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up-delay-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-4">
                  <div className="text-2xl font-bold text-white">{item.val}</div>
                  <div className="text-caption text-slate-300 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative h-[500px] animate-fade-in-up-delay">
            <div className="absolute inset-2 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl shadow-slate-950/20" />
            <div className="absolute left-10 top-10 right-10 rounded-3xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl shadow-2xl shadow-violet-950/20 animate-panel-rise">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Career Match</p>
                  <h3 className="text-white font-bold text-xl">Your best next step</h3>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-emerald-400/15 text-emerald-200 flex items-center justify-center border border-emerald-300/20">92%</div>
              </div>
              {[
                { name: 'Science + AI', pct: 92, color: 'bg-cyan-300' },
                { name: 'Commerce + Finance', pct: 78, color: 'bg-pink-300' },
                { name: 'Design + Product', pct: 66, color: 'bg-amber-300' },
              ].map((match, index) => (
                <div key={match.name} className="mb-3" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                    <span>{match.name}</span>
                    <span>{match.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className={`career-meter h-full rounded-full ${match.color}`} style={{ '--meter-width': `${match.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-9 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute inset-20 rounded-full border border-dashed border-cyan-200/20 animate-spin-slow-reverse" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-violet-500/40 animate-pulse-slow">
                <span className="absolute inset-0 rounded-full bg-cyan-300/20 animate-ping-slow" />
                <span className="relative text-5xl">🎯</span>
              </div>
            </div>

            {orbitCards.map((card) => (
              <div
                key={card.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ top: card.top, left: card.left, animationDelay: card.delay }}
              >
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2 backdrop-blur-xl shadow-lg shadow-slate-950/20 flex items-center gap-2 hover-card-glow">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-sm`}>
                    {card.icon}
                  </div>
                  <span className="text-white text-xs font-semibold whitespace-nowrap">{card.label}</span>
                </div>
              </div>
            ))}

            <div className="absolute bottom-10 right-10 w-52 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-xl animate-float-delay-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-white text-slate-950 flex items-center justify-center">🧭</div>
                <div>
                  <p className="text-white font-bold text-sm">Roadmap ready</p>
                  <p className="text-slate-300 text-xs">6 milestones unlocked</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-slate-300/70 text-xs tracking-[0.2em] uppercase">{t('hero.scroll')}</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-cyan-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
