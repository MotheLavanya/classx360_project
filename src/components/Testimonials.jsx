import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';
import testimonialImage from '../assets/testimonialimage.png';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';
import testimonial4 from '../assets/testimonial4.png';

const testimonialsData = [
    {
        id: 1,
        name: "Prof. Aravind Sharma",
        role: "Head of Computer Science, VIT",
        image: testimonial4,
        quote: "ClassX 360 has completely transformed how we manage our academic schedules and research labs. A truly modern solution for faculty!"
    },
    {
        id: 2,
        name: "Dr. Priya Malik",
        role: "Professor of Mathematics, Global University",
        image: testimonial1,
        quote: "The automated grading and analytics tools are world-class. It allows me to focus more on teaching and less on manual data entry."
    },
    {
        id: 3,
        name: "Prof. Siddharth Roy",
        role: "Senior Faculty, IIT Bombay",
        image: testimonial2,
        quote: "Modern education requires modern tools. ClassX 360 provides the granular level of control that high-performance institutes need."
    },
    {
        id: 4,
        name: "Dr. Elena Rodriguez",
        role: "Assistant Professor, Stanford International",
        image: testimonialImage,
        quote: "The interface is incredibly intuitive for both faculty and students. It has significantly improved our classroom engagement metrics."
    },
    {
        id: 5,
        name: "Prof. Zaid Khan",
        role: "Dean of Academic Affairs, EduSmart University",
        image: testimonial3,
        quote: "Highly recommended for any professor looking to digitalize their curriculum and track student research progress in real-time."
    }
];

const Testimonials = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollTo({
                    left: current.scrollLeft - scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                current.scrollTo({
                    left: current.scrollLeft + scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    const isHovered = React.useRef(false);
    const scrollPos = React.useRef(0); // Track float position for smooth slow scroll

    // Auto-scroll loop
    useEffect(() => {
        let animationFrameId;

        const loop = () => {
            const scrollContainer = scrollRef.current;
            if (scrollContainer && !isHovered.current) {
                // Slower Continuous Scroll (0.5px per frame)
                // We use a ref to track the float value because scrollLeft rounds to integer
                scrollPos.current += 0.5;
                scrollContainer.scrollLeft = scrollPos.current;

                // Seamless Loop Reset Logic (Robust)
                // Use the first card to measure exact set width (Card + Gap) * Count
                // This handles potential sub-pixel gap issues better than total scrollWidth
                const firstCard = scrollContainer.querySelector('.testimonial-card-modern');
                if (firstCard) {
                    const cardWidth = firstCard.offsetWidth;
                    const gap = 10; // Matches updated CSS gap
                    const singleSetCount = testimonialsData.length;
                    const oneSetWidth = (cardWidth + gap) * singleSetCount;

                    if (scrollPos.current >= oneSetWidth) {
                        scrollPos.current -= oneSetWidth;
                        scrollContainer.scrollLeft = scrollPos.current;
                    }
                } else if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 4) {
                    // Fallback if DOM query fails
                    const oneSetWidth = scrollContainer.scrollWidth / 4;
                    scrollPos.current -= oneSetWidth;
                    scrollContainer.scrollLeft = scrollPos.current;
                }
            } else if (scrollContainer && isHovered.current) {
                // Sync ref if user manually scrolls or pauses
                scrollPos.current = scrollContainer.scrollLeft;
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        // Start loop
        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Handlers for pausing on hover (optional enhancement for UX)
    const handleMouseEnter = () => {
        isHovered.current = true;
    };

    const handleMouseLeave = () => {
        isHovered.current = false;
    };

    return (

        <section className="testimonials-section reveal reveal-section" id="testimonials">
            <div className="container">
                <div className="testimonials-layout">
                    {/* Left Side: Sticky Content */}
                    <div className="testimonials-left reveal-left">
                        <div className="sticky-content">
                            <div className="section-badge">Testimonials</div>
                            <h2>Trusted by Leading Institutions</h2>
                            <p className="section-description">
                                Join over 1000+ schools and colleges transforming their administration with ClassX 360.
                                See how our all-in-one platform simplifies operations, boosts efficiency, and enhances learning outcomes.
                            </p>

                        </div>
                    </div>

                    {/* Right Side: Horizontal Scroller with JS Animation */}
                    <div
                        className="testimonials-right reveal-right"
                        ref={scrollRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="testimonials-track">
                            {/* Render 4 Sets for Robust Infinite Loop */}
                            {[...Array(4)].map((_, setIndex) => (
                                testimonialsData.map((testimonial) => (
                                    <div className="testimonial-card-modern" key={`set-${setIndex}-${testimonial.id}`}>
                                        <div className="card-image-container">
                                            <img src={testimonial.image} alt={testimonial.name} className="card-main-image" />
                                            <div className="card-hover-overlay">
                                                <FaQuoteLeft className="quote-icon-overlay" />
                                                <p className="overlay-quote">"{testimonial.quote}"</p>
                                            </div>
                                        </div>
                                        <div className="card-info-bottom">
                                            <h4>{testimonial.name}</h4>
                                            <span>{testimonial.role}</span>
                                        </div>
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Testimonials;
