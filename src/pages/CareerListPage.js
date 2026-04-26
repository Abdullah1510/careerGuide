import { useParams, Link } from 'react-router-dom';
import { after12thStreams, careerRoadmaps } from '../data/careerRoadmaps';
import { useLanguage } from '../context/LanguageContext';

const demandBadge = {
  'Extremely High':       'bg-green-100 text-green-800',
  'Very High':            'bg-emerald-100 text-emerald-800',
  'High':                 'bg-blue-100 text-blue-800',
  'Moderate — High':      'bg-teal-100 text-teal-800',
  'High (Most Competitive)': 'bg-slate-100 text-slate-700',
  'Growing':              'bg-amber-100 text-amber-800',
  'Moderate':             'bg-gray-100 text-gray-700',
};

export default function CareerListPage() {
  const { streamId } = useParams();
  const stream = after12thStreams.find((s) => s.id === streamId);
  const careers = careerRoadmaps[streamId] || [];
  const { t } = useLanguage();

  if (!stream) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-page-title mb-4">🔍</p>
          <p className="text-gray-500 mb-4">{t('streamGuide.notFound')}</p>
          <Link to="/after-12th" className="text-violet-600 underline">← {t('common.backToStreams')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <div className={`bg-gradient-to-r ${stream.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          <Link to="/after-12th" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-5 transition-colors">
            ← {t('common.backToStreams')}
          </Link>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <Link to="/" className="hover:text-white/80">{t('common.home')}</Link> ›
            <Link to="/after-12th" className="hover:text-white/80">{t('common.after12th')}</Link> ›
            <span className="text-white/80">{stream.title}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{stream.icon}</span>
            <div>
              <h1 className="text-page-title">{stream.title} {t('common.careerPaths')}</h1>
              <p className="text-white/80 mt-1">{stream.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <p className="text-gray-500 text-sm text-center mb-8">
          {t('common.exploreAll')} {t('common.viewDetails')}
        </p>

        {careers.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-page-title mb-3">🚧</p>
            <p>{t('common.moreCareersComing')}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, i) => (
              <Link
                key={career.id}
                to={`/after-12th/${streamId}/${career.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover animate-fade-in-up block"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-r ${career.gradient} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{career.icon}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${demandBadge[career.demand] || 'bg-white/20 text-white'}`}>
                      {career.demand}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl leading-tight">{career.title}</h3>
                  <p className="text-white/70 text-xs mt-1 italic">{career.tagline}</p>
                </div>

                {/* Card body */}
                <div className="p-5">
                  {/* Salary row */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400">{t('common.indiaSalary')}</p>
                      <p className="font-bold text-gray-900">{career.avgSalary}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{t('common.duration')}</p>
                      <p className="text-sm font-semibold text-gray-600">{career.duration}</p>
                    </div>
                  </div>

                  {/* Roadmap preview steps */}
                  <div className="space-y-1.5 mb-4">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-2">{t('common.stepByStepRoadmap')}</p>
                    {career.roadmap.slice(0, 4).map((step, si) => (
                      <div key={si} className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${career.gradient} flex-shrink-0`}>
                          {step.step}
                        </span>
                        <span className="text-xs text-gray-600 truncate">{step.title}</span>
                        {si < 3 && <span className="text-gray-300 text-xs ml-auto">↓</span>}
                      </div>
                    ))}
                    {career.roadmap.length > 4 && (
                      <p className="text-xs text-gray-400 pl-7">+ {career.roadmap.length - 4} {t('common.steps')}</p>
                    )}
                  </div>

                  {/* Exams + CTA */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {career.entranceExams.slice(0, 2).map((e) => (
                        <span key={e.name} className={`text-xs px-2 py-0.5 ${career.bgLight} ${career.textColor} rounded font-semibold`}>
                          {e.name}
                        </span>
                      ))}
                    </div>
                    <span className={`text-sm font-bold ${career.textColor} group-hover:translate-x-1 transition-transform inline-block flex-shrink-0 ml-2`}>
                      {t('common.view')} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* More coming soon card */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center">
              <span className="text-page-title mb-3">🔜</span>
              <h3 className="font-bold text-gray-700 mb-2">{t('common.moreCareersComing')}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {streamId === 'pcm' && 'Mechanical Engineer, Aerospace, NDA, B.Arch, Merchant Navy roadmaps being added.'}
                {streamId === 'pcb' && 'BDS Dentist, BAMS Ayurveda, BVSc Veterinary, Agriculture roadmaps being added.'}
                {streamId === 'commerce-12' && 'Company Secretary (CS), CMA, B.Com Banking, Digital Marketing roadmaps coming.'}
                {streamId === 'arts-12' && t('common.moreCareersComing')}
                {streamId === 'bsc' && 'B.Sc Veterinary Science, B.Sc Psychology, B.Sc Geology, B.Sc Food Technology, and more coming soon.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
