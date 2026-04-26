import { useState } from 'react';
import { getCollegeLabel } from '../utils/collegeLabels';
import { useLanguage } from '../context/LanguageContext';

const stepTypeConfig = {
  education: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', label: 'Education', dot: 'bg-violet-500' },
  exam: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', label: 'Entrance Exam', dot: 'bg-rose-500' },
  training: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', label: 'Training', dot: 'bg-amber-500' },
  milestone: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', label: 'Milestone', dot: 'bg-blue-500' },
  growth: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Career Growth', dot: 'bg-emerald-500' },
};

const demandBadge = {
  'Extremely High': 'bg-green-500',
  'Very High': 'bg-emerald-500',
  'High': 'bg-blue-500',
  'Moderate — High': 'bg-teal-500',
  'Growing': 'bg-amber-500',
  'Moderate': 'bg-gray-400',
  'High (Most Competitive)': 'bg-slate-600',
};

export default function RoadmapPage({ career, onBack, onBookCounseling }) {
  const [activeStep, setActiveStep] = useState(0);
  const [showAllColleges, setShowAllColleges] = useState(false);
  const { t } = useLanguage();

  if (!career) return null;

  const mustKnow = career.mustKnow || career.studentMustKnow || [];
  const programmingLanguages = career.programmingLanguages || [];

  const currentStep = career.roadmap[activeStep];
  const typeConf = stepTypeConfig[currentStep?.type] || stepTypeConfig.education;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Header */}
      <div className={`bg-gradient-to-r ${career.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          <button onClick={onBack} className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-5 transition-colors">
            ← {t('common.backToCareers')}
          </button>
          <div className="flex items-start gap-5">
            <div className="w-18 h-18 bg-white/20 rounded-2xl p-4 backdrop-blur text-4xl flex items-center justify-center flex-shrink-0">
              {career.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-page-title">{career.title}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${demandBadge[career.demand] || 'bg-white/20'}`}>
                  {career.demand} Demand
                </span>
              </div>
              <p className="text-white/80 text-base italic mb-4">{career.tagline}</p>
              <div className="flex flex-wrap gap-5">
                <div>
                  <p className="text-white/60 text-xs">{t('common.indiaSalary')}</p>
                  <p className="text-white font-bold">{career.avgSalary}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">{t('common.globalSalary')}</p>
                  <p className="text-white font-bold">{career.globalSalary}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">{t('common.duration')}</p>
                  <p className="text-white font-bold">{career.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main — Roadmap */}
          <div className="lg:col-span-2 space-y-8">

            {/* ── INTERACTIVE ROADMAP TIMELINE ── */}
            <section>
              <h2 className="text-section-title text-gray-900 mb-6 flex items-center gap-2">
                <span>🗺️</span> {t('common.stepByStepRoadmap')}
              </h2>

              {/* Step Progress Bar */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {career.roadmap.map((step, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
                      >
                        {/* Connector line */}
                        <div className="flex items-center w-full">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                            idx === activeStep
                              ? `bg-gradient-to-br ${career.gradient} text-white shadow-lg scale-110`
                              : idx < activeStep
                              ? 'bg-green-100 text-green-700 border-2 border-green-300'
                              : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                          }`}>
                            {idx < activeStep ? '✓' : step.step}
                          </div>
                          {idx < career.roadmap.length - 1 && (
                            <div className={`h-0.5 w-8 mx-1 transition-colors ${idx < activeStep ? 'bg-green-300' : 'bg-gray-200'}`} />
                          )}
                        </div>
                        <span className={`text-xs font-medium max-w-[4rem] text-center leading-tight transition-colors ${
                          idx === activeStep ? career.textColor : 'text-gray-400'
                        }`}>
                          {step.title.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Detail Card */}
              <div className={`bg-white rounded-2xl border ${typeConf.border} shadow-sm overflow-hidden animate-fade-in-up`}>
                {/* Step header */}
                <div className={`${typeConf.bg} px-6 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${career.gradient} flex items-center justify-center text-white font-bold text-lg shadow`}>
                      {currentStep?.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${typeConf.bg} ${typeConf.text} border ${typeConf.border}`}>
                          {t(`common.stepTypes.${currentStep?.type || 'education'}`)}
                        </span>
                        <span className="text-xs text-gray-500">{t('common.step')} {currentStep?.step} {t('common.of')} {career.roadmap.length}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{currentStep?.title}</h3>
                    </div>
                  </div>
                  <div className={`text-right`}>
                    <p className="text-xs text-gray-500">{t('common.duration')}</p>
                    <p className={`font-semibold text-sm ${typeConf.text}`}>{currentStep?.duration}</p>
                  </div>
                </div>

                {/* Step body */}
                <div className="p-6">
                  <ul className="space-y-3 mb-5">
                    {currentStep?.details.map((d, di) => (
                      <li key={di} className="flex items-start gap-3">
                        <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 text-white text-xs font-bold bg-gradient-to-br ${career.gradient}`}>
                          {di + 1}
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pro Tip */}
                  {currentStep?.tip && (
                    <div className={`${typeConf.bg} ${typeConf.border} border rounded-xl p-4 flex gap-3`}>
                      <span className="text-lg flex-shrink-0">💡</span>
                      <div>
                        <p className={`text-xs font-bold ${typeConf.text} mb-0.5`}>{t('common.proTip')}</p>
                        <p className={`${typeConf.text} text-sm leading-relaxed`}>{currentStep.tip}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="px-6 pb-5 flex justify-between">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 transition-colors"
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

              {/* All steps overview (collapsed) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mt-4">
                <h3 className="font-semibold text-gray-800 mb-4 text-sm">{t('common.completeRoadmapOverview')}</h3>
                <div className="space-y-2">
                  {career.roadmap.map((step, idx) => {
                    const conf = stepTypeConfig[step.type] || stepTypeConfig.education;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                          idx === activeStep ? `${conf.bg} ${conf.border} border` : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br ${career.gradient} text-white flex-shrink-0`}>
                          {step.step}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 truncate">{step.title}</p>
                          <p className="text-xs text-gray-500 truncate">{step.details[0]}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${conf.bg} ${conf.text} flex-shrink-0`}>
                          {step.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── CAREER GROWTH & SALARY ── */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-section-title text-gray-900 mb-5 flex items-center gap-2">
                <span>💰</span> {t('common.careerGrowthSalary')}
              </h2>
              <div className="space-y-3">
                {career.careerGrowth.map((level, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${career.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{level.role}</p>
                      <p className="text-xs text-gray-500">{level.level}</p>
                    </div>
                    <div className={`font-bold text-sm ${career.textColor}`}>{level.salary}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-600 font-semibold mb-1">🇮🇳 {t('common.indiaSalary')}</p>
                  <p className="text-sm font-bold text-green-800">{career.avgSalary}</p>
                </div>
                <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-xs text-blue-600 font-semibold mb-1">🌎 {t('common.globalSalary')}</p>
                  <p className="text-sm font-bold text-blue-800">{career.globalSalary}</p>
                </div>
              </div>
            </section>

            {(mustKnow.length > 0 || programmingLanguages.length > 0) && (
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-section-title text-gray-900 mb-4 flex items-center gap-2">
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
                <h2 className="text-section-title text-gray-900 mb-4 flex items-center gap-2">
                  <span>🏢</span> {t('common.topRecruiters')}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {career.topRecruiters.map((r) => (
                    <span key={r} className={`px-4 py-2 ${career.bgLight} ${career.textColor} rounded-xl text-sm font-semibold border ${career.borderColor || 'border-transparent'}`}>
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
                  <div key={exam.name} className={`border rounded-xl p-3 ${career.bgLight} border-opacity-50`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900 text-sm">{exam.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${career.bgLight} ${career.textColor}`}>
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
                {(showAllColleges ? career.topColleges : career.topColleges.slice(0, 5)).map((college, i) => (
                  <li key={college} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${career.gradient} flex-shrink-0`}>
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <span className="truncate">{college}</span>
                      <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${getCollegeLabel(college).className}`}>
                        {getCollegeLabel(college).label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {career.topColleges.length > 5 && (
                <button
                  onClick={() => setShowAllColleges(!showAllColleges)}
                  className={`mt-3 text-xs ${career.textColor} font-semibold underline`}
                >
                  {showAllColleges ? t('common.showLess') : `+${career.topColleges.length - 5} ${t('common.more')}`}
                </button>
              )}
            </div>

            {/* Counseling CTA */}
            <div className={`bg-gradient-to-br ${career.gradient} rounded-2xl p-6 text-white`}>
              <span className="text-3xl block mb-3">🎓</span>
              <h3 className="font-bold text-lg mb-2">{t('common.needPersonalizedGuidance')}</h3>
              <p className="text-white/80 text-sm mb-4">
                {t('common.guidanceBodyPrefix')} {career.title} {t('common.guidanceBodySuffix')}
              </p>
              <button
                onClick={onBookCounseling}
                className="w-full py-3 bg-white font-bold rounded-xl text-sm hover:bg-opacity-90 transition-colors"
                style={{ color: 'inherit' }}
              >
                📞 {t('common.bookFreeCounseling')}
              </button>
            </div>

            {/* Step Legend */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm">{t('common.stepTypesLabel')}</h3>
              <div className="space-y-2">
                {Object.entries(stepTypeConfig).map(([type, conf]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${conf.dot} flex-shrink-0`} />
                    <span className={`text-xs font-medium ${conf.text}`}>{t(`common.stepTypes.${type}`)}</span>
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
