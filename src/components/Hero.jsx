import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { FaChevronLeft, FaChevronRight, FaChalkboardTeacher, FaLaptopCode, FaBook, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import HeroBg1 from '../assets/hero_new_1.png';
import HeroBg2 from '../assets/allinone.png';
import HeroBg3 from '../assets/graduation-bg.png';
import LogoTCS from '../assets/tcs.png';
import LogoInfosys from '../assets/infosys.png';
import LogoAmazon from '../assets/image copy 7.png';
import LogoInfosyte from '../assets/infosyte.png';
import LogoGyantrix from '../assets/Screenshot 2026-02-05 185349.png';
import LogoFutureInvo from '../assets/futureinvosolutions.webp';
import LogoInfotech from '../assets/infotech.png';

const Hero = ({ onGetDemo }) => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [canClick, setCanClick] = useState(true);
    const timeoutRef = useRef(null);

    const slides = [
        {
            headline: "All-In-One Education Management Platform",
            subheadline: "Automate attendance, exams, fee workflows, staff records, and real-time insights — all in one system.",
            primaryCTA: "Start Your Free Demo",
            secondaryCTA: "Explore Features",
            scrollPrompt: "⬇ Scroll to discover features",
            background: HeroBg1
        },
        {
            headline: "Modern LMS, Zero Paperwork",
            subheadline: "Everything your institution needs, in one digital platform. Less paperwork, more focus on growth and results.",
            primaryCTA: "Sign Up Free",
            secondaryCTA: "See Features",
            scrollPrompt: "⬇ Save time and reduce workload",
            background: HeroBg2
        },
        {
            headline: "Empowering Next-Gen Education",
            subheadline: "Join thousands of institutions using ClassX 360 to engage students and scale faster.",
            primaryCTA: "Start Free Trial",
            secondaryCTA: "Success Stories",
            scrollPrompt: "⬇ See the ClassX 360 difference",
            background: HeroBg3
        }
    ];

    // Array including a clone for infinite loop
    const displaySlides = [...slides, slides[0]];

    const triggerCooldown = () => {
        setCanClick(false);
        setTimeout(() => setCanClick(true), 1200); // Match CSS transition time
    };

    const nextSlide = useCallback(() => {
        if (!canClick) return;
        triggerCooldown();
        setCurrentSlide((prev) => prev + 1);
    }, [canClick]);

    const prevSlide = useCallback(() => {
        if (!canClick) return;
        triggerCooldown();

        if (currentSlide === 0) {
            setIsTransitioning(false);
            setCurrentSlide(slides.length);
            setTimeout(() => {
                setIsTransitioning(true);
                setCurrentSlide(slides.length - 1);
            }, 50);
        } else {
            setCurrentSlide((prev) => prev - 1);
        }
    }, [currentSlide, slides.length, canClick]);

    // Handle the infinite loop jump
    useEffect(() => {
        if (currentSlide === slides.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(0);
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 1200); // Wait for transition duration
            return () => clearTimeout(timer);
        }
    }, [currentSlide, slides.length]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const activeIndex = currentSlide % slides.length;

    const handleSecondaryAction = (index) => {
        if (index === 2) {
            navigate('/testimonials');
        } else {
            navigate('/features');
        }
    };

    const featureCards = [
        {
            icon: <FaChalkboardTeacher />,
            title: "Expert Instructors",
            text: "Learn from industry leaders with years of experience and deep domain expertise.",
            color: "blue"
        },
        {
            icon: <FaLaptopCode />,
            title: "Active Learning",
            text: "Engage in hands-on projects and interactive sessions designed for mastery.",
            color: "orange"
        },
        {
            icon: <FaBook />,
            title: "Books & Library",
            text: "Access a vast collection of resources, ebooks, and research papers anytime.",
            color: "cyan"
        }
    ];

    return (
        <section className="hero reveal" id="home">
            {/* Background Slider Track */}
            <div className="hero-bg-slider">
                <div
                    className="hero-bg-track"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                    }}
                >
                    {displaySlides.map((slide, index) => (
                        <div key={index} className="hero-bg-slide">
                            <img
                                src={slide.background}
                                alt={`Hero Background ${index + 1}`}
                                className="hero-background-image"
                            />
                        </div>
                    ))}
                </div>
                <div className="hero-overlay"></div>
            </div>

            {/* Navigation Arrows */}
            <button className="hero-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                <FaChevronLeft />
            </button>
            <button className="hero-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
                <FaChevronRight />
            </button>

            <div className="hero-content">
                <div className="hero-text-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`hero-slide ${activeIndex === index ? 'active' : ''}`}
                        >
                            <h1>{slide.headline}</h1>
                            <p className="hero-subtitle">
                                {slide.subheadline}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Fixed CTA Buttons */}
                <div className="hero-cta reveal delay-1">
                    <button className="btn-primary hero-btn-premium" onClick={onGetDemo}>
                        <FaPlayCircle className="btn-icon-lead" />
                        Start Your Free Demo
                    </button>
                    <button className="btn-secondary hero-btn-glass" onClick={() => navigate('/features')}>
                        Explore Features
                        <FaArrowRight className="btn-icon-trail" />
                    </button>
                </div>

                {/* Fixed Scroll Prompt */}
                <div className="scroll-prompt-container reveal delay-2">
                    <p className="scroll-prompt-text">⬇ Explore ClassX 360 features</p>
                </div>
            </div>

            <div className="hero-feature-cards">
                <div className="cards-container">
                    <div className="feature-card stats-card">
                        <div className="stats-text">
                            <span>1000+ Institutions</span>
                            <span className="separator">|</span>
                            <span className="highlight">50,000+ Students</span>
                            <span className="separator">|</span>
                            <span>Across India</span>
                        </div>
                        <div className="company-marquee">
                            <div className="marquee-track">
                                {/* First Set */}
                                <img src={LogoFutureInvo} alt="Future Invo Solutions" className="company-logo" />
                                <img src={LogoInfosyte} alt="Infosyte" className="company-logo infosyte" />
                                <img src={LogoTCS} alt="TCS" className="company-logo large" />
                                <img src={LogoAmazon} alt="Amazon" className="company-logo" />
                                <img src={LogoInfosys} alt="Infosys" className="company-logo large" />
                                <img src={LogoGyantrix} alt="Gyantrix" className="company-logo" />
                                <img src={LogoInfotech} alt="Infotech" className="company-logo" />

                                {/* Duplicated for Infinite Scroll */}
                                <img src={LogoFutureInvo} alt="Future Invo Solutions" className="company-logo" />
                                <img src={LogoInfosyte} alt="Infosyte" className="company-logo infosyte" />
                                <img src={LogoTCS} alt="TCS" className="company-logo large" />
                                <img src={LogoAmazon} alt="Amazon" className="company-logo" />
                                <img src={LogoInfosys} alt="Infosys" className="company-logo large" />
                                <img src={LogoGyantrix} alt="Gyantrix" className="company-logo" />
                                <img src={LogoInfotech} alt="Infotech" className="company-logo" />

                                {/* Third set for gapless loop on wider screens */}
                                <img src={LogoFutureInvo} alt="Future Invo Solutions" className="company-logo" />
                                <img src={LogoInfosyte} alt="Infosyte" className="company-logo infosyte" />
                                <img src={LogoTCS} alt="TCS" className="company-logo large" />
                                <img src={LogoAmazon} alt="Amazon" className="company-logo" />
                                <img src={LogoInfosys} alt="Infosys" className="company-logo large" />
                                <img src={LogoGyantrix} alt="Gyantrix" className="company-logo" />
                                <img src={LogoInfotech} alt="Infotech" className="company-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
