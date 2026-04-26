import { Link } from 'react-router-dom';
import { after12thStreams } from '../data/careerRoadmaps';
import { useLanguage } from '../context/LanguageContext';

export default function After12thPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-800 text-white py-16 px-4">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
            🎓 {t('after12thPage.badge')}
          </span>
          <h1 className="text-page-title mb-4 animate-fade-in-up">
            {t('after12thPage.title')}
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto animate-fade-in-up-delay">
            {t('after12thPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="mb-8 flex justify-center">
          <Link
            to="/streams"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-violet-200 bg-violet-50 text-violet-700 text-sm font-semibold hover:bg-violet-100 transition-colors"
          >
            {t('common.exploreCareerStreams')} →
          </Link>
        </div>

        {/* Important note */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 flex gap-4">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <div>
            <p className="font-bold text-blue-800 mb-1">{t('after12thPage.switchTitle')}</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              {t('after12thPage.switchBody')}
            </p>
          </div>
        </div>

        {/* Stream Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {after12thStreams.map((stream, i) => (
            <Link
              key={stream.id}
              to={`/after-12th/${stream.id}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover animate-fade-in-up block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${stream.gradient} p-8 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{stream.icon}</span>
                  <span className="bg-white/20 text-xs px-3 py-1 rounded-full font-semibold">
                    {stream.careersCount} {t('common.careerPaths')}
                  </span>
                </div>
                <h3 className="font-bold text-2xl">{stream.title}</h3>
                <p className="text-white/75 mt-1 text-sm">{stream.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{stream.description}</p>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wide mb-2">{t('common.topEntranceExams')}</p>
                  <div className="flex flex-wrap gap-2">
                    {stream.topExams.map((e) => (
                      <span key={e} className="px-3 py-1 bg-violet-50 text-violet-700 rounded-lg text-xs font-bold">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{t('common.clickToSeeAll')} {stream.careersCount} {t('common.careerPaths')}</span>
                  <span className="text-violet-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                    {t('common.exploreAll')} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular careers quick links */}
        <div className="mt-12">
          <h2 className="text-section-title text-gray-900 mb-6 text-center">{t('after12thPage.sectionTitle')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '💻', title: 'Software Engineer', path: '/after-12th/pcm/software-engineer' },
              { icon: '🤖', title: 'AI / ML Engineer',   path: '/after-12th/pcm/ai-ml-engineer' },
              { icon: '☁️', title: 'DevOps / Cloud',     path: '/after-12th/pcm/devops-engineer' },
              { icon: '🔌', title: 'Circuit Engineer',   path: '/after-12th/pcm/electronics-circuit-engineer' },
              { icon: '👨‍⚕️', title: 'MBBS Doctor',        path: '/after-12th/pcb/mbbs-doctor' },
              { icon: '🏦', title: 'Chartered Accountant', path: '/after-12th/commerce-12/chartered-accountant' },
              { icon: '⚖️', title: 'Lawyer (LLB)',       path: '/after-12th/arts-12/lawyer' },
              { icon: '📊', title: 'Data Scientist',     path: '/after-12th/pcm/data-scientist' },
              { icon: '💊', title: 'Pharmacist',          path: '/after-12th/pcb/pharmacist' },
              { icon: '🏛️', title: 'IAS / IPS Officer',  path: '/after-12th/arts-12/ias-ips' },
              { icon: '📈', title: 'Investment Banker',   path: '/after-12th/commerce-12/investment-banker' },
            ].map((c) => (
              <Link
                key={c.title}
                to={c.path}
                className="group flex items-center gap-2 bg-white rounded-xl border border-gray-100 shadow-sm p-3 hover:border-violet-300 hover:shadow-md transition-all"
              >
                <span className="text-xl">{c.icon}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-violet-700 leading-tight">{c.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
