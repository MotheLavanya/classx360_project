import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="login-page">
            <div className="login-content-wrapper">
                <div className="login-intro-text">
                    <h1>Welcome Back</h1>
                    <p>Access your complete institution management suite. Stay connected with your students, educators, and administrative tools in one powerful dashboard.</p>
                </div>

                <div className="login-card reveal-up">
                    <div className="auth-header">
                        <h2>Sign In</h2>
                        <p>Access your institution dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
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
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary lg full-width">
                            Login
                        </button>
                    </form>

                    <div className="auth-switch">
                        <p>
                            New to ClassX 360?{' '}
                            <Link to="/signup">
                                Sign Up for free
                            </Link>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default LoginPage;
