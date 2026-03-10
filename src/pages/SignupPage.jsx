import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaTimes } from 'react-icons/fa';
import '../components/AuthModal.css';
import './LoginPage.css';

const SignupPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup submitted:", formData);
        window.alert(`Welcome to ClassX 360, ${formData.name}! Your account has been created successfully.`);
        setFormData({ name: '', email: '', phone: '', password: '' });
        navigate('/login');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="simplified-auth-page signup-layout page-entrance">
            <div className="login-card reveal-up">
                <div className="border-beam"></div>
                <Link to="/" className="auth-close-btn" title="Close">
                    <FaTimes />
                </Link>
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join thousands of institutions today</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
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
                    <button type="submit" className="btn-auth-submit">
                        <span>Create Account</span>
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already member?{' '}
                        <Link to="/login" className="switch-link">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
