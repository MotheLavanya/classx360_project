import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaArrowLeft, FaTimes } from 'react-icons/fa';
import '../components/AuthModal.css';
import './LoginPage.css';

const LoginPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted:", formData);
        window.alert(`Welcome back! You have successfully logged in.`);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-page fade-in">
            <div className="login-content-wrapper">
                <div className="login-card reveal-up">
                    <Link to="/" className="auth-close-btn" title="Close">
                        <FaTimes />
                    </Link>
                    <div className="auth-header">
                        <h2>Log In</h2>
                        <p>Access your institution dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
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
                        <div className="form-group">
                            <label><FaLock className="input-icon" /> Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-options-bottom">
                            <button
                                type="button"
                                className="forgot-password"
                                onClick={() => alert("Check your email to reset your password. We've sent a recovery link to your registered email address.")}
                            >
                                Forgot Password?
                            </button>
                        </div>

                        <button type="submit" className="btn-auth-submit">
                            Sign In
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            New to ClassX 360?{' '}
                            <Link to="/signup" className="switch-link">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
