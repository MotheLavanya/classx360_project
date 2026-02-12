import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            console.log('Newsletter subscription for:', email);
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 5000);
        }
    };

    return (
        <footer className="footer-v2">
            <div className="container">
                <div className="footer-top">
                    {/* 1. Company Information */}
                    <div className="footer-col company-info">
                        <div className="f-logo">
                            <FaGraduationCap className="logo-icon" />
                            <span className="logo-text">ClassX<span>360</span></span>
                        </div>
                        <p className="f-desc">
                            ClassX360 is an all-in-one learning and institution management platform designed to simplify academics.
                        </p>
                        <div className="f-socials">
                            <a href="https://www.facebook.com/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaFacebookF /></a>
                            <a href="https://www.linkedin.com/company/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaLinkedinIn /></a>
                            <a href="https://www.youtube.com/@classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaYoutube /></a>
                            <a href="https://twitter.com/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaTwitter /></a>
                            <a href="https://www.instagram.com/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* 2. Platform */}
                    <div className="footer-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><Link to="/#home">Home</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/login">Student Login</Link></li>
                        </ul>
                    </div>

                    {/* 4. Legal */}
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/refund">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* 5. Stay in the Loop */}
                    <div className="footer-col newsletter-col">
                        <h4>Stay in the Loop</h4>
                        <p className="newsletter-text">Subscribe for exclusive updates and educational insights.</p>
                        {isSubscribed ? (
                            <div className="subscription-success">
                                Thanks for joining! Check your inbox soon.
                            </div>
                        ) : (
                            <form className="newsletter-form" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="newsletter-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="newsletter-btn">Join</button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 ClassX360. All rights reserved. Built with ❤️ for modern education.</p>
                </div>
            </div>

            {/* Transparent Watermark */}
            <div className="footer-watermark">ClassX360</div>
        </footer>
    );
};

export default Footer;
