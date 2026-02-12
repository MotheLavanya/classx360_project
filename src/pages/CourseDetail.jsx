import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './CourseDetail.css';

const CourseDetail = ({ onSignUp }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Comprehensive data for the Software Development course
    const course = {
        id: id,
        title: "Full-Stack Web Development with React & Node.js",
        subtitle: "Build scalable, high-performance applications using modern JavaScript frameworks and industry best practices.",
        bannerImage: "/assets/images/course_banner.png",
        previewVideoUrl: "#", // Placeholder
        overview: {
            content: "This course is a comprehensive journey through the modern web stack. From mastering frontend interfaces with React to architecting robust backends with Node.js and MongoDB, you'll gain the end-to-end skills required to build real-world, production-ready applications.",
            bestFor: "Beginners, career changers, and developers looking to upskill to a modern tech stack.",
            whyItMatters: "Full-stack developers are in high demand. Mastering these skills allows you to build complete projects independently and opens doors to top tech roles.",
            prerequisites: "Basic understanding of programming logic is helpful but not mandatory. We start from the absolute basics."
        },
        learningOutcomes: [
            "Build responsive web apps with HTML, CSS & JavaScript.",
            "Develop robust backend APIs using Node.js and Express.",
            "Connect and manage databases with MongoDB.",
            "Understand version control with Git & GitHub.",
            "Master state management with React Hooks and Context API.",
            "Deploy applications to cloud platforms with CI/CD."
        ],
        curriculum: [
            {
                module: "Module 1: Introduction to Web Development",
                items: ["Overview & tools setup", "HTML5 & Semantic Web", "Modern CSS & Flexbox/Grid"]
            },
            {
                module: "Module 2: JavaScript Essentials",
                items: ["ES6+ Syntax & Features", "Asynchronous JS & APIs", "DOM Manipulation"]
            },
            {
                module: "Module 3: Frontend Mastery with React",
                items: ["React Components & Props", "State Management (Hooks)", "Routing & Navigation"]
            },
            {
                module: "Module 4: Backend Development with Node.js",
                items: ["Node Ecosystem & NPM", "Express Framework", "RESTful API Architecture"]
            },
            {
                module: "Module 5: Database & Deployment",
                items: ["MongoDB Schema Design", "Mongoose & CRUD Operations", "Cloud Deployment (Vercel/Heroku)"]
            }
        ],
        instructor: {
            name: "Alex Rivera",
            avatar: "/assets/images/instructor_avatar.png",
            title: "Senior Software Engineer",
            experience: "10+ years experience building full-stack applications for Fortune 500 companies.",
            bio: "Alex is a passionate developer and educator who has mentored thousands of students worldwide. He specializes in React, Node, and scalable cloud architecture."
        },
        reviews: [
            { name: "Sarah K.", rating: 5, comment: "The most practical coding course I've ever taken. I built my first full-stack app in just 8 weeks!" },
            { name: "James L.", rating: 4.5, comment: "Excellent instructor. The Node.js module was a game-changer for my career." },
            { name: "Priya R.", rating: 5, comment: "Step-by-step guidance. The project starter kits were extremely helpful." }
        ],
        faqs: [
            { q: "Is prior coding experience required?", a: "No, we start from the very basics. A desire to learn is all you need." },
            { q: "How long does the course take?", a: "Approximately 12-16 weeks if studying part-time (10 hours per week)." },
            { q: "Do I get a certificate?", a: "Yes, you receive a Professional Certificate upon completion of all modules and projects." },
            { q: "Can I download course materials?", a: "Yes, all slides, cheat sheets, and source code are downloadable." }
        ],
        certificate: {
            title: "Professional Certificate in Web Development",
            awardedBy: "ClassX 360 Academy",
            howItIsAwarded: "Complete all modules + pass final project.",
            relevance: "Validates your full-stack expertise for top-tier developer roles."
        },
        pricing: {
            currentPrice: "$299",
            paymentPlan: "Or 3 installments of $110",
            startDate: "Immediate Access"
        },
        resources: [
            { label: "Downloadable PDF Cheat Sheets", icon: "📑" },
            { label: "Project Starter Kits (Repo Access)", icon: "📦" },
            { label: "Exclusive Community Discord Access", icon: "💬" },
            { label: "Office Hours with Mentors", icon: "🕒" }
        ],
        related: [
            {
                title: "Advanced React Patterns",
                duration: "6 Weeks",
                image: "/assets/images/react_thumb.png",
                link: "/course/react-advanced",
                description: "Master enterprise React architecture."
            },
            {
                title: "DevOps & CI/CD Fundamentals",
                duration: "8 Weeks",
                image: "/assets/images/devops_thumb.png",
                link: "/course/devops-basics",
                description: "Automate your deployment pipeline."
            }
        ]
    };

    return (
        <div className="course-detail-page">
            <div className="course-detail-container">
                {/* 1. Header & Banner */}
                <section className="course-header-banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${course.bannerImage})` }}>
                    <button className="btn-back-main" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Back
                    </button>
                    <div className="header-overlay">
                        <span className="badge-tag">Full-Stack Career Path</span>
                        <h1>{course.title}</h1>
                        <p className="subtitle">{course.subtitle}</p>
                        <div className="header-meta">
                            <span className="rating">⭐ 4.9 (12.4k Students)</span>
                            <span className="level">Level: Beginner to Pro</span>
                        </div>
                        <div className="banner-actions">
                            <button className="btn-primary" onClick={onSignUp}>Enroll Now — {course.pricing.currentPrice}</button>
                            <button className="btn-secondary">Watch Video Intro</button>
                        </div>
                    </div>
                </section>

                <div className="course-content-grid">
                    <div className="course-content-left">
                        {/* 2. Overview */}
                        <section className="course-overview section-block">
                            <h2 className="section-title">Overview</h2>
                            <p className="summary-text">{course.overview.content}</p>
                            <div className="info-cards">
                                <div className="info-card">
                                    <h4>Who it's for</h4>
                                    <p>{course.overview.bestFor}</p>
                                </div>
                                <div className="info-card">
                                    <h4>Why it matters</h4>
                                    <p>{course.overview.whyItMatters}</p>
                                </div>
                                <div className="info-card">
                                    <h4>Prerequisites</h4>
                                    <p>{course.overview.prerequisites}</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. What You'll Learn */}
                        <section className="what-you-learn section-block">
                            <h3 className="section-title">📌 What You'll Learn</h3>
                            <div className="outcomes-grid">
                                {course.learningOutcomes.map((item, idx) => (
                                    <div key={idx} className="outcome-item">
                                        <span className="check-icon">✓</span>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Curriculum */}
                        <section className="course-curriculum section-block">
                            <h3 className="section-title">🗂️ Curriculum</h3>
                            <div className="curriculum-list">
                                {course.curriculum.map((mod, i) => (
                                    <div key={i} className="curriculum-module">
                                        <div className="module-header">
                                            <h4>{mod.module}</h4>
                                        </div>
                                        <ul className="lesson-list">
                                            {mod.items.map((item, j) => (
                                                <li key={j}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 7. FAQs */}
                        <section className="course-faqs section-block">
                            <h3 className="section-title">📊 FAQs</h3>
                            <div className="faqs-container">
                                {course.faqs.map((faq, i) => (
                                    <div key={i} className="faq-item">
                                        <div className="faq-question">
                                            <h4>{faq.q}</h4>
                                        </div>
                                        <div className="faq-answer">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 8. Certificate Information */}
                        <section className="certificate-info section-block">
                            <h3 className="section-title">🎓 Certificate Information</h3>
                            <div className="cert-content-card">
                                <div className="cert-header">
                                    <h4>{course.certificate.title}</h4>
                                    <p className="awarded-by">Awarded by {course.certificate.awardedBy}</p>
                                </div>
                                <p><strong>How to earn:</strong> {course.certificate.howItIsAwarded}</p>
                                <p><strong>Significance:</strong> {course.certificate.relevance}</p>
                            </div>
                        </section>
                    </div>

                    <div className="course-content-right">
                        {/* 9. Enrollment Sidebar */}
                        <div className="enroll-sidebar-card card-glass">
                            <div className="price-box">
                                <span className="current-price">{course.pricing.currentPrice}</span>
                                <span className="payment-plan">{course.pricing.paymentPlan}</span>
                            </div>
                            <p className="access-info">🕒 {course.pricing.startDate}</p>
                            <button className="btn-primary full-width" onClick={onSignUp}>Enroll / Buy Now</button>
                            <div className="guarantee-box">
                                <p>🔒 30-Day Money-Back Guarantee</p>
                            </div>

                            <div className="extras-list">
                                <h4>Includes:</h4>
                                {course.resources.map((res, i) => (
                                    <div key={i} className="extra-item">
                                        <span className="extra-icon">{res.icon}</span>
                                        <span className="extra-label">{res.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5. Instructor Info */}
                        <div className="instructor-sidebar-card card-glass">
                            <h3 className="sidebar-title">👤 Instructor</h3>
                            <div className="instructor-profile">
                                <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-photo" />
                                <div className="instructor-meta">
                                    <h4>{course.instructor.name}</h4>
                                    <p className="instructor-title">{course.instructor.title}</p>
                                </div>
                            </div>
                            <p className="instructor-exp">{course.instructor.experience}</p>
                            <p className="instructor-bio">{course.instructor.bio}</p>
                        </div>

                        {/* 6. Reviews Sidebar */}
                        <div className="reviews-sidebar-card card-glass">
                            <h3 className="sidebar-title">💬 Reviews</h3>
                            <div className="reviews-list">
                                {course.reviews.map((rev, i) => (
                                    <div key={i} className="review-item-mini">
                                        <div className="review-head">
                                            <span className="reviewer-name">{rev.name}</span>
                                            <span className="stars">{"★".repeat(Math.floor(rev.rating))}</span>
                                        </div>
                                        <p className="review-comment">"{rev.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 11. Related Courses */}
                <section className="related-courses-bottom section-block">
                    <h3 className="section-title">🗺️ Related Career Paths</h3>
                    <div className="related-grid" id="related-courses">
                        {course.related.map((rel, i) => (
                            <Link key={i} to={rel.link} className="related-card-new card-glass">
                                <div className="related-card-img">
                                    <img src={rel.image} alt={rel.title} />
                                    <div className="duration-tag">{rel.duration}</div>
                                </div>
                                <div className="related-card-info">
                                    <h4>{rel.title}</h4>
                                    <p>{rel.description}</p>
                                    <span className="view-journey">Exlore Path →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CourseDetail;
