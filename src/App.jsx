import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import CourseDetail from './pages/CourseDetail';
import Footer from './components/Footer';
import FeaturesModal from './components/FeaturesModal';
import AboutModal from './components/AboutModal';

import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQs from './pages/FAQs';
import FeatureDetail from './pages/FeatureDetail';

// Helper component to handle conditional footer
const ConditionalFooter = ({ onSignUp, openLogin }) => {
  const location = useLocation();
  const hideOnPaths = [];

  if (hideOnPaths.includes(location.pathname)) {
    return null;
  }

  return <Footer onSignUp={onSignUp} onLogin={openLogin} />;
};

// Main Content component to allow using useNavigate
const MainApp = () => {
  const navigate = useNavigate();
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  useLayoutEffect(() => {
    // Force scroll to top instantly on initial load/refresh
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const openLogin = () => {
    navigate('/login');
    closeModals();
  };

  const openSignUp = () => {
    navigate('/signup');
    closeModals();
  };

  const closeModals = () => {
    setIsFeaturesModalOpen(false);
    setIsAboutModalOpen(false);
  };

  return (
    <div className="landing-page">
      <Navbar
        onLogin={openLogin}
        onSignUp={openSignUp}
        onFeaturesToggle={() => {
          setIsFeaturesModalOpen(!isFeaturesModalOpen);
          setIsAboutModalOpen(false);
        }}
        isFeaturesOpen={isFeaturesModalOpen}
        onAboutToggle={() => {
          setIsAboutModalOpen(!isAboutModalOpen);
          setIsFeaturesModalOpen(false);
        }}
        isAboutOpen={isAboutModalOpen}
        onNavigate={closeModals}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage onSignUp={openSignUp} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pricing" element={<Pricing onSignUp={openSignUp} />} />
        <Route path="/checkout/:planId" element={<Checkout />} />
        <Route path="/course/:id" element={<CourseDetail onSignUp={openSignUp} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/testimonials" element={<TestimonialsPage onSignUp={openSignUp} />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/feature/:slug" element={<FeatureDetail onSignUp={openSignUp} />} />
      </Routes>
      <ConditionalFooter onSignUp={openSignUp} openLogin={openLogin} />

      <FeaturesModal
        isOpen={isFeaturesModalOpen}
        onClose={() => setIsFeaturesModalOpen(false)}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainApp />
    </Router>
  );
}

export default App;
