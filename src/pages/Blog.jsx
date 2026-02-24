import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import EduTech from "../assets/courses.jpg";
import CaseStudy from "../assets/successstories.png";
import Management from "../assets/institutionalmanagments.png";
import Research from "../assets/academicresearch.png";
import Innovation from "../assets/futuregrowth.png";
const BLOG_CATEGORIES_DATA = [
    {
        id: 'technology',
        title: 'Technology',
        image: EduTech,
        description: 'Explore how smart digital tools and automation make running your school easier.',
        leftContent: {
            heading: 'Smart Automation',
            paragraph: 'Technology is now a daily necessity. From simple attendance tracking to automated scheduling, ClassX 360 uses smart tools to help your staff save time every day.'
        },
        rightContent: {
            heading: 'Reliable Systems',
            paragraph: 'A strong digital foundation means your school stays connected. Our cloud systems ensure that students and staff can access resources whenever they need them.'
        },
        highlights: [
            'Automated campus workflows',
            'Secure cloud-first architecture',
            'Real-time data synchronization'
        ],
        strategicNote: 'Modern technology is not just about tools; it is about creating a culture of efficiency.'
    },
    {
        id: 'success-stories',
        title: 'Success Stories',
        image: CaseStudy,
        description: 'Read real examples of how schools and colleges are improving with ClassX 360.',
        leftContent: {
            heading: 'Scaling Up',
            paragraph: 'One of our partners successfully unified three campuses onto a single system. Within just six months, they saw a massive improvement in how they track student records.'
        },
        rightContent: {
            heading: 'Digital Results',
            paragraph: 'By going paperless, many institutions have transformed their daily operations. For example, some schools moved thousands of student records online in just one academic year.'
        },
        highlights: [
            'Multi-campus unification success',
            '25% increase in transparency',
            '100% paperless administration'
        ],
        strategicNote: 'Real success comes from empowering people with the right information at the right time.'
    },
    {
        id: 'administrative-excellence',
        title: 'Institutional Management',
        image: Management,
        description: 'Streamline your campus operations with integrated tools for staff oversight, secure financial tracking, and real-time administrative insights.',
        leftContent: {
            heading: 'Operational Control',
            paragraph: 'Managing a large institution is easier when everything is organized in one place. Monitor faculty activities and teaching hours with a clear, professional dashboard.'
        },
        rightContent: {
            heading: 'Financial Clarity',
            paragraph: 'Maintain accurate records for sustainable growth. ClassX360 provides secure, real-time tools to manage billing and track expenses as your organization expands.'
        },
        highlights: [
            'Centralized Admin Hub',
            'Automated Billing & Audits',
            'Staff Resource Management'
        ],
        strategicNote: 'Professional management is the foundation of a successful educational institution.'
    },
    {
        id: 'academic-research',
        title: 'Academic Research',
        image: Research,
        description: 'Expert insights and research-driven advice to help your institution achieve better academic results.',
        leftContent: {
            heading: 'Collaborative Innovation',
            paragraph: 'Learning outcomes improve significantly when educators work together. Our platform facilitates cross-departmental collaboration while ensuring all data remains secure and private.'
        },
        rightContent: {
            heading: 'Academic Frameworks',
            paragraph: 'Modernizing traditional classrooms can be a seamless process. We provide the structured resources and tracking tools necessary for successful long-term educational projects.'
        },
        highlights: [
            'Inter-departmental collaboration',
            'Research IP security protocols',
            'Adaptive learning frameworks'
        ],
        strategicNote: 'Regular research keeps our teaching methods effective and modern for every student.'
    },
    {
        id: 'future-growth',
        title: 'Growth & Innovation',
        image: Innovation,
        description: 'Prepare your school for the future with the latest trends in digital education.',
        leftContent: {
            heading: 'Digital Change',
            paragraph: 'Education is evolving quickly. Our platform helps you move smoothly from old systems to modern, cloud-based tools that grow as your school expands.'
        },
        rightContent: {
            heading: 'Ready for Tomorrow',
            paragraph: 'Preparing students for the future requires modern learning environments. We integrate new technologies like virtual labs and personalized learning paths for every student.'
        },
        highlights: [
            'Strategic cloud migration',
            'Emerging tech integration',
            'Personalized student pathways'
        ],
        strategicNote: 'Innovation is not a destination; it is a continuous journey towards excellence.'
    }
];


