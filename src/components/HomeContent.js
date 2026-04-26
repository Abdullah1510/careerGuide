import { Link } from 'react-router-dom';
import { latestExams2026 } from '../data/careerData';
import { careerStreamGuides } from '../data/streamGuides';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedStreamLabel } from '../utils/streamI18n';

const exampleFlows = [
  {
    goal: 'Software Engineer',
    icon: '💻',
    gradient: 'from-violet-600 to-indigo-700',
    steps: ['10th → Science', 'PCM (11-12th)', 'JEE Main/Advanced', 'B.Tech CS', 'Internship', 'Job ₹4L–₹50L'],
  },
  {
    goal: 'MBBS Doctor',
    icon: '👨‍⚕️',
    gradient: 'from-rose-600 to-pink-700',
    steps: ['10th → Science', 'PCB (11-12th)', 'NEET-UG', 'MBBS 5.5 yrs', 'Specialization', 'Practice ₹15L+'],
  },
  {
    goal: 'Chartered Accountant',
    icon: '🏦',
    gradient: 'from-blue-600 to-indigo-700',
    steps: ['10th → Commerce', '11th-12th Accounts', 'CA Foundation', 'CA Intermediate', '3yr Articleship', 'CA Final ₹6L–₹60L'],
  },
  {
    goal: 'IAS Officer',
    icon: '🏛️',
    gradient: 'from-slate-700 to-gray-800',
    steps: ['10th → Arts', 'Any Stream 11-12th', 'Any Graduation', 'UPSC Prelims', 'Mains + Interview', 'IAS/IPS Posting'],
  },
];

const topCareers = [
  { icon: '💻', title: 'Software Engineer', salary: '₹4L–₹50L', stream: 'PCM', demand: 'Extremely High', gradient: 'from-violet-500 to-indigo-600', path: '/after-12th/pcm/software-engineer' },
  { icon: '👨‍⚕️', title: 'MBBS Doctor', salary: '₹8L–₹1Cr+', stream: 'PCB', demand: 'Very High', gradient: 'from-rose-500 to-pink-600', path: '/after-12th/pcb/mbbs-doctor' },
  { icon: '🏦', title: 'Chartered Accountant', salary: '₹6L–₹60L', stream: 'Commerce', demand: 'Very High', gradient: 'from-blue-500 to-indigo-600', path: '/after-12th/commerce-12/chartered-accountant' },
  { icon: '⚖️', title: 'Lawyer / Advocate', salary: '₹3L–₹50L+', stream: 'Any', demand: 'High', gradient: 'from-amber-500 to-orange-600', path: '/after-12th/arts-12/lawyer' },
  { icon: '🤖', title: 'AI / ML Engineer', salary: '₹6L–₹60L', stream: 'PCM', demand: 'Extremely High', gradient: 'from-indigo-500 to-blue-600', path: '/after-12th/pcm/ai-ml-engineer' },
  { icon: '💊', title: 'Pharmacist', salary: '₹3L–₹20L', stream: 'PCM/PCB', demand: 'Very High', gradient: 'from-emerald-500 to-teal-600', path: '/after-12th/pcb/pharmacist' },
  { icon: '🏛️', title: 'IAS / IPS Officer', salary: '₹8L–₹25L+', stream: 'Any', demand: 'High', gradient: 'from-slate-600 to-gray-700', path: '/after-12th/arts-12/ias-ips' },
  { icon: '☁️', title: 'DevOps / Cloud Engineer', salary: '₹5L–₹45L', stream: 'PCM', demand: 'Very High', gradient: 'from-cyan-500 to-sky-600', path: '/after-12th/pcm/devops-engineer' },
];

