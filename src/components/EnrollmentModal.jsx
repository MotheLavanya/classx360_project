import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaUserTie, FaClock, FaCheckCircle, FaLock } from 'react-icons/fa';
import './EnrollmentModal.css';

const EnrollmentModal = ({ isOpen, onClose, course }) => {
    const navigate = useNavigate();
    const [step, setStep] = useState('confirm'); // confirm, processing, success, upgrade

    if (!isOpen || !course) return null;

    const handleConfirm = () => {
        setStep('processing');

        // Mock Eligibility Check
        setTimeout(() => {
            if (course.isPremium && course.status === 'locked') {
                setStep('upgrade');
            } else {
                setStep('success');
            }
        }, 1500);
    };

    const handleGoToCourse = () => {
        onClose();
        // Reset state for next time
        setStep('confirm');
        window.scrollTo(0, 0);
        navigate(`/course/${course.id}`);
    };

    return (
        <div className="enrollment-modal-overlay">
            <div className="enrollment-modal">
                <div className="em-header">
                    <h3>{step === 'confirm' ? 'Confirm Enrollment' :
                        step === 'upgrade' ? 'Access Restricted' :
                            'Enrollment Successful'}</h3>
                    <button className="em-close" onClick={onClose}>&times;</button>
                </div>

                <div className="em-body">
                    {/* Step 1: Confirmation */}
                    {step === 'confirm' && (
                        <>
                            <div className="course-preview-card">
                                <div className="cp-icon"><FaBookOpen /></div>
                                <div className="cp-details">
                                    <h4>{course.title}</h4>
                                    <div className="cp-meta">
                                        <span><FaClock size={12} /> {course.duration}</span> • <span>{course.level}</span>
                                    </div>
                                </div>
                            </div>

                            <p style={{ marginBottom: '2rem', color: '#64748b' }}>
                                You are about to enroll in this course. Progress will be tracked in your dashboard.
                            </p>

                            <div className="em-actions">
                                <button className="btn-secondary" onClick={onClose}>Cancel</button>
                                <button className="btn-primary" onClick={handleConfirm}>Confirm Enrollment</button>
                            </div>
                        </>
                    )}

                    {/* Step 2: Processing (Loading) */}
                    {step === 'processing' && (
                        <div style={{ padding: '2rem' }}>
                            <div className="spinner" style={{
                                width: '40px', height: '40px', border: '4px solid #f3f3f3',
                                borderTop: '4px solid var(--primary)', borderRadius: '50%',
                                margin: '0 auto 1rem', animation: 'spin 1s linear infinite'
                            }}></div>
                            <p>Checking eligibility and setting up your class...</p>
                            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    )}

                    {/* Step 3: Success */}
                    {step === 'success' && (
                        <>
                            <FaCheckCircle className="success-icon-large" />
                            <h2>You're All Set! 🚀</h2>
                            <p style={{ color: '#64748b' }}>Your learning journey for <strong>{course.title}</strong> starts now.</p>

                            <div className="progress-preview">
                                <div className="progress-info">
                                    <span>Course Progress</span>
                                    <span>0%</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill" style={{ width: '0%' }}></div>
                                </div>
                            </div>

                            <div className="em-actions">
                                <button className="btn-secondary" onClick={() => { onClose(); setStep('confirm'); }}>Browse More</button>
                                <button className="btn-primary" onClick={handleGoToCourse}>Start Learning Now</button>
                            </div>
                        </>
                    )}

                    {/* Case B: Upgrade Needed */}
                    {step === 'upgrade' && (
                        <>
                            <div className="plan-check locked">
                                <FaLock size={24} style={{ marginBottom: '0.5rem' }} />
                                <h4>Premium Plan Required</h4>
                                <p style={{ fontSize: '0.9rem' }}>This course is available exclusively for Premium members.</p>
                            </div>

                            <div className="course-preview-card" style={{ opacity: 0.7 }}>
                                <div className="cp-icon"><FaLock /></div>
                                <div className="cp-details">
                                    <h4>{course.title}</h4>
                                    <div className="cp-meta">Unlock with Premium</div>
                                </div>
                            </div>

                            <div className="em-actions">
                                <button className="btn-secondary" onClick={onClose}>Maybe Later</button>
                                <button className="btn-primary" onClick={() => { onClose(); navigate('/checkout/premium'); }}>Upgrade to Premium</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnrollmentModal;
