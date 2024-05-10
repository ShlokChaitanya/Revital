import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sections/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Spline = lazy(() => import('@splinetool/react-spline'));

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function Humo({ height }) {
    return (
        <Spline
            style={{ height: `${height}px`, width: '100vw' }}
            scene="https://prod.spline.design/GP9iZQd3aRmeQ8Sm/scene.splinecode"
        />
    );
}

function Hero() {
    const heroRef = useRef(null);
    const [heroHeight, setHeroHeight] = useState(0);

    useEffect(() => {
        const handleResize = debounce(() => {
            if (heroRef.current) {
                setHeroHeight(heroRef.current.clientHeight);
            }
        }, 250);

        handleResize(); // Set initial height
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section ref={heroRef} className="section hero" id="Home" aria-label="hero">
            <div className="container">
                <figure className="hero-banner">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Humo height={heroHeight} />
                    </Suspense>
                </figure>
                <div className="hero-content">
                    <h1 className="h1 hero-title">
                        Welcome to <span className="has-before">Revital</span>, where Quality meets Tech.
                    </h1>
                    <p className="hero-text">
                        Team Revital is backed up by the students of Class XI - A (PCM), hailing from St. Joseph's School, Greater Noida. This page is the finest display of their skills and creativity.
                    </p>
                    <div className="wrapper">
                        <Link to="?scrollTo=Blogs" className="btn btn-primary has-before has-after">
                            Way to Blogs
                        </Link>
                        <button className="hero-btn" aria-label="Ignite Vortex promo">
                            <FontAwesomeIcon icon={faPlay} />
                            <span className="span">AI Workspace (soon)</span>
                        </button>
                    </div>
                    <ul className="social-list">
                        {[{ icon: faInstagram, color: "hsl(241, 77%, 63%)", text: "Arnav", link: "arnxvfr" },
                        { icon: faInstagram, color: "hsl(0, 100%, 50%)", text: "Shlok", link: "shlokchaitanya" },
                        { icon: faInstagram, color: "hsl(203, 89%, 53%)", text: "Dhruvansh", link: "justdhruvv._" }
                        ].map((item, index) => (
                            <li key={index}>
                                <a href={"https://instagram.com/" + item.link} className="social-link" style={{ color: item.color }} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span className="span">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {window.innerWidth > 1000 && (
                    <figure className="hero-banner">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Humo />
                        </Suspense>
                    </figure>
                )}
            </div>
        </section>
    );
}

export default Hero;