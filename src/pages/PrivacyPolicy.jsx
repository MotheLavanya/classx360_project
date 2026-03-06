import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './PrivacyPolicy.css';



const PrivacyPolicy = () => {
    return (
        <div className="privacy-page page-entrance">
            <div className="privacy-hero">
                <div className="privacy-hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last updated: January 28, 2026</p>
                </div>
            </div>

            <div className="privacy-content-wrapper">
                <div className="container">
                    <div className="privacy-content">
                        <section className="privacy-intro">
                            <p>
                                At <strong>ClassX360</strong>, your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use our Learning Management System (LMS) and related services.
                            </p>
                            <p>
                                Our goal is to provide a safe and secure learning platform while respecting your personal information.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>1. Information We Collect</h2>
                            <p>To provide our services, we may collect the following information:</p>

                            <div className="subsection">
                                <h3>Account Information</h3>
                                <p>When you create an account, we may collect details such as your name, email address, username, and other profile information.</p>
                            </div>

                            <div className="subsection">
                                <h3>Usage Information</h3>
                                <p>We may collect information about how you use the platform, such as course progress, activity within the LMS, and basic device information.</p>
                            </div>

                            <div className="subsection">
                                <h3>Support Information</h3>
                                <p>If you contact us for help or support, we may collect the information you provide in your message.</p>
                            </div>
                        </section>

                        <section className="privacy-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use your information to:</p>
                            <ul className="check-list">
                                <li>Create and manage your account</li>
                                <li>Provide access to courses and learning tools</li>
                                <li>Track learning progress and improve the learning experience</li>
                                <li>Send important updates and notifications</li>
                                <li>Improve our platform and services</li>
                                <li>Follow legal and regulatory requirements</li>
                            </ul>
                            <p><strong>Note:</strong> We do not sell your personal information to third parties.</p>
                        </section>

                        <section className="privacy-section">
                            <h2>3. Cookies</h2>
                            <p>
                                ClassX360 may use cookies and similar technologies to improve your experience and understand how the platform is used. You can manage or disable cookies through your browser settings.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>4. Data Security</h2>
                            <p>
                                We take appropriate steps to protect your personal information from unauthorized access, loss, or misuse.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>5. Your Rights</h2>
                            <p>Depending on applicable laws, you may have the right to:</p>
                            <ul className="check-list">
                                <li>Access your personal information</li>
                                <li>Correct or update your information</li>
                                <li>Request deletion of your data</li>
                            </ul>
                            <p>If you would like to make a request, please contact us.</p>
                        </section>

                        <section className="privacy-section">
                            <h2>6. Updates to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. When we make important changes, we will update the “Last Updated” date on this page.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>7. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy or your data, please contact us:</p>
                            <a href="mailto:privacy@classx360.com" className="email-link">📧 privacy@classx360.com</a>
                        </section>

                        <section className="privacy-section">
                            <h2>Why This Matters</h2>
                            <p>
                                Your privacy helps us build a safe and trusted learning environment. We are committed to handling your information responsibly and transparently.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
