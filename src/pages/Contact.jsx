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
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Mocking API call
        setTimeout(() => {
            setStatus('sent');
            setFormData({ name: '', email: '', subject: '', message: '' });
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
                    <p>We've received your message. A confirmation email has been sent to your inbox, and our team will get back to you within 1-2 business days.</p>
                    <button className="btn-submit" onClick={() => setStatus('')}>Send Another Message</button>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-page">
            {/* 0. Banner Section */}
            <section className="contact-banner-section reveal">
                <div className="banner-overlay"></div>
                <img src={ContactBanner} alt="Contact Us Banner" className="banner-bg-img" />
                <div className="banner-content">
                    <h1 className="letter-animation">
                        {"CONTACT US".split('').map((char, index) => (
                            <span key={index} style={{ '--char-index': index }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                </div>
            </section>

            {/* 1. Hero Section Removed - Content moved to Banner */}

            <div className="contact-main-grid reveal">
                {/* 2. Left Column: Contact Form */}
                <div className="contact-content">
                    <div className="form-section studylab-form">
                        <h3>Get in Touch</h3>
                        <p className="form-subtitle">We’re Here to Help You Learn Better!</p>
                        <form onSubmit={handleSubmit} className="premium-form">
                            <div className="form-row">
                                <div className="f-field">
                                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="f-field">
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="f-field">
                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="f-field">
                                <textarea name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn-submit lg" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* 3. Right Column: Contact Info */}
                <div className="contact-sidebar">
                    <div className="info-card studylab-info">
                        <h3>Contact Details</h3>

                        <div className="info-item">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div>
                                <strong>Address</strong>
                                <p>123 Learning Street, Education City,<br />Andhra Pradesh, India</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaPhone /></div>
                            <div>
                                <strong>Phone</strong>
                                <p>+91-9876543210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div>
                                <strong>Email</strong>
                                <p><a href="mailto:support@classx360.com">support@classx360.com</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><FaClock /></div>
                            <div>
                                <strong>Hours</strong>
                                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                            </div>
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