const Blog = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(BLOG_CATEGORIES_DATA[0].id);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeCategory = BLOG_CATEGORIES_DATA.find(cat => cat.id === activeCategoryId);

    React.useEffect(() => {
        document.body.classList.add('blog-page-active');
        return () => document.body.classList.remove('blog-page-active');
    }, []);

    const handleCategoryChange = (id) => {
        if (id === activeCategoryId) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveCategoryId(id);
            setIsAnimating(false);

            // On mobile, scroll to content top when category changes
            if (window.innerWidth <= 768) {
                const contentArea = document.querySelector('.dynamic-trifecta-area');
                if (contentArea) {
                    const navHeight = 120; // Approx height of navbar + iconic nav
                    const elementPosition = contentArea.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: 'smooth'
                    });
                }
            }
        }, 300);
    };

    return (
        <div className="blog-page-container academic-mode">
            <div className="blog-page page-entrance">
                <section className="blog-hero trifecta-hero">
                    <div className="blog-hero-content">
                        <span className="category-tag-minimal reveal-fade">Resource Center</span>
                        <h1 className="text-reveal">Insights for Smarter Institution Management</h1>
                        <p className="subtitle reveal-up">
                            Explore expert strategies, technology updates, and practical solutions to improve institutional efficiency.
                        </p>
                    </div>
                </section>

                <nav className="blog-anchor-nav-iconic reveal-up">
                    <div className="nav-container-iconic">
                        {BLOG_CATEGORIES_DATA.map(category => (
                            <button
                                key={category.id}
                                className={`nav-link-iconic ${activeCategoryId === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                <span className="nav-label">{category.title}</span>
                                <span className="dropdown-symbol">▾</span>
                            </button>
                        ))}
                    </div>
                </nav>

                <section className="dynamic-trifecta-area">
                    <div className={`trifecta-card-wrapper ${isAnimating ? 'trifecta-exit' : 'trifecta-entrance'}`}>
                        {activeCategory && (
                            <div className="horizontal-trifecta-card">
                                {/* New Header Block at Top */}
                                <div className="trifecta-header">
                                    <h2 className="trifecta-main-title">{activeCategory.title}</h2>
                                    <p className="trifecta-main-desc">{activeCategory.description}</p>
                                </div>

                                <div className="trifecta-grid">
                                    {/* Left Content */}
                                    <div className="trifecta-column side-content left-side">
                                        <span className="trifecta-kicker">Quick Overview</span>
                                        <h3 className="trifecta-subheading">{activeCategory.leftContent.heading}</h3>
                                        <p className="trifecta-paragraph">{activeCategory.leftContent.paragraph}</p>

                                        <div className="trifecta-strategic-note">
                                            <span className="note-label">Strategic Impact:</span>
                                            <p>{activeCategory.strategicNote}</p>
                                        </div>
                                    </div>

                                    {/* Center Image */}
                                    <div className="trifecta-column center-image">
                                        <div className="trifecta-image-container">
                                            <img src={activeCategory.image} alt={activeCategory.title} />
                                            <div className="trifecta-gold-frame"></div>
                                        </div>
                                    </div>

                                    {/* Right Content */}
                                    <div className="trifecta-column side-content right-side">
                                        <span className="trifecta-kicker">More Details</span>
                                        <h3 className="trifecta-subheading">{activeCategory.rightContent.heading}</h3>
                                        <p className="trifecta-paragraph">{activeCategory.rightContent.paragraph}</p>

                                        <div className="trifecta-resource-list">
                                            <span className="list-label">Key Highlights:</span>
                                            <ul className="trifecta-highlight-list">
                                                {activeCategory.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="trifecta-highlight-item">
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className="blog-footer-cta">
                    <div className="cta-flat-container">
                        <h2>Empower Your Institution's Future</h2>
                        <p>Discover how our smart tools can simplify your daily operations and help you focus on success.</p>
                        <div className="cta-links-academic">
                            <Link to="/contact" className="btn-academic-solid">Get in Touch</Link>
                            <Link to="/pricing" className="btn-academic-outline">Explore Our Plans</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;
