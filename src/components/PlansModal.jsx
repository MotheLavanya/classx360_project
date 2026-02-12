import React from 'react';
import { Link } from 'react-router-dom';
import './PlansModal.css';

const PlansModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const plans = [
        {
            id: 'basic',
            name: "Basic Plan",
            price: "$29",
            period: "month",
            desc: "Perfect for beginners starting their learning journey.",
            features: ["50+ Basic Courses", "Community Forum Access", "Standard Certificates", "Mobile App Access"]
        },
        {
            id: 'premium',
            name: "Premium Plan",
            price: "$79",
            period: "month",
            desc: "The professional choice for active career seekers.",
            isPopular: true,
            features: ["All Basic Courses", "Advanced Labs & Projects", "Mentor Support (Email)", "Premium Certificates"]
        },
        {
            id: 'vip',
            name: "VIP Plan",
            price: "$199",
            period: "month",
            desc: "Elite access for dedicated learners and masters.",
            features: ["Everything in Premium", "Unlimited 1-on-1 Sessions", "Exclusive Workshops", "Early Access to New Courses"]
        }
    ];

    return (
        <div className="plans-modal-overlay" onClick={onClose}>
            <div className="plans-modal" onClick={(e) => e.stopPropagation()}>
                <button className="plans-modal-close" onClick={onClose}>&times;</button>

                <div className="plans-modal-header">
                    <h2>Choose Your Membership</h2>
                    <p>Unlock the full potential of ClassX 360 with the plan that suits you best.</p>
                </div>

                <div className="plans-modal-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`modal-plan-card ${plan.isPopular ? 'highlight' : ''}`}>
                            {plan.isPopular && <div className="pop-badge">MOST POPULAR</div>}

                            <div className="mp-header">
                                <h3>{plan.name}</h3>
                                <div className="mp-price">{plan.price}<span>/{plan.period}</span></div>
                            </div>

                            <p className="mp-desc">{plan.desc}</p>

                            <ul className="mp-features">
                                {plan.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>

                            <Link
                                to={`/checkout/${plan.id}`}
                                className={`btn-${plan.isPopular ? 'primary' : 'secondary'} full-width`}
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    fontWeight: '600'
                                }}
                                onClick={onClose}
                            >
                                Select {plan.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlansModal;
