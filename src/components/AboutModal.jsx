import './AboutModal.css';

const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="about-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="about-content">

                    <header className="about-header">
                        <h2>ClassX 360 <span className="gradient-text">Journey</span></h2>
                        <p>Building the future of educational management.</p>
                    </header>

                    <div className="about-grid">
                        <section className="about-card">
                            <h3>📌 About ClassX 360</h3>
                            <p>A comprehensive LMS + School Management System designed to help institutions, educators, and learners thrive in the digital age.</p>
                            <ul>
                                <li>LMS + School Management System</li>
                                <li>Empowering Institutions & Educators</li>
                                <li>Visionary Learning Environment</li>
                            </ul>
                        </section>

                        <section className="about-card">
                            <h3>🎯 Mission & Vision</h3>
                            <p>Our goal is to revolutionize education technology through high-quality, impact-driven solutions that simplify institutional growth.</p>
                            <ul>
                                <li>Innovative EdTech Solutions</li>
                                <li>Global Educational Impact</li>
                                <li>Commitment to Quality</li>
                            </ul>
                        </section>

                        <section className="about-card">
                            <h3>👥 Who We Serve</h3>
                            <p>From large-scale schools to independent coaches, ClassX 360 provides the tools needed for success at every level.</p>
                            <ul>
                                <li>Schools & Coaching Institutes</li>
                                <li>Teachers & Mentors</li>
                                <li>Students & Parents</li>
                            </ul>
                        </section>

                        <section className="about-card">
                            <h3>🏆 Why Choose Us</h3>
                            <p>We stand out with our all-in-one ecosystem that combines advanced LMS features with robust administrative tools.</p>
                            <ul>
                                <li>All-in-one Management</li>
                                <li>Highly Scalable & Secure</li>
                                <li>Data-Driven Analytics</li>
                            </ul>
                        </section>
                    </div>

                    <div className="team-section">
                        <h3 className="section-title">👨💼 Our Leadership</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <div className="team-avatar">👨💼</div>
                                <h4>Alex Rivera</h4>
                                <p>Founder & CEO</p>
                            </div>
                            <div className="team-member">
                                <div className="team-avatar">👩💼</div>
                                <h4>Sarah Chen</h4>
                                <p>Head of Product</p>
                            </div>
                            <div className="team-member">
                                <div className="team-avatar">👨💻</div>
                                <h4>David Park</h4>
                                <p>CTO</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-section">
                        <h3 className="section-title">📜 Success Stories</h3>
                        <div className="testimonial-container">
                            <p>"ClassX 360 has transformed how we manage our 500+ students. The integration between LMS and fees management is flawless."</p>
                            <span style={{ color: 'var(--primary)', marginTop: '1rem', display: 'block', fontStyle: 'normal', fontWeight: 'bold' }}>- Principal, Global Academy</span>
                        </div>
                    </div>

                    <div className="contact-section">
                        <h3 className="section-title">📞 Connect With Us</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <h5>Support & Sales</h5>
                                <p>Email: support@classx360.com</p>
                                <p>Phone: +1 (555) 123-4567</p>
                            </div>
                            <div className="contact-item">
                                <h5>Follow Us</h5>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>LinkedIn</a>
                                    <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Twitter</a>
                                    <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Facebook</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <h5>Location</h5>
                                <p>123 Tech Avenue, Silicon Valley, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;
