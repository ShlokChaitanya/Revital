import '../Styles/Components/NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, lazy, Suspense } from 'react';

function DiscordButton() {
    return (
        <Link to="https://discord.gg/VcP6kaGGCB" className="btn btn-primary has-before has-after" target="_blank" rel="noopener noreferrer" >Join Discord!</Link>
    );
}

const LazyDiscordButton = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve({ default: DiscordButton }) }, 100);
    });
});

function NavBar() {
    const [isNavActive, setNavActive] = useState(false);
    const toggleNavbar = () => { setNavActive(!isNavActive) };
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 45) {
                    header.classList.add('active');
                } else {
                    header.classList.remove('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">Revital, 2024.</Link>
                <nav className={`navbar  ${isNavActive ? 'active' : ''}`}>
                    <div className="wrapper">
                        <Link to="/" className="logo">Revital, 2024.</Link>
                        <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <ul className="navbar-list">
                        {['Home', 'Features', 'FAQs', 'Testimonials', 'Projects'].map((item, index) => (
                            <li className="navbar-item" key={index} onClick={() => { setNavActive(false) }}>
                                <Link to={`/?scrollTo=${item}`} className="navbar-link" data-nav-link>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="nav-open-btn" aria-label="open menu">
                    <FontAwesomeIcon icon={faBars} onClick={toggleNavbar} />
                </button>
                <Suspense fallback={null}>
                    <LazyDiscordButton />
                </Suspense>
                <div className={`overlay ${isNavActive ? 'active' : ''}`} onClick={toggleNavbar}></div>
            </div>
        </header>
    )
}

export default NavBar;
