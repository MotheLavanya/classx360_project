import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaEnvelopeOpen } from 'react-icons/fa';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    useEffect(() => {
        setMode(initialMode);
        if (isOpen) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                password: ''
            });
            setShowPassword(false);
        }
    }, [initialMode, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${mode} form submitted for ClassX 360:`, formData);

        if (mode === 'signup') {
            window.alert(`Welcome to ClassX 360, ${formData.name}! Your account has been created successfully.`);
        } else {
            window.alert(`Welcome back! You have successfully logged in.`);
        }

        onClose();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="auth-modal-wrapper">
                <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>&times;</button>

                    <div className="auth-content">
                        <div className="auth-header">
                            <h2>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
                            <p>{mode === 'login' ? 'Please enter your details to sign in' : 'Join thousands of institutions today'}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
                            {mode === 'signup' && (
                                <div className="form-group">
                                    <label><FaUser className="input-icon" /> Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            {mode === 'signup' && (
                                <div className="form-group">
                                    <label><FaPhone className="input-icon" /> Contact Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label><FaEnvelope className="input-icon" /> Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group password-group">
                                <label><FaLock className="input-icon" /> Password</label>
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            {mode === 'login' && (
                                <div className="form-options-bottom">
                                    <button
                                        type="button"
                                        className="forgot-password"
                                        onClick={() => alert("Check your email to reset your password. We've sent a recovery link to your registered email address.")}
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            <button type="submit" className="btn-auth-submit">
                                {mode === 'login' ? 'Sign In' : 'Get Started Free'}
                            </button>
                        </form>

                        <div className="auth-footer">
                            <p>
                                {mode === 'login' ? "Don't have an account?" : "Already member?"}
                                <button
                                    className="switch-btn"
                                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                                >
                                    {mode === 'login' ? 'Create Account' : 'Sign In'}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
