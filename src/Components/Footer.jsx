import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    { name: 'logo-github', icon: faGithub, link: 'https://github.com/shlokchaitanya/revital' },
    { name: 'logo-twitter', icon: faTwitter, link: 'https://twitter.com/revital' },
    { name: 'logo-instagram', icon: faInstagram, link: 'https://instagram.com/revital' },
    { name: 'logo-discord', icon: faDiscord, link: 'https://discord.gg/VcP6kaGGCB' }
];

const Links = [
    { name: 'Join Us', link: 'https://discord.gg/VcP6kaGGCB' },
    { name: 'Mail Us', link: 'mailto:contact@revital.tech' },
    { name: 'Our Projects', link: '/?scrollTo=Project' },
    { name: 'Terms & Services', link: '/Terms&Services' }
];

const Community = [
    { name: 'Our Blogs', link: '/?scrollTo=Blogs' },
    { name: 'Help Center', link: '/HelpCenter' },
    { name: 'Suggestions', link: '/ContactUs' },
    { name: 'Newsletters', link: '/?scrollTo=Newsletter' }
];

const Policies = [
    { name: 'Privacy Policy', link: '/PrivacyPolicy' },
    { name: 'Terms & Conditions', link: '/Terms&Conditions' },
    // { name: 'Refund Policy', link: '/Refund-Policy' },
    // { name: 'Shipping Policy', link: '/Shipping-Policy' }
];

const FooterLink = ({ item }) => (
    <li>
        <Link to={item.link} className="footer-link">{item.name}</Link>
    </li>
);

const FooterList = ({ title, items }) => (
    <ul className="footer-list">
        <li><p className="footer-list-title">{title}</p></li>
        {items.map((item, index) => <FooterLink key={index} item={item} />)}
    </ul>
);

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top section">
                    <div className="footer-brand">
                        <p className="footer-list-title">Revital - Home to IT Upscaling!</p>
                        <p className="footer-text">
                            Dive into the world of Revital! Created by the students of Class XI - A from St. Joseph's School, Greater Noida. Discover more about our project and join us on our journey of learning and creativity.
                        </p>
                        <ul className="social-list">
                            {socialLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="social-link">
                                        <FontAwesomeIcon icon={item.icon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-brand">
                        <p className="footer-list-title">Address</p>
                        <p className="footer-text">Alpha I, Greater Noida,<br />  Uttar Pradesh - 201310</p>
                    </div>
                    <FooterList title="Add-ons" items={Links} />
                    <FooterList title="Community" items={Community} />
                </div>
                <div className="footer-bottom">
                    <p className="copyright"> &copy; 2024 Revital. All Rights Reserved. </p>
                    <ul className="footer-bottom-list">
                        {Policies.map((item, index) => <FooterLink key={index} item={item} />)}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;