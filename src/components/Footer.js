import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { careerStreamGuides } from '../data/streamGuides';
import { getLocalizedStreamTitle } from '../utils/streamI18n';
import { keyExamGuides } from '../data/examGuides';

export default function Footer() {
  const { t } = useLanguage();
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    streams: false,
    exams: false,
  });
  const quickLinks = [
    { to: '/streams', label: t('nav.careerStreams') },
    { to: '/after-10th', label: t('nav.after10th') },
    { to: '/after-12th', label: t('nav.after12th') },
    { to: '/exams', label: t('nav.examCalendar') },
    { to: '/counseling', label: t('nav.freeCounseling') },
    { to: '/about', label: 'About Us' },
  ];
  const streams = careerStreamGuides;
  const exams = keyExamGuides;
  const toggleSection = (section) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  function FooterAccordion({ id, title, children }) {
    const isOpen = openSections[id];

    return (
      <div>
        <button
          type="button"
          onClick={() => toggleSection(id)}
          className="flex w-full items-center justify-between text-white text-sm font-semibold uppercase tracking-widest md:pointer-events-none"
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <span className={`md:hidden text-xl leading-none text-slate-300 transition-all duration-300 ${isOpen ? 'rotate-180 text-violet-300' : 'rotate-0'}`}>
            {isOpen ? '−' : '+'}
          </span>
        </button>
        <div className={`${isOpen ? 'footer-accordion-open grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'} md:mt-5 md:grid-rows-[1fr] md:opacity-100 grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-out`}>
          <div className={`min-h-0 transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-2'} md:translate-y-0`}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="section-container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
              aria-label="CareerGuide Roadmap Hub — Home"
            >
              <Logo tone="light" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{t('footer.description')}</p>
            <p className="mt-5 text-xs text-slate-500">🇮🇳 {t('footer.madeFor')}</p>
          </div>

          {/* Quick Links */}
          <FooterAccordion id="quickLinks" title={t('footer.quickLinks')}>
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
          </FooterAccordion>

          {/* Career Streams */}
          <FooterAccordion id="streams" title={t('footer.careerStreams')}>
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
          </FooterAccordion>

          {/* Key Exams */}
          <FooterAccordion id="exams" title={t('footer.keyExams')}>
            <ul className="space-y-3">
              {exams.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/exams/${item.id}`}
                    className="group text-sm flex items-center gap-2 hover:text-violet-400 transition-colors"
                  >
                  <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                    <span>{item.footerLabel}</span>
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>
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
