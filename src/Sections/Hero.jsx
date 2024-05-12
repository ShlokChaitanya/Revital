import '../Styles/Sections/Hero.css';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const socialData = [
    { icon: faInstagram, color: "hsl(241, 77%, 63%)", text: "Arnav", link: "arnxvfr" },
    { icon: faInstagram, color: "hsl(0, 100%, 50%)", text: "Shlok", link: "shlokchaitanya" },
    { icon: faInstagram, color: "hsl(203, 89%, 53%)", text: "Dhruvansh", link: "justdhruvv._" }
];

function renderSocialLinks(item, index) {
    return (
        <li key={index}>
            <a href={`https://instagram.com/${item.link}`} className="social-link" style={{ color: item.color }} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.icon} />
                <span className="span">{item.text}</span>
            </a>
        </li>
    );
}

function Hero() {
    return (
        <section className="section hero" id="Home" aria-label="hero">
            <div className="container">
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
                    <ul className="social-list">{socialData.map(renderSocialLinks)}</ul>
                </div>
                {window.innerWidth > 1000 && (
                    <figure className="hero-banner">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Spline style={{ width: "100%", height: "100%" }} scene="https://draft.spline.design/QV2eibt-ksIDPH0w/scene.splinecode" />
                        </Suspense>
                    </figure>
                )}
            </div>
        </section>
    );
}

export default Hero;