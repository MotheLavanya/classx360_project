import React from 'react';
import './StaticPillars.css';

// Import assets
import MissionImage from '../assets/transforms.png';
import StoryImage from '../assets/image1.jpg';
import TeamImage from '../assets/datadriven.png';

const pillarData = [
    {
        title: "Transform your classroom",
        description: "Modern digital tools and engaging content that make learning easier and more effective for everyone. Our platform helps teachers spend less time on paperwork and more time inspiring students in the classroom. We provide the perfect balance of technology and education to create a better learning experience.",
        image: MissionImage,
    },
    {
        title: "Engage with Media",
        description: "A dynamic learning environment that helps students participate more and understand lessons with clarity. By using high-quality visuals and interactive resources, we bring difficult concepts to life through discovery. This approach ensures that every student stays curious and enjoys the journey of learning.",
        image: StoryImage,
    },
    {
        title: "Data-Driven Success",
        description: "Organized digital resources designed to help students learn actively and achieve better academic results. Parents and teachers can easily track progress through simple dashboards that highlight growth. With the right insights, we help every institution make smarter decisions for their students' future.",
        image: TeamImage,
    }
];

const StaticPillars = () => {
    return (
        <section className="static-pillars-section">
            <div className="container">
                <div className="static-pillars-grid">
                    {pillarData.map((pillar, idx) => (
                        <div key={idx} className="static-pillar-card reveal-section">
                            <div className="pillar-image-wrapper">
                                <img src={pillar.image} alt={pillar.title} />
                            </div>
                            <div className="pillar-content">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StaticPillars;
