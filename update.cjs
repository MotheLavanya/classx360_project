const fs = require('fs');

const jsxFile = 'c:\\\\Users\\\\Mothe Lavanya\\\\OneDrive\\\\Desktop\\\\certificates\\\\class 360\\\\src\\\\components\\\\FeatureShowcase.jsx';
const cssFile = 'c:\\\\Users\\\\Mothe Lavanya\\\\OneDrive\\\\Desktop\\\\certificates\\\\class 360\\\\src\\\\components\\\\FeatureShowcase.css';

const oldJsx = fs.readFileSync(jsxFile, 'utf8');
const oldCss = fs.readFileSync(cssFile, 'utf8');

const newJsx = `import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { features } from '../data/featuresData.jsx';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
    const navigate = useNavigate();
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const cards = document.querySelectorAll('.premium-feature-card');
        cards.forEach((card) => {
            if (observerRef.current) observerRef.current.observe(card);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const handleCardClick = (slug) => {
        navigate(\`/feature/\${slug}\`);
    };

    return (
        <section className="premium-features-section" id="features">
            <div className="premium-features-container">
                <div className="premium-features-header">
                    <h2 className="premium-features-title">⭐ Features of ClassX 360</h2>
                    <p className="premium-features-subtitle">
                        "A complete Learning Management System that makes teaching, learning, and school management easy for everyone."
                    </p>
                </div>

                <div className="premium-features-grid">
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className="premium-feature-card"
                            style={{ transitionDelay: \`\${index * 100}ms\` }}
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

                <div className="premium-features-footer">
                    <Link to="/features">
                        <button className="premium-cta-btn">See All Features</button>
                    </Link>
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
` + oldJsx.replace(/\*/g, '*\\') + `
*/
`;

fs.writeFileSync(jsxFile, newJsx);

const newCss = `/* Premium Features Section */
.premium-features-section {
    padding: 80px 0;
    background-color: #FFFFFF;
    color: #333333;
    font-family: 'Poppins', 'Roboto', sans-serif;
}

.premium-features-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.premium-features-header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 800px;
}

.premium-features-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #800000;
    margin-bottom: 20px;
}

.premium-features-subtitle {
    font-size: 1.2rem;
    color: #64748b;
    line-height: 1.6;
    font-style: italic;
}

/* Grid Layout */
.premium-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    width: 100%;
    margin-bottom: 60px;
}

/* Feature Cards */
.premium-feature-card {
    background: #F5F5F5;
    border-radius: 16px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    opacity: 0;
    transform: translateY(40px);
}

.premium-feature-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.premium-feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(128, 0, 0, 0.15);
    background: #FFFFFF;
}

.premium-feature-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    background: rgba(128, 0, 0, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #800000;
    transition: all 0.3s ease;
}

.premium-feature-card:hover .premium-feature-icon {
    background: #800000;
    color: #FFFFFF;
    transform: scale(1.1);
}

.premium-feature-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 15px;
    transition: color 0.3s ease;
}

.premium-feature-card:hover .premium-feature-name {
    color: #800000;
}

.premium-feature-desc {
    font-size: 0.95rem;
    color: #666666;
    line-height: 1.5;
    margin: 0;
}

/* Footer CTA */
.premium-features-footer {
    display: flex;
    justify-content: center;
    width: 100%;
}

.premium-cta-btn {
    background: #800000;
    color: #FFFFFF;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 18px 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(128, 0, 0, 0.2);
}

.premium-cta-btn:hover {
    background: #A52A2A;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(165, 42, 42, 0.3);
}

/* Responsive Layout */
@media (max-width: 1024px) {
    .premium-features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .premium-features-section {
        padding: 60px 0;
    }

    .premium-features-title {
        font-size: 2rem;
    }

    .premium-features-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

/*
=============================================================
PREVIOUS CSS FOR FEATURES SECTION (Commented out as requested)
=============================================================
` + oldCss.replace(/\*/g, '*\\') + `
*/
`;

fs.writeFileSync(cssFile, newCss);

console.log('Successfully replaced and migrated FeatureShowcase.jsx and .css');
