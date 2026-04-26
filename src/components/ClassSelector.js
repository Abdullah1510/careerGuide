import { useLanguage } from '../context/LanguageContext';

export default function ClassSelector({ onSelect }) {
  const { t } = useLanguage();
  const options = [
    {
      id: '10th',
      label: t('common.completed10thGrade'),
      emoji: '📘',
      desc: 'Explore streams — Science, Commerce, Arts, ITI, Polytechnic & Skill Courses',
      tags: ['Stream Choice', 'ITI', 'Polytechnic', 'Skill Courses'],
      gradient: 'from-violet-600 to-indigo-700',
      glow: 'shadow-violet-200',
      highlight: '6 Pathways',
    },
    {
      id: '12th',
      label: t('common.completed12thGrade'),
      emoji: '🎓',
      desc: 'Career roadmaps for PCM, PCB, Commerce & Arts — with colleges, exams, salaries',
      tags: ['Engineering', 'Medical', 'CA', 'Law', 'Design'],
      gradient: 'from-rose-600 to-pink-700',
      glow: 'shadow-rose-200',
      highlight: '25+ Careers',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex items-center justify-center px-4 py-20">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-float-delay" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-violet-300 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            {t('common.step1of3')} — {t('common.chooseYourLevel')}
          </div>
          <h1 className="text-page-title text-white mb-3">
            {t('common.whereAreYouRightNow')}
          </h1>
          <p className="text-gray-400 text-lg">
            {t('common.selectEducationLevel')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up-delay">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-2xl p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:${opt.glow}`}
            >
              {/* Highlight badge */}
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${opt.gradient} text-white`}>
                {opt.highlight}
              </span>

              {/* Emoji + Title */}
              <div className="text-5xl mb-4">{opt.emoji}</div>
              <h2 className="text-xl font-bold text-white mb-2">{opt.label}</h2>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{opt.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {opt.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white/10 text-gray-300 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${opt.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                {t('common.exploreMyOptions')}
                <span className="text-violet-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Back button context */}
        <p className="text-center text-gray-500 text-sm mt-8 animate-fade-in-up-delay-2">
          {t('common.browseExamCalendarPrefix')} 
          <button className="text-violet-400 underline hover:text-violet-300">{t('nav.examCalendar')}</button>
          {` ${t('common.browseExamCalendarSuffix')}`}
        </p>
      </div>
    </div>
  );
}
