import { latestExams2026 } from './careerData';

const examByName = latestExams2026.reduce((map, exam) => {
  map[exam.name] = exam;
  return map;
}, {});

export const examSlugByName = {
  'JEE Main 2026': 'jee-main-advanced',
  'JEE Advanced 2026': 'jee-main-advanced',
  'NEET-UG 2026': 'neet-ug',
  'CLAT 2026': 'clat',
  'CA Foundation 2026': 'ca-foundation',
  'BITSAT 2026': 'bitsat',
  'NIFT 2026': 'nift',
  'NCHMCT JEE 2026': 'nchmct-jee',
};

export const keyExamGuides = [
  {
    id: 'jee-main-advanced',
    footerLabel: 'JEE Main & Advanced',
    title: 'JEE Main & Advanced 2026',
    icon: '⚙️',
    gradient: 'from-violet-600 to-cyan-500',
    exams: [examByName['JEE Main 2026'], examByName['JEE Advanced 2026']],
    overview: 'The main engineering route for NITs, IIITs, CFTIs, and IITs. JEE Main is the first milestone; top qualifiers can attempt JEE Advanced for IIT admission.',
    latestUpdate: 'Use JEE Main scores for NIT, IIIT, and CFTI choices, then track JEE Advanced eligibility and counseling windows separately.',
    timeline: ['JEE Main Session 1', 'JEE Main Session 2', 'JEE Advanced eligibility check', 'JoSAA counseling and choice filling'],
    bestFor: ['B.Tech / B.E', 'Computer Science', 'AI & Data Science', 'Electronics', 'Core Engineering'],
    actionPlan: ['Revise NCERT and class 11-12 concepts', 'Solve previous-year papers weekly', 'Track both JEE Main sessions', 'Keep backup options like BITSAT and state CETs ready'],
  },
  {
    id: 'neet-ug',
    footerLabel: 'NEET-UG',
    title: 'NEET-UG 2026',
    icon: '🏥',
    gradient: 'from-rose-600 to-pink-500',
    exams: [examByName['NEET-UG 2026']],
    overview: 'India’s primary medical entrance exam for MBBS, BDS, Ayurveda, Homeopathy, Veterinary, and many allied healthcare paths.',
    latestUpdate: 'After the exam/result phase, students should watch scorecards, MCC/state counseling notices, category cutoffs, and seat matrix updates.',
    timeline: ['Admit card and exam city slip', 'NEET-UG exam', 'Answer key and result', 'MCC/state counseling and seat allotment'],
    bestFor: ['MBBS', 'BDS', 'BAMS / BHMS', 'Veterinary Science', 'Some B.Sc Nursing routes'],
    actionPlan: ['Prioritize NCERT Biology line by line', 'Balance Physics numericals with Chemistry revision', 'Attempt full mock tests on Sundays', 'Track counseling rounds after the result'],
  },
  {
    id: 'clat',
    footerLabel: 'CLAT',
    title: 'CLAT 2026',
    icon: '⚖️',
    gradient: 'from-amber-500 to-orange-600',
    exams: [examByName['CLAT 2026']],
    overview: 'The key national law entrance exam for admission to NLUs and integrated law programs after 12th.',
    latestUpdate: 'CLAT is usually followed by rank lists, NLU preference checks, counseling registration, and multiple allotment rounds.',
    timeline: ['Application window', 'Admit card', 'CLAT exam', 'Counseling registration and NLU allotment'],
    bestFor: ['BA LLB', 'BBA LLB', 'Corporate Law', 'Litigation', 'Judiciary foundation'],
    actionPlan: ['Read current affairs every day', 'Practice legal reasoning passages', 'Build speed for English and logic sections', 'Review NLU preferences before counseling'],
  },
  {
    id: 'ca-foundation',
    footerLabel: 'CA Foundation',
    title: 'CA Foundation 2026',
    icon: '🏦',
    gradient: 'from-blue-600 to-indigo-600',
    exams: [examByName['CA Foundation 2026']],
    overview: 'The entry-level ICAI exam for students planning the Chartered Accountant pathway after class 12.',
    latestUpdate: 'Students should track ICAI registration deadlines, exam form windows, admit card release, and result dates for the current attempt.',
    timeline: ['ICAI registration', 'Exam form submission', 'CA Foundation exam', 'Result and Intermediate planning'],
    bestFor: ['Chartered Accountancy', 'Audit', 'Taxation', 'Finance', 'Accounting careers'],
    actionPlan: ['Strengthen accounts and business laws', 'Create a daily maths and statistics routine', 'Practice ICAI-style questions', 'Plan the Foundation to Intermediate timeline early'],
  },
  {
    id: 'bitsat',
    footerLabel: 'BITSAT',
    title: 'BITSAT 2026',
    icon: '💻',
    gradient: 'from-indigo-600 to-sky-500',
    exams: [examByName['BITSAT 2026']],
    overview: 'The entrance exam for BITS Pilani, Goa, and Hyderabad programs, including popular engineering and pharmacy options.',
    latestUpdate: 'BITSAT candidates should track both test sessions, score improvement options, preference form deadlines, and iteration results.',
    timeline: ['Session 1 booking', 'Session 1 exam', 'Session 2 / improvement attempt', 'Preference form and admission iterations'],
    bestFor: ['B.E. Computer Science', 'B.E. Electronics', 'B.E. Mechanical', 'B.Pharm', 'Integrated M.Sc routes'],
    actionPlan: ['Practice speed-based mock tests', 'Revise English and logical reasoning too', 'Track both BITSAT sessions', 'Use JEE preparation as the concept base'],
  },
  {
    id: 'nift',
    footerLabel: 'NIFT',
    title: 'NIFT 2026',
    icon: '🎨',
    gradient: 'from-pink-600 to-rose-500',
    exams: [examByName['NIFT 2026']],
    overview: 'The National Institute of Fashion Technology entrance route for fashion, design, accessory, textile, and communication design programs.',
    latestUpdate: 'NIFT candidates should follow written-test results, situation test or interview stages, final merit lists, and campus preference deadlines.',
    timeline: ['Written entrance test', 'Result shortlist', 'Situation test / interview stage', 'Final merit and campus allotment'],
    bestFor: ['Fashion Design', 'Accessory Design', 'Textile Design', 'Fashion Communication', 'Retail and apparel careers'],
    actionPlan: ['Build a sketchbook and portfolio', 'Practice creative ability tests', 'Prepare for situation test materials', 'Follow fashion, brands, fabrics, and design trends'],
  },
  {
    id: 'nchmct-jee',
    footerLabel: 'NCHMCT JEE',
    title: 'NCHMCT JEE 2026',
    icon: '🏨',
    gradient: 'from-lime-600 to-emerald-500',
    exams: [examByName['NCHMCT JEE 2026']],
    overview: 'The national entrance route for hotel management and hospitality programs across IHMs and participating institutes.',
    latestUpdate: 'After NCHMCT JEE, students should track rank cards, institute choice filling, allotment rounds, and reporting instructions.',
    timeline: ['Application and admit card', 'NCHMCT JEE exam', 'Rank card', 'IHM counseling and reporting'],
    bestFor: ['Hotel Management', 'Hospitality Operations', 'Culinary careers', 'Travel and tourism', 'Service management'],
    actionPlan: ['Practice reasoning and aptitude daily', 'Improve English and service-industry awareness', 'Read hospitality current affairs', 'Compare IHMs by placements and location'],
  },
];

export const getExamGuideById = (id) => keyExamGuides.find((guide) => guide.id === id);

export const getExamGuidePathByName = (name) => {
  const slug = examSlugByName[name];
  return slug ? `/exams/${slug}` : '/exams';
};
