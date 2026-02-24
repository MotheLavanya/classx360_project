import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLock, FaCheckCircle } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onSignUp, onLogin }) => {
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
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            {/* <li><a href="/careers">Careers</a></li> */}
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* 4. Support */}
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/login" className="footer-link-btn">Student Login</Link></li>
                            <li><button onClick={onSignUp} className="footer-link-btn">Request Demo</button></li>
                            {/* <li><a href="/faqs">Help Center</a></li> */}
                            {/* <li><a href="/docs">Documentation</a></li> */}
                        </ul>
                    </div>

                    {/* 5. Legal */}
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/refund">Refund Policy</a></li>
                        </ul>
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
