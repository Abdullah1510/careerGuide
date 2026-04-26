import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { careerRoadmaps, after12thStreams } from '../data/careerRoadmaps';
import { getCollegeLabel } from '../utils/collegeLabels';
import { useLanguage } from '../context/LanguageContext';

const stepTypeConf = {
  education: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', label: 'Education',     dot: 'bg-violet-500' },
  exam:      { bg: 'bg-rose-100',   text: 'text-rose-700',   border: 'border-rose-200',   label: 'Entrance Exam', dot: 'bg-rose-500' },
  training:  { bg: 'bg-amber-100',  text: 'text-amber-700',  border: 'border-amber-200',  label: 'Training',      dot: 'bg-amber-500' },
  milestone: { bg: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-200',   label: 'Milestone',     dot: 'bg-blue-500' },
  growth:    { bg: 'bg-emerald-100',text: 'text-emerald-700',border: 'border-emerald-200',label: 'Career Growth', dot: 'bg-emerald-500' },
};

const demandColor = {
  'Extremely High':       'bg-green-500',
  'Very High':            'bg-emerald-500',
  'High':                 'bg-blue-500',
  'High (Most Competitive)': 'bg-slate-600',
  'Moderate — High':      'bg-teal-500',
  'Growing':              'bg-amber-500',
  'Moderate':             'bg-gray-400',
};

export default function RoadmapDetailPage() {
  const { streamId, careerId } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const stream = after12thStreams.find((s) => s.id === streamId);
  const careers = careerRoadmaps[streamId] || [];
  const career = careers.find((c) => c.id === careerId);

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-page-title mb-4">🔍</p>
          <p className="text-gray-500 mb-4">{t('streamGuide.notFound')}</p>
          <Link to={`/after-12th/${streamId}`} className="text-violet-600 underline">← {t('common.backToCareers')}</Link>
        </div>
      </div>
    );
  }

  const step = career.roadmap[activeStep];
  const conf = stepTypeConf[step?.type] || stepTypeConf.education;
  const mustKnow = career.mustKnow || [];
  const programmingLanguages = career.programmingLanguages || [];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <div className={`bg-gradient-to-r ${career.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-4 flex-wrap">
            <Link to="/" className="hover:text-white/80">{t('common.home')}</Link> ›
            <Link to="/after-12th" className="hover:text-white/80">{t('common.after12th')}</Link> ›
            <Link to={`/after-12th/${streamId}`} className="hover:text-white/80">{stream?.title}</Link> ›
            <span className="text-white/80">{career.title}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-18 h-18 bg-white/20 rounded-2xl p-4 text-4xl flex items-center justify-center flex-shrink-0 backdrop-blur">
              {career.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-page-title">{career.title}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${demandColor[career.demand] || 'bg-white/20'}`}>
                  {career.demand} {t('common.topCareer')}
                </span>
              </div>
              <p className="text-white/75 italic mb-4">{career.tagline}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 mt-1">
                <div className="min-w-0">
                  <p className="text-white/60 text-xs">{t('common.indiaSalary')}</p>
                  <p className="text-white font-bold text-sm leading-snug">{career.avgSalary}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-white/60 text-xs">{t('common.globalSalary')}</p>
                  <p className="text-white font-bold text-sm leading-snug">{career.globalSalary}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-white/60 text-xs">{t('common.duration')}</p>
                  <p className="text-white font-bold text-sm leading-snug">{career.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* ── INTERACTIVE ROADMAP ── */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                🗺️ {t('common.stepByStepRoadmap')}
                <span className="text-sm font-normal text-gray-400">({career.roadmap.length} {t('common.steps')})</span>
              </h2>

              {/* Step progress navigator */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4 overflow-x-auto">
                <div className="flex items-start gap-1 min-w-max">
                  {career.roadmap.map((s, idx) => (
                    <div key={idx} className="flex items-center">
                      <button
                        onClick={() => setActiveStep(idx)}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                          idx === activeStep
                            ? `bg-gradient-to-br ${career.gradient} text-white shadow-lg scale-110`
                            : idx < activeStep
                            ? 'bg-green-100 text-green-700 border-2 border-green-300'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}>
                          {idx < activeStep ? '✓' : s.step}
                        </div>
                        <span className={`text-xs font-medium text-center leading-tight max-w-[52px] ${idx === activeStep ? career.textColor : 'text-gray-400'}`}>
                          {s.title.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </button>
                      {idx < career.roadmap.length - 1 && (
                        <div className={`h-0.5 w-6 mx-0.5 mt-[-10px] ${idx < activeStep ? 'bg-green-300' : 'bg-gray-200'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Active step card */}
              <div className={`bg-white rounded-2xl border ${conf.border} shadow-sm overflow-hidden animate-fade-in-up`}>
                {/* Step header */}
                <div className={`${conf.bg} px-6 py-4`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${career.gradient} flex items-center justify-center text-2xl shadow flex-shrink-0`}>
                      {step?.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${conf.bg} ${conf.text} border ${conf.border}`}>
                          {t(`common.stepTypes.${step?.type || 'education'}`)}
                        </span>
                        <span className="text-xs text-gray-500">{t('common.step')} {step?.step} / {career.roadmap.length}</span>
                        <span className={`text-xs font-semibold ${conf.text} ml-auto`}>{step?.duration}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{step?.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Step body */}
                <div className="p-6">
                  <ul className="space-y-3 mb-5">
                    {step?.details.map((d, di) => (
                      <li key={di} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${di * 0.06}s` }}>
                        <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 text-white text-xs font-bold bg-gradient-to-br ${career.gradient}`}>
                          {di + 1}
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pro Tip */}
                  {step?.tip && (
                    <div className={`${conf.bg} border ${conf.border} rounded-xl p-4 flex gap-3`}>
                      <span className="text-xl flex-shrink-0">💡</span>
                      <div>
                        <p className={`text-xs font-bold ${conf.text} mb-0.5`}>{t('common.proTip')}</p>
                        <p className={`${conf.text} text-sm leading-relaxed`}>{step.tip}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Prev / Next */}
                <div className="px-6 pb-5 flex justify-between">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-30 transition-colors"
                  >
                    ← {t('common.previous')}
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(career.roadmap.length - 1, activeStep + 1))}
                    disabled={activeStep === career.roadmap.length - 1}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${career.gradient} hover:opacity-90 disabled:opacity-30 transition-all`}
                  >
                    {t('common.next')} →
                  </button>
                </div>
              </div>

              {/* All steps overview */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mt-4">
                <p className="text-sm font-bold text-gray-700 mb-3">{t('common.completeRoadmapOverview')}</p>
                <div className="space-y-2">
                  {career.roadmap.map((s, idx) => {
                    const sc = stepTypeConf[s.type] || stepTypeConf.education;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          idx === activeStep ? `${sc.bg} ${sc.border} border` : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${career.gradient} flex-shrink-0`}>
                          {s.step}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800">{s.title}</p>
                          <p className="text-xs text-gray-500 truncate">{s.details[0]}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${sc.bg} ${sc.text}`}>{s.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── CAREER GROWTH & SALARY ── */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span>💰</span> {t('common.careerGrowthSalary')}
              </h2>
              <div className="space-y-3">
                {career.careerGrowth.map((level, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 animate-fade-in-up" style={{ animationDelay: `${i * 0.07}s` }}>
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${career.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5`}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{level.role}</p>
                      <p className="text-xs text-gray-500 mb-1">{level.level}</p>
                      <p className={`font-bold text-xs ${career.textColor} leading-snug`}>{level.salary}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-600 font-bold mb-1">🇮🇳 {t('common.indiaSalary')}</p>
                  <p className="text-sm font-bold text-green-800">{career.avgSalary}</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-xs text-blue-600 font-bold mb-1">🌎 {t('common.globalSalary')}</p>
                  <p className="text-sm font-bold text-blue-800">{career.globalSalary}</p>
                </div>
              </div>
            </section>

            {(mustKnow.length > 0 || programmingLanguages.length > 0) && (
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🧠</span> {t('common.studentsMustKnow')}
                </h2>
                {mustKnow.length > 0 && (
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700 mb-3">{t('common.keyThings')}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {mustKnow.map((item) => (
                        <div key={item} className={`rounded-xl border ${career.borderColor || 'border-gray-200'} ${career.bgLight} p-4 text-sm text-gray-700`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {programmingLanguages.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-3">{t('common.programmingLanguagesToKnow')}</p>
                    <div className="flex flex-wrap gap-2">
                      {programmingLanguages.map((language) => (
                        <span
                          key={language}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${career.bgLight} ${career.textColor} border ${career.borderColor || 'border-transparent'}`}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* ── TOP RECRUITERS ── */}
            {career.topRecruiters && (
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🏢</span> {t('common.topRecruiters')}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {career.topRecruiters.map((r) => (
                    <span key={r} className={`px-4 py-2 ${career.bgLight} ${career.textColor} rounded-xl text-sm font-semibold`}>
                      {r}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-5">
            {/* Entrance Exams */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📝</span> {t('common.entranceExams')}
              </h3>
              <div className="space-y-3">
                {career.entranceExams.map((exam) => (
                  <div key={exam.name} className={`${career.bgLight} rounded-xl p-3`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900 text-sm">{exam.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${career.bgLight} ${career.textColor}`}>
                        {exam.month}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{exam.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Colleges */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🏛️</span> {t('common.topColleges')}
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                {t('common.labelsHelpCompare')}
              </p>
              <ul className="space-y-2">
                {(showAll ? career.topColleges : career.topColleges.slice(0, 5)).map((c, i) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-gradient-to-br ${career.gradient}`}>
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <span className="truncate">{c}</span>
                      <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${getCollegeLabel(c).className}`}>
                        {getCollegeLabel(c).label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {career.topColleges.length > 5 && (
                <button onClick={() => setShowAll(!showAll)} className={`mt-3 text-xs ${career.textColor} font-bold underline`}>
                  {showAll ? t('common.showLess') : `+${career.topColleges.length - 5} ${t('common.more')}`}
                </button>
              )}
            </div>

            {/* Counseling */}
            <div className={`bg-gradient-to-br ${career.gradient} rounded-2xl p-6 text-white`}>
              <span className="text-3xl block mb-2">🎓</span>
              <h3 className="font-bold text-lg mb-2">{t('common.needPersonalizedGuidance')}</h3>
              <p className="text-white/75 text-sm mb-4">
                {t('common.guidanceBodyPrefix')} {career.title} {t('common.guidanceBodySuffix')}
              </p>
              <Link
                to="/counseling"
                className="block w-full py-3 bg-white text-center font-bold rounded-xl text-sm hover:bg-opacity-90 transition-colors text-gray-900"
              >
                📞 {t('common.bookFreeCounseling')}
              </Link>
            </div>

            {/* Roadmap legend */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm">{t('common.stepTypesLabel')}</h3>
              <div className="space-y-2">
                {Object.entries(stepTypeConf).map(([type, c]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${c.dot} flex-shrink-0`} />
                    <span className={`text-xs font-medium ${c.text}`}>{t(`common.stepTypes.${type}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
