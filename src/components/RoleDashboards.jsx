import React, { useState } from 'react';
import './RoleDashboards.css';
import { FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa';

const RoleDashboards = ({ onSignUp }) => {
    const [activeTab, setActiveTab] = useState('admin');

    const roles = [
        {
            id: 'admin',
            title: 'Admin',
            icon: <FaUserShield />,
            badge: 'Centralized Control',
            description: 'Powerful management tools for institutional administrators to oversee operations smoothly.',
            features: [
                'Manage students & staff records',
                'Automated fee collection & tracking',
                'Comprehensive academic reporting',
                'Institution-wide notifications',
                'Staff payroll and inventory'
            ],
            cta: 'Explore Admin Panel'
        },
        {
            id: 'teacher',
            title: 'Teacher',
            icon: <FaChalkboardTeacher />,
            badge: 'Classroom Efficiency',
            description: 'Digital tools that reduce administrative burden so you can focus on teaching.',
            features: [
                'Instant attendance marking',
                'Study material & video uploads',
                'Online quiz & assignment creation',
                'Automatic mark entry & analysis',
                'Direct student communication'
            ],
            cta: 'View Teacher Dashboard'
        },
        {
            id: 'student',
            title: 'Student',
            icon: <FaUserGraduate />,
            badge: 'Learning on the Go',
            description: 'A personalized learning space to track progress and access resources anytime.',
            features: [
                'Personalized class timetable',
                'Easy assignment submissions',
                'Instant results & progress reports',
                'Access to e-library & resources',
                'Mobile-first learning experience'
            ],
            cta: 'Access Student Portal'
        },
        {
            id: 'parent',
            title: 'Parent',
            icon: <FaUsers />,
            badge: 'Stay Informed',
            description: 'Transparency and real-time updates on your child\'s educational journey.',
            features: [
                'Real-time attendance alerts',
                'Performance & grade tracking',
                'Fee payment history & reminders',
                'Teacher-parent messaging',
                'Event & holiday notifications'
            ],
            cta: 'Connect as Parent'
        }
    ];

    const activeRole = roles.find(role => role.id === activeTab);

    return (
        <section className="role-dashboards reveal">
            <div className="container">
                <div className="section-header-center">
                    <span className="section-badge">Platform Access</span>
                    <h2 className="section-title">One Platform. <span className="highlight">Multiple Roles.</span></h2>
                    <p className="section-desc">
                        Secure and personalized dashboards designed specifically for every stakeholder in the educational ecosystem.
                    </p>
                </div>

                <div className="dashboard-interactive-box">
                    {/* Left: Interactive Tabs */}
                    <div className="role-tabs">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                className={`role-tab-btn ${activeTab === role.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(role.id)}
                            >
                                <div className="tab-icon">{role.icon}</div>
                                <div className="tab-info">
                                    <span className="tab-title">{role.title}</span>
                                    <span className="tab-hint">{role.badge}</span>
                                </div>
                                <FaArrowRight className="tab-arrow" />
                            </button>
                        ))}
                    </div>

                    {/* Right: Feature Display */}
                    <div className="role-content-display">
                        <div className={`role-card-inner card-fade-in`}>
                            <div className="role-card-header">
                                <div className="role-main-icon">{activeRole.icon}</div>
                                <div className="role-header-text">
                                    <h3>{activeRole.title} Dashboard</h3>
                                    <p>{activeRole.description}</p>
                                </div>
                            </div>

                            <div className="role-features-grid">
                                {activeRole.features.map((feature, idx) => (
                                    <div key={idx} className="role-feature-item">
                                        <div className="check-mark">
                                            <FaCheck />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="role-card-footer">
                                <button className="btn-primary role-cta-btn" onClick={onSignUp}>
                                    {activeRole.cta} <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoleDashboards;
