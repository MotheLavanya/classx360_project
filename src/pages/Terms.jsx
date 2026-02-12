import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Terms.css';
import TermsHeroImage from '../assets/privacypolicy.png';

const Terms = () => {
    return (
        <div className="terms-page page-entrance">
            <div className="terms-hero" style={{ backgroundImage: `url(${TermsHeroImage})` }}>
                <div className="terms-hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last updated: January 28, 2026</p>
                </div>
            </div>

            <div className="terms-content-wrapper">
                <div className="container">
                    <div className="terms-card">
                        <section className="terms-intro">
                            <p>
                                By accessing and using <strong>ClassX 360</strong>, you agree to comply with and be bound by the
                                following terms and conditions. Please read them carefully.
                            </p>
                        </section>

                        <section className="terms-section">
                            <h2>1. Use of Services</h2>
                            <p>You agree to use the platform only for lawful educational purposes and in a manner that does not infringe the rights of others.</p>
                        </section>

                        <section className="terms-section">
                            <h2>2. User Accounts</h2>
                            <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. ClassX 360 reserves the right to suspend accounts for suspicious activity.</p>
                        </section>

                        <section className="terms-section">
                            <h2>3. Prohibited Conduct</h2>
                            <p>You agree not to engage in any of the following prohibited activities:</p>
                            <ul style={{ color: 'white', paddingLeft: '20px', lineHeight: '1.7' }}>
                                <li>Copying, distributing, or disclosing any part of the service in any medium.</li>
                                <li>Attempting to interfere with, compromise the system integrity or security.</li>
                                <li>Taking any action that imposes an unreasonable load on our infrastructure.</li>
                                <li>Using the service for any commercial solicitation purposes.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>4. Intellectual Property</h2>
                            <p>All content on ClassX 360, including logos, text, software, and images, is the exclusive property of ClassX 360 or its licensors and is protected by copyright and other intellectual property laws.</p>
                        </section>

                        <section className="terms-section">
                            <h2>5. Privacy Policy</h2>
                            <p>Your use of ClassX 360 is also governed by our Privacy Policy. Please review our policy to understand how we collect and use your data.</p>
                        </section>

                        <section className="terms-section">
                            <h2>6. Termination</h2>
                            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                        </section>

                        <section className="terms-section">
                            <h2>7. Disclaimer of Warranties</h2>
                            <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. ClassX 360 makes no representations or warranties of any kind, express or implied, as to the operation of their services.</p>
                        </section>

                        <section className="terms-section">
                            <h2>8. Limitation of Liability</h2>
                            <p>In no event shall ClassX 360 be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of or in connection with the service.</p>
                        </section>

                        <section className="terms-footer-note">
                            <p>For full details or questions regarding these terms, contact our legal team at <a href="mailto:legal@classx360.com">legal@classx360.com</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
