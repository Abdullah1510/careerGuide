import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Set REACT_APP_SITE_URL in the hosting environment when moving to another domain.
const siteUrl = (process.env.REACT_APP_SITE_URL || 'https://careersbridge.in')
  .replace(/\/$/, '');

const defaultTitle = 'CareerGuide India — Free Career Guidance After 10th & 12th';
const defaultDescription = 'Free step-by-step career roadmaps for Indian students after 10th and 12th grade. Explore careers, entrance exams, and universities.';

const pageMetadata = {
  '/after-10th': {
    title: 'Career Options After 10th in India | CareerGuide India',
    description: 'Explore Science, Commerce, Arts, ITI, Polytechnic, and other career paths after Class 10 in India.',
  },
  '/after-12th': {
    title: 'Career Options After 12th in India | CareerGuide India',
    description: 'Find step-by-step career roadmaps, courses, entrance exams, and salary guidance after Class 12.',
  },
  '/streams': {
    title: 'Career Streams After 10th in India: Science, Commerce, Arts & More',
    description: 'Compare Science, Commerce, Arts, Pharmacy and Design career streams after Class 10. Explore subjects, entrance exams and career paths in India.',
  },
  '/exams': {
    title: 'Entrance Exam Calendar 2026 | CareerGuide India',
    description: 'Track important Indian entrance exams including JEE, NEET, CLAT, BITSAT, NIFT, and CA Foundation.',
  },
  '/universities': {
    title: 'University Guide for Indian Students | CareerGuide India',
    description: 'Explore university and admission guidance for students across India.',
  },
  '/counseling': {
    title: 'Free Career Counseling | CareerGuide India',
    description: 'Get free guidance to help choose your next academic and career path.',
  },
  '/about': {
    title: 'About CareerGuide India',
    description: 'Learn about CareerGuide India and its free career guidance resources for students.',
  },
};

function getMetadata(pathname) {
  if (pageMetadata[pathname]) return pageMetadata[pathname];

  const label = pathname
    .split('/')
    .filter(Boolean)
    .map((part) => part.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()))
    .join(' — ');

  return label
    ? { title: `${label} | CareerGuide India`, description: `Explore ${label} with practical career guidance for Indian students.` }
    : { title: defaultTitle, description: defaultDescription };
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = getMetadata(pathname);
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    document.title = title;

    const setMeta = (selector, attribute, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': pathname === '/streams' ? 'CollectionPage' : 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: 'CareerGuide India',
        url: siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'CareerGuide India',
        url: siteUrl,
        logo: `${siteUrl}/career-advice-logo.png`,
      },
    };

    let schema = document.querySelector('script[data-page-schema="true"]');
    if (!schema) {
      schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.dataset.pageSchema = 'true';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
}
