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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Auto-scroll logic: move photo by photo smoothly
    useEffect(() => {
        const intervalTime = 3000; // Stay for 3 seconds
        const timer = setInterval(() => {
            if (!isHovered.current) {
                setIsTransitioning(true);
                setCurrentIndex(prev => prev + 1);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    // Handle seamless loop
    useEffect(() => {
        const totalItems = testimonialsData.length;
        // When we reach the end of the first set (index 5), snap back to 0
        if (currentIndex === totalItems) {
            const transitionDuration = 1200; // Matches CSS transition duration
            const resetTimer = setTimeout(() => {
                setIsTransitioning(false); // Disable transition for snap
                setCurrentIndex(0); // Snap back to the beginning card
            }, transitionDuration);
            return () => clearTimeout(resetTimer);
        }
    }, [currentIndex]);

    // Re-enable transition after snap back
    useEffect(() => {
        if (currentIndex === 0 && !isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(true);
            }, 50); // Small buffer to ensure browser processed the snap
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isTransitioning]);

    const getTransform = () => {
        const firstCard = scrollRef.current?.querySelector('.testimonial-card-modern');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 10;
            const step = cardWidth + gap;
            return `translateX(-${currentIndex * step}px)`;
        }
        return `translateX(-${currentIndex * 250}px)`; // Fallback
    };

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
                        <div
                            className="testimonials-track"
                            style={{
                                transform: getTransform(),
                                transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                            }}
                        >
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
