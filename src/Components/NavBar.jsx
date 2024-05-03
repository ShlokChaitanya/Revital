import React, { useEffect, useState } from 'react';
import '../Styles/Components/NavBar.css'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [isNavActive, setNavActive] = useState(false);
    const location = useLocation();
    const toggleNavbar = () => {
        setNavActive(!isNavActive);
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 45) {
                document.querySelector('.header').classList.add('active');
            } else {
                document.querySelector('.header').classList.remove('active');
            }
        });
    }, []);
    return (
        <header className={`header`}>
            <div className="container">
                <Link to="/" className="logo">Ignite Vortex</Link>
                <nav className={`navbar  ${isNavActive ? 'active' : ''}`}>
                    <div className="wrapper">
                        <Link to="/" className="logo">Ignite Vortex</Link>
                        <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item" onClick={() => {setNavActive(false)}}>
                            <Link to="/?scrollTo=home" className="navbar-link" data-nav-link>Home</Link>
                        </li>
                        <li className="navbar-item" onClick={() => {setNavActive(false)}}>
                            <Link to="/?scrollTo=service" className="navbar-link" data-nav-link>Services</Link>
                        </li>
                        <li className="navbar-item" onClick={() => {setNavActive(false)}}>
                            <Link to="/?scrollTo=feature" className="navbar-link" data-nav-link>Features</Link>
                        </li>
                        <li className="navbar-item" onClick={() => {setNavActive(false)}}>
                            <Link to="/?scrollTo=project" className="navbar-link" data-nav-link>Projects</Link>
                        </li>
                        <li className="navbar-item" onClick={() => {setNavActive(false)}}>
                            <Link to="/?scrollTo=blog" className="navbar-link" data-nav-link>Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <button className="nav-open-btn" aria-label="open menu">
                    <FontAwesomeIcon icon={faBars} onClick={toggleNavbar} />
                </button>
                <Link to="/ContactUs" className="btn btn-primary has-before has-after">Let’s Talk 👋</Link>
                <div className={`overlay ${isNavActive ? 'active' : ''}`} onClick={toggleNavbar}></div>
            </div>
        </header>
    )
}

export default NavBar