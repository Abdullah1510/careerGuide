import { careerRoadmaps } from '../data/careerRoadmaps';
import { useLanguage } from '../context/LanguageContext';

const demandColor = {
  'Extremely High': 'bg-green-100 text-green-800',
  'Very High': 'bg-emerald-100 text-emerald-800',
  'High': 'bg-blue-100 text-blue-800',
  'Moderate — High': 'bg-teal-100 text-teal-800',
  'Growing': 'bg-amber-100 text-amber-800',
  'Moderate': 'bg-gray-100 text-gray-700',
  'High (Most Competitive)': 'bg-slate-100 text-slate-800',
};

// For 10th streams (no sub-careers — show stream info + after 12th direction)
function After10thStreamDetail({ stream, onSelectCareer, onBack }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className={`bg-gradient-to-r ${stream.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          <button onClick={onBack} className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-5 transition-colors">← {t('common.backToStreams')}</button>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{stream.icon}</span>
            <div>
              <h1 className="text-page-title">{stream.title}</h1>
              <p className="text-white/80 mt-1">{stream.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Quick info */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 grid sm:grid-cols-3 gap-4">
                {[
                { label: t('common.duration'), val: stream.duration },
                { label: t('common.eligibility'), val: stream.eligibility },
                { label: t('common.leadsTo'), val: stream.leads_to?.split(',')[0] + '...' },
              ].map(({ label, val }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-sm font-semibold text-gray-800">{val}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-3">{t('common.aboutThisPath')}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{stream.description}</p>
            </div>

            {/* Why Choose */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">✅ {t('common.whyChoose')} {stream.title}</h2>
              <ul className="space-y-3">
                {stream.why_choose?.map((w, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">📚 {t('common.subjectsOptions')}</h2>
              <div className="flex flex-wrap gap-2">
                {stream.subjects?.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>

            {/* Career paths it leads to */}
            {stream.careers && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">🚀 {t('common.careerPaths')}</h2>
                <div className="flex flex-wrap gap-2">
                  {stream.careers.map((c) => (
                    <span key={c} className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm font-semibold">{c}</span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-4">{t('common.complete12thToExplore')}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-3">{t('common.nextStep')} 🎯</h3>
              <p className="text-violet-200 text-sm mb-4">{t('common.complete12thToExplore')}</p>
              <button
                onClick={() => onSelectCareer({ goTo12th: true })}
                className="w-full py-2.5 bg-white text-violet-700 font-bold rounded-xl text-sm hover:bg-violet-50 transition-colors"
              >
                {t('common.after12thCareers')} →
              </button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h3 className="font-bold text-amber-800 mb-2">💡 {t('common.quickTip')}</h3>
              <p className="text-amber-700 text-sm">
                {stream.id === 'iti' && 'ITI + Apprenticeship + NIMI certificate = Govt job eligible. Many ITI graduates earn ₹20K–₹40K/month within a year.'}
                {stream.id === 'polytechnic' && 'Diploma holders can enter B.Tech 2nd year (lateral entry) saving 1 year. Govt Junior Engineer posts also available.'}
                {stream.id === 'science-pcm-pcb' && 'Start JEE/NEET prep from 11th itself. 2 years of focused preparation is the golden window.'}
                {stream.id === 'commerce' && 'Register for CA Foundation while in 12th. This saves 6 months and lets you clear it right after 12th boards.'}
                {stream.id === 'arts-humanities' && 'Read The Hindu newspaper daily from 11th. This habit alone contributes 30% of your UPSC preparation.'}
                {stream.id === 'skill-courses' && 'PMKVY government scheme offers free skill training with placement assistance. Check pmkvyofficial.org for courses near you.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareerList({ stream, classLevel, onSelect, onBack }) {
  const { t } = useLanguage();
  const is10th = classLevel === '10th';

  // For 10th streams — show stream detail page
  if (is10th) {
    return <After10thStreamDetail stream={stream} onSelectCareer={onSelect} onBack={onBack} />;
  }

  // For 12th streams — show career cards
  const careers = careerRoadmaps[stream.id] || [];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className={`bg-gradient-to-r ${stream.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          <button onClick={onBack} className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-5 transition-colors">
            ← {t('common.backToStreams')}
          </button>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
            <span>{t('after12thPage.badge')}</span> <span>›</span>
            <span className="text-white">{stream.title}</span> <span>›</span>
            <span>{t('common.step3ChooseCareer')}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{stream.icon}</span>
            <div>
              <h1 className="text-page-title">{stream.title} Careers</h1>
              <p className="text-white/80 mt-1">{stream.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <p className="text-gray-500 text-sm mb-6 text-center">
          {t('common.exploreAll')} {t('common.viewDetails')}
        </p>

        {careers.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4">🚧</p>
            <p>{t('common.moreCareersComing')}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careers.map((career, i) => (
              <button
                key={career.id}
                onClick={() => onSelect(career)}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left card-hover animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${career.gradient} p-5 text-white`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{career.icon}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${demandColor[career.demand] || 'bg-white/20 text-white'}`}>
                      {career.demand}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{career.title}</h3>
                  <p className="text-white/75 text-xs mt-1 italic">{career.tagline}</p>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Salary */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400">{t('common.indiaSalary')}</p>
                      <p className="font-bold text-gray-900 text-sm">{career.avgSalary}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{t('common.duration')}</p>
                      <p className="font-semibold text-gray-700 text-xs">{career.duration}</p>
                    </div>
                  </div>

                  {/* Roadmap preview — first 3 steps */}
                  <div className="space-y-2 mb-4">
                    {career.roadmap.slice(0, 3).map((step, si) => (
                      <div key={si} className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-gradient-to-br ${career.gradient} text-white`}>
                          {step.step}
                        </span>
                        <span className="text-xs text-gray-600 truncate">{step.title}</span>
                        {si < 2 && <span className="text-gray-300 text-xs ml-auto">↓</span>}
                      </div>
                    ))}
                    <p className="text-xs text-gray-400 pl-7">+ {career.roadmap.length - 3} more steps...</p>
                  </div>

                  {/* CTA */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-1">
                      {career.entranceExams.slice(0, 2).map((e) => (
                        <span key={e.name} className={`text-xs px-2 py-0.5 ${career.bgLight} ${career.textColor} rounded font-medium`}>
                          {e.name}
                        </span>
                      ))}
                    </div>
                    <span className={`text-sm font-bold ${career.textColor} group-hover:translate-x-1 transition-transform inline-block`}>
                      {t('common.view')} →
                    </span>
                  </div>
                </div>
              </button>
            ))}

            {/* More careers coming card */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
              <span className="text-3xl mb-3">🔜</span>
              <h3 className="font-bold text-gray-700 mb-2">{t('common.moreCareersComing')}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Architecture, Merchant Navy, B.Sc Pure Sciences, BCA, Veterinary and more roadmaps being added.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
