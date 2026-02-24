import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();
    const { pathname, hash } = location;

    useEffect(() => {
        // If there's no hash, jump to the top immediately on path change
        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } else {
            // If there's a hash, wait slightly for the render then scroll to element
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
