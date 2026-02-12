import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import EduTech from "../assets/courses.jpg";
import CaseStudy from "../assets/about.jpg";
import Management from "../assets/learning.png";
import Research from "../assets/courses1.jpg";
import Innovation from "../assets/innovative.png";
const BLOG_CATEGORIES_DATA = [
    {
        id: 'education-tech',
        title: 'EduTech',
        image: EduTech,
        description: 'Exploring the latest in digital learning, ERP systems, and educational automation.',
        leftContent: {
            heading: 'AI & Machine Learning',
            paragraph: 'Artificial Intelligence is no longer a future concept but a present-day necessity. From predictive attendance tracking to automated faculty scheduling, ClassX 360 leverages machine learning to reduce administrative overhead.'
        },
        rightContent: {
            heading: 'Digital Resilience',
            paragraph: 'Building a robust digital backbone requires cloud-native architectures that ensure 99.9% uptime, allowing students and staff to access crucial resources even during peak periods.'
        },
        articles: [
            { title: 'The Future of AI in Education', link: '/blog/ai-future' },
            { title: 'Simplifying Campus Management', link: '/blog/campus-mgmt' }
        ]
    },
    {
        id: 'success-stories',
        title: 'Stories',
        image: CaseStudy,
        description: 'Real-world impact and transformative results from our institutional partners.',
        leftContent: {
            heading: 'Institutional Scaling',
            paragraph: 'Horizon Tech implemented ClassX 360 across three campuses, unifying their student records and financial tracking. Within six months, they reported a 25% increase in operational transparency.'
        },
        rightContent: {
            heading: 'Digital First Results',
            paragraph: 'By adopting a paperless administration through our specialized ERP modules, Unity College managed to transition 15,000 students to online record management in a single year.'
        },
        articles: [
            { title: 'Horizon Tech Success Story', link: '/blog/horizon-tech' },
            { title: 'Unity College Efficiency Report', link: '/blog/unity-report' }
        ]
    },
    {
        id: 'management',
        title: 'Management',
        image: Management,
        description: 'Advanced methodologies for large-scale educational operation and faculty excellence.',
        leftContent: {
            heading: 'Faculty Excellence',
            paragraph: 'Managing high-performing faculty members requires clear workload visibility. Our tools allow department heads to track teaching hours and research output in a single dashboard.'
        },
        rightContent: {
            heading: 'Governance & Auditing',
            paragraph: 'Modern education governance demands rigorous financial tracking. ClassX 360 provides real-time auditing tools that help institutions maintain fiscal health while expanding.'
        },
        articles: [
            { title: 'Optimizing Faculty Workload', link: '/blog/faculty-workload' },
            { title: 'Financial Tracking for Colleges', link: '/blog/finance-tracking' }
        ]
    },
    {
        id: 'research',
        title: 'Research',
        image: Research,
        description: 'Pushing the boundaries of academic research through data-driven innovation and collaborative tools.',
        leftContent: {
            heading: 'Collaborative Research',
            paragraph: 'Academic breakthroughs happen when silos are broken. Our research module enables inter-departmental data sharing while maintaining strict IP security and audit trails.'
        },
        rightContent: {
            heading: 'Innovation Frameworks',
            paragraph: 'Implementing agile methodologies in traditional research environments. ClassX 360 provides the tracking and resource allocation tools needed for multi-year innovation projects.'
        },
        articles: [
            { title: 'Inter-campus Collaboration', link: '/blog/collaboration' },
            { title: 'The Future of Lab Management', link: '/blog/lab-mgmt' }
        ]
    },
    {
        id: 'innovation',
        title: 'Innovation',
        image: Innovation,
        description: 'Leading digital transformation and future-ready education through cutting-edge technology.',
        leftContent: {
            heading: 'Digital Transformation',
            paragraph: 'Educational institutions must evolve to meet modern demands. Our platform enables seamless digital transformation, from legacy system migration to cloud-first infrastructure that scales with your growth.'
        },
        rightContent: {
            heading: 'Future-Ready Learning',
            paragraph: 'Preparing students for tomorrow requires adaptive learning environments. ClassX 360 integrates emerging technologies like VR labs, adaptive assessments, and personalized learning pathways.'
        },
        articles: [
            { title: 'Cloud Migration Best Practices', link: '/blog/cloud-migration' },
            { title: 'Adaptive Learning Technologies', link: '/blog/adaptive-learning' }
        ]
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
            // window.scrollTo removed to prevent jump
        }, 300);
    };

    return (
        <div className="blog-page-container academic-mode">
            <div className="blog-page page-entrance">
                <section className="blog-hero trifecta-hero">
                    <div className="blog-hero-content">
                        <span className="category-tag-minimal reveal-fade">The Knowledge Base</span>
                        <h1 className="text-reveal">State-of-the-Art <span className="gold-text">Education Insights</span></h1>
                        <p className="subtitle reveal-up">
                            Comprehensive framework for institutional excellence. Symmetrical information architecture across five specialized knowledge domains.
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
                                        <span className="trifecta-kicker">Strategic Overview</span>
                                        <h3 className="trifecta-subheading">{activeCategory.leftContent.heading}</h3>
                                        <p className="trifecta-paragraph">{activeCategory.leftContent.paragraph}</p>

                                        <div className="trifecta-action-item">
                                            <Link to="/contact" className="minimal-action-link">Explore Framework →</Link>
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
                                        <span className="trifecta-kicker">Extended Insights</span>
                                        <h3 className="trifecta-subheading">{activeCategory.rightContent.heading}</h3>
                                        <p className="trifecta-paragraph">{activeCategory.rightContent.paragraph}</p>

                                        <div className="trifecta-resource-list">
                                            <span className="list-label">Featured Reading:</span>
                                            {activeCategory.articles.map((article, idx) => (
                                                <Link key={idx} to={article.link} className="trifecta-article-link">
                                                    {article.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className="blog-footer-cta">
                    <div className="cta-flat-container">
                        <h2>Ready to Elevate Your Institution?</h2>
                        <p>Join the future of education management today with our five-pillar development approach.</p>
                        <div className="cta-links-academic">
                            <Link to="/contact" className="btn-academic-solid">Contact an Expert</Link>
                            <Link to="/pricing" className="btn-academic-outline">View Plans</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;
