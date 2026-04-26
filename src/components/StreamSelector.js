import { after10thStreams, after12thStreams } from '../data/careerRoadmaps';
import { useLanguage } from '../context/LanguageContext';

export default function StreamSelector({ classLevel, onSelect, onBack }) {
  const streams = classLevel === '10th' ? after10thStreams : after12thStreams;
  const is10th = classLevel === '10th';
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white py-14 px-4">
        <div className="section-container">
          <button onClick={onBack} className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-5 transition-colors">
            ← {t('streamGuide.back')}
          </button>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-violet-300 text-xs mb-3">
            <span className="bg-white/20 px-2 py-0.5 rounded">
              {t('common.levelChosen')}: {classLevel === '10th' ? t('after10thPage.badge') : t('after12thPage.badge')}
            </span>
            <span>›</span>
            <span className="bg-white/30 px-2 py-0.5 rounded">{t('common.step2ChooseStream')}</span>
          </div>
          <h1 className="text-page-title mb-2">
            {is10th ? t('after10thPage.title') : t('after12thPage.title')}
          </h1>
          <p className="text-violet-200">
            {is10th
              ? t('after10thPage.subtitle')
              : t('after12thPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Info Banner */}
        {is10th && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex gap-3">
            <span className="text-xl">💡</span>
            <p className="text-amber-800 text-sm">
              <strong>{t('common.notSure')}?</strong> {t('common.streamSwitchingBody')}
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {streams.map((stream, i) => (
            <button
              key={stream.id}
              onClick={() => onSelect(stream)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left card-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${stream.gradient} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{stream.icon}</span>
                  {stream.careersCount && (
                    <span className="bg-white/20 text-xs px-2.5 py-1 rounded-full font-medium">
                      {stream.careersCount} {t('common.careerPaths')}
                    </span>
                  )}
                  {stream.duration && (
                    <span className="bg-white/20 text-xs px-2.5 py-1 rounded-full font-medium">
                      {stream.duration}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-bold text-xl leading-tight">{stream.title}</h3>
                <p className="text-white/80 text-xs mt-1">{stream.subtitle}</p>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{stream.description}</p>

                {/* Subjects / Top exams */}
                {stream.subjects && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1.5">
                      {is10th ? t('common.subjectsOptions') : t('common.keySubjects')}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stream.subjects.slice(0, 4).map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {stream.topExams && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1.5">{t('common.topEntranceExams')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {stream.topExams.map((e) => (
                        <span key={e} className="px-2 py-0.5 bg-violet-50 text-violet-700 rounded text-xs font-medium">{e}</span>
                      ))}
                    </div>
                  </div>
                )}

                {stream.why_choose && (
                  <ul className="space-y-1 mb-3">
                    {stream.why_choose.slice(0, 2).map((w) => (
                      <li key={w} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {stream.eligibility || stream.leads_to?.split(',')[0] || ''}
                  </span>
                  <span className="text-violet-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
