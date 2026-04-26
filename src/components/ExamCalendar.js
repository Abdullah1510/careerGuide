import { useState } from 'react';
import { latestExams2026 } from '../data/careerData';
import { useLanguage } from '../context/LanguageContext';

export default function ExamCalendar() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();
  const filters = [
    { id: 'All', label: t('examCalendar.filterAll') },
    { id: 'Engineering', label: t('examCalendar.filterEngineering') },
    { id: 'Medical', label: t('examCalendar.filterMedical') },
    { id: 'Commerce', label: t('examCalendar.filterCommerce') },
    { id: 'Pharmacy', label: t('examCalendar.filterPharmacy') },
    { id: 'Law', label: t('examCalendar.filterLaw') },
    { id: 'Design', label: t('examCalendar.filterDesign') },
    { id: 'Hotel Management', label: t('examCalendar.filterHotel') },
  ];

  const filtered = latestExams2026.filter((exam) => {
    const matchFilter = activeFilter === 'All' || exam.stream.includes(activeFilter);
    const matchSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.stream.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  const statusColor = {
    Active: 'bg-green-100 text-green-700',
    Upcoming: 'bg-blue-100 text-blue-700',
    Completed: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-4">
            {t('examCalendar.badge')}
          </span>
          <h1 className="text-page-title mb-4">{t('examCalendar.title')}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('examCalendar.subtitle')}
          </p>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Search */}
        <div className="relative mb-6 max-w-md mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder={t('examCalendar.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 scrollbar-hide overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Status Legend */}
        <div className="flex gap-4 justify-center mb-6">
          {[
            { id: 'Active', label: t('examCalendar.statusActive') },
            { id: 'Upcoming', label: t('examCalendar.statusUpcoming') },
            { id: 'Completed', label: t('examCalendar.statusCompleted') },
          ].map((s) => (
            <span key={s.id} className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[s.id]}`}>
              ● {s.label}
            </span>
          ))}
        </div>

        {/* Exam Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <span className="text-4xl block mb-3">🔍</span>
            {t('examCalendar.noExams')}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((exam, i) => (
              <div
                key={exam.name}
                className={`bg-white rounded-xl border border-gray-100 shadow-sm p-5 card-hover animate-fade-in-up ${
                  exam.status === 'Completed' ? 'opacity-70' : ''
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${exam.dot} flex-shrink-0 mt-0.5`} />
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">{exam.name}</h3>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ml-2 ${statusColor[exam.status]}`}>
                    {exam.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>🎓</span>
                    <span className="font-medium text-gray-700">{exam.stream}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>📅</span>
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>✅</span>
                    <span>{exam.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">🏆</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${exam.color} font-medium`}>
                      {exam.level} Level
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Important Notes */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <span>⚠️</span> {t('examCalendar.importantTitle')}
            </h3>
            <ul className="text-amber-700 text-sm space-y-1">
              <li>• {t('examCalendar.importantBody')}</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <span>💡</span> {t('examCalendar.prepTitle')}
            </h3>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• {t('examCalendar.prepBody')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
