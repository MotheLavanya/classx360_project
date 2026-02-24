import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa';
import './Pricing.css';

const Pricing = ({ onSignUp }) => {
    const navigate = useNavigate();
    const [isAnnual, setIsAnnual] = useState(true);
    const [activeFaq, setActiveFaq] = useState(0);

    const plans = [
        {
            name: "Free",
            price: "0",
            desc: "For personal use or very small tutoring groups.",
            features: ["Up to 10 Students", "Essential LMS Tools", "Basic Attendance", "Community Support", "Mobile Web Access"]
        },
        {
            name: "Starter",
            price: isAnnual ? "1,999" : "2,499",
            desc: "Perfect for independent tutors and small coaching centers.",
            features: ["Up to 50 Students", "Basic LMS Support", "Manual Fee Tracking", "Email Support", "Mobile App Access"]
        },
        {
            name: "Professional",
            price: isAnnual ? "4,999" : "5,999",
            desc: "Best for growing institutes with multiple batches.",
            popular: true,
            features: ["Up to 500 Students", "Automated Exams", "Fee Management + GST", "Priority Support", "Branded Mobile App"]
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "For large schools and multi-branch institutions.",
            features: ["Unlimited Students", "White-label Solution", "Custom Integrations", "Dedicated Manager", "Full Data Ownership"]
        }
    ];

    const faqs = [
        {
            q: "Is there a free trial?",
            a: "Yes! You can use our Free plan forever for small groups. You can also try any premium plan for 14 days without giving your credit card. This lets you see how all our professional features can help your institution before you decide."
        },
        {
            q: "Can I upgrade or downgrade?",
            a: "Absolutely. You can change your plan at any time from your dashboard. If you upgrade, the price will be adjusted fairly. If you move to a smaller plan, you will receive credit that applies to your next billing cycle."
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept all major credit/debit cards, UPI, Google Pay, and Net Banking. For large institutions on the Enterprise plan, we also support direct bank transfers and custom invoicing to match your accounting needs."
        },
        {
            q: "Are there any hidden charges?",
            a: "No, there are no hidden fees. The price you see is exactly what you pay. Standard government taxes like GST will be clearly shown at the checkout page so you always know the final cost."
        },
        {
            q: "What support is included?",
            a: "Every plan includes 24/7 email support from our technical team. If you choose the Professional or Enterprise plans, you also get priority phone support and a dedicated manager who will help you personally."
        },
        {
            q: "Is there any setup fee?",
            a: "No, we do not charge any setup fees. Our friendly onboarding team will help you set up your account and move your existing student data into ClassX360 completely free of charge."
        },
        {
            q: "Can I cancel my subscription?",
            a: "Yes, you have full control over your subscription. You can cancel at any time with a single click from your account settings. Your service will continue until the end of your current paid period."
        },
        {
            q: "Do you offer discounts for NGOs?",
            a: "Yes, we love supporting social causes! We offer special discounted pricing for registered non-profit schools and NGOs. Please contact our support team to get your special discount."
        },
        {
            q: "Is my data backed up?",
            a: "Yes, your data is very safe with us. We perform automated cloud backups every single day for all institutions. This ensures that your student records and school data are always protected and never lost."
        },
        {
            q: "Can I manage multiple branches?",
            a: "Yes! Our platform is built to handle multiple school branches easily. You can manage several locations from one central dashboard while seeing individual reports for each branch."
        }
    ];

    return (
        <div className="pricing-page">
            <button className="btn-back-main" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>
            <header className="pricing-header">
                <h1>Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your institutional needs. Scale as you grow.</p>
            </header>

            <div className="billing-toggle">
                <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                <label className="switch">
                    <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                    <span className="slider round"></span>
                </label>
                <span className={isAnnual ? 'active' : ''}>Annually <span className="discount-tag">Save 20%</span></span>
            </div>

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
                        {plan.popular && <div className="badge">MOST POPULAR</div>}
                        <h3>{plan.name}</h3>
                        <p className="plan-desc">{plan.desc}</p>
                        <div className="price">
                            {plan.price !== "Custom" && <span className="currency">₹</span>}
                            <span className="amount">{plan.price}</span>
                            {plan.price !== "Custom" && <span className="period">/{isAnnual ? 'yr' : 'mo'}</span>}
                        </div>
                        {isAnnual && plan.price !== "Custom" && <p className="billed-annually">Billed annually</p>}
                        <ul className="plan-features">
                            {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <Link to={`/checkout/${plan.name.split(' ')[0].toLowerCase()}`} className={`btn-${plan.popular ? 'primary' : 'secondary'} lg text-center no-decoration`} style={{ display: 'inline-block', lineHeight: '1.5', textDecoration: 'none' }}>
                            {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                        </Link>
                    </div>
                ))}
            </div>

            <section className="faq-split-section">
                <h2 className="faq-header-title">Frequently Asked Questions</h2>
                <div className="faq-split-container">
                    {/* Left Side: Questions List Wrapped in a Card */}
                    <div className="faq-questions-card">
                        <div className="faq-questions-list">
                            {faqs.map((faq, index) => (
                                <button
                                    key={index}
                                    className={`faq-question-btn ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(index)}
                                >
                                    <span className="question-text">{faq.q}</span>
                                    <span className="chevron-icon">
                                        <FaPlus />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Active Answer Wrapped in a Card */}
                    <div className="faq-answers-card">
                        <div className="faq-answer-display">
                            <div className="active-answer-content">
                                <h3>{faqs[activeFaq].q}</h3>
                                <div className="answer-divider"></div>
                                <p>{faqs[activeFaq].a}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
