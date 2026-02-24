import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaBullseye, FaLightbulb, FaCheckCircle, FaHistory,
    FaUsers, FaStar, FaArrowRight, FaRocket, FaShieldAlt, FaHandshake
} from 'react-icons/fa';
import './About.css';
import StaticPillars from '../components/StaticPillars';

// Import assets
import StoryImage from '../assets/transform.png';
import TeamImage from '../assets/aboutus.png';
import DashboardImage from '../assets/dashboard_preview.png';
import BgPattern from '../assets/vision.png';

// Import additional assets
import StudentImage from '../assets/student_mgmt_new.png';
import AcademicImage from '../assets/exams_assessments_new.png';
import FinanceImage from '../assets/finance_premium.png';
import CommunityImage from '../assets/communities_new.png';
import InsightsImage from '../assets/reports_analytics_new.png';

const About = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1, // Lower threshold for earlier, smoother triggers
            rootMargin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Unobserve after animation for performance
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Targeted search to ensure we catch dynamically rendered items
        const revealElements = document.querySelectorAll('.reveal-section, .about-hero-section');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-modern-page">
            {/* 1. Hero Section - Removed reveal-section for immediate visibility */}
            <header className="about-hero-section active">
                <div className="container">
                    <span className="about-badge">About ClassX 360</span>
                    <h1 className="about-title-main">Empowering Education with <span className="highlight-maroon">Smart Solutions</span></h1>
                    <p className="about-subtitle">
                        A next-generation integrated management ecosystem designed to transform how institutions operate and succeed.
                    </p>
                </div>
            </header>

            {/* Ruyton-Style Intro Section with Hover-Reveal Pillars */}
            <section className="about-intro-statement reveal-section">
                <div className="container">
                    {/* <h2 className="intro-statement">
                        A comprehensive, forward-thinking platform from Student Enrollment to Alumni Management,
                        ClassX 360 empowers every institution to achieve operational excellence.
                    </h2> */}

                    <div className="intro-cards-vertical">
                        {/* Pillar 1: Student Management */}
                        <div className="intro-hover-card">
                            <div className="pillar-background">
                                <img src={StudentImage} alt="Student Management" />
                                <div className="pillar-gradient-overlay"></div>
                            </div>
                            <div className="card-compact-view">
                                <h3>Student Management</h3>
                                <span className="expand-hint">Hover to explore</span>
                            </div>
                            <div className="card-expanded-view">
                                <div className="expanded-content">
                                    <h3>Student Management</h3>
                                    <p>Complete lifecycle tracking from admission to graduation with automated workflows and real-time attendance monitoring.</p>
                                    <Link to="/features" className="discover-link">
                                        Discover More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 2: Academic Excellence */}
                        <div className="intro-hover-card">
                            <div className="pillar-background">
                                <img src={AcademicImage} alt="Academic Excellence" />
                                <div className="pillar-gradient-overlay"></div>
                            </div>
                            <div className="card-compact-view">
                                <h3>Academic Excellence</h3>
                                <span className="expand-hint">Hover to explore</span>
                            </div>
                            <div className="card-expanded-view">
                                <div className="expanded-content">
                                    <h3>Academic Excellence</h3>
                                    <p>Comprehensive tools for curriculum planning, assessments, and performance analytics with detailed progress reports.</p>
                                    <Link to="/features" className="discover-link">
                                        Discover More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 3: Financial Operations */}
                        <div className="intro-hover-card">
                            <div className="pillar-background">
                                <img src={FinanceImage} alt="Financial Operations" />
                                <div className="pillar-gradient-overlay"></div>
                            </div>
                            <div className="card-compact-view">
                                <h3>Financial Operations</h3>
                                <span className="expand-hint">Hover to explore</span>
                            </div>
                            <div className="card-expanded-view">
                                <div className="expanded-content">
                                    <h3>Financial Operations</h3>
                                    <p>Streamlined fee management, payroll processing, and transparency. Automate billing, track payments, and generate financial reports.</p>
                                    <Link to="/features" className="discover-link">
                                        Discover More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 4: Community Engagement */}
                        <div className="intro-hover-card">
                            <div className="pillar-background">
                                <img src={CommunityImage} alt="Community Engagement" />
                                <div className="pillar-gradient-overlay"></div>
                            </div>
                            <div className="card-compact-view">
                                <h3>Community Hub</h3>
                                <span className="expand-hint">Hover to explore</span>
                            </div>
                            <div className="card-expanded-view">
                                <div className="expanded-content">
                                    <h3>Community Hub</h3>
                                    <p>Foster strong relationships with integrated communication tools for students, parents, and alumni.</p>
                                    <Link to="/features" className="discover-link">
                                        Discover More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 5: Insights & Reports */}
                        <div className="intro-hover-card">
                            <div className="pillar-background">
                                <img src={InsightsImage} alt="Insights & Reports" />
                                <div className="pillar-gradient-overlay"></div>
                            </div>
                            <div className="card-compact-view">
                                <h3>Insights & Reports</h3>
                                <span className="expand-hint">Hover to explore</span>
                            </div>
                            <div className="card-expanded-view">
                                <div className="expanded-content">
                                    <h3>Insights & Reports</h3>
                                    <p>Data-driven decision making with powerful analytics dashboards and customizable institutional reports.</p>
                                    <Link to="/features" className="discover-link">
                                        Discover More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Static Pillars Section */}
            <StaticPillars />

            {/* 2. Mission & Vision - Redesigned to Split Layout with Image */}
            <section className="about-vision-mission-split reveal-section">
                <div className="container alternating-grid">
                    <div className="visual-side">
                        <div className="image-stack">
                            <img src={BgPattern} alt="Our Vision & Mission" className="main-stack-img" />
                            <div className="floating-stat-card">
                                <h3>Visionary</h3>
                                <p>Education</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-side">
                        <div className="vision-mission-content">
                            <div className="vision-item mb-4">
                                <div className="section-tag small"><FaLightbulb /> Our Vision</div>
                                <h2 className="section-heading">Defining the <span className="highlight-maroon">Future</span> of Learning</h2>
                                <p className="section-description">To be the leading global choice for institutions seeking reliable, secure, and scalable educational management tools that define the future of learning.</p>
                            </div>

                            <div className="mission-item">
                                <div className="section-tag small"><FaBullseye /> Our Mission</div>
                                <h2 className="section-heading">Connecting Every <span className="highlight-maroon">Stakeholder</span></h2>
                                <p className="section-description">To simplify school operations and elevate educational outcomes through innovative, all-in-one digital solutions that connect administrators, teachers, students, and parents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What We Do */}
            <section className="about-what-we-do reveal-section">
                <div className="container alternating-grid">
                    <div className="content-side">
                        <h2 className="section-heading">ClassX 360 Is A Comprehensive <span className="highlight-maroon">ERP</span></h2>
                        <p className="section-description">We bring all essential management tools together in one platform, eliminating silos and increasing efficiency.</p>
                        <ul className="feature-list-check">
                            <li><FaCheckCircle className="check-icon" /> Attendance & timetable automation</li>
                            <li><FaCheckCircle className="check-icon" /> Fee, finance & payroll management</li>
                            <li><FaCheckCircle className="check-icon" /> Academic planning & assessments</li>
                            <li><FaCheckCircle className="check-icon" /> Communication tools for all users</li>
                            <li><FaCheckCircle className="check-icon" /> Real-time reports & dashboards</li>
                        </ul>
                    </div>
                    <div className="visual-side">
                        <div className="image-stack">
                            <img src={DashboardImage} alt="Dashboard Preview" className="main-stack-img" />
                            <div className="floating-stat-card">
                                <h3>99.9%</h3>
                                <p>System Uptime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Brand Story */}
            <section className="about-journey reveal-section darker-bg">
                <div className="container grid-2-reversed">
                    <div className="visual-side">
                        <img src={StoryImage} alt="Our Journey" className="story-img" />
                    </div>
                    <div className="content-side">
                        <div className="section-tag"><FaHistory /> How We Started</div>
                        <h2 className="section-heading">Created to Simplify Education Management</h2>
                        <p>
                            We built ClassX360 to bring clarity and structure to institutional operations.
                            By combining smart technology with user-friendly design, we help institutions save time, improve efficiency, and focus more on student success.
                        </p>
                        <p>
                            Our platform connects academics, administration, and communication in one unified system.
                            This enables better coordination, accurate reporting, and smarter decision-making across the institution.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Team & Values */}
            <section className="about-values reveal-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading">Our Core Values</h2>
                        <p className="section-lead">The principles that guide every decision we make and every feature we build.</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-item">
                            <span className="value-num">01</span>
                            <div className="value-icon-wrapper">
                                <FaLightbulb />
                            </div>
                            <h3>Innovation</h3>
                            <p>We develop advanced technology to make teaching and learning more effective.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-num">02</span>
                            <div className="value-icon-wrapper">
                                <FaShieldAlt />
                            </div>
                            <h3>Trust & Security</h3>
                            <p>We ensure the highest level of safety and privacy for all institutional data.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-num">03</span>
                            <div className="value-icon-wrapper">
                                <FaUsers />
                            </div>
                            <h3>User-Centric</h3>
                            <p>We create easy-to-use tools that make daily tasks simpler for everyone.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-num">04</span>
                            <div className="value-icon-wrapper">
                                <FaHandshake />
                            </div>
                            <h3>Connected Learning</h3>
                            <p>We help teachers, students, and parents work together more efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Modern Team Section */}
            <section className="about-team-modern reveal-section">
                <div className="container">
                    <div className="team-modern-grid">
                        <div className="team-image-container">
                            <img src={TeamImage} alt="Our Team" className="team-main-img" />
                            <div className="team-experience-badge">
                                <h3>15+</h3>
                                <p>Years of Expertise</p>
                            </div>
                        </div>
                        <div className="team-content-container">
                            <div className="section-tag"><FaUsers /> Experience Meets Innovation</div>
                            <h2 className="section-heading">Meet the <span className="highlight-maroon">Visionaries</span> Behind ClassX 360</h2>
                            <p className="section-description">
                                Our team is a diverse collective of educators, software architects, and institutional designers. We don't just build software; we build the future of campus ecosystems.
                            </p>
                            <div className="team-feature-list">
                                <div className="team-feature">
                                    <FaRocket className="feature-icon" />
                                    <div>
                                        <h4>Driven by Purpose</h4>
                                        <p>Every line of code is written with the goal of simplifying education.</p>
                                    </div>
                                </div>
                                <div className="team-feature">
                                    <FaStar className="feature-icon" />
                                    <div>
                                        <h4>Expertise & Care</h4>
                                        <p>Bringing years of teaching experience together with modern technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Social Proof */}
            <section className="about-social-proof darker-bg">
                <div className="container">
                    <div className="stats-row">
                        <div className="stat-item">
                            <span className="stat-value">100+</span>
                            <span className="stat-label">Institutions Onboarded</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">15+</span>
                            <span className="stat-label">States Covered</span>
                        </div>
                    </div>
                    <div className="testimonial-section reveal-section">
                        <div className="quote-card glass-card">
                            <div className="stars-reveal">
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                            </div>
                            <p className="quote-text reveal-child">
                                "ClassX 360 helped us streamline processes and improve parent engagement in just weeks. The automation features are game-changers."
                            </p>
                            <span className="author reveal-child">— School Principal</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Call to Action */}
            <section className="about-cta reveal-section" style={{ backgroundImage: `url(${BgPattern})` }}>
                <div className="cta-overlay"></div>
                <div className="container cta-content">
                    <div className="cta-icon"><FaRocket /></div>
                    <h2>Ready to Transform Your Institution?</h2>
                    <p>Experience the power of ClassX 360 first-hand.</p>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn-about-primary">
                            Start Your Free Demo <FaArrowRight />
                        </Link>
                        <Link to="/contact" className="btn-about-secondary">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
