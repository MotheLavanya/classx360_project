import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './PrivacyPolicy.css';

import PrivacyHeroImage from '../assets/privacypolicy.png';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page page-entrance">
            <div className="privacy-hero" style={{ backgroundImage: `url(${PrivacyHeroImage})` }}>
                <div className="privacy-hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last updated: January 28, 2026</p>
                </div>
            </div>

            <div className="privacy-content-wrapper">
                <div className="container">
                    <div className="privacy-card">
                        <section className="privacy-intro">
                            <p>
                                Welcome to the <strong>ClassX 360</strong> Privacy Policy. Your privacy and trust are very important to us.
                                This policy explains what information we collect, why we collect it, how we use it, and how we protect it
                                when you use our Learning Management System (LMS) and related services.
                            </p>
                            <p>
                                We are committed to safeguarding your personal information while providing you with a secure
                                and reliable digital learning experience.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>1️⃣ Information We Collect</h2>
                            <p>To deliver, improve, and personalize your experience on ClassX 360, we may collect the following categories of information:</p>
                            <ul>
                                <li><strong>Account Information:</strong> Your name, email address, username, and other details you provide when you sign up or update your profile.</li>
                                <li><strong>Usage Information:</strong> Data related to your activities within the LMS such as course interaction, progress, usage patterns, and device information.</li>
                                <li><strong>Support & Communications:</strong> Information you provide when contacting support or responding to surveys.</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>2️⃣ How We Use Your Information</h2>
                            <p>Your data is used only for specific, legitimate purposes, including:</p>
                            <ul className="check-list">
                                <li>✔ Providing and maintaining your LMS account and access to learning tools.</li>
                                <li>✔ Personalizing your learning experience and tracking course progress.</li>
                                <li>✔ Communicating with you about updates, support, or platform improvements.</li>
                                <li>✔ Complying with legal and regulatory obligations.</li>
                            </ul>
                            <div className="important-note">
                                <p>We do not sell your personal information to advertisers or unrelated third parties.</p>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2>3️⃣ Cookies & Tracking Technologies</h2>
                            <p>
                                ClassX 360 uses cookies and similar technologies to enhance your experience, analyze site usage,
                                and support platform functionality. You can manage cookie preferences through your browser or device settings.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>4️⃣ Data Protection & Security</h2>
                            <p>
                                We take your privacy seriously and implement appropriate technical and organizational measures
                                to protect your data from unauthorized access, loss, or misuse.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>5️⃣ Your Rights & Choices</h2>
                            <p>Depending on your location and applicable laws, you may have rights such as:</p>
                            <ul>
                                <li>Accessing your personal information.</li>
                                <li>Correcting or updating inaccurate data.</li>
                                <li>Requesting deletion or restricting processing.</li>
                            </ul>
                            <p>If you wish to exercise any of these rights, please contact us at <a href="mailto:privacy@classx360.com">privacy@classx360.com</a>.</p>
                        </section>

                        <section className="privacy-section">
                            <h2>6️⃣ Updates to This Policy</h2>
                            <p>
                                We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements.
                                When we make significant changes, we will update the "Last Updated" date at the top of this page.
                            </p>
                        </section>

                        <section className="privacy-section contact-highlight">
                            <h2>7️⃣ Contact Us</h2>
                            <p>If you have questions or concerns about your privacy, please reach out to:</p>
                            <a href="mailto:privacy@classx360.com" className="email-cta">📧 privacy@classx360.com</a>
                        </section>

                        <section className="privacy-footer-note">
                            <h3>Why This Matters to You</h3>
                            <p>
                                Your privacy is more than a legal requirement — it's part of how we build a trusted learning environment.
                                We strive to explain things clearly so you understand how your information is handled, why we collect it,
                                and how you remain in control of your data while using ClassX 360.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
