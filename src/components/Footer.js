import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { careerStreamGuides } from '../data/streamGuides';
import { getLocalizedStreamTitle } from '../utils/streamI18n';

export default function Footer() {
  const { t } = useLanguage();
  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/streams', label: t('nav.careerStreams') },
    { to: '/after-10th', label: t('nav.after10th') },
    { to: '/after-12th', label: t('nav.after12th') },
    { to: '/exams', label: t('nav.examCalendar') },
    { to: '/counseling', label: t('nav.freeCounseling') },
    { to: '/about', label: 'About Us' },
  ];
  const streams = careerStreamGuides;
  const exams = t('footer.exams');

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="section-container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed">{t('footer.description')}</p>
            <p className="mt-5 text-xs text-slate-500">🇮🇳 {t('footer.madeFor')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Streams */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">{t('footer.careerStreams')}</h4>
            <ul className="space-y-3">
              {streams.map((stream) => (
                <li key={stream.id}>
                  <Link
                    to={`/streams/${stream.id}`}
                    className="text-sm hover:text-violet-400 transition-colors"
                  >
                    {getLocalizedStreamTitle(t, stream.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Exams */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">{t('footer.keyExams')}</h4>
            <ul className="space-y-3">
              {exams.map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>{t('footer.updated')}</span>
            <Link
              id="developer-credit"
              to="/#developer-credit"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              Built by Software Engineer Abdullah
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
