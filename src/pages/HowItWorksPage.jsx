import React from 'react';
import HowItWorks from '../components/HowItWorks';
import './HowItWorksPage.css';
import { FaRocket, FaClock, FaCheckCircle, FaUserShield } from 'react-icons/fa';

const HowItWorksPage = () => {
    const features = [
        {
            icon: <FaRocket />,
            title: "Rapid Deployment",
            desc: "Get your institution live in minutes with our automated setup wizard and pre-configured templates."
        },
        {
            icon: <FaClock />,
            title: "Time-Saving Automation",
            desc: "Reduce administrative workload by 60% with zero-manual entry attendance and fee processing."
        },
        {
            icon: <FaCheckCircle />,
            title: "Seamless Integration",
            desc: "Connect your existing tools or use our all-in-one suite for a unified data experience."
        },
        {
            icon: <FaUserShield />,
            title: "Enterprise Security",
            desc: "Your data is protected with military-grade encryption and multi-factor authentication."
        }
    ];

    return (
        <div className="how-page-wrapper">
            {/* Hero Banner */}
            <section className="how-banner-section reveal">
                <div className="banner-overlay"></div>
                <div className="container">
                    <div className="banner-content">
                        {/* <span className="badge">Platform Guide</span> */}
                        <h1>How <span>ClassX360</span> Empowers Your Growth</h1>
                        <p>Discover the seamless journey from implementation to institutional excellence with our unified platform.</p>
                    </div>
                </div>
            </section>

            {/* Core Workflow */}
            <HowItWorks onGetDemo={() => window.location.href = '#'} />

            {/* Why Our Workflow Section */}
            <section className="why-workflow-section reveal">
                <div className="container">
                    <div className="section-header-center">
                        <h2>The Science Behind <span>Our Workflow</span></h2>
                        <p>Built on years of research in educational psychology and administrative efficiency.</p>
                    </div>

                    <div className="workflow-features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="workflow-feature-card">
                                <div className="feature-icon-box">
                                    {feature.icon}
                                </div>
                                <h4>{feature.title}</h4>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            {/* <section className="how-final-cta reveal">
                <div className="container">
                    <div className="cta-box">
                        <h3>Ready to see it in action?</h3>
                        <p>Join 1000+ institutions transforming their future with ClassX360.</p>
                        <button className="btn-white-lg">Book a Free Live Demo</button>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default HowItWorksPage;
