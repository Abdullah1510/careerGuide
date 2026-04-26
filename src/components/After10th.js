import { after10thOptions } from '../data/careerData';
import { useLanguage } from '../context/LanguageContext';

export default function After10th({ setCurrentPage }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white py-16 px-4">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-4">
            {t('common.careerGuidance')}
          </span>
          <h1 className="text-page-title mb-4">{t('after10thPage.title')}</h1>
          <p className="text-violet-200 text-lg max-w-2xl mx-auto">
            {t('after10thPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-semibold text-amber-800 mb-1">{t('after10thPage.tipTitle')}</p>
            <p className="text-amber-700 text-sm">
              {t('after10thPage.tipBody')}
            </p>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {after10thOptions.map((option, index) => (
            <div
              key={option.id}
              className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${option.gradient} p-5 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{option.icon}</span>
                  {option.tag && (
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                      {option.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg leading-tight">{option.title}</h3>
                <p className="text-white/80 text-xs mt-1">⏱ {option.duration}</p>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {option.id === 'iti' || option.id === 'polytechnic'
                      ? t('common.availableTrades')
                      : option.id === 'skill-courses'
                      ? t('common.sampleCourses')
                      : t('common.keySubjects')}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {option.subjects.slice(0, 4).map((subj) => (
                      <span key={subj} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                        {subj}
                      </span>
                    ))}
                    {option.subjects.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-400 rounded-lg text-xs">
                        +{option.subjects.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('common.careerPaths')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {option.careerPaths.map((path) => (
                      <span key={path} className="px-2.5 py-1 bg-violet-50 text-violet-700 rounded-lg text-xs font-medium">
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stream Comparison Table */}
        <div className="mt-14">
          <h2 className="text-section-title text-gray-900 mb-2 text-center">{t('common.streamComparison')}</h2>
          <p className="text-gray-500 text-sm text-center mb-6">{t('after10thPage.compareSubtitle')}</p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">{t('common.criteria')}</th>
                    <th className="text-center px-4 py-4 font-semibold text-violet-700">
                      <span className="block text-xl mb-1">🔬</span> Science
                    </th>
                    <th className="text-center px-4 py-4 font-semibold text-blue-700">
                      <span className="block text-xl mb-1">📊</span> Commerce
                    </th>
                    <th className="text-center px-4 py-4 font-semibold text-pink-700">
                      <span className="block text-xl mb-1">🎨</span> Arts
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { criteria: t('common.bestFor'), sci: 'Logical, analytical minds', com: 'Business-minded, numbers', art: 'Creative, communication skills' },
                    { criteria: t('common.topCareer'), sci: 'Doctor, Engineer, Scientist', com: 'CA, Banker, Manager', art: 'Lawyer, IAS, Journalist' },
                    { criteria: 'Salary Potential', sci: '⭐⭐⭐⭐⭐', com: '⭐⭐⭐⭐⭐', art: '⭐⭐⭐⭐' },
                    { criteria: 'Competition Level', sci: 'Very High', com: 'High', art: 'Moderate' },
                    { criteria: 'Flexibility', sci: 'High (can switch)', com: 'Moderate', art: 'High' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-6 py-3.5 font-medium text-gray-700">{row.criteria}</td>
                      <td className="px-4 py-3.5 text-center text-gray-600">{row.sci}</td>
                      <td className="px-4 py-3.5 text-center text-gray-600">{row.com}</td>
                      <td className="px-4 py-3.5 text-center text-gray-600">{row.art}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">{t('after10thPage.ctaPrompt')}</p>
          <button
            onClick={() => setCurrentPage('after12th')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            {t('after10thPage.ctaButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
