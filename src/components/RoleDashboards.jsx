import React, { useState } from 'react';
import './RoleDashboards.css';
import { FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa';

const RoleDashboards = ({ onSignUp }) => {
    const [activeTab, setActiveTab] = useState('admin');

    const roles = [
        {
            id: 'admin',
            title: 'Admin',
            subtitle: 'Complete School Control',
            icon: <FaUserShield />,
            description: 'Manage your entire institution from a single, powerful dashboard. From tracking school fees to monitoring overall performance, stay on top of every detail effortlessly.',
            features: [
                'Total Institution Oversight',
                'Automated Fee Tracking',
                'Staff & Payroll Management',
                'Inventory & Asset Control'
            ],
            cta: 'Explore Admin Tools',
            theme: '#800000',
            portalGlow: 'rgba(128, 0, 0, 0.4)'
        },
        {
            id: 'teacher',
            title: 'Teacher',
            subtitle: 'Teach More, Paperwork Less',
            icon: <FaChalkboardTeacher />,
            description: 'Spend more time inspiring students and less on administration. Automate attendance, grading, and lesson planning so you can focus on what matters most—teaching.',
            features: [
                'Smart Attendance & Grading',
                'Digital Study Materials',
                'Easy Lesson Planning',
                'Direct Parent Messaging'
            ],
            cta: 'See Teacher Features',
            theme: '#1e40af',
            portalGlow: 'rgba(30, 64, 175, 0.4)'
        },
        {
            id: 'student',
            title: 'Student',
            subtitle: 'Learn Smarter, Not Harder',
            icon: <FaUserGraduate />,
            description: 'Your entire school life in one secure place. Access your classes, assignments, and progress reports anytime, anywhere—making learning more organized and fun.',
            features: [
                'Personalized Timetables',
                'Online Study Resources',
                'Live Progress Tracking',
                'Easy Assignment Uploads'
            ],
            cta: 'See Student Portal',
            theme: '#059669',
            portalGlow: 'rgba(5, 150, 105, 0.4)'
        },
        {
            id: 'parent',
            title: 'Parent',
            subtitle: 'Stay Involved, Stay Informed',
            icon: <FaUsers />,
            description: 'Never miss a milestone in your child\'s education. Get instant updates on their attendance, grades, and school events, ensuring you stay connected to their growth.',
            features: [
                'Instant Attendance Alerts',
                'Live Progress Reports',
                'Secure Online Fee Payments',
                'Integrated School Calendar'
            ],
            cta: 'Check Parent Dashboard',
            theme: '#d97706',
            portalGlow: 'rgba(217, 119, 6, 0.4)'
        }
    ];

    const activeRole = roles.find(role => role.id === activeTab);

    return (
        <section className="role-portal-section reveal">
            <div className="container">
                <div className="section-header-center dark-bg reveal">
                    <span className="portal-badge">Platform Access</span>
                    <h2 className="portal-title">The Right Dashboard for <span className="highlight-text">Every User</span></h2>
                    <p className="portal-desc">
                        A simple and powerful platform with specialized tools built specifically for admins, teachers, students, and parents.
                    </p>
                </div>

                <div className="role-3d-wrapper">
                    {/* The Navigation Dock (Now at the Top) */}
                    <div className="portal-dock reveal">
                        {roles.map(role => (
                            <button
                                key={role.id}
                                className={`dock-item ${activeTab === role.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(role.id)}
                                style={{ '--dock-accent': role.theme }}
                            >
                                <div className="dock-icon">{role.icon}</div>
                                <span className="dock-label">{role.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* The 3D Console */}
                    <div className="portal-stage reveal-scale" key={activeTab} style={{ '--portal-accent': activeRole.theme, '--portal-glow': activeRole.portalGlow }}>
                        <div className="portal-inner">
                            <div className="portal-glass-panel">
                                <div className="portal-content-grid">
                                    <div className="portal-main-info">
                                        <span className="portal-info-tag">{activeRole.subtitle}</span>
                                        <h3>{activeRole.title} Dashboard</h3>
                                        <p>{activeRole.description}</p>

                                        <button className="portal-cta-btn" onClick={onSignUp}>
                                            {activeRole.cta} <FaArrowRight />
                                        </button>
                                    </div>

                                    <div className="portal-visual-display">
                                        <div className="visual-icon-orb">
                                            {activeRole.icon}
                                        </div>
                                        <div className="portal-feature-list">
                                            {activeRole.features.map((feature, i) => (
                                                <div key={i} className="portal-feature-pill">
                                                    <FaCheck /> {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Lights */}
            <div className="portal-ambient-light" style={{ '--light-color': activeRole.theme }}></div>
        </section>
    );
};

export default RoleDashboards;
