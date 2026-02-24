import React, { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import './FAQs.css';

const faqsData = [
    {
        question: "What is ClassX 360?",
        answer: "ClassX 360 is a comprehensive, all-in-one integrated management ecosystem designed for educational institutions. It simplifies administration, enhances learning outcomes, and connects administrators, teachers, students, and parents on a single platform."
    },
    {
        question: "Who is ClassX 360 for?",
        answer: "Our platform is built for preschools, schools, colleges, and coaching centers of all sizes looking to digitize their operations and provide a modern learning experience."
    },
    {
        question: "Is my data secure with ClassX 360?",
        answer: "Yes, security is our top priority. We use enterprise-grade encryption and secure cloud infrastructure to ensure that institutional, teacher, and student data is always protected and compliant with privacy standards."
    },
    {
        question: "Can I customize the platform for my institution?",
        answer: "Absolutely. ClassX 360 is designed to be flexible. You can choose the modules that fit your needs and configure settings to match your institution's specific workflows and branding."
    },
    {
        question: "Does ClassX 360 offer support and training?",
        answer: "Yes, we provide dedicated 24/7 support and comprehensive onboarding training for your staff to ensure a smooth transition and successful implementation of the platform."
    },
    {
        question: "How do I get a demo of the platform?",
        answer: "You can book a live demo by clicking any of the 'Get Started' or 'Contact Us' buttons throughout our website. Our team will reach out to schedule a personalized walkthrough for you."
    },
    {
        question: "Does ClassX 360 integrate with existing biometric devices?",
        answer: "Yes, ClassX 360 supports integration with various biometric attendance systems, allowing for automated and real-time attendance tracking."
    },
    {
        question: "Can I access ClassX 360 from my mobile phone?",
        answer: "Absolutely. ClassX 360 is fully responsive and can be accessed on any device. We also provide dedicated mobile apps for administrators, teachers, and parents."
    },
    {
        question: "How long does it take to implement ClassX 360?",
        answer: "Implementation typically takes between 1-2 weeks, depending on the size of your institution and the level of data migration required. Our team handles the entire process for you."
    },
    {
        question: "Is there a limit on the number of students or teachers?",
        answer: "No, our platform is built to scale. Whether you have 100 students or 10,000, ClassX 360 can handle your institution's growth without any performance issues."
    },
    {
        question: "How does the fee management system work?",
        answer: "Our fee module automates collection, generates receipts, and sends automated reminders to parents. It also integrates with secure payment gateways for online fee submission."
    },
    {
        question: "Can parents track their child's progress?",
        answer: "Yes, parents have a dedicated portal and mobile app where they can view real-time attendance, grades, assignments, and school announcements."
    },
    {
        question: "Does it support online exams?",
        answer: "Yes, ClassX 360 includes a robust online assessment module that supports various question formats, automated grading, and detailed performance analytics."
    },
    {
        question: "What is the process for data migration?",
        answer: "We provide a seamless onboarding process. Our team helps migrate your existing student and staff data from excels or other systems into ClassX 360 with 100% accuracy."
    },
    {
        question: "Can we use ClassX 360 offline?",
        answer: "While it is a cloud-based platform, our mobile apps support basic offline data entry which syncs once you are back online, ensuring continuity in areas with spotty internet."
    },
    {
        question: "Are there different user roles and permissions?",
        answer: "Yes, you can define unlimited roles (Admin, Teacher, Registrar, Parent, etc.) with granular control over what information each user can view or modify."
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split FAQs into two columns for independent expansion
    const leftColumn = faqsData.filter((_, i) => i % 2 === 0);
    const rightColumn = faqsData.filter((_, i) => i % 2 !== 0);

    const renderFaqItem = (faq, index, isRightColumn) => {
        // Calculate the actual index in faqsData for state management
        const actualIndex = isRightColumn ? index * 2 + 1 : index * 2;
        const isOpen = openIndex === actualIndex;

        return (
            <div
                key={actualIndex}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(actualIndex)}
            >
                <div className="faq-question">
                    <span className="q-icon"><FaQuestionCircle /></span>
                    <h3>{faq.question}</h3>
                    <span className="toggle-icon">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div className="faq-answer">
                    <div className="answer-inner">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="faqs-page">
            <header className="faqs-hero">
                <div className="container">
                    <span className="faqs-badge">Support Center</span>
                    <h1 className="faqs-title">Frequently Asked <span className="highlight-maroon">Questions</span></h1>
                    <p className="faqs-subtitle">
                        Find answers to common questions about ClassX 360 and how we help transform educational institutions.
                    </p>
                </div>
            </header>

            <section className="faqs-content">
                <div className="container narrow">
                    <div className="faqs-list">
                        <div className="faq-column">
                            {leftColumn.map((faq, i) => renderFaqItem(faq, i, false))}
                        </div>
                        <div className="faq-column">
                            {rightColumn.map((faq, i) => renderFaqItem(faq, i, true))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="faqs-cta">
                <div className="container">
                    <div className="cta-box glass-card">
                        <h2>Still have questions?</h2>
                        <p>We're here to help. Reach out to our support team for any further assistance.</p>
                        <a href="/contact" className="btn-contact-support">Contact Support</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
