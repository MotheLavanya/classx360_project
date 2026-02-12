import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaCheckCircle, FaLock, FaCreditCard, FaArrowRight, FaCheck, FaArrowLeft } from 'react-icons/fa';
import './Checkout.css';

const Checkout = () => {
    const { planId } = useParams();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isAnnual, setIsAnnual] = useState(true);

    // Mock Plan Data
    const plansData = {
        basic: {
            name: "Basic Plan",
            priceMonthly: 29,
            priceYearly: 290, // 2 months free
            features: [
                "Access to 50+ Basic Courses",
                "Limited Learner Enrollments",
                "Basic Progress Tracking",
                "Assignments & Quizzes",
                "Email Support"
            ],
            locked: [
                "Advanced Analytics",
                "Premium Certificates",
                "API Access",
                "Priority Support"
            ]
        },
        premium: {
            name: "Premium Plan",
            priceMonthly: 79,
            priceYearly: 790,
            features: [
                "Unlimited Course Access",
                "Advanced Analytics & Reports",
                "Verified Certificates",
                "Priority Support",
                "Live Classes"
            ],
            locked: [
                "White-labeling",
                "Dedicated Account Manager"
            ]
        },
        vip: {
            name: "VIP Plan",
            priceMonthly: 199,
            priceYearly: 1990,
            features: [
                "Everything in Premium",
                "Unlimited 1-on-1 Sessions",
                "Exclusive Workshops",
                "Early Access to Content",
                "White-labeling Included"
            ],
            locked: []
        }
    };

    const selectedPlan = plansData[planId] || plansData['basic']; // Default to basic if not found
    const price = isAnnual ? selectedPlan.priceYearly : selectedPlan.priceMonthly;
    const tax = Math.round(price * 0.18); // 18% GST example
    const total = price + tax;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const handlePayment = (e) => {
        e.preventDefault();
        // Simulate processing
        setTimeout(() => {
            setStep(3);
        }, 1500);
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                {/* Stepper */}
                <div className="checkout-stepper">
                    <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                        <div className="step-circle">{step > 1 ? <FaCheck /> : 1}</div>
                        <div className="step-label">Overview</div>
                    </div>
                    <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                        <div className="step-circle">{step > 2 ? <FaCheck /> : 2}</div>
                        <div className="step-label">Billing</div>
                    </div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>
                        <div className="step-circle">3</div>
                        <div className="step-label">Success</div>
                    </div>
                </div>

                {/* Step 1: Plan Overview */}
                {step === 1 && (
                    <div className="checkout-card fade-in">
                        <div className="plan-header">
                            <span className="plan-name-badge">You chose {selectedPlan.name}</span>
                            <h2>Review Your Selection</h2>
                            <p>Great choice! You're one step away from unlocking your potential.</p>
                        </div>

                        <div className="comparison-grid">
                            <div className="plan-features-list">
                                <h4>✅ What's Included:</h4>
                                <ul>
                                    {selectedPlan.features.map((feat, i) => (
                                        <li key={i} className="included"><FaCheckCircle className="check-icon" /> {feat}</li>
                                    ))}
                                </ul>
                            </div>

                            {selectedPlan.locked.length > 0 && (
                                <div className="upgrade-nudge">
                                    <h4>🔒 Locked Features</h4>
                                    <p>These features are available in higher tiers.</p>
                                    <ul className="plan-features-list">
                                        {selectedPlan.locked.map((feat, i) => (
                                            <li key={i}><FaLock className="lock-icon" /> {feat}</li>
                                        ))}
                                    </ul>
                                    <button className="btn-secondary sm" style={{ marginTop: '1rem' }}>Compare All Plans</button>
                                </div>
                            )}
                        </div>

                        <div className="order-summary" style={{ textAlign: 'center', background: 'transparent', border: 'none', padding: 0 }}>
                            <div className="billing-toggle" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                                <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                                <label className="switch">
                                    <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                                    <span className="slider round"></span>
                                </label>
                                <span className={isAnnual ? 'active' : ''}>Annually (Save 2 Months)</span>
                            </div>
                            <h3>To Pay: <span style={{ color: 'var(--primary)', fontSize: '2rem' }}>${price}</span> <span style={{ fontSize: '1rem', color: '#64748b' }}>/{isAnnual ? 'year' : 'month'}</span></h3>
                        </div>

                        <div className="step-actions">
                            <button className="btn-back-main" onClick={() => navigate(-1)}>
                                <FaArrowLeft /> Back
                            </button>
                            <button className="btn-primary" onClick={() => setStep(2)}>Proceed to Billing <FaArrowRight /></button>
                        </div>
                    </div>
                )}

                {/* Step 2: Billing */}
                {step === 2 && (
                    <div className="checkout-card fade-in">
                        <div className="plan-header">
                            <h2>Billing Details</h2>
                            <p>Complete your purchase securely.</p>
                        </div>

                        <form onSubmit={handlePayment}>
                            <div className="billing-form-grid">
                                <div className="form-section">
                                    <h3>Contact Information</h3>
                                    <div className="input-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="input-group">
                                        <label>Organization / Institute (Optional)</label>
                                        <input type="text" placeholder="Acme Academy" />
                                    </div>

                                    <h3 style={{ marginTop: '2rem' }}>Payment Method</h3>
                                    <div className="input-group">
                                        <label>Card Details</label>
                                        <div style={{ border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8fafc' }}>
                                            <FaCreditCard size={24} color="#64748b" />
                                            <input type="text" placeholder="Card Number" style={{ border: 'none', background: 'transparent', padding: 0 }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="order-summary">
                                    <h3>Order Summary</h3>
                                    <div className="summary-row">
                                        <span>{selectedPlan.name} ({isAnnual ? 'Yearly' : 'Monthly'})</span>
                                        <span>${price}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span>Tax (18% GST)</span>
                                        <span>${tax}</span>
                                    </div>
                                    <div className="summary-row total">
                                        <span>Total Payable</span>
                                        <span>${total}</span>
                                    </div>
                                    <button type="submit" className="btn-primary full-width" style={{ marginTop: '1.5rem' }}>
                                        Pay ${total}
                                    </button>
                                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center', marginTop: '1rem' }}>
                                        Secure Payment via Stripe/Razorpay
                                    </p>
                                </div>
                            </div>
                        </form>

                        <div className="step-actions" style={{ justifyContent: 'flex-start' }}>
                            <button className="btn-back-main" onClick={() => setStep(1)}>
                                <FaArrowLeft /> Back
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                    <div className="checkout-card fade-in success-content">
                        <FaCheckCircle className="success-icon" />
                        <h2>{selectedPlan.name} Activated!</h2>
                        <p>Thank you for your purchase. Your dashboard has been updated with new features.</p>

                        <div className="validity-box">
                            Validity: {new Date().toLocaleDateString()} to {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/courses" className="btn-primary">Go to Dashboard</Link>
                            <button className="btn-secondary">Download Invoice</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
