import React, { useState, useEffect } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode);
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

    const handleFocus = (e) => {
        setFormData({ ...formData, [e.target.name]: '' });
    };

    const handleGoogleLogin = () => {
        console.log("Google Login initiated for ClassX 360");
        // Mocking a successful social login
        alert("Google Login is being simulated. Redirecting...");
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="auth-header">
                    <h2>{mode === 'login' ? 'Welcome Back' : 'Get Started'}</h2>
                    <p>{mode === 'login' ? 'Enter your credentials to continue' : 'Create your free account today'}</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
                    {mode === 'signup' && (
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                autoComplete="off"
                                required
                            />
                        </div>
                    )}
                    {mode === 'signup' && (
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                autoComplete="off"
                                required
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            autoComplete="off"
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
                            onFocus={handleFocus}
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary full-width">
                        {mode === 'login' ? 'Login' : 'Create Account'}
                    </button>
                </form>

                <div className="auth-switch">
                    <p>
                        {mode === 'login' ? "New to ClassX 360?" : "Already have an account?"}
                        <button
                            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                        >
                            {mode === 'login' ? 'Sign Up for free' : 'Login here'}
                        </button>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default AuthModal;
