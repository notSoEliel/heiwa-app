import React, { useState, useEffect } from 'react';

const ScrollToTopButton = ({ threshold = 300, color = '#BB002D', backgroundColor = '#F7F8FA' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor,
                    color,
                    border: 'solid 2px rgba(0, 0, 0, 0.1)',
                    outline: 'none',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                }}
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTopButton;
