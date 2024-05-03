import React from 'react'
import '../Styles/Sections/Hero.css'
import Image from '../Assets/Images/hero-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Hero() {
    return (
        <section className="section hero" id="home" aria-label="hero">
            <div className="container">
                {((window.innerWidth) < 1000) && <figure className="hero-banner">
                    <img src={Image} width="794" height="637" alt="hero banner" className="w-100" />
                </figure>}
                <div className="hero-content">
                    <h1 className="h1 hero-title">
                        Building Digital <span className="has-before">Product</span>, Brand and Experience
                    </h1>

                    <p className="hero-text">
                        At Ignite Vortex we specialize in designing, building, shipping and scaling beautiful, usable products with
                        blazing-fast
                        efficiency
                    </p>

                    <div className="wrapper">
                        <a href="#" className="btn btn-primary has-before has-after">How It Works</a>
                        <button className="hero-btn" aria-label="Ignite Vortex promo">
                            <FontAwesomeIcon icon={faPlay} />
                            <span className="span">Behind the scenes</span>
                        </button>
                    </div>

                    <ul className="social-list">
                        <li>
                            <a href="#" className="social-link" style={{ color: "hsl(241, 77%, 63%)" }}>
                                <FontAwesomeIcon icon={faSquareFacebook} />
                                <span className="span">Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link" style={{ color: "hsl(0, 100%, 50%)" }}>
                                <FontAwesomeIcon icon={faYoutube} />
                                <span className="span">Youtube</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link" style={{ color: "hsl(203, 89%, 53%)" }}>
                                <FontAwesomeIcon icon={faTwitter} />
                                <span className="span">Twitter</span>
                            </a>
                        </li>

                    </ul>

                </div>

                {(window.innerWidth > 1000) && <figure className="hero-banner">
                    <img src={Image} width="794" height="637" alt="hero banner" className="w-100" />
                </figure>}

            </div>
        </section>
    )
}

export default Hero