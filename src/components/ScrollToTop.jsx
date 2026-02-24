import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();
    const { pathname, hash } = location;

    useEffect(() => {
        // Only scroll to top on PUSH navigation (clicking a link)
        // POP navigation (back/forward/refresh) should use browser's scroll restoration
        if (location.state?.fromExternal) return; // Optional check

        const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
        if (isReload) {
            // This is a reload, browser should handle restoration natively
            return;
        }

        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } else {
            // Wait a tiny bit for the page to render or for the hash link to work
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash, location.state]);

    return null;
};

export default ScrollToTop;
