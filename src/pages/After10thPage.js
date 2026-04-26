import { Link } from 'react-router-dom';
import { after10thStreams } from '../data/careerRoadmaps';
import { useLanguage } from '../context/LanguageContext';

export default function After10thPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-700 via-indigo-700 to-violet-800 text-white py-16 px-4">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
            📘 {t('after10thPage.badge')}
          </span>
          <h1 className="text-page-title mb-4 animate-fade-in-up-delay">
            {t('after10thPage.title')}
          </h1>
          <p className="text-violet-200 text-lg max-w-2xl mx-auto animate-fade-in-up-delay-2">
            {t('after10thPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        {/* Advisory Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4">
          <span className="text-2xl flex-shrink-0">💡</span>
          <div>
            <p className="font-bold text-amber-800 mb-1">{t('after10thPage.tipTitle')}</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              {t('after10thPage.tipBody')}
            </p>
          </div>
        </div>

        {/* Pathway Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {after10thStreams.map((stream, i) => (
            <Link
              key={stream.id}
              to={`/after-10th/${stream.id}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover animate-fade-in-up block"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${stream.gradient} p-6 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{stream.icon}</span>
                  {stream.tag && (
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                      {stream.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-xl leading-tight">{stream.title}</h3>
                <p className="text-white/75 text-xs mt-1">{stream.subtitle}</p>
                <p className="text-white/60 text-xs mt-2">⏱ {stream.duration}</p>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{stream.description}</p>

                {/* Subjects */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-2">
                    {stream.id === 'iti' || stream.id === 'polytechnic'
                      ? t('common.availableTrades')
                      : stream.id === 'skill-courses'
                      ? t('common.sampleCourses')
                      : t('common.keySubjects')}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stream.subjects.slice(0, 4).map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{s}</span>
                    ))}
                    {stream.subjects.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-400 rounded text-xs">+{stream.subjects.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Career leads */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-2">{t('common.leadsTo')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(stream.careers || []).slice(0, 3).map((c) => (
                      <span key={c} className="px-2 py-0.5 bg-violet-50 text-violet-700 rounded text-xs font-medium">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{stream.eligibility}</span>
                  <span className="text-sm font-bold text-violet-600 group-hover:translate-x-1 transition-transform inline-block">
                    {t('common.explore')} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stream Comparison Table */}
        <div className="mt-14">
          <h2 className="text-section-title text-gray-900 mb-6 text-center">{t('after10thPage.compareTitle')}</h2>
          <p className="text-gray-500 text-sm text-center mb-6">{t('after10thPage.compareSubtitle')}</p>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-bold text-gray-700">{t('common.stream')}</th>
                    <th className="text-center px-4 py-4 font-bold text-gray-700">{t('common.duration')}</th>
                    <th className="text-center px-4 py-4 font-bold text-gray-700">{t('common.bestFor')}</th>
                    <th className="text-center px-4 py-4 font-bold text-gray-700">{t('common.topCareer')}</th>
                    <th className="text-center px-4 py-4 font-bold text-gray-700">{t('common.explore')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { icon: '🔬', name: 'Science (PCM/PCB)', dur: '2 years', best: 'Analytical minds', career: 'Engineer / Doctor', id: 'science-pcm-pcb', color: 'text-violet-600' },
                    { icon: '📊', name: 'Commerce',          dur: '2 years', best: 'Business minded', career: 'CA / Banker',        id: 'commerce',        color: 'text-blue-600' },
                    { icon: '🎨', name: 'Arts / Humanities', dur: '2 years', best: 'Communication',   career: 'IAS / Lawyer',       id: 'arts-humanities', color: 'text-pink-600' },
                    { icon: '🔧', name: 'ITI',               dur: '6m–2yr', best: 'Hands-on work',   career: 'Electrician / Fitter', id: 'iti',            color: 'text-orange-600' },
                    { icon: '⚙️', name: 'Polytechnic',       dur: '3 years', best: 'Technical field', career: 'Junior Engineer',    id: 'polytechnic',     color: 'text-teal-600' },
                    { icon: '🎯', name: 'Skill Courses',     dur: '3m–1yr', best: 'Quick job entry', career: 'Digital Marketer',   id: 'skill-courses',   color: 'text-slate-600' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-2 font-medium text-gray-800">
                          <span>{row.icon}</span> {row.name}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center text-gray-600">{row.dur}</td>
                      <td className="px-4 py-3.5 text-center text-gray-600">{row.best}</td>
                      <td className={`px-4 py-3.5 text-center font-semibold ${row.color}`}>{row.career}</td>
                      <td className="px-4 py-3.5 text-center">
                        <Link
                          to={`/after-10th/${row.id}`}
                          className={`px-3 py-1 rounded-lg text-xs font-bold ${row.color} bg-gray-100 hover:bg-gray-200 transition-colors`}
                        >
                          {t('common.viewDetails')} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">{t('after10thPage.ctaPrompt')}</p>
          <Link
            to="/after-12th"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            {t('after10thPage.ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
