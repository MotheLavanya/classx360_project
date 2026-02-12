import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Pricing.css';

const Pricing = ({ onSignUp }) => {
    const navigate = useNavigate();
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
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
        { q: "Is there a free trial?", a: "Yes! You can try any plan for 14 days with no credit card required." },
        { q: "Can I upgrade or downgrade?", a: "Absolutely. You can change your plan at any time through your dashboard." },
        { q: "What support is included?", a: "All plans include 24/7 technical support via email. Pro and Enterprise get priority phone support." }
    ];

    return (
        <div className="pricing-page">
            <button className="btn-back-main" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>
            <header className="pricing-header">
                <h1>Simple,Transparent Pricing</h1>
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

            <section className="faq-section">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h4>{faq.q}</h4>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Pricing;
