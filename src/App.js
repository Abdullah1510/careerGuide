import { useEffect } from 'react';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import CounselingModal from './components/CounselingModal';
import After10thPage from './pages/After10thPage';
import StreamDetailPage from './pages/StreamDetailPage';
import After12thPage from './pages/After12thPage';
import CareerListPage from './pages/CareerListPage';
import RoadmapDetailPage from './pages/RoadmapDetailPage';
import ExamCalendar from './components/ExamCalendar';
import StreamsPage from './pages/StreamsPage';
import StreamGuidePage from './pages/StreamGuidePage';
import AboutPage from './pages/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // JSDOM does not implement scrollTo in tests.
    }
  }, [pathname]);

  return null;
}

function Shell() {
  return (
    <div className="page-shell min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_32%),linear-gradient(180deg,_#020617_0%,_#0f172a_28%,_#f8fafc_28%,_#f8fafc_100%)] text-slate-900">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const goToPage = (pageId) => {
    const routes = {
      home: '/',
      after10th: '/after-10th',
      after12th: '/after-12th',
      exams: '/exams',
      counseling: '/counseling',
    };

    navigate(routes[pageId] || '/');
  };

  const startFlow = (level) => {
    navigate(level === '12th' ? '/after-12th' : '/after-10th');
  };

  return (
    <>
      <Hero onStartFlow={startFlow} setCurrentPage={goToPage} />
      <HomeContent setCurrentPage={goToPage} onStartFlow={startFlow} />
    </>
  );
}

function CounselingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <CounselingModal onClose={() => navigate('/')} prefilledCareer="" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<HomePage />} />
          <Route path="after-10th" element={<After10thPage />} />
          <Route path="after-10th/:streamId" element={<StreamDetailPage />} />
          <Route path="after-12th" element={<After12thPage />} />
          <Route path="after-12th/:streamId" element={<CareerListPage />} />
          <Route path="after-12th/:streamId/:careerId" element={<RoadmapDetailPage />} />
          <Route path="streams" element={<StreamsPage />} />
          <Route path="streams/:streamId" element={<StreamGuidePage />} />
          <Route path="exams" element={<ExamCalendar />} />
          <Route path="counseling" element={<CounselingPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
