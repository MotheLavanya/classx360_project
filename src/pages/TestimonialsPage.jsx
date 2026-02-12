import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import './TestimonialsPage.css';
import { FaGraduationCap, FaQuoteRight, FaCheck } from 'react-icons/fa';

const TestimonialsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-section');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="testimonials-modern-page">
            {/* Hero Section */}
            <header className="testimonials-hero reveal-section">
                <div className="container">
                    <span className="testimonials-badge">Success Stories</span>
                    <h1 className="hero-title">Trusted by Leading <span className="highlight-maroon">Educational Institutions</span></h1>
                    <p className="hero-subtitle">
                        Discover how ClassX 360 is empowering administrators, teachers, and students across the globe to achieve more.
                    </p>
                </div>
            </header>

            {/* Impact Stats */}
            <section className="impact-stats-section reveal-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3 className="stat-number">100+</h3>
                            <p className="stat-name">Institutions</p>
                            <p className="stat-detail">Using ClassX 360 Daily</p>
                        </div>
                        <div className="stat-card highlighted">
                            <h3 className="stat-number">50k+</h3>
                            <p className="stat-name">Active Users</p>
                            <p className="stat-detail">Across All Platforms</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">98%</h3>
                            <p className="stat-name">Satisfaction Rate</p>
                            <p className="stat-detail">Based on User Surveys</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="success-stories-grid-section reveal-section">
                <div className="container">
                    <div className="section-intro">
                        <h2>Institutional <span className="highlight-maroon">Excellence</span></h2>
                        <p>Real voices from real partners who have transformed their campus management.</p>
                    </div>

                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-header">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Principal" />
                                <div className="story-author">
                                    <h4>Dr. Sarah Jenkins</h4>
                                    <span>Principal, Heritage International</span>
                                </div>
                            </div>
                            <p className="story-text">
                                "The transition to ClassX 360 was the best decision we made for our administrative efficiency. The centralized dashboard has saved our staff hundreds of hours annually."
                            </p>
                            <ul className="story-benefits">
                                <li><FaCheck /> 40% reduction in paperwork</li>
                                <li><FaCheck /> Improved parent communication</li>
                            </ul>
                        </div>

                        <div className="story-card">
                            <div className="story-header">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Director" />
                                <div className="story-author">
                                    <h4>Mr. Rajesh Khanna</h4>
                                    <span>Director, Apex Coaching Centre</span>
                                </div>
                            </div>
                            <p className="story-text">
                                "As a fast-growing coaching institute, we needed a scalable solution. ClassX 360 provided exactly that, with robust student performance tracking."
                            </p>
                            <ul className="story-benefits">
                                <li><FaCheck /> Automated fee collection</li>
                                <li><FaCheck /> Real-time exam portals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Carousel Section */}
            <section className="featured-testimonials reveal-section">
                <div className="container">
                    <div className="carousel-wrapper">
                        <div className="carousel-tag">
                            <FaQuoteRight className="tag-icon" />
                            <span>Voice of the community</span>
                        </div>
                        <Testimonials />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="testimonials-cta">
                <div className="container">
                    <div className="cta-glass">
                        <h2>Ready to write your own <span className="highlight-maroon">success story?</span></h2>
                        <p>Join the growing network of futuristic educational institutions.</p>
                        <div className="cta-actions">
                            <button className="btn-primary">Book a Demo</button>
                            <button className="btn-secondary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;
