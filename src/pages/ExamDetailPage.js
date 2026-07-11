import { Link, Navigate, useParams } from 'react-router-dom';
import { getExamGuideById } from '../data/examGuides';

export default function ExamDetailPage() {
  const { examId } = useParams();
  const guide = getExamGuideById(examId);

  if (!guide) {
    return <Navigate to="/exams" replace />;
  }

  const statusColor = {
    Active: 'bg-green-100 text-green-700',
    Upcoming: 'bg-blue-100 text-blue-700',
    Completed: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <section className={`relative overflow-hidden bg-gradient-to-r ${guide.gradient} text-white px-4 py-16`}>
        <div className="absolute inset-0 opacity-20 hero-scanline" />
        <div className="section-container relative z-10">
          <Link to="/exams" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white mb-6">
            ← Back to exam calendar
          </Link>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
                <span>{guide.icon}</span>
                Latest 2026 exam guide
              </span>
              <h1 className="mt-5 text-page-title text-white">{guide.title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">{guide.overview}</p>
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">Latest 2026 Update</p>
                <p className="mt-2 text-sm leading-6 text-white/85">{guide.latestUpdate}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-slate-950/25 p-5 backdrop-blur-xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/75 mb-4">Exam Snapshot</h2>
              <div className="space-y-3">
                {guide.exams.filter(Boolean).map((exam) => (
                  <div key={exam.name} className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-white">{exam.name}</h3>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor[exam.status]}`}>
                        {exam.status}
                      </span>
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-white/75">
                      <p>📅 {exam.date}</p>
                      <p>✅ {exam.eligibility}</p>
                      <p>🏆 {exam.level} Level</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-section-title text-slate-900 mb-5">Best For</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {guide.bestFor.map((item) => (
                <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
            <h2 className="text-section-title text-slate-900 mb-5">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/exams"
                className="block rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-violet-700 transition-colors"
              >
                View Full Calendar
              </Link>
              <Link
                to="/counseling"
                className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700 hover:border-violet-300 hover:text-violet-700 transition-colors"
              >
                Book Free Counseling
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-section-title text-slate-900 mb-5">Latest Timeline</h2>
            <div className="space-y-4">
              {guide.timeline.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    {index < guide.timeline.length - 1 && <div className="h-full min-h-6 w-px bg-slate-200" />}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-slate-900">{item}</p>
                    <p className="mt-1 text-sm text-slate-500">Track official notices and keep documents ready for this stage.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-section-title text-slate-900 mb-5">Preparation Plan</h2>
            <div className="grid gap-4">
            {guide.actionPlan.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-700">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-600">{step}</p>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">
          <strong>Note:</strong> Exam schedules and counseling rounds can change. Always confirm final dates on the official exam website before applying or paying fees.
        </div>
      </section>
    </div>
  );
}
