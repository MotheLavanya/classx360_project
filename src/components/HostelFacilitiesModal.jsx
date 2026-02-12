import React, { useState } from 'react';
import { FaHotel, FaUtensils, FaDumbbell, FaBell, FaChartLine, FaUserGraduate, FaUserShield, FaSync, FaTimes, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import './HostelFacilitiesModal.css';

const HostelFacilitiesModal = ({ isOpen, onClose }) => {
    const [activeSection, setActiveSection] = useState('rooms');
    const [viewMode, setViewMode] = useState('admin'); // 'admin' or 'student'

    if (!isOpen) return null;

    const sections = [
        { id: 'rooms', label: 'Accommodation', icon: <FaHotel /> },
        { id: 'mess', label: 'Mess & Dining', icon: <FaUtensils /> },
        { id: 'facilities', label: 'Campus Facilities', icon: <FaDumbbell /> },
        { id: 'notifications', label: 'Alerts & Notices', icon: <FaBell /> },
        { id: 'analytics', label: 'Analytics & Reports', icon: <FaChartLine /> },
    ];

    return (
        <div className="hf-modal-overlay" onClick={onClose}>
            <div className="hf-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="hf-close-btn" onClick={onClose}><FaTimes /></button>

                <div className="hf-sidebar">
                    <div className="hf-logo">
                        <div className="logo-icon"><FaHotel /></div>
                        <h3>Hostel & Facilities</h3>
                    </div>
                    <nav className="hf-nav">
                        {sections.map(s => (
                            <button
                                key={s.id}
                                className={`hf-nav-item ${activeSection === s.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(s.id)}
                            >
                                <span className="icon">{s.icon}</span>
                                {s.label}
                            </button>
                        ))}
                    </nav>
                    <div className="hf-view-toggle">
                        <button
                            className={`toggle-btn ${viewMode === 'admin' ? 'active' : ''}`}
                            onClick={() => setViewMode('admin')}
                        >
                            Admin View
                        </button>
                        <button
                            className={`toggle-btn ${viewMode === 'student' ? 'active' : ''}`}
                            onClick={() => setViewMode('student')}
                        >
                            Student View
                        </button>
                    </div>
                    <div className="hf-sidebar-footer">
                        <div className="lms-integration-badge">
                            <FaSync /> LMS Integrated
                        </div>
                    </div>
                </div>

                <div className="hf-main">
                    <header className="hf-header">
                        <h2>{sections.find(s => s.id === activeSection).label} Management</h2>
                        <p>Streamline student living and facility utilization.</p>
                    </header>

                    <div className="hf-content scrollbar-custom">
                        {activeSection === 'rooms' && (
                            <div className="section-content fade-in">
                                <div className="hf-info-banner">
                                    <FaExclamationCircle /> Efficiently manages hostel space and resources with auto-conflict checks.
                                </div>
                                <div className="hf-feature-card">
                                    <div className="card-header">
                                        <h4>🏠 Room Allocation & Management</h4>
                                        <div className="badge-group">
                                            <span className="hf-pill blue">A Block</span>
                                            <span className="hf-pill green">85% Occupied</span>
                                        </div>
                                    </div>
                                    <div className="room-types-grid">
                                        <div className="room-type-card">
                                            <strong>Single AC</strong>
                                            <span>Wi-Fi, Balcony</span>
                                            <button className="hf-btn-outline" onClick={() => alert('Checking availability for Single AC...')}>View availability</button>
                                        </div>
                                        <div className="room-type-card">
                                            <strong>Double Non-AC</strong>
                                            <span>Spacious, Study Table</span>
                                            <button className="hf-btn-outline" onClick={() => alert('Checking availability for Double Non-AC...')}>View availability</button>
                                        </div>
                                    </div>
                                    <div className="hf-action-row mt-4">
                                        <button className="hf-btn-primary" onClick={() => alert('Room application initialized for Student Assignment')}>Assign New Room</button>
                                        <button className="hf-btn-secondary" onClick={() => alert('Running auto-conflict check for current floor...')}>Auto-Conflict Check</button>
                                    </div>
                                </div>

                                <div className="hf-feature-card secondary">
                                    <h4>🔎 Filter & Search</h4>
                                    <div className="filter-controls">
                                        <select className="hf-select">
                                            <option>All Floors</option>
                                            <option>Floor 1</option>
                                            <option>Floor 2</option>
                                        </select>
                                        <select className="hf-select">
                                            <option>All Blocks</option>
                                            <option>Block A</option>
                                            <option>Block B</option>
                                        </select>
                                        <button className="hf-btn-sm" onClick={() => alert('Filters applied to Room List')}>Apply Filters</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'mess' && (
                            <div className="section-content fade-in">
                                <div className="hf-info-banner">
                                    <FaUtensils /> Simplifies dining operations and ensures timely billing.
                                </div>
                                <div className="hf-feature-card">
                                    <div className="card-header">
                                        <h4>🍽️ Mess & Meal Management</h4>
                                        <button className="hf-btn-gradient" onClick={() => alert('Opening meal plan editor')}>Manage Plans</button>
                                    </div>
                                    <div className="plans-container">
                                        <div className="meal-plan active">
                                            <div className="plan-info">
                                                <strong>Standard Plan</strong>
                                                <p>3 Meals/Day • $150/mo</p>
                                            </div>
                                            <FaCheck className="check-icon" />
                                        </div>
                                        <div className="meal-plan">
                                            <div className="plan-info">
                                                <strong>Premium Plan</strong>
                                                <p>4 Meals + Snacks • $250/mo</p>
                                            </div>
                                            <button className="hf-btn-text" onClick={() => alert('Plan updated successfully to Premium')}>Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hf-stats-grid">
                                    <button className="hf-stat-card" onClick={() => alert('Opening Daily Attendance Tracker')}>
                                        <FaChartLine />
                                        <span>Attendance Tracking</span>
                                    </button>
                                    <button className="hf-stat-card" onClick={() => alert('Opening Special Meal Requests Feed')}>
                                        <FaUtensils />
                                        <span>Special Meal Requests</span>
                                    </button>
                                    <button className="hf-stat-card warning" onClick={() => alert('Opening Renewal Dashboard')}>
                                        <FaBell />
                                        <span>Pending Renewal (12)</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeSection === 'facilities' && (
                            <div className="section-content fade-in">
                                <div className="hf-info-banner">
                                    <FaDumbbell /> Maximizes facility utilization and student convenience.
                                </div>
                                <div className="hf-feature-card">
                                    <h4>🏋️ Facility Booking & Usage</h4>
                                    <div className="fac-booking-grid">
                                        {[
                                            { name: 'Gym', icon: '🏋️', status: '8/10' },
                                            { name: 'Study Room', icon: '📖', status: 'Free' },
                                            { name: 'Laundry', icon: '🧺', status: '2 Slots' },
                                            { name: 'Sports Hub', icon: '🎾', status: 'Free' }
                                        ].map((fac, i) => (
                                            <div className="fac-booking-item" key={i}>
                                                <span className="fac-icon">{fac.icon}</span>
                                                <strong>{fac.name}</strong>
                                                <span className="fac-status-tag">{fac.status}</span>
                                                <button className="hf-btn-sm-primary" onClick={() => alert(`Initiating online booking slot for ${fac.name}...`)}>Book Now</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="hf-feature-card secondary">
                                    <h4>📊 Usage Analytics</h4>
                                    <div className="utilization-bar-group">
                                        <div className="bar-label">Gym Peak (6PM-9PM)</div>
                                        <div className="progress-bg"><div className="progress-fill" style={{ width: '90%' }}></div></div>
                                        <div className="bar-label">Library (2PM-5PM)</div>
                                        <div className="progress-bg"><div className="progress-fill" style={{ width: '45%' }}></div></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'notifications' && (
                            <div className="section-content fade-in">
                                <div className="hf-info-banner">
                                    <FaBell /> Keeps students informed and reduces manual follow-ups.
                                </div>
                                <div className="notification-list">
                                    {[
                                        { type: 'Room', msg: 'Room allocation confirmations sent to 45 students.', time: '2h ago' },
                                        { type: 'Billing', msg: 'Mess dues & payment reminders scheduled for Block A.', time: '5h ago' },
                                        { type: 'Service', msg: 'Elevator maintenance scheduled for Tomorrow 10 AM.', time: '1d ago' }
                                    ].map((n, i) => (
                                        <div className="hf-notification-item" key={i}>
                                            <div className={`n-type ${n.type.toLowerCase()}`}>{n.type}</div>
                                            <p>{n.msg}</p>
                                            <span className="n-time">{n.time}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <button className="hf-btn-block-gradient" onClick={() => alert('Pushing automated alerts/reminders to all student devices...')}>Blast All Announcements</button>
                                </div>
                            </div>
                        )}

                        {activeSection === 'analytics' && (
                            <div className="section-content fade-in">
                                <div className="hf-info-banner">
                                    <FaChartLine /> Data-driven insights for better planning and resource management.
                                </div>
                                <div className="hf-stats-row">
                                    <div className="hf-stat-summary">
                                        <small>Occupancy Trend</small>
                                        <h3>+12% vs LY</h3>
                                    </div>
                                    <div className="hf-stat-summary">
                                        <small>Revenue (Mess)</small>
                                        <h3>$45.2k</h3>
                                    </div>
                                    <div className="hf-stat-summary">
                                        <small>Facility Usage</small>
                                        <h3>High</h3>
                                    </div>
                                </div>
                                <div className="analytics-mock-container">
                                    <div className="chart-placeholder">
                                        <div className="chart-bar" style={{ height: '40%' }}></div>
                                        <div className="chart-bar" style={{ height: '70%' }}></div>
                                        <div className="chart-bar" style={{ height: '55%' }}></div>
                                        <div className="chart-bar" style={{ height: '90%' }}></div>
                                        <div className="chart-bar" style={{ height: '65%' }}></div>
                                    </div>
                                    <div className="chart-labels">
                                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                                    </div>
                                </div>
                                <div className="btn-group mt-4">
                                    <button className="hf-btn-outline-primary" onClick={() => alert('Generating PDF Occupancy Trend Report...')}>Generate Occupancy Report</button>
                                    <button className="hf-btn-outline-primary" onClick={() => alert('Exporting Mess Billing Collection Summary (CSV/PDF)...')}>Billing Collection Summary</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <footer className="hf-footer">
                        <div className="value-statement">
                            <FaExclamationCircle /> <strong>One-Line Value Statement:</strong> Manage rooms, mess, and campus facilities seamlessly with smart automation, analytics, and LMS integration.
                        </div>
                        <button className="hf-btn-main" onClick={() => alert('Loading Institutional Dashboard Overview...')}>Operational Overview</button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default HostelFacilitiesModal;
