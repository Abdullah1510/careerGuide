import { Link } from 'react-router-dom';
const stats = [
  { value: '12+', label: 'Career Streams' },
  { value: '40+', label: 'Career Roadmaps' },
  { value: '100%', label: 'Free Forever' },
  { value: '0', label: 'Ads or Paywalls' },
];

const values = [
  {
    icon: '🎯',
    title: 'Accuracy First',
    body: 'Every exam date, salary figure, and college name is researched and kept up to date. We update the data regularly so students can trust what they read.',
  },
  {
    icon: '🆓',
    title: 'Always Free',
    body: 'No subscription, no login, no paywall. Every student — whether from a metro city or a small village — deserves the same quality career information.',
  },
  {
    icon: '🇮🇳',
    title: 'Built for India',
    body: 'Not a copy of a US career website. Every roadmap, salary, exam, and college is specific to the Indian education system and job market.',
  },
  {
    icon: '🤝',
    title: 'Community Driven',
    body: 'This website exists because of students who needed it. Feedback, corrections, and suggestions from real students shape what gets built next.',
  },
];

const roadmapItems = [
  { done: true,  text: 'After 10th pathways — Science, Commerce, Arts, ITI, Polytechnic, Skill' },
  { done: true,  text: 'After 12th roadmaps — Engineering, Medical, Commerce, Arts, B.Sc streams' },
  { done: true,  text: 'B.Sc stream with 12 careers — Nursing, Agriculture, Pharmacy, Forestry & more' },
  { done: true,  text: 'Entrance Exam Calendar with live status' },
  { done: true,  text: 'Hindi language support' },
  { done: true,  text: 'Free Counseling booking' },
  { done: false, text: 'More After 12th roadmaps — Veterinary, Psychology, Geology' },
  { done: false, text: 'College comparison tool' },
  { done: false, text: 'Scholarship database' },
  { done: false, text: 'Mock aptitude test to suggest careers' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-5">
            About CareerGuide India
          </span>
          <h1 className="text-page-title mb-5 max-w-2xl mx-auto">
            A small effort to help every Indian student find their path
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            No funding. No team. Just a genuine desire to make career clarity free and accessible for students who need it most.
          </p>
        </div>
      </div>

      <div className="section-container py-14 space-y-16">

        {/* The Story */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-section-title text-slate-900 mb-6">Why I built this</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Growing up in India, I saw how much confusion surrounds the question <em>"what should I do after 10th or 12th?"</em> — a question that shapes the next 20 years of a student's life. Most students either follow peer pressure, rely on incomplete advice from relatives, or simply don't know what options exist beyond Engineering and Medical.
            </p>
            <p>
              The information is out there — but scattered across coaching institutes, YouTube videos, paid apps, and government websites. Students from smaller cities and towns especially don't have access to a career counsellor who can explain all their options clearly and for free.
            </p>
            <p>
              So I built <strong className="text-slate-900">CareerGuide India</strong> — a single place where any student with a phone and an internet connection can explore every career path available to them after 10th or 12th, with honest step-by-step roadmaps, real salary data, and the actual entrance exams they need to know about.
            </p>
            <p>
              This is not a business. There are no ads, no paid plans, and no hidden agenda. It is a community resource — built with care, kept accurate, and offered freely.
            </p>
          </div>
          <div className="mt-6 p-5 bg-violet-50 border-l-4 border-violet-500 rounded-r-xl">
            <p className="text-violet-800 font-medium italic text-sm">
              "Every student deserves the same quality of career guidance — whether they study in Delhi or a small district town."
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="text-violet-600 text-xs font-semibold">— Software Engineer Abdullah, Builder of CareerGuide India</span>
            <a
              href="https://www.facebook.com/md.abdullah.137932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full text-xs font-semibold transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah15101999/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-full text-xs font-semibold transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-violet-600 mb-1">{s.value}</p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-section-title text-slate-900 mb-8 text-center">What this website stands for</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-section-title text-slate-900 mb-2">What's been built & what's next</h2>
          <p className="text-slate-500 text-sm mb-8">This is a living project. Here's the honest status of what exists and what's coming.</p>
          <div className="space-y-3">
            {roadmapItems.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.done
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {item.done ? '✓' : '·'}
                </span>
                <p className={`text-sm leading-relaxed ${item.done ? 'text-slate-700' : 'text-slate-400'}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Community note */}
        <section className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-center text-white">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-xl font-bold mb-3">Found a mistake? Have a suggestion?</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto mb-6">
            This website is only as good as the community that uses it. If you spot incorrect information, know of a career path that's missing, or want to suggest improvements — please reach out. Every correction makes it better for the next student.
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Link
              to="/counseling"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              📞 Book Free Counseling
            </Link>
            <a
              href="mailto:abdu8543378@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-semibold transition-colors border border-white/15"
            >
              ✉️ abdu8543378@gmail.com
            </a>
          </div>
        </section>

        {/* Back to exploring */}
        <section className="text-center pt-2 pb-4">
          <p className="text-slate-500 text-sm mb-5">Now that you know the story — go explore your career path.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/after-10th" className="px-5 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-500 transition-colors">
              After 10th →
            </Link>
            <Link to="/after-12th" className="px-5 py-2.5 bg-white border border-gray-200 text-slate-700 rounded-xl text-sm font-semibold hover:border-violet-300 hover:text-violet-600 transition-colors">
              After 12th →
            </Link>
            <Link to="/exams" className="px-5 py-2.5 bg-white border border-gray-200 text-slate-700 rounded-xl text-sm font-semibold hover:border-violet-300 hover:text-violet-600 transition-colors">
              Exam Calendar →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
