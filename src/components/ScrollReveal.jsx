import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Observer options
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // We don't unobserve here so it can re-trigger if needed, 
                    // or we can unobserve for performance if it's "animate once"
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Find all elements with reveal classes
        const revealElements = document.querySelectorAll('.reveal, [class*="reveal-"]');

        // Reset previously active elements if we want them to re-animate on revisit
        // revealElements.forEach(el => el.classList.remove('active'));

        revealElements.forEach((el) => observer.observe(el));

        // Cleanup observer on route change or unmount
        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, [pathname]); // Re-run whenever the path changes

    return null;
};

export default ScrollReveal;
