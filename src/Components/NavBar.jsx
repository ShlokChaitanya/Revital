import '../Styles/Components/NavBar.css'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <Link to="/" className="logo">Revital, 2024.</Link>
                <nav className={`navbar  ${isNavActive ? 'active' : ''}`}>
                    <div className="wrapper">
                        <Link to="/" className="logo">Revital, 2024.</Link>
                        <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <ul className="navbar-list">
                        {['Lorem', 'Lorem', 'Lorem', 'Lorem'].map((item, index) => {
                            return (
                                <li className="navbar-item" key={index} onClick={() => {setNavActive(false)}}>
                                    <Link to={`/?scrollTo=${item}`} className="navbar-link" data-nav-link>{item}</Link>
                                </li>
                            )
                        })}
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