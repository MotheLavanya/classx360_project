import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onLogin, onSignUp, onFeaturesToggle, isFeaturesOpen, onAboutToggle, isAboutOpen, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = location.pathname === '/';

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleFeatureClick = () => {
        onFeaturesToggle();
        if (window.innerWidth <= 768) setIsMobileMenuOpen(false);
    };

    const handleAboutClick = () => {
        onAboutToggle();
        if (window.innerWidth <= 768) setIsMobileMenuOpen(false);
    };

    const handleNavigate = () => {
        onNavigate();
        if (window.innerWidth <= 768) setIsMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        if (window.innerWidth <= 768) setIsMobileMenuOpen(false);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'is-home' : ''}`}>
            <Link to="/" className="logo" onClick={handleNavigate}>
                <FaGraduationCap className="logo-icon-main" />
                <span className="logo-text">ClassX<span className="logo-highlight">360</span></span>
            </Link>

            <button
                className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <NavLink to="/" onClick={handleNavigate} end>Home</NavLink>

                <NavLink to="/features" onClick={handleNavigate}>Features</NavLink>

                <div
                    className={`nav-dropdown-container ${isAboutDropdownOpen ? 'active' : ''}`}
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                    <span
                        className="nav-dropdown-trigger"
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setIsAboutDropdownOpen(!isAboutDropdownOpen);
                            }
                        }}
                    >
                        About <span className="dropdown-arrow">▾</span>
                    </span>
                    <div className="nav-dropdown-menu">
                        <NavLink to="/about" onClick={() => { handleNavigate(); setIsAboutDropdownOpen(false); }}>About Us</NavLink>
                        <NavLink to="/faqs" onClick={() => { handleNavigate(); setIsAboutDropdownOpen(false); }}>FAQs</NavLink>
                    </div>
                </div>

                <NavLink to="/pricing" onClick={handleNavigate}>Pricing</NavLink>
                <NavLink to="/blog" onClick={handleNavigate}>Blog</NavLink>
                <NavLink to="/testimonials" onClick={handleNavigate}>Testimonials</NavLink>
                <NavLink to="/contact" onClick={handleNavigate}>Contact</NavLink>

                <div className="mobile-nav-actions">
                    <button
                        className="btn-secondary"
                        onClick={() => { onSignUp(); closeMobileMenu(); }}
                    >
                        Sign Up
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => { onSignUp(); closeMobileMenu(); }}
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            <div className="nav-actions">
                <button className="btn-secondary" onClick={onSignUp}>Sign Up</button>
                <button className="btn-primary" onClick={onSignUp}>Get Started</button>
            </div>
        </header>
    );
};

export default Navbar;
