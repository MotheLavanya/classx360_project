import React, { useState, useEffect } from 'react';
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
    const [chaosActive, setChaosActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setChaosActive(prev => !prev);
        }, 2000); // Toggle every 2s as requested
        return () => clearInterval(interval);
    }, []);

    // Stable random offsets for the falling collection effect
    const [fallOffsets] = useState(() =>
        Array.from({ length: 15 }, () => ({
            x: (Math.random() - 0.5) * 280, // Spread within card
            y: Math.random() * 40            // Slight height variation in pile
        }))
    );

    // Mapping string names from data to actual Icon components
    const iconMap = {
        FaClipboardList: <FaClipboardList />,
        FaEnvelope: <FaEnvelope />,
        FaChartBar: <FaChartBar />,
        FaPrint: <FaPrint />,
        FaMoneyBillWave: <FaMoneyBillWave />,
        FaFolderOpen: <FaFolderOpen />,
        FaHourglassHalf: <FaHourglassHalf />,
        FaTimesCircle: <FaTimesCircle />,
        FaChartLine: <FaChartLine />,
        FaCalendarAlt: <FaCalendarAlt />,
        FaLock: <FaLock />,
        FaChartPie: <FaChartPie />,
        FaChalkboardTeacher: <FaChalkboardTeacher />,
        FaAward: <FaAward />,
        FaComments: <FaComments />,
        FaGlobe: <FaGlobe />,
        FaShieldAlt: <FaShieldAlt />,
        FaUsers: <FaUsers />,
        FaUserGraduate: <FaUserGraduate />,
        FaBookOpen: <FaBookOpen />,
        FaTabletAlt: <FaTabletAlt />,
        FaUserShield: <FaUserShield />
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
    const orbitCountsWith = [5, 7]; // Now matched with 12 items

    const withoutGroups = distributeIcons(withoutItems, orbitCountsWithout);
    const withGroups = distributeIcons(withItems, orbitCountsWith);

    return (
        <section className="lms-comparison reveal">
            <div className="container">
                <div className="comparison-grid">
                    {/* Without Card */}
                    <div className={`comparison-box without-box ${chaosActive ? 'chaos-active' : ''}`}>
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

                                                return (
                                                    <div
                                                        key={iIdx}
                                                        className="orbit-slot"
                                                        style={{
                                                            '--lx': `${lx}px`,
                                                            '--ly': `${ly}px`
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
                    <div className="comparison-box with-box">
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
