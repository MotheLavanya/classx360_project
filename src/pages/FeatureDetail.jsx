import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { featureCategories } from '../data/featuresData.jsx';
import {
    FaArrowLeft, FaCheck, FaArrowRight, FaHome, FaChevronRight
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
            <div className="fd-not-found-simple">
                <h2>Feature Not Found</h2>
                <p>We couldn't find the module you're looking for.</p>
                <Link to="/#features" className="fd-btn-simple"><FaArrowLeft /> Back to Features</Link>
            </div>
        );
    }

    const relatedFeatures = allFeatures.filter(f => f.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className="fd-page-simple">
            {/* Nav / Breadcrumb */}
            <div className="fd-nav-simple">
                <Link to="/#features" className="fd-back-simple">
                    <FaArrowLeft /> Back
                </Link>
                <div className="fd-breadcrumb-simple">
                    <Link to="/"><FaHome /></Link>
                    <FaChevronRight className="sep" />
                    <Link to="/#features">Features</Link>
                    <FaChevronRight className="sep" />
                    <span>{feature.name}</span>
                </div>
            </div>

            {/* Hero */}
            <section className="fd-hero-simple">
                <div className="fd-hero-content">
                    <div className="fd-icon-simple">{feature.icon}</div>
                    <h1>{feature.name}</h1>
                    <p className="fd-hero-desc">{feature.shortDesc}</p>
                    <div className="fd-hero-actions">
                        <button className="fd-btn-primary" onClick={onSignUp}>
                            Get Started Free
                        </button>
                    </div>
                </div>
                <div className="fd-hero-image">
                    <img src={feature.image} alt={feature.name} />
                </div>
            </section>

            {/* Content Details */}
            <section className="fd-details-simple">
                <div className="fd-about-simple">
                    <h2>About {feature.name}</h2>
                    <p>{feature.longDesc}</p>
                </div>

                <div className="fd-benefits-simple">
                    <h2>Key Features</h2>
                    <div className="fd-benefits-grid">
                        {feature.detailedBenefits?.map((benefit, idx) => (
                            <div key={idx} className="fd-benefit-card">
                                <div className="benefit-icon"><FaCheck /></div>
                                <div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="fd-related-simple">
                <div className="fd-related-header">
                    <h2>Explore More Modules</h2>
                </div>
                <div className="fd-related-grid-simple">
                    {relatedFeatures.map(f => (
                        <Link to={`/feature/${f.slug}`} key={f.id} className="fd-rcard-simple">
                            <div className="rcard-img">
                                <img src={f.image} alt={f.name} />
                            </div>
                            <div className="rcard-body">
                                <h3><span className="rc-icon">{f.icon}</span> {f.name}</h3>
                                <p>{f.shortDesc}</p>
                                <span className="rcard-link">Explore <FaArrowRight /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="fd-cta-simple">
                <h2>Ready to transform your institution?</h2>
                <p>Join thousands of institutions already using ClassX360.</p>
                <button className="fd-btn-primary" onClick={onSignUp}>Start Your Free Trial</button>
            </section>
        </div>
    );
};

export default FeatureDetail;
