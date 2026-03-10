import React from 'react';
import './StaticPillars.css';

// Import assets
import TransformImage from '../assets/transformclass.png';
import EngageImage from '../assets/engage.png';
import TeamImage from '../assets/datadrivensuccesss.png';

const pillarData = [
    {
        title: "Transform your class",
        description: "Modern digital tools and engaging content that make learning easier and more effective for everyone. Our platform helps teachers spend less time on paperwork and more time inspiring students in the classroom. We provide the perfect balance of technology and education to create a better learning experience.",
        image: TransformImage,
    },
    {
        title: "Engage with Media",
        description: "A dynamic learning environment that helps students participate more and understand lessons with clarity. By using high-quality visuals and interactive resources, we bring difficult concepts to life through discovery. This approach ensures that every student stays curious and enjoys the journey of learning.",
        image: EngageImage,
    },
    {
        title: "Data-Driven Success",
        description: "Organized digital resources designed to help students learn actively and achieve better academic results. Parents and teachers can easily track progress through simple dashboards that highlight growth. With the right insights, we help every institution make smarter decisions for their students' future.",
        image: TeamImage,
    }
];

const StaticPillars = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="static-pillars-section">
            <div className="container">
                <div className="sp-header reveal-section">
                    <div className="sp-badge">Our Core Philosophy</div>
                    <h2>Experience the <span className="highlight-maroon">Difference</span></h2>
                    <p>Discover how ClassX 360 transforms traditional education into a dynamic, data-driven journey.</p>
                </div>
                <div className="static-pillars-tabs-container reveal-section">

                    {/* Left Side: Clickable Tabs */}
                    <div className="sp-tabs-sidebar">
                        {pillarData.map((pillar, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`sp-tab-item ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <div className="sp-tab-indicator"></div>
                                    <h3>{pillar.title}</h3>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side: Active Content Display */}
                    <div className="sp-tab-content-display">
                        {pillarData.map((pillar, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`sp-content-pane ${isActive ? 'active' : ''}`}
                                >
                                    <div className="sp-pane-image">
                                        <img src={pillar.image} alt={pillar.title} />
                                    </div>
                                    <div className="sp-pane-text">
                                        <h4>{pillar.title}</h4>
                                        <p>{pillar.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StaticPillars;
