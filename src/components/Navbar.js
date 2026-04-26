import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { locale, setLocale, t } = useLanguage();
  const pathname = location.pathname;

  const navLinks = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/streams', label: t('nav.careerStreams') },
    { to: '/after-10th', label: t('nav.after10th') },
    { to: '/after-12th', label: t('nav.after12th') },
    { to: '/exams', label: t('nav.examCalendar') },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const baseLink =
    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400';
  const languageButtonStyles = 'border-white/15 bg-white/10 text-white hover:bg-white/15';
  const languageMenuStyles = 'border-white/15 bg-slate-950 text-white shadow-2xl shadow-slate-950/20';
  const languageOptionStyles = 'text-white/80 hover:bg-white/10 hover:text-white';
  const currentLanguage = locale === 'hi' ? t('language.hindi') : t('language.english');

  function LanguageDropdown({ mobile = false, pathname: currentPathname }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      setOpen(false);
    }, [currentPathname]);

    const buttonClassName = mobile
      ? `flex w-full items-center justify-between rounded-xl border px-3 py-3 text-xs font-semibold transition-colors ${languageButtonStyles}`
      : `flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${languageButtonStyles}`;

    const menuClassName = mobile
      ? `absolute left-0 right-0 z-20 mt-2 rounded-2xl border p-2 ${languageMenuStyles}`
      : `absolute right-0 mt-2 w-40 rounded-2xl border p-2 ${languageMenuStyles}`;

    return (
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={buttonClassName}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={currentLanguage}
        >
          <span className={mobile ? 'flex items-center gap-2' : 'flex items-center gap-2'}>
            <span className="text-sm">🌐</span>
            <span>{locale === 'hi' ? 'HI' : 'EN'}</span>
          </span>
          <span className="text-[10px] opacity-70">▾</span>
        </button>

        {open && (
          <div className={menuClassName}>
            {[
              { code: 'en', label: t('language.english'), short: 'EN' },
              { code: 'hi', label: t('language.hindi'), short: 'HI' },
            ].map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLocale(option.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors ${languageOptionStyles}`}
              >
                <span>{option.label}</span>
                <span className="text-xs opacity-60">{option.short}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-950 border-b border-white/10 shadow-2xl shadow-slate-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group"
          >
            <Logo tone="light" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `${baseLink} ${
                    isActive
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <LanguageDropdown pathname={pathname} />

            <button
              onClick={() => navigate('/counseling')}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-violet-500/25 hover:scale-105 transition-transform"
            >
              <span>📞</span> {t('nav.freeCounseling')}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-950/98 border-t border-white/10`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-slate-950'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/counseling'); setMenuOpen(false); }}
            className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-xl text-sm font-bold"
          >
            📞 {t('nav.bookFreeCounseling')}
          </button>

          {/* Mobile language toggle — simple two-button row, no dropdown */}
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-white/40 text-xs px-1 mb-2">{t('language.label')}</p>
            <div className="flex gap-2">
              {[{ code: 'en', label: 'English', short: 'EN' }, { code: 'hi', label: 'हिंदी', short: 'HI' }].map((opt) => (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLocale(opt.code)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                    locale === opt.code
                      ? 'bg-violet-600 text-white border-violet-600'
                      : 'text-white/60 border-white/15 hover:border-white/30 hover:text-white/90'
                  }`}
                >
                  🌐 {opt.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
