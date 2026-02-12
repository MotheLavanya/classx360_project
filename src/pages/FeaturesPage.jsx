import React from 'react';
import FeatureShowcase from '../components/FeatureShowcase';
import './FeaturesPage.css';

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <div className="features-hero">
                <div className="hero-content">
                    <h1>Explore Our <span className="blue-highlight">Powerful Features</span></h1>
                    <p>Discover how ClassX360 empowers institutions with cutting-edge academic and administrative tools.</p>
                </div>
            </div>

            <FeatureShowcase />

            <div className="features-footer-cta">
                <div className="cta-content">
                    <h2>Ready to get started?</h2>
                    <p>Join 1000+ institutions transforming education with ClassX360.</p>
                    <button className="btn-primary-lg">Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
