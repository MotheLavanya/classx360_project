import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { featureCategories } from '../data/featuresData.jsx';
import {
    FaArrowLeft, FaCheckCircle, FaHome,
    FaHeadset, FaShieldAlt, FaArrowRight,
    FaQuoteLeft, FaStar, FaPlay, FaChevronRight
} from 'react-icons/fa';
import './FeatureDetail.css';

const allFeatures = Object.values(featureCategories).map(cat => cat.items).flat();

const FeatureDetail = ({ onSignUp }) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const feature = allFeatures.find(f => f.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!feature) {
        return (
            <div className="fd-not-found">
                <FaShieldAlt size={60} />
                <h2>Module Not Found</h2>
                <p>The feature you are looking for does not exist or has been moved.</p>
                <Link to="/" className="fd-back-btn"><FaArrowLeft /> Return Home</Link>
            </div>
        );
    }

    const relatedFeatures = allFeatures.filter(f => f.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className="fd-page">
            {/* ── BACK BUTTON ── */}
            <div className="fd-back-nav">
                <Link to="/#features" className="fd-back-arrow">
                    <FaArrowLeft />
                    <span>Back to Features</span>
                </Link>
            </div>

            {/* ── Breadcrumb ── */}
            <nav className="fd-breadcrumb">
                <Link to="/"><FaHome /> Home</Link>
                <FaChevronRight className="fd-bc-sep" />
                <Link to="/#features">Features</Link>
                <FaChevronRight className="fd-bc-sep" />
                <span>{feature.name}</span>
            </nav>

            {/* ── HERO ── */}
            <section className="fd-hero">
                <div className="fd-hero-content">
                    <div className="fd-module-tag">
                        <span className="fd-tag-icon">{feature.icon}</span>
                        Active Module
                    </div>
                    <h1 className="fd-hero-title">{feature.name}</h1>
                    <p className="fd-hero-subtitle">{feature.shortDesc}</p>
                    <div className="fd-hero-btns">
                        <button className="fd-btn-primary" onClick={onSignUp}>
                            Get Started Free <FaArrowRight />
                        </button>
                        <Link to="/" className="fd-btn-ghost">
                            <FaPlay /> Watch Demo
                        </Link>
                    </div>
                    <div className="fd-hero-stats">
                        <div className="fd-stat"><strong>10,000+</strong><span>Institutions</span></div>
                        <div className="fd-stat-divider" />
                        <div className="fd-stat"><strong>99.9%</strong><span>Uptime</span></div>
                        <div className="fd-stat-divider" />
                        <div className="fd-stat"><strong>24/7</strong><span>Support</span></div>
                    </div>
                </div>
                <div className="fd-hero-visual">
                    <div className="fd-img-frame">
                        <img src={feature.image} alt={feature.name} className="fd-hero-img" />
                        <div className="fd-img-overlay">
                            <div className="fd-badge-float">
                                <FaStar className="fd-star-icon" />
                                <div>
                                    <strong>Professional Grade</strong>
                                    <span>Enterprise Ready</span>
                                </div>
                            </div>
                        </div>
                        <div className="fd-img-glow" />
                    </div>
                </div>
            </section>

            {/* ── OVERVIEW SECTION ── */}
            <section className="fd-overview-section">
                <div className="fd-overview-inner">
                    <div className="fd-overview-img-wrap">
                        <img src={feature.image} alt={`${feature.name} overview`} className="fd-overview-img" />
                        <div className="fd-overview-decor" />
                    </div>
                    <div className="fd-overview-text">
                        <p className="fd-section-tag">Professional Overview</p>
                        <h2 className="fd-section-title">What is <span>{feature.name}?</span></h2>
                        <p className="fd-overview-desc">{feature.longDesc}</p>
                        <div className="fd-overview-quote">
                            <FaQuoteLeft className="fd-quote-icon" />
                            <p>"{feature.shortDesc}"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY CAPABILITIES ── */}
            <section className="fd-capabilities-section">
                <div className="fd-section-header">
                    <p className="fd-section-tag">What You Get</p>
                    <h2 className="fd-section-title">Key <span>Capabilities</span></h2>
                    <p className="fd-section-subtitle">
                        Every feature is designed to deliver measurable institutional outcomes.
                    </p>
                </div>
                <div className="fd-capabilities-grid">
                    {feature.detailedBenefits?.map((benefit, idx) => {
                        return (
                            <div key={idx} className="fd-capability-card" style={{ animationDelay: `${idx * 80}ms` }}>
                                <div className="fd-cap-num">{String(idx + 1).padStart(2, '0')}</div>
                                <div className="fd-cap-check"><FaCheckCircle /></div>
                                <h3 className="fd-cap-title">{benefit.title}</h3>
                                <p className="fd-cap-desc">{benefit.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ── VISUAL FEATURE STRIP ── */}
            <section className="fd-visual-strip">
                <div className="fd-strip-inner">
                    <div className="fd-strip-text">
                        <p className="fd-section-tag">Trusted Technology</p>
                        <h2 className="fd-section-title">Built for <span>Modern Institutions</span></h2>
                        <p className="fd-strip-desc">
                            Our platform is engineered with enterprise-grade infrastructure, ensuring reliability,
                            security, and performance that meets the demands of high-performing institutions worldwide.
                        </p>
                        <ul className="fd-trust-list">
                            <li><FaCheckCircle /> ISO-certified data security protocols</li>
                            <li><FaCheckCircle /> 99.9% service uptime guarantee</li>
                            <li><FaCheckCircle /> Real-time cloud synchronisation</li>
                            <li><FaCheckCircle /> Dedicated onboarding and support team</li>
                        </ul>
                        <button className="fd-btn-primary" onClick={onSignUp}>
                            Start Free Trial <FaArrowRight />
                        </button>
                    </div>
                    <div className="fd-strip-img-wrap">
                        <img src={feature.image} alt="institutional technology" className="fd-strip-img" />
                        <div className="fd-strip-badge">
                            <strong>Enterprise</strong>
                            <span>Certified</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPLORE RELATED ── */}
            <section className="fd-related-section">
                <div className="fd-section-header">
                    <p className="fd-section-tag">Keep Exploring</p>
                    <h2 className="fd-section-title">Related <span>Modules</span></h2>
                </div>
                <div className="fd-related-grid">
                    {relatedFeatures.map(f => (
                        <Link key={f.id} to={`/feature/${f.slug}`} className="fd-related-card">
                            <img src={f.image} alt={f.name} className="fd-related-img" />
                            <div className="fd-related-info">
                                <div className="fd-related-icon">{f.icon}</div>
                                <h3>{f.name}</h3>
                                <p>{f.shortDesc}</p>
                                <span className="fd-related-link">Explore <FaArrowRight /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="fd-cta-section">
                <div className="fd-cta-inner">
                    <div className="fd-cta-text">
                        <h2>Ready to Modernize Your Institution?</h2>
                        <p>Experience the full power of our {feature.name} module and elevate your institution to the next level.</p>
                    </div>
                    <div className="fd-cta-btns">
                        <button className="fd-btn-cta-white" onClick={onSignUp}>Get Started Free</button>
                        <button className="fd-btn-cta-outline" onClick={() => window.location.href = 'mailto:support@classx360.com'}>
                            <FaHeadset /> Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureDetail;
