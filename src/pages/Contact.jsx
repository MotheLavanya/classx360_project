import React, { useState } from 'react';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock,
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaComments, FaCheckCircle, FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';
import ChatWidget from '../components/ChatWidget';
import SupportImage from '../assets/contact-support.png';
import ContactBanner from '../assets/image copy 10.png';

const Contact = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        institution: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Mocking API call
        setTimeout(() => {
            setStatus('sent');
            setFormData({ name: '', email: '', institution: '', phone: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'sent') {
        return (
            <div className="contact-page gratitude">
                <div className="gratitude-card card-glass">
                    <div className="gratitude-icon"><FaCheckCircle /></div>
                    <h2>Thank You for Reaching Out!</h2>
                    <p>We've received your message. A confirmation email has been sent to your inbox, and our team will get back to you within 24 hours.</p>
                    <button className="btn-submit" onClick={() => setStatus('')}>Send Another Message</button>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-page">
            {/* 🚀 PREMIUM HERO BANNER */}
            <section className="contact-hero-banner">
                <div className="banner-bg-wrapper">
                    <img src={ContactBanner} alt="Contact Banner" className="banner-bg-img" />
                    <div className="banner-overlay"></div>
                </div>
                <div className="banner-content">
                    <h1 className="banner-title reveal">
                        {"Connect With ClassX360".split('').map((char, index) => (
                            <span key={index} style={{ '--char-index': index }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </section>

            <div className="contact-container">
                {/* 🏷 SECTION HEADER */}
                <header className="contact-header reveal">
                    <h2>Get in Touch</h2>
                    <p>Have questions or want to see ClassX360 in action? Our team is ready to assist you.</p>
                </header>

                <div className="contact-main-layout reveal">
                    {/* 🖤 LEFT SIDE – CONTACT DETAILS */}
                    <div className="contact-info-side">
                        <div className="contact-info-container">
                            <div className="info-row">
                                <div className="info-icon-wrapper">
                                    <FaEnvelope />
                                </div>
                                <div className="info-text">
                                    <strong>Email</strong>
                                    <p><a href="mailto:support@classx360.com">support@classx360.com</a></p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-icon-wrapper">
                                    <FaPhone />
                                </div>
                                <div className="info-text">
                                    <strong>Phone</strong>
                                    <p>+91 XXXXX XXXXX</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-icon-wrapper">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="info-text">
                                    <strong>Location</strong>
                                    <p>Hyderabad, India</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-icon-wrapper">
                                    <FaClock />
                                </div>
                                <div className="info-text">
                                    <strong>Business Hours</strong>
                                    <p>Mon – Fri | 9:00 AM – 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Extra Info: Social Links */}
                        <div className="contact-social-section">
                            <h4>Follow Our Journey</h4>
                            <div className="social-grid">
                                <a href="#" className="social-item"><FaLinkedinIn /></a>
                                <a href="#" className="social-item"><FaTwitter /></a>
                                <a href="#" className="social-item"><FaFacebookF /></a>
                                <a href="#" className="social-item"><FaInstagram /></a>
                            </div>
                        </div>

                        {/* Extra Info: Inquiry Process */}
                        <div className="contact-process-section">
                            <h4>What Happens Next?</h4>
                            <div className="process-timeline">
                                <div className="process-step">
                                    <div className="step-dot"></div>
                                    <div className="step-label">
                                        <strong>Message Received</strong>
                                        <p>Our experts review your inquiry immediately.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-dot"></div>
                                    <div className="step-label">
                                        <strong>Expert Consultation</strong>
                                        <p>We'll reach out to discuss your specific needs.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-dot"></div>
                                    <div className="step-label">
                                        <strong>Personalized Demo</strong>
                                        <p>See a 1:1 demo of ClassX360 for your institution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 📝 RIGHT SIDE – CONTACT FORM */}
                    <div className="contact-form-side">
                        <div className="form-card">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="institution"
                                        placeholder="Institution Name"
                                        value={formData.institution}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-request-demo" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Request a Demo'}
                                </button>
                                <p className="button-note">We typically respond within 24 hours.</p>
                            </form>
                        </div>

                        {/* Direct Help Teaser */}
                        <div className="direct-help-card">
                            <FaComments className="help-icon" />
                            <div className="help-text">
                                <strong>Need Instant Help?</strong>
                                <p>Chat with our support team live for quick answers.</p>
                            </div>
                            <button className="btn-chat-toggle" onClick={() => setIsChatOpen(true)}>
                                Open Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ChatWidget
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </div>
    );
};

export default Contact;
