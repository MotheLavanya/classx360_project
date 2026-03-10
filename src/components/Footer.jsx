import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLock, FaCheckCircle } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onSignUp, onLogin }) => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            console.log('Newsletter subscription for:', email);
            setIsSubscribed(true);
            setShowToast(true);
            setEmail('');
            setTimeout(() => {
                setIsSubscribed(false);
                setShowToast(false);
            }, 3000);
        }
    };

    return (
        <footer className="footer-v2">
            <div className="container">
                <div className="footer-grid">
                    {/* 1. Brand & Support */}
                    <div className="footer-col brand-col">
                        <div className="f-logo">
                            {/* <FaGraduationCap className="logo-icon" /> */}
                            <span className="logo-text">ClassX<span>360</span></span>
                        </div>
                        <p className="f-desc">
                            ClassX360 is an all-in-one learning and institution management platform designed to simplify academics.
                        </p>

                        <div className="f-direct-contact">
                            <a href="mailto:support@classx360.com" className="contact-link">
                                <FaEnvelope /> support@classx360.com
                            </a>
                            <a href="tel:+91XXXXXXXXXX" className="contact-link">
                                <FaPhone /> +91 XXXXX XXXXX
                            </a>
                        </div>
                    </div>

                    {/* 2. Platform */}
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            {/* <li><Link to="/login">Login</Link></li> */}
                            {/* <li><Link to="/signup">Signup</Link></li>0*/}
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            {/* <li><Link to="/careers">Careers</Link></li> */}
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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

                    {/* 5. Stay in Loop */}
                    <div className="footer-col newsletter-col">
                        <h4>Stay in Loop</h4>
                        <p>Get product updates, learning tips, and platform news directly in your inbox.</p>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit">
                                Subscribe
                            </button>
                        </form>
                        {showToast && (
                            <div className="subscribe-success-inline">
                                {/* <FaCheckCircle className="success-icon" /> */}
                                <span>Thank you for subscribing!</span>
                            </div>
                        )}
                    </div>
                </div>



                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="f-socials">
                        <a href="https://facebook.com/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaFacebookF /></a>
                        <a href="https://linkedin.com/company/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaLinkedinIn /></a>
                        <a href="https://youtube.com/@classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaYoutube /></a>
                        <a href="https://twitter.com/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaTwitter /></a>
                        <a href="https://instagram.com/classx360" target="_blank" rel="noopener noreferrer" className="s-link"><FaInstagram /></a>
                    </div>

                    <div className="f-copyright">
                        © 2026 ClassX360. All rights reserved. Built with ❤️ for Global Education.
                    </div>

                    <div className="f-security">
                        <span className="security-tag"><FaLock /> SSL Secure Payment</span>
                        <span className="security-divider">|</span>
                        <span className="security-tag">GDPR Compliant</span>
                    </div>
                </div>
            </div>
            {/* Transparent Watermark */}
            <div className="footer-watermark">ClassX360</div>
        </footer>
    );
};

export default Footer;
