import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Ramesh Gupta",
        role: "Principal, St. Xavier's School",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
        quote: "ClassX 360 has completely transformed how we manage our administrative tasks. The attendance and fee management modules are lifesavers!"
    },
    {
        id: 2,
        name: "Anita Desai",
        role: "Director, Learning Curve Institute",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        quote: "The best decision we made for our institute. The student performance tracking is detailed and helps us focus on weak areas effectively."
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Administrator, Global Academy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        quote: "Seamless integration and user-friendly interface. Parents love the transparency it offers regarding their child's progress."
    },
    {
        id: 4,
        name: "Sarah Williams",
        role: "Head of Dept, International School",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        quote: "Support team is fantastic. Any issue is resolved within minutes. The platform is robust and handles our large data effortlessly."
    },
    {
        id: 5,
        name: "Mohd. Irfan",
        role: "Founder, Excel Coaching",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        quote: "Highly recommended for any educational institution looking to digitize their operations. It saves time, money, and resources."
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
                    <div className="testimonials-left">
                        <div className="sticky-content">
                            <span className="sub-title">Testimonials</span>
                            <h2>Trusted by Leading Institutions</h2>
                            <p className="section-description">
                                Join over 1000+ schools and colleges transforming their administration with ClassX 360.
                                See how our all-in-one platform simplifies operations, boosts efficiency, and enhances learning outcomes.
                            </p>

                        </div>
                    </div>

                    {/* Right Side: Horizontal Scroller with JS Animation */}
                    <div
                        className="testimonials-right"
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
