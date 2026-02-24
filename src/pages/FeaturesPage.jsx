import React from 'react';
import FeatureShowcase from '../components/FeatureShowcase';
import FeaturesBanner from '../assets/featuresimage.png';
import './FeaturesPage.css';

const FeaturesPage = ({ onSignUp }) => {
    return (
        <div className="features-page">
            <section className="features-hero-banner">
                <div className="features-hero-image-wrapper">
                    <img
                        src={FeaturesBanner}
                        alt="Features Banner"
                        className="features-banner-img"
                    />
                    <div className="features-banner-overlay"></div>
                </div>
                <div className="features-hero-content reveal-up">
                    <span className="features-badge">Platform Capabilities</span>
                    <h1>
                        <span className="reveal-line">Explore Our</span>
                        <span className="reveal-line highlight-maroon">Powerful Features</span>
                    </h1>
                    <p>Discover how ClassX360 empowers institutions with cutting-edge academic and administrative tools.</p>
                </div>
            </section>

            <FeatureShowcase />

            <div className="features-footer-cta">
                <div className="cta-content">
                    <h2>Ready to get started?</h2>
                    <p>Join 1000+ institutions transforming education with ClassX360.</p>
                    <button className="btn-primary-lg" onClick={onSignUp}>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
