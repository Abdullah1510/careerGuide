import { useParams, Link } from 'react-router-dom';
import { after10thStreams } from '../data/careerRoadmaps';
import { useLanguage } from '../context/LanguageContext';

// Detailed info per stream
const streamDetails = {
  'science-pcm-pcb': {
    whyChoose: [
      'Highest salary potential across all streams',
      'Gateway to IIT, AIIMS, BITS, NIT — India\'s top institutions',
      'PCM → Engineering | PCB → Medical | Both → Pharmacy/BSc',
      'Science degree holders can switch to any field',
      'Global recognition — best for international careers',
    ],
    roadmap: [
      { step: '11th–12th Science', desc: 'Choose PCM (Maths) or PCB (Biology) depending on target career', icon: '📚', color: 'bg-violet-100 text-violet-700' },
      { step: 'Entrance Exam', desc: 'PCM → JEE Main/Advanced | PCB → NEET-UG | Both → Pharmacy CETs', icon: '📝', color: 'bg-rose-100 text-rose-700' },
      { step: 'Degree (4–5.5 yrs)', desc: 'B.Tech / MBBS / B.Pharma / B.Sc from top college', icon: '🎓', color: 'bg-blue-100 text-blue-700' },
      { step: 'Job / Practice', desc: 'Engineering placement | MBBS practice | Research career', icon: '💼', color: 'bg-green-100 text-green-700' },
    ],
    keyExams: ['JEE Main (Jan/Apr)', 'JEE Advanced (May)', 'NEET-UG (May)', 'BITSAT (May-Jun)', 'MHT-CET (May)'],
    careers: [
      { title: 'Software Engineer', salary: '₹4L–₹50L', stream: 'PCM', streamId: 'pcm', careerId: 'software-engineer', demand: 'Extremely High', icon: '💻' },
      { title: 'MBBS Doctor', salary: '₹8L–₹1Cr+', stream: 'PCB', streamId: 'pcb', careerId: 'mbbs-doctor', demand: 'Very High', icon: '👨‍⚕️' },
      { title: 'Data Scientist', salary: '₹6L–₹60L', stream: 'PCM', streamId: 'pcm', careerId: 'data-scientist', demand: 'Extremely High', icon: '🤖' },
      { title: 'Civil Engineer', salary: '₹3L–₹25L', stream: 'PCM', streamId: 'pcm', careerId: 'civil-engineer', demand: 'High', icon: '🏗️' },
      { title: 'Pharmacist', salary: '₹3L–₹20L', stream: 'PCB', streamId: 'pcb', careerId: 'pharmacist', demand: 'Very High', icon: '💊' },
      { title: 'B.Sc Nursing', salary: '₹2.5L–₹15L', stream: 'PCB', streamId: 'pcb', careerId: 'bsc-nursing', demand: 'Very High', icon: '💉' },
    ],
    stats: [{ val: '5', label: 'Year highest MBBS salary: ₹1Cr' }, { val: '₹50L', label: 'IIT CS package (top)' }, { val: 'Global', label: 'Engineering recognized worldwide' }],
  },
  'commerce': {
    whyChoose: [
      'Clear path to CA — one of India\'s best-paying careers',
      'Lower competition compared to Science stream',
      'Entrepreneurship-friendly — understand business from day 1',
      'Banking & finance sector growing massively in India',
      'IIM MBA accessible after B.Com / BBA — ₹30L+ packages',
    ],
    roadmap: [
      { step: '11th–12th Commerce', desc: 'Accounts, Business Studies, Economics, Maths (optional but recommended)', icon: '📚', color: 'bg-blue-100 text-blue-700' },
      { step: 'CA Foundation / BBA CET', desc: 'Register for CA Foundation with ICAI | OR apply for BBA at top colleges (IPMAT/DU JAT)', icon: '📝', color: 'bg-rose-100 text-rose-700' },
      { step: '3–5 Year Course', desc: 'B.Com (3yr) | BBA (3yr) | CA Foundation→Inter→Final (4-5yr)', icon: '🎓', color: 'bg-indigo-100 text-indigo-700' },
      { step: 'Professional Career', desc: 'CA @ Big 4 | Investment Banking | MBA from IIM | Own Business', icon: '💼', color: 'bg-green-100 text-green-700' },
    ],
    keyExams: ['CA Foundation (May/Nov)', 'IPMAT (May) — IIM Indore 5yr MBA', 'DU JAT (Jun) — Delhi BBA', 'Symbiosis SET (May)', 'NMIMS CET (Mar)'],
    careers: [
      { title: 'Chartered Accountant', salary: '₹6L–₹60L', stream: 'Commerce', streamId: 'commerce-12', careerId: 'chartered-accountant', demand: 'Very High', icon: '🏦' },
      { title: 'Investment Banker', salary: '₹5L–₹80L', stream: 'Commerce', streamId: 'commerce-12', careerId: 'investment-banker', demand: 'High', icon: '📈' },
      { title: 'Business Manager', salary: '₹4L–₹50L+', stream: 'Commerce', streamId: 'commerce-12', careerId: 'business-manager', demand: 'Very High', icon: '🏢' },
    ],
    stats: [{ val: '₹60L', label: 'CA at Big 4 (5 years exp)' }, { val: '₹35L', label: 'IIM average placement (2026)' }, { val: '7L+', label: 'CAs registered in India' }],
  },
  'arts-humanities': {
    whyChoose: [
      'Path to IAS/IPS — most powerful jobs in India',
      'Law is booming — corporate lawyers earn ₹1Cr+',
      'Journalism, media, content — massive digital demand',
      'NIFT/NID for fashion & design — creative + commercial',
      'Hotel management — international hospitality career',
    ],
    roadmap: [
      { step: '11th–12th Arts', desc: 'History, Geography, Political Science, Psychology, Sociology, English', icon: '📚', color: 'bg-pink-100 text-pink-700' },
      { step: 'Entrance Exams', desc: 'CLAT (Law) | NIFT/NID (Design) | NCHMCT JEE (Hotel Mgmt) | UPSC (after graduation)', icon: '📝', color: 'bg-rose-100 text-rose-700' },
      { step: 'Degree (3–5 yrs)', desc: 'BA / LLB / B.Des / Hotel Management / Mass Communication', icon: '🎓', color: 'bg-amber-100 text-amber-700' },
      { step: 'Career', desc: 'IAS Officer | Lawyer | Fashion Designer | Journalist | Hotel Manager', icon: '💼', color: 'bg-green-100 text-green-700' },
    ],
    keyExams: ['CLAT (Dec) — Law', 'UPSC CSE (Jun) — IAS/IPS', 'NIFT (Jan) — Fashion Design', 'NID DAT (Jan) — Industrial Design', 'NCHMCT JEE (Apr) — Hotel Mgmt'],
    careers: [
      { title: 'Lawyer / Advocate', salary: '₹3L–₹50L+', stream: 'Arts', streamId: 'arts-12', careerId: 'lawyer', demand: 'High', icon: '⚖️' },
      { title: 'IAS / IPS Officer', salary: '₹8L–₹25L+', stream: 'Arts', streamId: 'arts-12', careerId: 'ias-ips', demand: 'High', icon: '🏛️' },
      { title: 'Fashion Designer', salary: '₹2.5L–₹30L', stream: 'Arts', streamId: 'arts-12', careerId: 'fashion-designer', demand: 'Growing', icon: '👗' },
    ],
    stats: [{ val: '₹1Cr+', label: 'Partner at top law firm' }, { val: '1000+', label: 'IAS/IPS vacancies annually' }, { val: '13', label: 'NIFT campuses across India' }],
  },
  'iti': {
    whyChoose: [
      'Get a government-recognized job in 6–24 months',
      'Govt ITIs are free or very low cost (₹500/year)',
      'Apprenticeship under NAPS earns ₹8K–₹15K/month while training',
      'High demand in manufacturing, construction, and infrastructure',
      'Path to B.Tech via lateral entry after ITI + Apprenticeship',
    ],
    roadmap: [
      { step: 'Choose an ITI Trade', desc: 'Electrician (most popular) | Fitter | Welder | Mechanic | Plumber | CNC Operator | Computer Operator', icon: '🔧', color: 'bg-orange-100 text-orange-700' },
      { step: 'ITI Course (6m–2yr)', desc: 'Govt or Private ITI. Govt ITI preferred — free + NCVT certification', icon: '🎓', color: 'bg-amber-100 text-amber-700' },
      { step: 'NCVT Certification + Apprenticeship', desc: 'Get NCVT certificate. Do 1 year apprenticeship under NAPS/NATS scheme with ₹8K–₹15K stipend', icon: '📋', color: 'bg-blue-100 text-blue-700' },
      { step: 'Job or Further Study', desc: 'Govt sector: Railways/CPWD/NTPC. Private: Manufacturing units. Lateral entry: B.Tech 1st year direct', icon: '💼', color: 'bg-green-100 text-green-700' },
    ],
    keyExams: ['ITI Admission (State-wise Merit)', 'NCVT MIS (Certification)', 'Railways Group D (after ITI)', 'DRDO Technician (after ITI)', 'BHEL Apprentice'],
    careers: [
      { title: 'Electrician', salary: '₹2L–₹8L', demand: 'Very High', icon: '⚡', noLink: true },
      { title: 'CNC Operator', salary: '₹2.5L–₹10L', demand: 'High', icon: '🔩', noLink: true },
      { title: 'Auto Mechanic', salary: '₹2L–₹8L', demand: 'High', icon: '🚗', noLink: true },
      { title: 'Welder (Certified)', salary: '₹2L–₹12L', demand: 'High', icon: '🔥', noLink: true },
      { title: 'Plumber (Licensed)', salary: '₹2L–₹10L', demand: 'High', icon: '🔧', noLink: true },
      { title: 'Computer Operator', salary: '₹1.8L–₹6L', demand: 'Moderate', icon: '💻', noLink: true },
    ],
    stats: [{ val: '14,000+', label: 'ITIs across India' }, { val: '₹8K–15K', label: 'Apprenticeship stipend/month' }, { val: 'Free', label: 'Govt ITI fee (most states)' }],
  },
  'polytechnic': {
    whyChoose: [
      'Diploma in Engineering — direct 2nd year B.Tech entry',
      'Get a Junior Engineer (JE) job straight after diploma',
      'Govt JE exams open after Polytechnic — ₹6L–₹10L CTC',
      'Low fees: ₹10K–₹40K/year in Govt polytechnics',
      'Practical, hands-on education — job-ready graduates',
    ],
    roadmap: [
      { step: 'Choose Engineering Branch', desc: 'Civil | Mechanical | Electrical | Computer | Electronics | Chemical', icon: '⚙️', color: 'bg-teal-100 text-teal-700' },
      { step: 'Polytechnic Admission', desc: 'State CET or merit-based. Govt polytechnics preferred for low fees', icon: '📝', color: 'bg-blue-100 text-blue-700' },
      { step: '3-Year Diploma', desc: 'Engineering fundamentals + practical lab training + industrial visits', icon: '🎓', color: 'bg-indigo-100 text-indigo-700' },
      { step: 'Job OR B.Tech Lateral', desc: 'Junior Engineer in govt/private | B.Tech 2nd year lateral entry | Apprenticeship', icon: '💼', color: 'bg-green-100 text-green-700' },
    ],
    keyExams: ['State Polytechnic CET (May–Jun)', 'UPJEE (Polytechnic) — UP', 'JEECUP — UP', 'DET — Delhi', 'SSC JE (After Diploma) — Govt jobs'],
    careers: [
      { title: 'Junior Engineer (JE)', salary: '₹3L–₹8L', demand: 'High', icon: '🏗️', noLink: true },
      { title: 'Site Supervisor', salary: '₹2.5L–₹7L', demand: 'High', icon: '🔩', noLink: true },
      { title: 'Technical Trainer', salary: '₹2.5L–₹6L', demand: 'Moderate', icon: '📋', noLink: true },
      { title: 'B.Tech (Lateral)', salary: 'After B.Tech: ₹4L–₹15L', demand: 'Very High', icon: '🎓', noLink: true },
    ],
    stats: [{ val: '~2500', label: 'Polytechnics in India' }, { val: '2nd yr', label: 'B.Tech direct lateral entry' }, { val: '₹10K', label: 'Govt polytechnic annual fee' }],
  },
  'skill-courses': {
    whyChoose: [
      'PMKVY government courses — completely free',
      'Get job-ready in 3–12 months',
      'Certificate recognized by NSDC across India',
      'Placement assistance included in most courses',
      'Digital skills (coding, marketing) open freelancing globally',
    ],
    roadmap: [
      { step: 'Choose a Skill Course', desc: 'Digital Marketing | Beauty & Wellness | Coding | Retail | Healthcare | Hospitality', icon: '🎯', color: 'bg-slate-100 text-slate-700' },
      { step: 'Enroll (Free/Low Cost)', desc: 'PMKVY centers: Free govt-certified courses | Private institutes: ₹5K–₹50K', icon: '📝', color: 'bg-blue-100 text-blue-700' },
      { step: 'Training (3–12 months)', desc: 'Practical skill training + industry projects + soft skills', icon: '🔨', color: 'bg-amber-100 text-amber-700' },
      { step: 'Job / Freelance / Business', desc: 'Placement support | Self-employment | Freelancing on Fiverr, Upwork | Own business', icon: '💼', color: 'bg-green-100 text-green-700' },
    ],
    keyExams: ['No entrance exams required', 'NSDC Skill Assessment (after course)', 'PMKVY Recognition of Prior Learning (RPL)', 'Google Digital Garage (Free)', 'HubSpot Academy (Free)'],
    careers: [
      { title: 'Digital Marketer', salary: '₹2L–₹12L', demand: 'Very High', icon: '📱', noLink: true },
      { title: 'Beauty Therapist', salary: '₹1.5L–₹8L', demand: 'High', icon: '💄', noLink: true },
      { title: 'Junior Web Developer', salary: '₹2L–₹10L', demand: 'High', icon: '💻', noLink: true },
      { title: 'Retail Manager', salary: '₹1.8L–₹6L', demand: 'Moderate', icon: '🏪', noLink: true },
    ],
    stats: [{ val: 'Free', label: 'PMKVY course fee for eligible students' }, { val: '40+', label: 'Skill sectors covered' }, { val: '30M+', label: 'Indians trained under PMKVY' }],
  },
};

