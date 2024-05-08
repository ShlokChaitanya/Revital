import React from 'react'
import '../Styles/Sections/Hero.css'
import Spline from '@splinetool/react-spline';
import Image from '../Assets/Images/hero-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Humo() {
    return (
        <Spline style={{ height: 637, width: 794 }} scene="https://prod.spline.design/GP9iZQd3aRmeQ8Sm/scene.splinecode" />
    );
}


function Hero() {
    return (
        <section className="section hero" id="home" aria-label="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 hero-title">
                        Welcome to <span className="has-before">Revital</span>, where Quality meets Tech.
                    </h1>
                    <p className="hero-text">
                        Team Revital is backed up by the students of Class XI - A (PCM), hailing from St. Joseph's School, Greater Noida. This page is the finest display of their skills and creativity.
                    </p>

                    <div className="wrapper">
                        <a href="https://#" className="btn btn-primary has-before has-after">How It Works</a>
                        <button className="hero-btn" aria-label="Ignite Vortex promo">
                            <FontAwesomeIcon icon={faPlay} />
                            <span className="span">Behind the scenes</span>
                        </button>
                    </div>

                    <ul className="social-list">
                        { [{icon: faSquareFacebook, color: "hsl(241, 77%, 63%)", text: "Facebook"}, {icon: faYoutube, color: "hsl(0, 100%, 50%)", text: "Youtube"}, {icon: faTwitter, color: "hsl(203, 89%, 53%)", text: "Twitter"}].map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="#" className="social-link" style={{ color: item.color }}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span className="span">{item.text}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {(window.innerWidth > 1000) && <figure className="hero-banner"> <Humo /> </figure>}
            </div>
        </section>
    )
}

export default Hero