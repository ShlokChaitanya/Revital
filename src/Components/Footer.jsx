import React from 'react'
import '../Styles/Components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top section">
                    <div className="footer-brand">
                        <p className="footer-list-title">Revital 2024.</p>
                        <p className="footer-text">
                            This is the 2nd version of Team Revital. Initial version was released in December 2022.
                        </p>
                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon name="logo-youtube" icon={faYoutube} />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon name="logo-twitter" icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon name="logo-facebook" icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <FontAwesomeIcon name="logo-skype" icon={faSkype} />
                                </a>
                            </li>

                        </ul>

                    </div>
                    <div className="footer-brand">
                        <p className="footer-list-title">Address</p>
                        <p className="footer-text">
                            Greater Noida,<br />
                            UP.
                        </p>
                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Usefull Links</p>
                        </li>

                        <li>
                            <Link to="/ContactUs" className="footer-link">Contact us</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">How it Works</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Create</Link>
                        </li>

                        <li>
                            <Link to="/" className="footer-link">Explore</Link>
                        </li>

                        <li>
                            <Link to="/Terms&Services" className="footer-link">Terms & Services</Link>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Community</p>
                        </li>

                        <li>
                            <Link to="/ContactUs" className="footer-link">Help Center</Link>
                        </li>

                        <li>
                            <Link to="/Parteners" className="footer-link">Partners</Link>
                        </li>

                        <li>
                            <Link to="/ContactUs" className="footer-link">Suggestions</Link>
                        </li>

                        <li>
                            <Link to="/?scrollTo=blog" className="footer-link">Blog</Link>
                        </li>

                        <li>
                            <Link to="/?scrollTo=newsletter" className="footer-link">Newsletters</Link>
                        </li>

                    </ul>
                </div>

                <div className="footer-bottom">

                    <p className="copyright">
                        &copy; 2024 Revital. All Rights Reserved.
                    </p>

                    <ul className="footer-bottom-list">
                        <li>
                            <Link to="/Terms&Conditions" className="footer-bottom-link">Terms and conditions</Link>
                        </li>
                        <li>
                            <Link to="/PrivacyPolicy" className="footer-bottom-link">Privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/Refund-Policy" className="footer-bottom-link">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/Shipping-Policy" className="footer-bottom-link">Shipping Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer