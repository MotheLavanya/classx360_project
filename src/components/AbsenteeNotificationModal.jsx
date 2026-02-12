import React, { useState } from 'react';
import { FaBell, FaUserSlash, FaChartBar, FaTimes, FaCheckCircle, FaExclamationTriangle, FaBullhorn, FaSms } from 'react-icons/fa';
import './AbsenteeNotificationModal.css';

const AbsenteeNotificationModal = ({ isOpen, onClose }) => {
    const [activeSection, setActiveSection] = useState('notifications');

    if (!isOpen) return null;

    const sections = [
        { id: 'notifications', label: 'Alerts & Notifications', icon: <FaBell /> },
        { id: 'absentees', label: 'Absentee Management', icon: <FaUserSlash /> },
        { id: 'analytics', label: 'Reports & Analytics', icon: <FaChartBar /> },
    ];

    return (
        <div className="an-modal-overlay" onClick={onClose}>
            <div className="an-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="an-close-btn" onClick={onClose}><FaTimes /></button>

                <div className="an-sidebar">
                    <div className="an-logo">
                        <FaBell size={24} color="#800000" />
                        <h3>Communication Center</h3>
                    </div>
                    <nav className="an-nav">
                        {sections.map(s => (
                            <button
                                key={s.id}
                                className={`an-nav-item ${activeSection === s.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(s.id)}
                            >
                                <span className="icon">{s.icon}</span>
                                {s.label}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="an-main">
                    <header className="an-header">
                        <h2>{sections.find(s => s.id === activeSection).label}</h2>
                        <p>Manage school-wide alerts, attendance reporting, and communication.</p>
                    </header>

                    <div className="an-content">
                        {activeSection === 'notifications' && (
                            <div className="fade-in">
                                <div className="an-info-banner">
                                    <FaBullhorn /> Instantly notify students, parents, and staff via SMS, Email, and App push.
                                </div>

                                <div className="an-feature-card">
                                    <h4>📢 Recent Announcements</h4>
                                    <div style={{ display: 'grid', gap: '15px' }}>
                                        {[
                                            { title: "Exam Schedule Released", date: "2 hours ago", type: "Academic", status: "Sent" },
                                            { title: "Holiday Notification", date: "Yesterday", type: "General", status: "Sent" },
                                            { title: "Staff Meeting Reminder", date: "2 days ago", type: "Staff", status: "Delivered" }
                                        ].map((item, idx) => (
                                            <div key={idx} style={{ padding: '15px', border: '1px solid #f1f5f9', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div>
                                                    <strong style={{ display: 'block', color: '#0f172a' }}>{item.title}</strong>
                                                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{item.date} • {item.type}</span>
                                                </div>
                                                <span className="an-pill green">{item.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '20px' }}>
                                        <button className="an-btn-primary" onClick={() => alert('Opening announcement composer...')}>Create New Announcement</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'absentees' && (
                            <div className="fade-in">
                                <div className="an-info-banner">
                                    <FaSms /> Automated absentee alerts are sent to parents daily at 10:00 AM.
                                </div>

                                <div className="an-feature-card">
                                    <h4>🚫 Today's Absentees</h4>
                                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                        <div style={{ flex: 1, padding: '20px', background: '#fef2f2', borderRadius: '16px', color: '#dc2626' }}>
                                            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>42</h3>
                                            <span style={{ fontWeight: 600 }}>Total Absent</span>
                                        </div>
                                        <div style={{ flex: 1, padding: '20px', background: '#fffbeb', borderRadius: '16px', color: '#d97706' }}>
                                            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>12</h3>
                                            <span style={{ fontWeight: 600 }}>Late Arrival</span>
                                        </div>
                                    </div>
                                    <button className="an-btn-primary" onClick={() => alert('Triggering manual absentee notification blast...')}>Send Absentee Alerts Now</button>
                                </div>
                            </div>
                        )}

                        {activeSection === 'analytics' && (
                            <div className="fade-in">
                                <div className="an-info-banner">
                                    <FaChartBar /> Track engagement rates and message delivery success.
                                </div>
                                <div className="an-feature-card">
                                    <h4>📊 Communication Health</h4>
                                    <p style={{ color: '#64748b', marginBottom: '20px' }}>SMS Delivery Rate: <strong>98.5%</strong> | App Open Rate: <strong>72%</strong></p>
                                    <div style={{ height: '200px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                                        (Mock Chart Area)
                                    </div>
                                    <div style={{ marginTop: '20px' }}>
                                        <button className="an-btn-primary" onClick={() => alert('Downloading communication report...')}>Download Report</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbsenteeNotificationModal;
