import React from 'react';
import { FaSchool, FaBookOpen, FaComments, FaChartLine } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = ({ onGetDemo }) => {
    const steps = [
        {
            number: "01",
            title: "Set Up Your Institution",
            desc: "Configure your institute profile, academic structure, courses, batches, and roles seamlessly.",
            icon: <FaSchool />
        },
        {
            number: "02",
            title: "Manage Operations",
            desc: "Handle student enrollment, attendance, exams, fees, and daily activities with ease.",
            icon: <FaBookOpen />
        },
        {
            number: "03",
            title: "Communicate & Engage",
            desc: "Share materials, send automated notifications, and keep everyone connected.",
            icon: <FaComments />
        },
        {
            number: "04",
            title: "Track Growth",
            desc: "Monitor student progress and institutional metrics using real-time analytics.",
            icon: <FaChartLine />
        }
    ];

    return (
        <section className="how-it-works-v2 reveal">
            <div className="container">
                <div className="section-header">
                    {/* <span className="sub-title">Workflow</span> */}
                    <h2>How <span className="blue-text">ClassX360</span> Works</h2>
                    <p>A simple 4-step workflow for smart institution management</p>
                </div>

                <div className="steps-wrapper">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-icon-box">
                                <div className="icon-main">{step.icon}</div>
                                <div className="step-number">{step.number}</div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {/* Intro Connector for Step 1 - Start form Down Outside */}
                            {index === 0 && (
                                <div className="step-connector intro-connector">
                                    <svg viewBox="0 0 100 250" preserveAspectRatio="none">
                                        <path d="M-50,250 Q0,250 50,125" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                            )}

                            {/* Connectors between steps - Alternating Arch/Valley */}
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg viewBox="0 0 100 250" preserveAspectRatio="none">
                                        <path
                                            d={index % 2 === 0
                                                ? "M0,125 Q50,-25 100,125"   /* Even: Arch Up */
                                                : "M0,125 Q50,275 100,125"   /* Odd: Valley Down */
                                            }
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>
                                </div>
                            )}

                            {/* Outro Connector for Step 4 - End Top */}
                            {index === steps.length - 1 && (
                                <div className="step-connector outro-connector">
                                    <svg viewBox="0 0 100 250" preserveAspectRatio="none">
                                        <path d="M0,125 Q50,0 100,-100" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="how-cta">
                    <button className="btn-primary" onClick={onGetDemo}>Request a Demo</button>
                    <p>Start your transformation today</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
