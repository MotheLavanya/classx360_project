import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import LmsComparison from '../components/LmsComparison';
import FeatureShowcase from '../components/FeatureShowcase';
import RoleDashboards from '../components/RoleDashboards';
import Testimonials from '../components/Testimonials';

import HomeFinalCTA from '../components/HomeFinalCTA';

const Home = ({ onSignUp }) => {
    return (
        <main>
            <Hero onGetDemo={onSignUp} />
            <LmsComparison />
            <HowItWorks onGetDemo={onSignUp} />
            <FeatureShowcase />
            <RoleDashboards onSignUp={onSignUp} />
            <Testimonials />
            <HomeFinalCTA onSignUp={onSignUp} />

            {/* 
            <section className="reveal">
                <HowItWorks onGetDemo={onSignUp} />
            </section>
            */}

            {/* Final CTA Section - Commented out
            <section className="home-final-cta">
                <div className="cta-mesh"></div>
                <div className="cta-container">
                    <div className="cta-content animate-reveal">
                        <span className="cta-badge">Ready to Start?</span>
                        <h2 className="cta-title">Transform Your Education <span className="highlight">Journey Today</span></h2>
                        <p className="cta-desc">
                            Join thousands of educators and students already using ClassX 360 to build the future of learning.
                            Simple, powerful, and built for growth.
                        </p>
                        <div className="cta-actions">
                            <button className="btn-primary lg" onClick={onSignUp}>Get Started for Free</button>
                            <button className="btn-secondary lg" onClick={onSignUp}>Book a Live Demo</button>
                        </div>

                        <div className="cta-trust-markers">
                            <div className="trust-item">
                                <span className="trust-dot"></span> 24/7 Dedicated Support
                            </div>
                            <div className="trust-item">
                                <span className="trust-dot"></span> Enterprise-Grade Security
                            </div>
                            <div className="trust-item">
                                <span className="trust-dot"></span> Lifetime Access
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}
        </main>
    );
};

export default Home;
