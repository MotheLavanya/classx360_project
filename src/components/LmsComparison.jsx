import React, { useState, useEffect, useRef } from 'react';
import './LmsComparison.css';
import {
    FaChalkboardTeacher, FaCalendarAlt, FaChartPie, FaComments,
    FaAward, FaGlobe, FaUserGraduate, FaBookOpen,
    FaClipboardList, FaEnvelope, FaChartBar, FaPrint,
    FaMoneyBillWave, FaFolderOpen, FaHourglassHalf, FaTimesCircle,
    FaChartLine, FaLock, FaShieldAlt, FaUsers, FaCheckCircle,
    FaTabletAlt, FaUserShield
} from 'react-icons/fa';
import { comparisonData } from './comparisonData';

const LmsComparison = () => {
    const sectionRef = useRef(null);
    const [chaosActive, setChaosActive] = useState(false);

    useEffect(() => {
        let fallTimeout;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start timer to trigger chaos after delay
                    fallTimeout = setTimeout(() => {
                        setChaosActive(true);
                    }, 2500);
                } else {
                    // Reset instantly when user scrolls away
                    if (fallTimeout) clearTimeout(fallTimeout);
                    setChaosActive(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            if (fallTimeout) clearTimeout(fallTimeout);
        };
    }, []);

    // Stable random offsets for the falling collection effect
    const [fallOffsets] = useState(() =>
        Array.from({ length: 15 }, () => ({
            x: (Math.random() - 0.5) * 280, // Spread within card
            y: Math.random() * 40            // Slight height variation in pile
        }))
    );

    // Mapping string names from data to actual Icon components with "real" brand colors
    const iconMap = {
        FaClipboardList: <FaClipboardList style={{ color: '#64748b' }} />,
        FaEnvelope: <FaEnvelope style={{ color: '#ef4444' }} />,
        FaChartBar: <FaChartBar style={{ color: '#f59e0b' }} />,
        FaPrint: <FaPrint style={{ color: '#334155' }} />,
        FaMoneyBillWave: <FaMoneyBillWave style={{ color: '#10b981' }} />,
        FaFolderOpen: <FaFolderOpen style={{ color: '#facc15' }} />,
        FaHourglassHalf: <FaHourglassHalf style={{ color: '#94a3b8' }} />,
        FaTimesCircle: <FaTimesCircle style={{ color: '#e11d48' }} />,
        FaChartLine: <FaChartLine style={{ color: '#f43f5e' }} />,
        FaCalendarAlt: <FaCalendarAlt style={{ color: '#0ea5e9' }} />,
        FaLock: <FaLock style={{ color: '#475569' }} />,
        FaChartPie: <FaChartPie style={{ color: '#8b5cf6' }} />,
        FaChalkboardTeacher: <FaChalkboardTeacher style={{ color: '#800000' }} />, // Brand Maroon
        FaAward: <FaAward style={{ color: '#fbbf24' }} />,
        FaComments: <FaComments style={{ color: '#22c55e' }} />,
        FaGlobe: <FaGlobe style={{ color: '#0ea5e9' }} />,
        FaShieldAlt: <FaShieldAlt style={{ color: '#10b981' }} />,
        FaUsers: <FaUsers style={{ color: '#f97316' }} />,
        FaUserGraduate: <FaUserGraduate style={{ color: '#8b5cf6' }} />,
        FaBookOpen: <FaBookOpen style={{ color: '#6366f1' }} />,
        FaTabletAlt: <FaTabletAlt style={{ color: '#4b5563' }} />,
        FaUserShield: <FaUserShield style={{ color: '#14b8a6' }} />
    };

    const withoutItems = comparisonData.without.items.map(item => ({
        icon: iconMap[item.icon],
        text: item.text
    }));
    const withItems = comparisonData.with.items.map(item => ({
        icon: iconMap[item.icon],
        text: item.text
    }));

    const distributeIcons = (items, counts) => {
        const groups = [];
        let start = 0;
        counts.forEach(count => {
            groups.push(items.slice(start, start + count));
            start += count;
        });
        return groups;
    };

    // Distribution: 5 on inner, 7 on outer for 12 items
    const orbitCountsWithout = [5, 7];
    const orbitCountsWith = [5, 7]; // Remains 12 items

    const withoutGroups = distributeIcons(withoutItems, orbitCountsWithout);
    const withGroups = distributeIcons(withItems, orbitCountsWith);

    return (
        <section className="lms-comparison reveal">
            <div className="container">
                <div className="comparison-grid">
                    {/* Without Card */}
                    <div
                        ref={sectionRef}
                        className={`comparison-box without-box reveal-left ${chaosActive ? 'chaos-active' : ''}`}
                    >
                        <h3 className="box-label">Without ClassX360</h3>
                        <div className="box-text-content">
                            <p className="box-desc">Disconnected tools and manual work lead to silos. <br /> <strong className="danger-text">You are losing efficiency!</strong></p>
                        </div>

                        <div className="box-visual-area">
                            <div className="embedded-orbits wobbly-mode">
                                {withoutGroups.map((group, gIdx) => (
                                    <div key={gIdx} className={`orbit-layer layer-${gIdx + 1}`}>
                                        <div className={`orbit-track group-${gIdx + 1}`}>
                                            {group.map((item, iIdx) => {
                                                const rotation = (360 / group.length) * iIdx;
                                                const radius = gIdx === 0 ? 100 : 160;
                                                const angleRad = (rotation - 90) * (Math.PI / 180);
                                                const lx = Math.round(radius * Math.cos(angleRad));
                                                const ly = Math.round(radius * Math.sin(angleRad));
                                                // Calculate consistent index for stability
                                                const flatIdx = gIdx * 3 + iIdx;

                                                return (
                                                    <div
                                                        key={iIdx}
                                                        className="orbit-slot"
                                                        style={{
                                                            '--lx': `${lx}px`,
                                                            '--ly': `${ly}px`,
                                                            '--fx': `${fallOffsets[flatIdx]?.x || 0}px`,
                                                            '--fy': `${fallOffsets[flatIdx]?.y || 40}px`
                                                        }}
                                                    >
                                                        <div className="orbital-icon">
                                                            {item.icon}
                                                            <span className="icon-label-popup">{item.text}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* With Card */}
                    <div className="comparison-box with-box reveal-right">
                        <h3 className="box-label white-text">With ClassX360</h3>
                        <div className="box-text-content">
                            <p className="box-desc white-text">Unified platform with real-time insights and automation. <br /> <strong className="success-text">You are acing your goals!</strong></p>
                        </div>

                        <div className="box-visual-area">
                            <div className="embedded-orbits">
                                {withGroups.map((group, gIdx) => (
                                    <div key={gIdx} className={`orbit-layer layer-${gIdx + 1}`}>
                                        <div className={`orbit-track group-${gIdx + 1}`}>
                                            {group.map((item, iIdx) => {
                                                const rotation = (360 / group.length) * iIdx;
                                                const radius = gIdx === 0 ? 100 : 160;
                                                const angleRad = (rotation - 90) * (Math.PI / 180);
                                                const lx = Math.round(radius * Math.cos(angleRad));
                                                const ly = Math.round(radius * Math.sin(angleRad));

                                                return (
                                                    <div
                                                        key={iIdx}
                                                        className="orbit-slot"
                                                        style={{
                                                            '--lx': `${lx}px`,
                                                            '--ly': `${ly}px`
                                                        }}
                                                    >
                                                        <div className="orbital-icon light">
                                                            {item.icon}
                                                            <span className="icon-label-popup">{item.text}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                                {/* Central Logo from Image */}
                                <div className="central-logo-box">
                                    <div className="logo-square">
                                        <span className="logo-symbol">Classx360</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LmsComparison;
