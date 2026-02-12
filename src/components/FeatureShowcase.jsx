import React, { useEffect, useRef, useState } from 'react';
import {
    FaVideo, FaUserShield, FaUsers, FaClipboardCheck,
    FaCalendarCheck, FaDollarSign, FaBell, FaChartLine,
    FaMobileAlt, FaRobot
} from 'react-icons/fa';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
    const features = [
        {
            name: "Courses (Live & On-Demand)",
            icon: <FaVideo />,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
            description: "Comprehensive course management system enabling institutions to create, organize, and deliver both live and pre-recorded educational content. Features include interactive lesson builders with rich multimedia support (video, audio, documents, presentations), real-time student progress tracking, automated assessments with instant grading, discussion forums for peer collaboration, assignment submission portals, digital certification upon completion, and detailed analytics on course engagement and completion rates. Supports multiple content formats, drip content scheduling, and seamless integration with video conferencing platforms for live sessions."
        },
        {
            name: "User & Role Management",
            icon: <FaUserShield />,
            image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=250&fit=crop",
            description: "Enterprise-grade security infrastructure with granular role-based access control (RBAC) ensuring data privacy and regulatory compliance. Provides dedicated, customizable dashboards and permission sets for administrators, instructors, students, parents, and support staff. Features include multi-factor authentication (MFA), single sign-on (SSO) integration, audit trails for all user actions, customizable user hierarchies, department-level access controls, bulk user management, automated user provisioning and de-provisioning, password policies, session management, and comprehensive activity logging for security monitoring and compliance reporting."
        },
        {
            name: "Student & Batch Management",
            icon: <FaUsers />,
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
            description: "Centralized student information system (SIS) for managing comprehensive student profiles including personal information, academic records, attendance history, performance metrics, and mentor relationships. Streamlines enrollment processes with online registration, document verification, and automated batch assignments. Enables efficient cohort management across multiple programs with flexible batch creation, student transfers, batch scheduling, capacity management, and waitlist handling. Includes parent portal access, emergency contact management, student ID generation, transcript management, and integration with academic performance tracking for holistic student lifecycle management."
        },
        {
            name: "Exams & Assessments",
            icon: <FaClipboardCheck />,
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
            description: "Robust examination platform supporting both online and offline assessment modes with comprehensive question bank management, multiple question types (MCQ, true/false, short answer, essay, coding challenges), automated grading with instant feedback, plagiarism detection using AI algorithms, performance analytics with item analysis, customizable rubrics for subjective assessments, randomized question papers, time-bound assessments with proctoring support, detailed student performance reports with strengths and weaknesses analysis, grade books, weighted scoring, curve grading options, and exportable result sheets for institutional records and accreditation purposes."
        },
        {
            name: "Attendance Management",
            icon: <FaCalendarCheck />,
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
            description: "Digital attendance tracking system with support for multiple marking methods including biometric integration (fingerprint, facial recognition), QR code scanning, RFID cards, geofencing for location-based attendance, and manual entry options. Provides real-time attendance monitoring dashboards, automated absence alerts to parents and administrators via SMS/email, comprehensive attendance reports with trends and patterns, integration with academic performance metrics to identify at-risk students, leave management system, attendance percentage calculations, customizable attendance policies, late arrival tracking, and bulk attendance marking for efficient classroom management across all programs and batches."
        },
        {
            name: "Fee & Finance Management",
            icon: <FaDollarSign />,
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
            description: "Complete financial management solution with automated fee structure configuration supporting multiple fee categories, discounts, scholarships, and concessions. Integrated online payment gateway supporting credit/debit cards, net banking, UPI, and digital wallets with secure PCI-DSS compliant transactions. Features include flexible installment planning with automated reminders, instant digital receipt generation, comprehensive dues tracking with aging reports, refund processing workflows, late fee calculations, payment reconciliation, multi-currency support, financial reporting for institutional accounting and auditing, expense management, budget tracking, and detailed financial analytics for revenue forecasting and cash flow management."
        },
        {
            name: "Communication & Notifications",
            icon: <FaBell />,
            image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
            description: "Multi-channel communication platform delivering automated and manual notifications via SMS, email, push notifications, and in-app messaging. Supports targeted messaging with advanced segmentation for attendance alerts, exam schedules, fee reminders, grade updates, announcements, event notifications, and emergency communications. Features include customizable message templates, scheduled messaging, bulk communication tools, delivery tracking and read receipts, two-way communication channels, parent-teacher messaging, broadcast announcements, notification preferences management, communication history logs, and integration with external communication providers for reliable message delivery across all stakeholder groups."
        },
        {
            name: "Advanced Reports & Analytics",
            icon: <FaChartLine />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            description: "Business intelligence platform with real-time interactive dashboards and customizable reports covering academic performance, student engagement metrics, financial analytics, attendance trends, enrollment statistics, and operational efficiency indicators. Features include advanced data visualization with charts, graphs, and heat maps, predictive analytics using machine learning for student success forecasting, cohort analysis, comparative performance reports, trend identification, KPI tracking, automated report scheduling and distribution, drill-down capabilities for detailed analysis, exportable reports in multiple formats (PDF, Excel, CSV), role-based report access, and comprehensive data insights for evidence-based decision making and strategic planning."
        },
        {
            name: "Mobile & Cloud Access",
            icon: <FaMobileAlt />,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
            description: "Cloud-native architecture ensuring 24/7 accessibility from any device with internet connectivity, eliminating infrastructure maintenance overhead. Responsive mobile interfaces optimized for smartphones and tablets with native app-like experience, offline capability for critical functions with automatic data synchronization when connectivity is restored, progressive web app (PWA) support, cross-platform compatibility (iOS, Android, Windows, macOS), automatic software updates, scalable infrastructure to handle growing user base, enterprise-grade security with encrypted data transmission (SSL/TLS), regular automated backups, disaster recovery mechanisms, 99.9% uptime SLA, and global content delivery network (CDN) for fast loading times worldwide."
        },
        {
            name: "AI Automation & Personalization",
            icon: <FaRobot />,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            description: "Artificial intelligence-powered features including smart workflow automation for routine administrative tasks, predictive student performance analytics identifying at-risk students early, personalized learning path recommendations based on individual learning styles and pace, intelligent content suggestions tailored to student interests and skill gaps, automated administrative task handling (scheduling, reminders, report generation), adaptive assessment difficulty that adjusts based on individual student capabilities, natural language processing for automated query responses, chatbot support for instant assistance, smart scheduling optimization, automated grading for subjective answers, sentiment analysis for student feedback, and machine learning algorithms that continuously improve system recommendations and insights for enhanced educational outcomes."
        }
    ];

    const [offsetY, setOffsetY] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();

                // Only animate when section is in view or close to it
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    // This creates a "fixed" feel by countering the scroll, 
                    // but with a slight multiplier (0.15) for the parallax effect.
                    setOffsetY(-rect.top * 0.15);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className="feature-showcase reveal"
            id="features"
            ref={sectionRef}
        >
            {/* Parallax Background Layer */}
            <div
                className="parallax-bg"
                style={{ transform: `translateY(${offsetY}px)` }}
            ></div>

            {/* Animated particles with Parallax */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>

            <div className="container">
                <div className="feature-left">
                    <h2>Powerful Features Built for Modern Institutions</h2>
                    <p>
                        A comprehensive suite of tools to manage learning, automate operations, and scale
                        institutional growth—securely and efficiently from a single platform. ClassX360 unifies
                        academics, administration, communication, and analytics to help institutions operate
                        smarter and grow faster.
                    </p>
                </div>

                <div className="feature-grid-wrapper">
                    <div className="feature-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item reveal-item">
                                <div className="feature-front">
                                    <span className="feature-icon">{feature.icon}</span>
                                    <h4 className="feature-header">{feature.name}</h4>
                                </div>
                                <div className="feature-back">
                                    <div className="feature-image" style={{ backgroundImage: `url(${feature.image})` }}></div>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
