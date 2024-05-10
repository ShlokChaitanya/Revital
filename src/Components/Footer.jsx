import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
    { name: 'logo-youtube', icon: faYoutube },
    { name: 'logo-twitter', icon: faTwitter },
    { name: 'logo-facebook', icon: faFacebook },
    { name: 'logo-skype', icon: faSkype }
];

const Links = [
    { name: 'Contact us', link: '/ContactUs' },
    { name: 'How it Works', link: '/' },
    { name: 'Create', link: '/' },
    { name: 'Explore', link: '/' },
    { name: 'Terms & Services', link: '/Terms&Services' }
];

const Community = [
    { name: 'Help Center', link: '/ContactUs' },
    { name: 'Partners', link: '/Partners' },
    { name: 'Suggestions', link: '/ContactUs' },
    { name: 'Blog', link: '/?scrollTo=blog' },
    { name: 'Newsletters', link: '/?scrollTo=newsletter' }
];

const Policys = [
    { name: 'Terms & Conditions', link: '/Terms&Conditions' },
    { name: 'Privacy Policy', link: '/PrivacyPolicy' },
    { name: 'Refund Policy', link: '/Refund-Policy' },
    { name: 'Shipping Policy', link: '/Shipping-Policy' }
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top section">
                    <div className="footer-brand">
                        <p className="footer-list-title">Team Revital To The Moon.</p>
                        <p className="footer-text">
                            This is the 2nd version of Team Revital.
                            Initial version was released in December 2022.
                        </p>
                        <ul className="social-list">
                            {socialLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to="/" className="social-link">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer-brand">
                        <p className="footer-list-title">Address</p>
                        <p className="footer-text">Alpha I, Greater Noida,<br />  Uttar Pradesh -</p>
                    </div>
                    <ul className="footer-list">
                        <li> <p className="footer-list-title">Usefull Links</p> </li>
                        {Links.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.link} className="footer-link">{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="footer-list">
                        <li> <p className="footer-list-title">Community</p> </li>
                        {Community.map((item, index) => {
                            return <li key={index}> <Link to={item.link} className="footer-link">{item.name}</Link> </li>
                        })}
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="copyright"> &copy; 2024 Revital. All Rights Reserved. </p>
                    <ul className="footer-bottom-list">
                        {Policys.map((item, index) => {
                            return <li key={index}> <Link to={item.link} className="footer-link">{item.name}</Link> </li>
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer