import React, { useState, useEffect, useRef } from 'react';
import './EngagingPillars.css';

// Import existing assets where available
import MissionImage from '../assets/about.jpg';
import StoryImage from '../assets/image1.jpg';
import TeamImage from '../assets/about2.jpg';

const pillarData = [
    {
        title: "Transform your classroom",
        description: <>Our <strong>inquiry-based learning</strong> approach helps students develop critical thinking and encourages them to take action. Each piece of media comes with a <strong>ready-made activity</strong> designed to engage your students' problem-solving and critical-thinking skills.</>,
        cta: "Learn about our educational approach",
        image: MissionImage,
        side: "left"
    },
    {
        title: "Engage with Media",
        description: <>Experience education through <strong>interactive media</strong>, 360° explorations, and <strong>immersive storytelling</strong> that captivates students and brings learning to life through discovery.</>,
        cta: "Explore interactive modules",
        image: StoryImage,
        side: "right"
    },
    {
        title: "Data-Driven Success",
        description: <>Our platform provides <strong>comprehensive insights</strong> into student performance and institutional growth, allowing for <strong>informed decision-making</strong> at every level.</>,
        cta: "See our metrics",
        image: TeamImage,
        side: "left"
    }
];

const EngagingPillars = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const triggerRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: "-10% 0px -10% 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        triggerRefs.current.forEach(trigger => {
            if (trigger) observer.observe(trigger);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="engaging-pillars-sticky-track">
            {/* Scroll Triggers (Hidden) */}
            <div className="scroll-triggers">
                {pillarData.map((_, idx) => (
                    <div
                        key={idx}
                        className="scroll-trigger"
                        data-index={idx}
                        ref={el => triggerRefs.current[idx] = el}
                    />
                ))}
            </div>

            {/* Sticky Content */}
            <div className="pillars-sticky-wrapper">
                <div className="container">
                    <div className="pillars-stack-container">
                        {pillarData.map((pillar, idx) => (
                            <div
                                key={idx}
                                className={`section section--text-image ${pillar.side} normal is-card ${activeIndex === idx ? 'is-active' : 'is-hidden'} ${idx < activeIndex ? 'is-past' : ''}`}
                            >
                                <div className="section--text-image__wrapper">
                                    <div className={`section--text-image__content anim--fade-childs ${activeIndex === idx ? 'anim--fade-childs--in' : ''}`}>
                                        <div className="text" style={{ '--fade-childs-index': 0 }}>
                                            <h2>{pillar.title}</h2>
                                            <div className="text__content__wrapper">
                                                <div className="text__content wysiwyg">
                                                    <p>{pillar.description}</p>
                                                </div>
                                                <a href="#" className="link__external text__cta link link--dark link--normal">
                                                    <span>{pillar.cta}</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className={`image ${activeIndex === idx ? 'anim--fade-childs--in' : ''}`} style={{ '--fade-childs-index': 1 }}>
                                            <div className="image__wrapper">
                                                <h2>{pillar.title}</h2>
                                                <picture>
                                                    <img src={pillar.image} alt={pillar.title} />
                                                </picture>
                                            </div>
                                            <a href="#" className="link__external text__cta link link--dark link--normal">
                                                <span>{pillar.cta}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Visual Progress Indicator - Removed at user request */}
                    {/* <div className="pillars-side-progress">
                        {pillarData.map((_, idx) => (
                            <div key={idx} className={`progress-segment ${activeIndex === idx ? 'active' : (idx < activeIndex ? 'completed' : '')}`}></div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default EngagingPillars;
