import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AbsenteeNotificationModal from './AbsenteeNotificationModal';
import HostelFacilitiesModal from './HostelFacilitiesModal';
import './FeaturesModal.css';

const FeaturesModal = ({ isOpen, onClose }) => {
    const [activeCategory, setActiveCategory] = useState('products');
    const [isAbsenteeModalOpen, setIsAbsenteeModalOpen] = useState(false);
    const [isHostelModalOpen, setIsHostelModalOpen] = useState(false);

    const categories = {
        products: {
            title: "Products You Can Sell",
            subtitle: "Monetize your expertise with diverse digital offerings",
            items: [
                { icon: "📚", title: "Courses", desc: "Create and sell live or on‑demand courses with interactive lessons, quizzes, and certificates." },
                { icon: "🎟️", title: "Memberships", desc: "Build recurring income with tiered membership plans for exclusive content." },
                { icon: "📅", title: "Webinars & Live Events", desc: "Host free or paid live workshops and Q&A sessions with built‑in scheduling." },
                { icon: "🤝", title: "Communities", desc: "Launch free or paid community hubs for discussions and group engagement." },
                { icon: "📥", title: "Digital Downloads", desc: "Sell e‑books, templates, and worksheets — ideal for micro‑learning." },
                { icon: "🤖", title: "AI Avatar Experiences", desc: "Use AI avatars to deliver personalized lessons and answer FAQs in real time." },
                { icon: "🚀", title: "Coaching Programs", desc: "Offer 1:1 or group coaching with scheduling and payment support (Coming Soon)." },
                { icon: "🎁", title: "Gift Cards & Credits", desc: "Allow users to purchase credits or gift access to courses and memberships." },
                { icon: "📦", title: "Product Bundles", desc: "Combine courses and digital products into attractive, high-value bundles." }
            ]
        },
        management: {
            title: "Core LMS & Management",
            subtitle: "Everything you need to run your institution effortlessly",
            items: [
                { icon: "👤", title: "User & Role Management", desc: "Secure role‑based access with personalized dashboards for all users." },
                { icon: "🎓", title: "Student & Batch", desc: "Manage student profiles, records, batches, and mentor assignments." },
                { icon: "💰", title: "Fee & Finance", desc: "Automate fee structures and support online/offline payments." },
                { icon: "📊", title: "Attendance", desc: "Track attendance online/offline with automated alerts." },
                { icon: "✍️", title: "Exams & Assessments", desc: "Schedule quizzes and exams with advanced grading and analytics." },
                { icon: "📜", title: "Certificates", desc: "Auto‑generate certificates and ID cards with bulk export." },
                { icon: "🫂", title: "Collaboration", desc: "Discussion boards, group chats, and shared activities." },
                { icon: "🚍", title: "Transport", desc: "Plan routes, assign drivers, and track transport data." },
                { icon: "📚", title: "Library", desc: "Catalog books and track issue/returns with inventory reports." },
                { icon: "🛌", title: "Hostel & Facilities", desc: "Handle room allocation, mess billing, and facility usage." },
                { icon: "🤝", title: "Vendor & Asset", desc: "Track vendors, purchase orders, and maintenance logs." },
                { icon: "📈", title: "Advanced Reports", desc: "Real‑time dashboards on performance, engagement, and finance." },
                { icon: "🔔", title: "Communication", desc: "Automated email/SMS/push notifications for all events." },
                { icon: "☁️", title: "Mobile & Cloud", desc: "Access dashboards anytime on web or branded mobile apps." },
                { icon: "🛠️", title: "Maintenance & Assets", desc: "Track physical assets, room assignments, and facility maintenance." }
            ]
        },
        nextgen: {
            title: "Advanced LMS Features",
            subtitle: "Next-gen learning driven by AI and engagement",
            items: [
                { icon: "🎮", title: "Gamification", desc: "Add badges and leaderboards to boost motivation and completion." },
                { icon: "🧠", title: "Personalized Paths", desc: "AI‑driven recommendations tailored to individual learner needs." },
                { icon: "📉", title: "Powerful Analytics", desc: "Deep insights into progress, engagement, and skill gaps." },
                { icon: "📦", title: "Microlearning", desc: "Deliver bite‑sized lessons and quick interactive modules." },
                { icon: "🔗", title: "Integrations", desc: "Connect with Zoom, Mailchimp, CRM/ERP systems, and more." },
                { icon: "📱", title: "Immersive Mobile", desc: "Responsive UI and mobile‑friendly access to all content." },
                { icon: "🤖", title: "AI Automation", desc: "Smart content recommendations and adaptive feedback." },
                { icon: "🔄", title: "Adaptive Learning", desc: "Lessons that adjust difficulty based on learner performance." },
                { icon: "🔍", title: "Semantic Search", desc: "AI‑powered search to find specific topics across all video content." }
            ]
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="features-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <header className="features-modal-header">

                    <h2>ClassX 360 <span className="gradient-text">Ecosystem</span></h2>
                    <p>Explore the full range of modern educational management features.</p>
                </header>

                <div className="features-modal-tabs">
                    {Object.keys(categories).map(cat => (
                        <button
                            key={cat}
                            className={`f-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat === 'products' ? '🛍️ Products' :
                                cat === 'management' ? '🧑🎓 LMS Modules' : '🚀 Next-Gen'}
                        </button>
                    ))}
                </div>

                <div className="features-modal-content">
                    <div className="f-intro">
                        <h3>{categories[activeCategory].title}</h3>
                        <p>{categories[activeCategory].subtitle}</p>
                    </div>
                    <div className="f-grid">
                        {categories[activeCategory].items.map((item, index) => (
                            <div key={index} className="f-link-wrapper">
                                <div className="f-card">
                                    <div className="f-icon">{item.icon}</div>
                                    <div className="f-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Integrated Modals */}
            <AbsenteeNotificationModal
                isOpen={isAbsenteeModalOpen}
                onClose={() => setIsAbsenteeModalOpen(false)}
            />
            <HostelFacilitiesModal
                isOpen={isHostelModalOpen}
                onClose={() => setIsHostelModalOpen(false)}
            />
        </div>
    );
};

export default FeaturesModal;
