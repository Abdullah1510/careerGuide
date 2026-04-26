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
    { label: 'Engineering', icon: '⚙️', top: '6%', left: '50%', delay: '0s', grad: 'from-violet-500 to-indigo-500' },
    { label: 'Medical', icon: '🏥', top: '24%', left: '84%', delay: '0.4s', grad: 'from-rose-500 to-pink-500' },
    { label: 'Commerce', icon: '📊', top: '70%', left: '82%', delay: '0.8s', grad: 'from-blue-500 to-cyan-500' },
    { label: 'Law', icon: '⚖️', top: '84%', left: '34%', delay: '1.2s', grad: 'from-amber-500 to-orange-500' },
    { label: 'Design', icon: '🎨', top: '18%', left: '10%', delay: '1.6s', grad: 'from-pink-500 to-rose-500' },
    { label: 'Pharmacy', icon: '💊', top: '56%', left: '8%', delay: '2s', grad: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.32),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#111827_45%,_#312e81_100%)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute -bottom-28 right-1/3 w-72 h-72 bg-fuchsia-500/12 rounded-full blur-3xl animate-float-delay-2" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-cyan-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              {t('hero.badge')}
            </span>

            <h1 className="text-display text-white animate-fade-in-up-delay max-w-3xl">
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
                className="flex items-center gap-3 px-6 py-3.5 bg-white text-slate-950 rounded-2xl font-bold shadow-xl shadow-violet-500/20 hover:scale-105 transition-transform"
              >
                <span className="text-xl">📘</span>
                {t('hero.after10th')}
              </button>
              <button
                onClick={() => onStartFlow('12th')}
                className="flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-2xl font-bold shadow-xl shadow-violet-500/20 hover:scale-105 transition-transform"
              >
                <span className="text-xl">🎓</span>
                {t('hero.after12th')}
              </button>
              <button
                onClick={() => setCurrentPage('exams')}
                className="flex items-center gap-3 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-bold border border-white/15 hover:bg-white/15 transition-colors"
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

          <div className="hidden lg:block relative h-[440px] animate-fade-in-up-delay">
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-white/5" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-violet-500/40 animate-pulse-slow">
                <span className="text-5xl">🎯</span>
              </div>
            </div>

            {orbitCards.map((card) => (
              <div
                key={card.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ top: card.top, left: card.left, animationDelay: card.delay }}
              >
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 backdrop-blur-xl shadow-lg shadow-slate-950/20 flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.grad} flex items-center justify-center text-sm`}>
                    {card.icon}
                  </div>
                  <span className="text-white text-xs font-semibold whitespace-nowrap">{card.label}</span>
                </div>
              </div>
            ))}
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
