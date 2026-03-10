import React, { useState } from 'react';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock,
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css';
import ChatWidget from '../components/ChatWidget';

const Contact = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', institution: '', phone: '', message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
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
            <div className="ct-page ct-success-view">
                <div className="ct-success-card">
                    <div className="ct-success-icon"><FaCheckCircle /></div>
                    <h2>Message Sent!</h2>
                    <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button className="ct-btn-primary" onClick={() => setStatus('')}>Send Another Message</button>
                </div>
            </div>
        );
    }

    return (
        <div className="ct-page">

            {/* ── Header ── */}
            <section className="ct-hero">
                <div className="ct-hero-inner">
                    <span className="ct-label">Contact</span>
                    <h1>Get In Touch With Us</h1>
                    <p>Have questions or want to see ClassX360 in action? Our team is ready to assist you.</p>
                </div>
            </section>

            {/* ── Quick Info Cards ── */}
            <section className="ct-info-strip">
                <div className="ct-info-card">
                    <div className="ct-info-card-icon ct-icon-purple"><FaEnvelope /></div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:support@classx360.com">support@classx360.com</a></p>
                </div>
                <div className="ct-info-card">
                    <div className="ct-info-card-icon ct-icon-green"><FaPhone /></div>
                    <h4>Call Us</h4>
                    <p>+91 XXXXX XXXXX</p>
                </div>
                <div className="ct-info-card">
                    <div className="ct-info-card-icon ct-icon-rose"><FaMapMarkerAlt /></div>
                    <h4>Visit Us</h4>
                    <p>Hyderabad, India</p>
                </div>
                <div className="ct-info-card">
                    <div className="ct-info-card-icon ct-icon-amber"><FaClock /></div>
                    <h4>Business Hours</h4>
                    <p>Mon – Fri | 9 AM – 6 PM</p>
                </div>
            </section>

            {/* ── Form Section ── */}
            <section className="ct-form-section">
                <div className="ct-form-layout">
                    {/* Left — Title + Socials */}
                    <div className="ct-form-aside">
                        <h2>Send us a<br />message</h2>
                        <p>Fill out the form and our team will reach out to discuss your needs.</p>
                        <div className="ct-form-accent-line"></div>
                        <div className="ct-form-socials">
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="ct-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="ct-form-grid">
                                <div className="ct-field">
                                    <label>Full Name</label>
                                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="ct-field">
                                    <label>Email Address</label>
                                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="ct-field">
                                    <label>Institution</label>
                                    <input type="text" name="institution" placeholder="Enter your institution name" value={formData.institution} onChange={handleChange} required />
                                </div>
                                <div className="ct-field">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="ct-field ct-field-full">
                                <label>Message</label>
                                <textarea name="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="ct-btn-primary" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending…' : (
                                    <>Request a Demo</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
};

export default Contact;
