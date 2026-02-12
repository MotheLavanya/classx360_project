import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './HomeFinalCTA.css';

const HomeFinalCTA = ({ onSignUp }) => {
    return (
        <section className="home-final-cta-minimal">
            <div className="cta-minimal-overlay"></div>
            <div className="container">
                <div className="cta-minimal-content">
                    <h2 className="cta-minimal-headline reveal">
                        Everything Your Institution Needs. <span className="highlight">One Platform.</span>
                    </h2>
                    <p className="cta-minimal-subline reveal">
                        Simplify management. Improve learning. Scale faster.
                    </p>
                    <div className="cta-minimal-actions reveal">
                        <button className="btn-cta-premium" onClick={onSignUp}>
                            <span>Get Started Now</span>
                            <FaArrowRight className="btn-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFinalCTA;
