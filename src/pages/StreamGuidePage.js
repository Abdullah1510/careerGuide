import { Link, useParams } from 'react-router-dom';
import { careerStreamGuideMap } from '../data/streamGuides';
import { getCollegeLabel } from '../utils/collegeLabels';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedStreamLabel } from '../utils/streamI18n';

function SectionTitle({ icon, title, sub }) {
  return (
    <div className="mb-4">
      <h2 className="text-section-title text-gray-900 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      {sub && <p className="text-sm text-gray-500 mt-2 leading-relaxed">{sub}</p>}
    </div>
  );
}

export default function StreamGuidePage() {
  const { streamId } = useParams();
  const { t } = useLanguage();
  const guide = careerStreamGuideMap[streamId];

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center">
          <p className="text-page-title mb-4">🔍</p>
          <p className="text-gray-500 mb-4">{t('streamGuide.notFound')}</p>
          <Link to="/streams" className="text-violet-600 underline">
            ← {t('streamGuide.back')}
          </Link>
        </div>
      </div>
    );
  }

  const stream = guide.data;
  const collegeLabelNote =
    'College labels help you compare institutes faster: IIT/NIT/IIIT for engineering, AIIMS for medical, NLU for law, and Design schools for creative careers.';

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className={`bg-gradient-to-r ${guide.gradient} text-white py-16 px-4`}>
        <div className="section-container">
          <Link to="/streams" className="inline-flex items-center gap-1 text-white/65 hover:text-white text-sm mb-5 transition-colors">
            ← {t('streamGuide.back')}
          </Link>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center text-4xl backdrop-blur flex-shrink-0">
                {guide.icon}
              </div>
              <div>
                <h1 className="text-page-title">{getLocalizedStreamLabel(t, guide.id).title}</h1>
                <p className="text-white/80 mt-2 max-w-3xl text-body-lg">{getLocalizedStreamLabel(t, guide.id).summary}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="glass px-3 py-1.5 rounded-xl text-sm">⏱ {stream.duration}</span>
              <span className="glass px-3 py-1.5 rounded-xl text-sm">✅ {stream.eligibility}</span>
              <span className="glass px-3 py-1.5 rounded-xl text-sm">💰 {stream.fees}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <SectionTitle
                icon="📘"
                title={t('streamGuide.about')}
                sub={t('streamGuide.aboutSub')}
              />
              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                {guide.whoItFits.map((item) => (
                  <div key={item} className={`rounded-xl border ${stream.borderColor} ${stream.bgLight} p-4 text-sm text-gray-700`}>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <SectionTitle
                icon="📚"
                title={t('streamGuide.study')}
                sub={t('streamGuide.studySub')}
              />
              <div className="flex flex-wrap gap-2">
                {guide.studyFocus.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <SectionTitle
                icon="🚀"
                title={t('streamGuide.careers')}
                sub={t('streamGuide.careersSub')}
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {guide.careers.map((career) => (
                  <div key={career} className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-semibold text-gray-900 text-sm">{career}</span>
                    <span className="text-xs text-gray-400">Path</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <SectionTitle
                icon="📝"
                title={t('streamGuide.exams')}
                sub={t('streamGuide.examsSub')}
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {stream.entranceExams.map((exam) => (
                  <div key={exam.name} className={`rounded-xl border ${stream.borderColor} ${stream.bgLight} p-4`}>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-semibold text-gray-900 text-sm">{exam.name}</p>
                      <span className="text-xs font-semibold text-gray-500">{exam.month}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{exam.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <SectionTitle
                icon="🏛️"
                title={t('streamGuide.colleges')}
                sub={collegeLabelNote}
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {stream.topColleges.map((college) => {
                  const label = getCollegeLabel(college);
                  return (
                    <div key={college} className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="text-sm font-medium text-gray-800">{college}</span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${label.className}`}>
                        {label.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {guide.languages.length > 0 && (
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle
                  icon="💻"
                  title={t('streamGuide.programming')}
                  sub={t('streamGuide.programmingSub')}
                />
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((language) => (
                    <span key={language} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${stream.bgLight} ${stream.textColor} border ${stream.borderColor}`}>
                      {language}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {guide.tools.length > 0 && (
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle
                  icon="🧰"
                  title={t('streamGuide.tools')}
                  sub={t('streamGuide.toolsSub')}
                />
                <div className="flex flex-wrap gap-2">
                  {guide.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-5">
            <div className={`bg-gradient-to-br ${guide.gradient} rounded-2xl p-6 text-white`}>
              <h3 className="font-bold text-lg mb-2">{t('streamGuide.quickDirection')}</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                {guide.nextSteps[0]}
              </p>
              <div className="space-y-2">
                {guide.nextSteps.slice(1, 4).map((step) => (
                  <div key={step} className="bg-white/10 rounded-xl px-3 py-2 text-sm text-white/90">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>📊</span> {t('streamGuide.keyFacts')}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-500">{t('common.duration')}</span>
                  <span className="font-semibold text-gray-900">{stream.duration}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-500">{t('common.fees')}</span>
                  <span className="font-semibold text-gray-900">{stream.fees}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-500">{t('common.eligibility')}</span>
                  <span className="font-semibold text-gray-900">{stream.eligibility}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>🧭</span> {t('streamGuide.nextLinks')}
              </h3>
              <div className="space-y-3">
                <Link
                  to={guide.after12thPath}
                  className="block w-full py-3 bg-violet-50 text-violet-700 rounded-xl text-sm font-semibold text-center border border-violet-100 hover:bg-violet-100 transition-colors"
                >
                  {t('streamGuide.openRoadmaps')}
                </Link>
                <Link
                  to="/exams"
                  className="block w-full py-3 bg-gray-50 text-gray-700 rounded-xl text-sm font-semibold text-center border border-gray-100 hover:bg-gray-100 transition-colors"
                >
                  {t('streamGuide.examCalendar')}
                </Link>
                <Link
                  to="/counseling"
                  className="block w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-sm font-bold text-center hover:opacity-95 transition-opacity"
                >
                  {t('streamGuide.counseling')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