export default function StreamDetailPage() {
  const { streamId } = useParams();
  const { t } = useLanguage();
  const stream = after10thStreams.find((s) => s.id === streamId);
  const details = streamDetails[streamId];

  if (!stream) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-page-title mb-4">🔍</p>
          <p className="text-gray-500 mb-4">{t('streamGuide.notFound')}</p>
          <Link to="/after-10th" className="text-violet-600 underline">← {t('common.backToAfter10th')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <div className={`bg-gradient-to-r ${stream.gradient} text-white py-14 px-4`}>
        <div className="section-container">
          <Link to="/after-10th" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-5 transition-colors">
            ← {t('common.backToAllPathways')}
          </Link>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
            <Link to="/" className="hover:text-white/80">{t('common.home')}</Link> ›
            <Link to="/after-10th" className="hover:text-white/80">{t('common.after10th')}</Link> ›
            <span className="text-white/80">{stream.title}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur flex-shrink-0">
              {stream.icon}
            </div>
            <div>
              <h1 className="text-page-title">{stream.title}</h1>
              <p className="text-white/75 mt-1">{stream.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="glass px-3 py-1 rounded-lg text-sm">⏱ {stream.duration}</span>
                <span className="glass px-3 py-1 rounded-lg text-sm">✅ {stream.eligibility}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main */}
          <div className="lg:col-span-2 space-y-7">

            {/* Why Choose This */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                ✅ {t('common.whyChoose')} {stream.title}
              </h2>
              <ul className="space-y-3">
                {details?.whyChoose.map((w, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 animate-fade-in-up" style={{ animationDelay: `${i * 0.07}s` }}>
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                    {w}
                  </li>
                ))}
              </ul>
            </section>

            {/* Step-by-step roadmap */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                🗺️ {t('common.stepByStepRoadmap')}
              </h2>
              <div className="space-y-4">
                {details?.roadmap.map((step, i) => (
                  <div key={i} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    {/* Connector */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${step.color}`}>
                        {step.icon}
                      </div>
                      {i < details.roadmap.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2 min-h-[20px]" />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="font-bold text-gray-900">{step.step}</p>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Career paths */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                🚀 {t('common.careerPaths')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {details?.careers.map((c, i) => (
                  c.noLink ? (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
                          <p className="text-xs font-bold text-emerald-600">{c.salary}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        c.demand === 'Very High' || c.demand === 'Extremely High' ? 'bg-green-100 text-green-700' :
                        c.demand === 'High' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {c.demand}
                      </span>
                    </div>
                  ) : (
                    <Link
                      key={i}
                      to={`/after-12th/${c.streamId}/${c.careerId}`}
                      className="group flex items-center justify-between p-3.5 bg-violet-50 rounded-xl border border-violet-100 hover:bg-violet-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
                          <p className="text-xs font-bold text-violet-600">{c.salary}</p>
                        </div>
                      </div>
                      <span className="text-violet-500 text-xs font-bold group-hover:translate-x-1 transition-transform">
                        {t('common.stepByStepRoadmap')} →
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </section>

            {/* Stats */}
            <section className="grid sm:grid-cols-3 gap-4">
              {details?.stats.map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                  <p className="text-2xl font-bold text-violet-700">{s.val}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Key Exams */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-lg">📝</span> {t('common.entranceExams')}
              </h3>
              <ul className="space-y-2">
                {details?.keyExams.map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 bg-violet-100 text-violet-600 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-lg">📚</span> {stream.id === 'iti' ? t('common.availableTrades') : stream.id === 'polytechnic' ? t('common.diplomaBranches') : t('common.subjectsOptions')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stream.subjects.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">{s}</span>
                ))}
              </div>
            </div>

            {stream.id === 'science-pcm-pcb' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">🏛️</span> {t('common.topColleges')}
                </h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  {t('common.labelsHelp')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['IIT', 'NIT', 'IIIT', 'BITS', 'Govt College', 'Private University', 'Research Institute'].map((label) => (
                    <span key={label} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {stream.id === 'science-pcm-pcb' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">💻</span> {t('common.programmingLanguagesToKnow')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C++', 'Java', 'JavaScript', 'SQL'].map((language) => (
                    <span key={language} className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-xs font-medium border border-violet-100">
                      {language}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  Python is the safest first language for beginners, while C++ is useful for problem solving and engineering basics.
                </p>
              </div>
            )}

            {/* Counseling */}
            <div className={`bg-gradient-to-br ${stream.gradient} rounded-2xl p-6 text-white`}>
              <span className="text-3xl block mb-2">🎓</span>
              <h3 className="font-bold mb-2">{t('common.needGuidance')}</h3>
              <p className="text-white/75 text-sm mb-4">
                {t('common.guidanceBodyPrefix')} career counselor {t('common.guidanceBodySuffix')}
              </p>
              <Link
                to="/counseling"
                className="block w-full py-2.5 bg-white text-center font-bold rounded-xl text-sm hover:bg-white/90 transition-colors text-gray-900"
              >
                📞 {t('common.bookFreeCounseling')}
              </Link>
            </div>

            {/* After 12th CTA */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <h3 className="font-bold text-indigo-800 mb-2">🎓 {t('common.nextStep')}</h3>
              <p className="text-indigo-700 text-sm mb-3">{t('common.complete12thToExplore')}</p>
              <Link
                to="/after-12th"
                className="block w-full py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center font-bold rounded-xl text-sm"
              >
                {t('common.after12thCareers')} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
