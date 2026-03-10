import React, { useState, useEffect, useRef } from 'react';
import {
    FaPrint, FaEnvelope, FaFolderOpen, FaMoneyBillWave,
    FaHourglassHalf, FaTimesCircle, FaChartPie, FaLock,
    FaClipboardList, FaUsers, FaCalendarAlt, FaChartBar
} from 'react-icons/fa';
import './WithoutOrbitAnimation.css';

const WithoutOrbitAnimation = () => {
    const containerRef = useRef(null);
    const [phase, setPhase] = useState('smooth');
    const [waviness, setWaviness] = useState(0);

    const innerItems = [
        { label: "Manual Tasks", icon: <FaPrint style={{ color: '#334155' }} /> },
        { label: "Siloed Systems", icon: <FaEnvelope style={{ color: '#ef4444' }} /> },
        { label: "Fragmented Data", icon: <FaFolderOpen style={{ color: '#facc15' }} /> },
        { label: "Fee Leaks", icon: <FaMoneyBillWave style={{ color: '#10b981' }} /> },
        { label: "Process Delays", icon: <FaHourglassHalf style={{ color: '#94a3b8' }} /> }
    ];

    const outerItems = [
        { label: "Human Errors", icon: <FaTimesCircle style={{ color: '#e11d48' }} /> },
        { label: "Blind Spots", icon: <FaChartPie style={{ color: '#8b5cf6' }} /> },
        { label: "Security Risks", icon: <FaLock style={{ color: '#475569' }} /> },
        { label: "Paper Records", icon: <FaClipboardList style={{ color: '#64748b' }} /> },
        { label: "Staff Burnout", icon: <FaUsers style={{ color: '#f97316' }} /> },
        { label: "Scheduling Gaps", icon: <FaCalendarAlt style={{ color: '#0ea5e9' }} /> },
        { label: "Wrong Reports", icon: <FaChartBar style={{ color: '#f59e0b' }} /> }
    ];

    useEffect(() => {
        let timer;
        let isVisible = false;

        const startCycle = () => {
            if (!isVisible) return;
            setPhase('smooth');
            setWaviness(0);

            timer = setTimeout(() => {
                if (!isVisible) return;
                setPhase('wavy');
                let start = Date.now();
                const morphDuration = 1000;
                const animateMorph = () => {
                    let elapsed = Date.now() - start;
                    let progress = Math.min(elapsed / morphDuration, 1);
                    setWaviness(progress);
                    if (progress < 1 && isVisible) requestAnimationFrame(animateMorph);
                };
                requestAnimationFrame(animateMorph);

                timer = setTimeout(() => {
                    if (!isVisible) return;
                    setPhase('falling');
                }, 1500);
            }, 800);
        };

        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible) {
                startCycle();
            } else {
                clearTimeout(timer);
                // First: set 'resetting' to disable transitions (instant snap)
                setPhase('resetting');
                setWaviness(0);
                // Then: after one paint cycle, switch to 'smooth' (clean state)
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setPhase('smooth');
                    });
                });
            }
        }, { threshold: 0.1 });

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            clearTimeout(timer);
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    const getDistortion = (angle, factor) => {
        return (
            Math.sin(angle * 2.8) * 25 +
            Math.cos(angle * 4.3) * 18 +
            Math.sin(angle * 8.9) * 12
        ) * factor;
    };

    const generateOrganicPath = (cx, cy, baseRadius, factor) => {
        let path = "";
        const segments = 120;
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const r = baseRadius + getDistortion(angle, factor);
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            path += (i === 0 ? "M " : " L ") + `${x.toFixed(1)} ${y.toFixed(1)}`;
        }
        return path + " Z";
    };

    const renderIcons = (items, baseRadius, cx, cy) => {
        return items.map((item, index) => {
            const angle = (index / items.length) * Math.PI * 2;
            const r = baseRadius + getDistortion(angle, waviness);
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);

            return (
                <g key={index}
                    className={`orbital-item ${phase === 'falling' ? 'collapse' : ''} ${phase === 'resetting' ? 'resetting' : ''}`}
                    style={{
                        '--sy': `${y}px`,
                        '--fy': `${(index % 3) * 15}px`,
                        transitionDelay: phase === 'falling' ? `${index * 0.05}s` : '0s'
                    }}
                >
                    <foreignObject x={x - 60} y={y - 60} width="120" height="150" style={{ overflow: 'visible' }}>
                        <div className="orbital-icon-wrapper" style={{ margin: '0 auto' }}>
                            {item.icon}
                            <div className="orbital-label-popup">
                                {item.label}
                            </div>
                        </div>
                    </foreignObject>
                </g>
            );
        });
    };

    return (
        <div className={`standalone-orbit-container phase-${phase}`} ref={containerRef}>
            <svg className="wobbly-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                {/* Inner Orbit */}
                <path
                    d={generateOrganicPath(400, 400, 250, waviness)}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="7.5"
                    className={`orbit-line ${phase === 'falling' ? 'collapse' : ''}`}
                />
                {renderIcons(innerItems, 250, 400, 400)}

                {/* Outer Orbit */}
                <path
                    d={generateOrganicPath(400, 400, 400, waviness)}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="7.5"
                    className={`orbit-line ${phase === 'falling' ? 'collapse' : ''}`}
                />
                {renderIcons(outerItems, 400, 400, 400)}
            </svg>
        </div>
    );
};

export default WithoutOrbitAnimation;
