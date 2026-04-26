import { useState } from 'react';
import { engineeringCareers, medicalCareers, pharmacyCareers, commerceCareers, artsCareers } from '../data/careerData';
import CareerDetail from './CareerDetail';
import { useLanguage } from '../context/LanguageContext';

export default function After12th() {
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const { t } = useLanguage();
  const streams = [
    {
      id: 'science',
      label: t('common.scienceStream'),
      icon: '🔬',
      desc: 'PCM (Physics, Chemistry, Math) & PCB (Physics, Chemistry, Biology)',
      gradient: 'from-violet-500 to-indigo-600',
      careers: [engineeringCareers, medicalCareers, pharmacyCareers],
    },
    {
      id: 'commerce',
      label: t('common.commerceStream'),
      icon: '📊',
      desc: 'Accountancy, Business Studies, Economics, Mathematics',
      gradient: 'from-blue-500 to-cyan-500',
      careers: [commerceCareers],
    },
    {
      id: 'arts',
      label: t('common.artsStream'),
      icon: '🎨',
      desc: 'History, Geography, Political Science, Psychology, Sociology',
      gradient: 'from-pink-500 to-rose-500',
      careers: [artsCareers],
    },
  ];

  if (selectedCareer) {
    return (
      <CareerDetail
        career={selectedCareer}
        onBack={() => setSelectedCareer(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-700 text-white py-16 px-4">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-4">
            {t('after12thPage.badge')}
          </span>
          <h1 className="text-page-title mb-4">{t('after12thPage.title')}</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            {selectedStream
              ? t('after12thPage.subtitle')
              : t('after12thPage.subtitle')}
          </p>
          {selectedStream && (
            <button
              onClick={() => setSelectedStream(null)}
              className="mt-4 text-white/70 hover:text-white text-sm underline transition-colors"
            >
              ← {t('common.changeStream')}
            </button>
          )}
        </div>
      </div>

      <div className="section-container py-12">
        {!selectedStream ? (
          <>
            {/* Stream Selection */}
            <h2 className="text-section-title text-gray-900 text-center mb-2">
              {t('after12thPage.sectionTitle')}
            </h2>
            <p className="text-gray-500 text-center mb-8">{t('after12thPage.subtitle')}</p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {streams.map((stream, i) => (
                <button
                  key={stream.id}
                  onClick={() => setSelectedStream(stream)}
                  className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover text-left animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-r ${stream.gradient} p-6 text-white text-center`}>
                    <span className="text-4xl block mb-2">{stream.icon}</span>
                    <h3 className="font-bold text-lg">{stream.label}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-xs leading-relaxed">{stream.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {stream.careers.map((c) => (
                        <span key={c.id} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                          {c.title.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-violet-600 font-semibold text-sm">{t('common.explore')} → </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Note for all streams */}
            <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-5 max-w-3xl mx-auto flex gap-4 items-start">
              <span className="text-2xl">ℹ️</span>
              <div>
                <p className="font-semibold text-blue-800 mb-1">{t('common.streamSwitchingPossible')}</p>
                <p className="text-blue-700 text-sm">{t('common.streamSwitchingBody')}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Career Cards for selected stream */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedStream.careers.map((career, i) => (
                <button
                  key={career.id}
                  onClick={() => setSelectedCareer(career)}
                  className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover text-left animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-r ${career.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{career.icon}</span>
                      <span className="text-white/70 text-xs bg-white/10 px-3 py-1 rounded-full">
                        {career.duration.split('|')[0].trim()}
                      </span>
                    </div>
                    <h3 className="mt-3 font-bold text-xl">{career.title}</h3>
                    <p className="text-white/80 text-xs mt-1">{career.eligibility.split('|')[0].trim()}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {career.overview.substring(0, 120)}...
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {career.branches.slice(0, 3).map((b) => (
                        <span key={b.name} className={`text-xs px-2.5 py-1 ${career.bgLight} ${career.textColor} rounded-lg font-medium`}>
                          {b.name.split('(')[0].trim().split(' ').slice(0, 2).join(' ')}
                        </span>
                      ))}
                      {career.branches.length > 3 && (
                        <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-lg">
                          +{career.branches.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400">{t('common.entranceExams')}</p>
                        <p className="text-sm font-semibold text-gray-800">{career.entranceExams[0]?.name}</p>
                      </div>
                      <span className={`text-sm font-bold ${career.textColor}`}>{t('common.viewDetails')} →</span>
                    </div>
                  </div>
                </button>
              ))}

              {/* Special card for other options */}
              {selectedStream.id === 'science' && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6">
                  <span className="text-3xl block mb-3">🌟</span>
                  <h3 className="font-bold text-gray-900 mb-2">{t('common.exploreCareerStreams')}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {['B.Sc (Pure Sciences)', 'B.Arch (Architecture)', 'NDA (Defence Forces)', 'Merchant Navy', 'B.Sc IT / BCA', 'B.Sc Forensic Science', 'Nutrition & Dietetics'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedStream.id === 'commerce' && (
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200 p-6">
                  <span className="text-3xl block mb-3">🌟</span>
                  <h3 className="font-bold text-gray-900 mb-2">{t('common.exploreCareerStreams')}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {['Hotel Management', 'Event Management', 'Travel & Tourism', 'Retail Management', 'Insurance', 'Stock Broking', 'Financial Planning'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedStream.id === 'arts' && (
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200 p-6">
                  <span className="text-3xl block mb-3">🌟</span>
                  <h3 className="font-bold text-gray-900 mb-2">{t('common.exploreCareerStreams')}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {['Teaching (B.Ed path)', 'Archaeology', 'Anthropology', 'Library Science', 'Performing Arts', 'Fine Arts (BFA)', 'Yoga & Naturopathy'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