export default function HomeContent({ setCurrentPage, onStartFlow }) {
  const { t } = useLanguage();
  const upcomingExams = latestExams2026.filter((e) => e.status !== 'Completed').slice(0, 6);
  const possibilityCards = [
    {
      icon: '🎓',
      title: t('home.possibilityOneTitle'),
      desc: t('home.possibilityOneDesc'),
    },
    {
      icon: '📝',
      title: t('home.possibilityTwoTitle'),
      desc: t('home.possibilityTwoDesc'),
    },
    {
      icon: '⚡',
      title: t('home.possibilityThreeTitle'),
      desc: t('home.possibilityThreeDesc'),
    },
    {
      icon: '🚀',
      title: t('home.possibilityFourTitle'),
      desc: t('home.possibilityFourDesc'),
    },
  ];

  return (
    <div>
      {/* ── GUIDED FLOW CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
            🧭 {t('home.ctaBadge')}
          </span>
          <h2 className="text-page-title text-gray-900 mb-3">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-body-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            {t('home.ctaDescription')}
          </p>

          {/* Quick selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={() => onStartFlow('10th')}
              className="group w-full sm:w-auto flex items-center gap-4 bg-gradient-to-r from-violet-600 to-indigo-700 text-white px-8 py-4 rounded-2xl shadow-lg shadow-violet-200 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
                <span className="text-3xl">📘</span>
                <div className="text-left">
                  <p className="font-bold text-lg">{t('home.after10thTitle')}</p>
                  <p className="text-violet-200 text-sm">{t('home.after10thSub')}</p>
                </div>
              <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={() => onStartFlow('12th')}
              className="group w-full sm:w-auto flex items-center gap-4 bg-gradient-to-r from-rose-600 to-pink-700 text-white px-8 py-4 rounded-2xl shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
                <span className="text-3xl">🎓</span>
                <div className="text-left">
                  <p className="font-bold text-lg">{t('home.after12thTitle')}</p>
                  <p className="text-pink-200 text-sm">{t('home.after12thSub')}</p>
                </div>
              <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <p className="text-caption text-gray-400">{t('home.noSignup')}</p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="section-container">
          <h2 className="text-section-title text-gray-900 text-center mb-10">{t('home.howItWorks')}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', icon: '🎓', title: t('home.step1Title'), desc: t('home.step1Desc'), color: 'bg-violet-100 text-violet-700' },
              { step: '2', icon: '📚', title: t('home.step2Title'), desc: t('home.step2Desc'), color: 'bg-indigo-100 text-indigo-700' },
              { step: '3', icon: '🗺️', title: t('home.step3Title'), desc: t('home.step3Desc'), color: 'bg-pink-100 text-pink-700' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-white text-center animate-fade-in-up">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-xl mx-auto mb-4`}>
                  {item.icon}
                </div>
                <div className={`inline-block px-2.5 py-0.5 ${item.color} rounded-full text-xs font-bold mb-2`}>Step {item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER STREAMS ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4">
              {t('nav.careerStreams')}
            </span>
            <h2 className="text-section-title text-gray-900 mb-2">Choose a stream page for deeper guidance</h2>
            <p className="text-body text-gray-500 max-w-3xl mx-auto">
              Each stream now has its own dedicated page with subjects, career directions, entrance exams, colleges, and skill advice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerStreamGuides.map((guide, index) => (
              <Link
                key={guide.id}
                to={`/streams/${guide.id}`}
                className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${guide.gradient} text-white flex items-center justify-center text-2xl mb-4`}>
                  {guide.icon}
                </div>
                <h3 className="text-card-title text-gray-900 mb-2">
                  {getLocalizedStreamLabel(t, guide.id).title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {getLocalizedStreamLabel(t, guide.id).summary}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{guide.data.eligibility}</span>
                  <span className="text-violet-600 text-sm font-bold group-hover:translate-x-1 transition-transform">{t('common.open')} →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/streams"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              {t('common.exploreCareerStreams')} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── POSSIBLE PATHS ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              {t('home.possibilityBadge')}
            </span>
            <h2 className="text-section-title text-gray-900 mb-3">
              {t('home.possibilityTitle')}
            </h2>
            <p className="text-body text-gray-500">
              {t('home.possibilityDesc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {possibilityCards.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-card-title text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLE CAREER FLOWS ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-section-title text-gray-900 mb-2">{t('home.exampleTitle')}</h2>
            <p className="text-body text-gray-500">{t('home.exampleDesc')}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {exampleFlows.map((flow, i) => (
              <div
                key={flow.goal}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${flow.gradient} px-5 py-4 flex items-center gap-3 text-white`}>
                  <span className="text-2xl">{flow.icon}</span>
                  <div>
                    <p className="text-white/70 text-xs">{t('common.goal')}</p>
                    <h3 className="font-bold text-lg">{flow.goal}</h3>
                  </div>
                </div>
                <div className="p-5">
                  {/* Flow steps */}
                  <div className="flex flex-wrap items-center gap-1">
                    {flow.steps.map((step, si) => (
                      <div key={si} className="flex items-center gap-1">
                        <span className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                          si === 0 ? 'bg-gray-100 text-gray-600' :
                          si === flow.steps.length - 1 ? 'bg-green-100 text-green-700 font-bold' :
                          si % 2 === 0 ? 'bg-violet-50 text-violet-700' : 'bg-blue-50 text-blue-700'
                        }`}>
                          {step}
                        </span>
                        {si < flow.steps.length - 1 && (
                          <span className="text-gray-300 text-xs">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onStartFlow(null)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              {t('home.startQuiz')} →
            </button>
          </div>
        </div>
      </section>

      {/* ── TOP CAREERS GRID ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-section-title text-gray-900 mb-2">{t('home.popularTitle')}</h2>
            <p className="text-body text-gray-500">{t('home.popularDesc')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {topCareers.map((c, i) => (
              <Link
                key={c.title}
                to={c.path}
                className="group block h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left card-hover animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={`bg-gradient-to-r ${c.gradient} p-4 text-white`}>
                  <span className="text-3xl block mb-1">{c.icon}</span>
                  <p className="font-bold text-sm leading-tight">{c.title}</p>
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-gray-800">{c.salary}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-400">{c.stream}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                      c.demand === 'Extremely High' ? 'bg-green-100 text-green-700' :
                      c.demand === 'Very High' ? 'bg-emerald-100 text-emerald-700' :
                      c.demand === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {c.demand === 'Extremely High' ? `🔥 ${t('common.hot')}` : c.demand}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EXAMS ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-section-title text-gray-900 mb-1">{t('home.upcomingTitle')}</h2>
              <p className="text-body text-gray-500">{t('home.upcomingDesc')}</p>
            </div>
            <button
              onClick={() => setCurrentPage('exams')}
              className="text-violet-600 hover:text-violet-700 font-semibold text-sm flex items-center gap-1 flex-shrink-0"
            >
              {t('home.viewAll')} →
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingExams.map((exam, i) => (
              <div
                key={exam.name}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 animate-slide-in-left"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${exam.dot} flex-shrink-0`} />
                  <h3 className="font-bold text-gray-900 text-sm">{exam.name}</h3>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-medium ${
                    exam.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {exam.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">📅 {exam.date}</p>
                <p className="text-xs text-gray-500">✅ {exam.eligibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY INSIGHTS ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-section-title text-gray-900 mb-2">{t('home.salaryTitle')}</h2>
            <p className="text-body text-gray-500">{t('home.salaryDesc')}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            {[
              { field: 'AI / Data Science', range: '₹6L–₹60L/yr', pct: 97, color: 'bg-violet-500' },
              { field: 'Software Engineering (IIT/NIT)', range: '₹8L–₹50L/yr', pct: 94, color: 'bg-indigo-500' },
              { field: 'MBBS / Medicine', range: '₹8L–₹1Cr+/yr', pct: 92, color: 'bg-rose-500' },
              { field: 'Chartered Accountant (CA)', range: '₹6L–₹40L/yr', pct: 88, color: 'bg-blue-500' },
              { field: 'Investment Banking (MBA IIM)', range: '₹15L–₹80L/yr', pct: 85, color: 'bg-cyan-500' },
              { field: 'Pharmacy (B.Pharma)', range: '₹3L–₹20L/yr', pct: 68, color: 'bg-emerald-500' },
              { field: 'Law (LLB Top NLU)', range: '₹3L–₹35L/yr', pct: 74, color: 'bg-amber-500' },
              { field: 'Fashion Design (NIFT)', range: '₹2.5L–₹20L/yr', pct: 60, color: 'bg-pink-500' },
            ].map((item) => (
              <div key={item.field} className="flex items-center gap-4">
                <div className="w-44 sm:w-52 text-sm font-medium text-gray-700 flex-shrink-0 truncate">{item.field}</div>
                <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
                <div className="text-sm font-semibold text-gray-700 w-28 text-right flex-shrink-0 hidden sm:block">{item.range}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK COUNSELING CTA ───────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gradient-to-r from-violet-600 to-indigo-700 text-white">
        <div className="section-container text-center">
          <span className="text-4xl block mb-4">🎓</span>
          <h2 className="text-section-title mb-3">{t('home.counselingTitle')}</h2>
          <p className="text-body-lg text-violet-200 mb-8 max-w-2xl mx-auto">
            {t('home.counselingDesc')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onStartFlow(null)}
              className="px-8 py-3.5 bg-white text-violet-700 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
            >
              {t('home.startQuiz')}
            </button>
            <button
              onClick={() => setCurrentPage('counseling')}
              className="px-8 py-3.5 border-2 border-white/50 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all"
            >
              📞 {t('home.bookCounseling')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
