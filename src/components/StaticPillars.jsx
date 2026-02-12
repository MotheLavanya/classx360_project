import React from 'react';
import './StaticPillars.css';

// Import assets
import MissionImage from '../assets/about.jpg';
import StoryImage from '../assets/image1.jpg';
import TeamImage from '../assets/about2.jpg';

const pillarData = [
    {
        title: "Transform your classroom",
        description: "Our inquiry-based learning approach helps students develop critical thinking and encourages them to take action. Each piece of media comes with a ready-made activity designed to engage your students' problem-solving and critical-thinking skills.",
        image: MissionImage,
    },
    {
        title: "Engage with Media",
        description: "Experience education through interactive media, 360° explorations, and immersive storytelling that captivates students and brings learning to life through discovery.",
        image: StoryImage,
    },
    {
        title: "Data-Driven Success",
        description: "Our platform provides comprehensive insights into student performance and institutional growth, allowing for informed decision-making at every level.",
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
