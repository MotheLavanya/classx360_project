import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../components/AuthModal.css';
import './LoginPage.css';

const SignupPage = () => {
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
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGoogleLogin = () => {
        alert("Google Login is being simulated. Redirecting...");
    };

    return (
        <div className="login-page page-entrance">
            <Link to="/" className="login-back-link">
                <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Home
            </Link>

            <div className="login-content-wrapper">
                <div className="login-intro-text">
                    <h1>Join ClassX 360</h1>
                    <p>Experience the next generation of Learning Management. Streamline your administration and empower your educators today.</p>
                </div>

                <div className="login-card">
                    <div className="auth-header">
                        <h2>Get Started</h2>
                        <p>Create your free account today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
                        <div className="form-group">
                            <label>Full Name</label>
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
                            <label>Contact Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
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
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary lg full-width">
                            Create Account
                        </button>
                    </form>

                    <div className="auth-switch">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login">
                                Login here
                            </Link>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignupPage;
