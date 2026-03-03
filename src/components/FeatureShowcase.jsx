import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaGraduationCap, FaBullhorn } from 'react-icons/fa';
import { featureCategories } from '../data/featuresData.jsx';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('Management');
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        if (category === activeCategory) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveCategory(category);
            setIsAnimating(false);
        }, 300); // 300ms fade transition
    };

    const handleCardClick = (slug) => {
        navigate(`/feature/${slug}`);
    };

    const activeCategoryData = featureCategories[activeCategory];
    const activeCards = activeCategoryData.items;

    return (
        <section className="premium-features-section" id="features">
            <div className="premium-features-container">
                <div className="premium-features-header">
                    <h2 className="premium-features-title">Features of ClassX360</h2>
                    <p className="premium-features-subtitle">
                        "A complete Learning Management System that makes teaching, learning, and school management easy for everyone."
                    </p>
                </div>

                {/* SaaS Category Navigation Bar */}
                <div className="enterprise-tabs">
                    {Object.keys(featureCategories).map((category) => {
                        const iconMap = {
                            Management: <FaBuilding className="tab-icon" />,
                            Learning: <FaGraduationCap className="tab-icon" />,
                            Communication: <FaBullhorn className="tab-icon" />
                        };
                        return (
                            <button
                                key={category}
                                className={`enterprise-tab-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                                disabled={isAnimating}
                            >
                                {iconMap[category]}
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Full Width Feature Grid */}
                <div className={`enterprise-layout ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                    <div className="enterprise-grid">
                        {activeCards.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="premium-feature-card visible"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleCardClick(feature.slug)}
                            >
                                <div className="premium-feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="premium-feature-name">{feature.name}</h3>
                                <p className="premium-feature-desc">{feature.shortDesc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;

/* 
=============================================================
PREVIOUS CODE OF FEATURES SECTION (Commented out as requested)
=============================================================
import React, { useRef, useState, useEffect } from 'react';
import {
    FaCalendarCheck,
    FaClipboardCheck, FaRobot,
    FaChartBar, FaCreditCard, FaMobileAlt,
    FaArrowLeft, FaArrowRight, FaLayerGroup,
    FaGraduationCap, FaBullhorn, FaLock
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { features } from '../data/featuresData.jsx';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
    const navigate = useNavigate();
    // Triple the categories for infinite buffer
    const extendedCategories = [...features, ...features, ...features];

    const rowRef = useRef(null);
    const isDraggingRef = useRef(false);
    const isHoveredRef = useRef(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);

    const CARD_WIDTH = 240; // 210px card + 30px gap
    const SET_WIDTH = features.length *\ CARD_WIDTH;

    // ── Initial Positioning & Loop Jump ──
    const handleInfiniteJump = () => {
        if (!rowRef.current) return;
        const { scrollLeft } = rowRef.current;

        // If too far left or too far right, jump to middle set center
        if (scrollLeft < 10) {
            rowRef.current.scrollLeft = SET_WIDTH;
        } else if (scrollLeft >= (SET_WIDTH *\ 2)) {
            rowRef.current.scrollLeft = SET_WIDTH;
        }
    };

    useEffect(() => {
        if (rowRef.current) {
            rowRef.current.scrollLeft = SET_WIDTH;
        }
    }, [SET_WIDTH]);

    // ── Auto-scroll: one card every 8 seconds ──
    useEffect(() => {
        const INTERVAL_MS = 8000;
        const timer = setInterval(() => {
            if (!rowRef.current || isDraggingRef.current || isHoveredRef.current) return;

            rowRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });

            // Check for jump after animation finishes
            setTimeout(handleInfiniteJump, 600);
        }, INTERVAL_MS);

        return () => clearInterval(timer);
    }, []);

    // ── Manual Handlers ──
    const handleScrollLeft = () => {
        rowRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
        setTimeout(handleInfiniteJump, 600);
    };
    const handleScrollRight = () => {
        rowRef.current?.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
        setTimeout(handleInfiniteJump, 600);
    };

    const onMouseDown = (e) => {
        isDraggingRef.current = true;
        setStartX(e.pageX - rowRef.current.offsetLeft);
        setScrollLeftPos(rowRef.current.scrollLeft);
        rowRef.current.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        e.preventDefault();
        const x = e.pageX - rowRef.current.offsetLeft;
        const walk = (x - startX) *\ 1.5;
        rowRef.current.scrollLeft = scrollLeftPos - walk;
        handleInfiniteJump();
    };

    const stopDrag = () => {
        isDraggingRef.current = false;
        if (rowRef.current) rowRef.current.style.cursor = 'grab';
    };

    const handleCardMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) *\ 100;
        const y = ((e.clientY - rect.top) / rect.height) *\ 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleCardClick = (slug) => {
        if (isDraggingRef.current) return;
        navigate(`/feature/${slug}`);
    };

    const touchStartX = useRef(0);
    const touchScrollLeft = useRef(0);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].pageX - rowRef.current.offsetLeft;
        touchScrollLeft.current = rowRef.current.scrollLeft;
    };

    const onTouchMove = (e) => {
        const x = e.touches[0].pageX - rowRef.current.offsetLeft;
        const walk = (x - touchStartX.current) *\ 1.5;
        rowRef.current.scrollLeft = touchScrollLeft.current - walk;
        handleInfiniteJump();
    };

    return (
        <section className="features-adoption-section" id="features">
            <div className="features-container">
                <div className="flowing-line-overlay">
                    <svg className="flowing-svg" viewBox="0 0 3000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M120 320 L 700 320 C 850 320, 900 55, 1050 55 L 3000 55" stroke="#ffffff" strokeWidth="4" opacity="0.8" fill="none" />
                        <circle cx="120" cy="320" r="10" fill="#ffffff" opacity="0.8" />
                        <rect x="2990" y="45" width="20" height="20" fill="#ffffff" transform="rotate(45 3000 55)" opacity="0.7" />
                    </svg>
                </div>

                <div className="features-top-shelf">
                    <div className="sub-header-adoption">
                        <FaLayerGroup className="book-icon" size={18} />
                        <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Main Features</span>
                    </div>
                    <div className="scroll-controls-adoption">
                        <button className="ctrl-btn-adoption" onClick={handleScrollLeft} aria-label="Scroll Left"><FaArrowLeft /></button>
                        <button className="ctrl-btn-adoption" onClick={handleScrollRight} aria-label="Scroll Right"><FaArrowRight /></button>
                    </div>
                </div>

                <div className="features-layout-adoption">
                    <div className="features-heading-column">
                        <h2 className="main-heading-adoption">
                            Make Institution Management Simple with Powerful Features
                        </h2>
                        <Link to="/features">
                            <button className="view-all-btn-adoption">VIEW ALL FEATURES</button>
                        </Link>
                    </div>

                    <div className="features-scroll-column">
                        <div
                            className="cards-row-wrapper-hybrid"
                            ref={rowRef}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={stopDrag}
                            onMouseEnter={() => { isHoveredRef.current = true; }}
                            onMouseLeave={() => { stopDrag(); isHoveredRef.current = false; }}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                        >
                            {extendedCategories.map((cat, index) => (
                                <div
                                    key={`${cat.id}-${index}`}
                                    className="adoption-card"
                                    onClick={() => handleCardClick(cat.slug)}
                                    onMouseMove={handleCardMouseMove}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="card-number-watermark">{cat.number}</div>
                                    <div className="card-shimmer"></div>
                                    <div className="icon-wrapper-adoption">{cat.icon}</div>
                                    <h3>{cat.name}</h3>
                                    <div className="card-footer-adoption">
                                        <p className="card-description-adoption">{cat.shortDesc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;

*/
