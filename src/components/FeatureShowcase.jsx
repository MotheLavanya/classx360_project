import React, { useRef, useState, useEffect } from 'react';
import {
    FaCalendarCheck,
    FaClipboardCheck, FaRobot,
    FaChartBar, FaCreditCard, FaMobileAlt,
    FaArrowLeft, FaArrowRight, FaLayerGroup,
    FaGraduationCap, FaBullhorn, FaLock
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
    const categories = [
        { id: '1', name: "User & Role Management", icon: <FaLock />, desc: "Secure portal access and permissions for staff and students." },
        { id: '2', name: "Student & Batch Management", icon: <FaGraduationCap />, desc: "Effortlessly manage student profiles and batch assignments." },
        { id: '3', name: "Exams & Assessments", icon: <FaClipboardCheck />, desc: "Comprehensive tools for scheduling and grading assessments." },
        { id: '4', name: "Attendance Management", icon: <FaCalendarCheck />, desc: "Automated digital tracking for daily student attendance." },
        { id: '5', name: "Fee & Finance Management", icon: <FaCreditCard />, desc: "Manage billing, payments, and financial records with ease." },
        { id: '6', name: "Communication & Notifications", icon: <FaBullhorn />, desc: "Instantly share updates and alerts with your community." },
        { id: '7', name: "Advanced Reports & Analytics", icon: <FaChartBar />, desc: "Actionable data insights to monitor educational performance." },
        { id: '8', name: "Mobile & Cloud Access", icon: <FaMobileAlt />, desc: "Access your dashboard anytime from any device." },
        { id: '9', name: "AI Automation & Personalization", icon: <FaRobot />, desc: "Smart tools to streamline repetitive tasks and learning." }
    ];

    // Triple the categories for infinite buffer
    const extendedCategories = [...categories, ...categories, ...categories];

    const rowRef = React.useRef(null);
    const isDraggingRef = React.useRef(false);
    const isHoveredRef = React.useRef(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);

    const CARD_WIDTH = 240; // 210px card + 30px gap
    const SET_WIDTH = categories.length * CARD_WIDTH;

    // ── Initial Positioning & Loop Jump ──
    const handleInfiniteJump = () => {
        if (!rowRef.current) return;
        const { scrollLeft } = rowRef.current;

        // If too far left or too far right, jump to middle set center
        if (scrollLeft < 10) {
            rowRef.current.scrollLeft = SET_WIDTH;
        } else if (scrollLeft >= (SET_WIDTH * 2)) {
            rowRef.current.scrollLeft = SET_WIDTH;
        }
    };

    useEffect(() => {
        if (rowRef.current) {
            rowRef.current.scrollLeft = SET_WIDTH;
        }
    }, [SET_WIDTH]);

    // ── Auto-scroll: one card every 12 seconds ──
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
        const walk = (x - startX) * 1.5;
        rowRef.current.scrollLeft = scrollLeftPos - walk;
        handleInfiniteJump();
    };

    const stopDrag = () => {
        isDraggingRef.current = false;
        if (rowRef.current) rowRef.current.style.cursor = 'grab';
    };

    const touchStartX = React.useRef(0);
    const touchScrollLeft = React.useRef(0);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].pageX - rowRef.current.offsetLeft;
        touchScrollLeft.current = rowRef.current.scrollLeft;
    };

    const onTouchMove = (e) => {
        const x = e.touches[0].pageX - rowRef.current.offsetLeft;
        const walk = (x - touchStartX.current) * 1.5;
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
                                <div key={`${cat.id}-${index}`} className="adoption-card">
                                    <div className="card-number-watermark">{cat.number}</div>
                                    <div className="card-shimmer"></div>
                                    <div className="icon-wrapper-adoption">{cat.icon}</div>
                                    <h3>{cat.name}</h3>
                                    <div className="card-footer-adoption">
                                        <p className="card-description-adoption">{cat.desc}</p>
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
