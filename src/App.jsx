import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import CourseDetail from './pages/CourseDetail';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
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

// Helper component to handle conditional footer
const ConditionalFooter = ({ onSignUp, openLogin }) => {
  const location = useLocation();
  const hideOnPaths = ['/login', '/signup'];

  if (hideOnPaths.includes(location.pathname)) {
    return null;
  }

  return <Footer onSignUp={onSignUp} onLogin={openLogin} />;
};

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');


  const openLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
    setIsFeaturesModalOpen(false);
    setIsAboutModalOpen(false);
  };

  const openSignUp = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
    setIsFeaturesModalOpen(false);
    setIsAboutModalOpen(false);
  };

  const closeModals = () => {
    setIsFeaturesModalOpen(false);
    setIsAboutModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="landing-page">
        <Navbar
          onLogin={openLogin}
          onSignUp={openSignUp}
          onFeaturesToggle={() => {
            setIsFeaturesModalOpen(!isFeaturesModalOpen);
            setIsAboutModalOpen(false);
            setIsAuthModalOpen(false);
          }}
          isFeaturesOpen={isFeaturesModalOpen}
          onAboutToggle={() => {
            setIsAboutModalOpen(!isAboutModalOpen);
            setIsFeaturesModalOpen(false);
            setIsAuthModalOpen(false);
          }}
          isAboutOpen={isAboutModalOpen}
          onNavigate={closeModals}
        />
        <Routes>
          <Route path="/" element={<Home onSignUp={openSignUp} />} />
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
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
        <ConditionalFooter onSignUp={openSignUp} openLogin={openLogin} />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
        />
        <FeaturesModal
          isOpen={isFeaturesModalOpen}
          onClose={() => setIsFeaturesModalOpen(false)}
        />
        <AboutModal
          isOpen={isAboutModalOpen}
          onClose={() => setIsAboutModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
