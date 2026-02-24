import React from 'react';

import './Terms.css'; // Synced with Terms/Privacy styling
import RefundHeroImage from '../assets/privacypolicy.png';

const RefundPolicy = () => {
    return (
        <div className="terms-page page-entrance">
            <div className="terms-hero" style={{ backgroundImage: `url(${RefundHeroImage})` }}>
                <div className="terms-hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1>Refund Policy</h1>
                    <p className="last-updated">Last updated: January 28, 2026</p>
                </div>
            </div>

            <div className="terms-content-wrapper">
                <div className="container">
                    <div className="terms-card">
                        <section className="privacy-intro">
                            <p>
                                At <strong>ClassX 360</strong>, we are committed to providing high-quality digital education.
                                We want you to be perfectly satisfied with your learning experience. This policy outlines
                                our guidelines regarding refunds for course enrollments and subscription services.
                            </p>
                        </section>

                        <section className="privacy-section">
                            <h2>1. Eligibility for Refunds</h2>
                            <p>To be eligible for a refund, the following conditions must be met:</p>
                            <ul>
                                <li>The refund request must be made within <strong>7 days</strong> of the initial purchase or enrollment.</li>
                                <li>The user must not have completed more than <strong>20%</strong> of the course content.</li>
                                <li>The request must be submitted through our official support channels.</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>2. Non-Refundable Items</h2>
                            <p>Certain products and services are not eligible for refunds under any circumstances:</p>
                            <ul>
                                <li>Digital certificates once they have been generated or issued.</li>
                                <li>Subscription renewals that occur after the renewal date (users are responsible for canceling before the next billing cycle).</li>
                                <li>Customized training programs or bulk institutional licenses.</li>
                                <li>Promotional or discounted bundles clearly marked as "Non-Refundable".</li>
                            </ul>
                        </section>

                        <section className="privacy-section">
                            <h2>3. How to Request a Refund</h2>
                            <p>To initiate a refund request, please follow these steps:</p>
                            <ol>
                                <li>Send an email to <a href="mailto:support@classx360.com">support@classx360.com</a> with the subject line "Refund Request - [Order ID]".</li>
                                <li>Clearly state the reason for your request.</li>
                                <li>Our team will review your usage data and eligibility within <strong>2-3 business days</strong>.</li>
                            </ol>
                        </section>

                        <section className="privacy-section">
                            <h2>4. Refund Processing</h2>
                            <p>
                                Once approved, your refund will be processed back to the original payment method within
                                <strong>5-10 business days</strong>. Please note that bank processing times may vary.
                            </p>
                        </section>

                        <section className="privacy-section contact-highlight">
                            <h2>Contact Support</h2>
                            <p>If you have any questions about this policy, please reach out to our billing team:</p>
                            <a href="mailto:support@classx360.com" className="email-cta">📧 support@classx360.com</a>
                        </section>

                        <section className="privacy-footer-note">
                            <h3>Transparent & Fair</h3>
                            <p>
                                Our goal is to maintain a fair and sustainable platform for both students and instructors.
                                Thank you for choosing ClassX 360 for your digital journey.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
