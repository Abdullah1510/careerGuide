import { Link } from 'react-router-dom';
import { careerStreamGuides } from '../data/streamGuides';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedStreamLabel } from '../utils/streamI18n';

export default function StreamsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-violet-900 text-white py-16 px-4">
        <div className="section-container">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-semibold mb-4">
            🧭 {t('streamHub.badge')}
          </span>
          <h1 className="text-page-title mb-4">{t('streamHub.title')}</h1>
          <p className="text-slate-200 max-w-3xl text-body-lg">
            {t('streamHub.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerStreamGuides.map((guide, index) => (
            <Link
              key={guide.id}
              to={`/streams/${guide.id}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className={`bg-gradient-to-r ${guide.gradient} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{guide.icon}</span>
                  <span className="bg-white/15 text-xs px-3 py-1 rounded-full font-semibold">
                    {t('streamHub.cardLink')}
                  </span>
                </div>
                <h2 className="font-bold text-2xl mt-4 leading-tight">
                  {getLocalizedStreamLabel(t, guide.id).title}
                </h2>
                <p className="text-white/75 mt-2 text-sm leading-relaxed">
                  {getLocalizedStreamLabel(t, guide.id).summary}
                </p>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.studyFocus.slice(0, 4).map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{guide.data.eligibility}</span>
                  <span className="text-violet-600 font-bold group-hover:translate-x-1 transition-transform">{t('common.open')} →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
