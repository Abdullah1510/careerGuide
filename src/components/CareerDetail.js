import { getCollegeLabel } from '../utils/collegeLabels';
import { useLanguage } from '../context/LanguageContext';

export default function CareerDetail({ career, onBack }) {
  if (!career) return null;

  const { t } = useLanguage();
  const studentMustKnow = career.studentMustKnow || career.mustKnow || [];
  const programmingLanguages = career.programmingLanguages || [];

  const collegeLabelNote = t('common.labelsHelp');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Header */}
      <div className={`bg-gradient-to-r ${career.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors"
          >
            ← {t('common.backToCareers')}
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur">
              {career.icon}
            </div>
            <div>
              <h1 className="text-page-title">{career.title}</h1>
              <p className="text-white/80 mt-1 text-sm">{career.eligibility}</p>
            </div>
          </div>
          <p className="text-white/90 text-base max-w-3xl leading-relaxed">{career.overview}</p>

          {/* Quick Info */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="glass px-4 py-2 rounded-xl">
              <span className="text-white/70 text-xs block">{t('common.duration')}</span>
              <span className="text-white text-sm font-semibold">{career.duration}</span>
            </div>
            <div className="glass px-4 py-2 rounded-xl">
              <span className="text-white/70 text-xs block">{t('common.averageFees')}</span>
              <span className="text-white text-sm font-semibold">{career.fees}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Branches / Specializations */}
            <section>
              <h2 className="text-section-title text-gray-900 mb-4">
                {t('common.careerPaths')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {career.branches.map((branch) => (
                  <div
                    key={branch.name}
                    className={`bg-white border ${career.borderColor} rounded-xl p-4 card-hover`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{branch.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{branch.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          branch.demand === 'Very High' || branch.demand === 'Extremely High'
                            ? 'bg-green-100 text-green-700'
                            : branch.demand === 'High'
                            ? 'bg-blue-100 text-blue-700'
                            : branch.demand === 'Growing'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-600'
                        } font-medium`}>
                          {branch.demand} {t('common.topCareer')}
                        </span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <p className="text-xs text-gray-500 font-medium mb-1">{t('common.topRecruiters')}:</p>
                      <div className="flex flex-wrap gap-1">
                        {branch.jobs.slice(0, 3).map((job) => (
                          <span key={job} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className={`text-sm font-bold ${career.textColor}`}>{branch.avgSalary}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Salary & Global Scope */}
            <section className={`bg-white border ${career.borderColor} rounded-2xl p-6`}>
              <h2 className="text-section-title text-gray-900 mb-4">💰 {t('common.careerGrowthSalary')}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {career.scope.map((item, i) => (
                  <div key={i} className={`${career.bgLight} rounded-xl p-4 text-center`}>
                    <span className="text-lg">{['🇮🇳', '🌎', '🌏'][i]}</span>
                    <p className={`text-sm font-semibold ${career.textColor} mt-1`}>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {(studentMustKnow.length > 0 || programmingLanguages.length > 0) && (
              <section className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <h2 className="text-section-title text-gray-900 mb-4">🧠 {t('common.studentsMustKnow')}</h2>
                {studentMustKnow.length > 0 && (
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700 mb-3">{t('common.keyThings')}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {studentMustKnow.map((item) => (
                        <div key={item} className={`rounded-xl border ${career.borderColor} ${career.bgLight} p-4 text-sm text-gray-700`}>
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
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${career.bgLight} ${career.textColor} border ${career.borderColor}`}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Entrance Exams */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-lg">📝</span> {t('common.entranceExams')}
              </h3>
              <div className="space-y-3">
                {career.entranceExams.map((exam) => (
                  <div key={exam.name} className="border border-gray-100 rounded-xl p-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-900 text-sm">{exam.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${career.bgLight} ${career.textColor} font-medium`}>
                        {exam.month}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{exam.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Colleges */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-lg">🏛️</span> {t('common.topColleges')}
              </h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{collegeLabelNote}</p>
              <ul className="space-y-2">
                {career.topColleges.map((college) => (
                  <li key={college} className="flex items-center gap-2 text-sm text-gray-700">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: career.textColor.includes('rose') ? '#e11d48' : career.textColor.includes('emerald') ? '#059669' : career.textColor.includes('blue') ? '#2563eb' : career.textColor.includes('cyan') ? '#0891b2' : career.textColor.includes('amber') ? '#d97706' : '#7c3aed' }}
                    />
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <span className="truncate">{college}</span>
                      <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${getCollegeLabel(college).className}`}>
                        {getCollegeLabel(college).label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
