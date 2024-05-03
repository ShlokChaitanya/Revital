import React from 'react'
import '../Styles/Pages/Terms.css'
import { useEffect } from 'react'

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    return (
        <div className='policiy-frame'>
            <div className="policiy-body">
                <div id="terms-and-conditions">
                    <h1>Privacy Policy</h1>
                    <ol>
                        <li>
                            <h2>Introduction</h2>
                            <p>
                                <cname>Ignite Vortex </cname>("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By accessing our website [IgniteVortex.com] or using our services, you consent to the practices described in this Privacy Policy.
                            </p>
                        </li>
                        <li>
                            <h2>Information We Collect</h2>
                            <ol>
                                <li>
                                    <p>We may collect the following personal information from you:</p>
                                    <ol>
                                        <li>
                                            <p>Contact information, such as your name, email address, mailing address, and phone number.</p>
                                        </li>
                                        <li>
                                            <p>Demographic information, such as your age, gender, and interests.</p>
                                        </li>
                                        <li>
                                            <p>Usage information, such as the pages you visit on our website and the services you use.</p>
                                        </li>
                                        <li>
                                            <p>Device information, such as the type of device you use and your IP address.</p>
                                        </li>
                                        <li>
                                            <p>Cookies and other tracking technologies.</p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p>We collect this information in order to:</p>
                                    <ol>
                                        <li>
                                            <p>Provide and improve our services.</p>
                                        </li>
                                        <li>
                                            <p>Communicate with you.</p>
                                        </li>
                                        <li>
                                            <p>Comply with legal requirements.</p>
                                        </li>
                                        <li>
                                            <p>Target our marketing efforts.</p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>How We Use Your Information</h2>
                            <ol>
                                <li>
                                    <p>We use the collected information to provide and improve our services, communicate with you, and comply with legal requirements.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>Sharing Your Information</h2>
                            <ol>
                                <li>
                                    <p>We do not share your personal information with third parties without your consent, except as necessary to provide you with the services you have requested, to comply with a legal obligation, or to protect our rights or the rights of others.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>Your Choices</h2>
                            <ol>
                                <li>
                                    <p>You have the right to access, correct, or delete your personal information. You can opt-out of marketing communications and control cookies preferences.</p>
                                </li>
                                <li>
                                    <p>You agree not to:</p>
                                    <ul>
                                        <li>
                                            <p>Violate any applicable laws, regulations, or third-party rights.</p>
                                        </li>
                                        <li>
                                            <p>Use the Service for any fraudulent, abusive, or illegal activity.</p>
                                        </li>
                                        <li>
                                            <p>Post, upload, or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, vulgar, invasive of another's privacy, or otherwise objectionable.</p>
                                        </li>
                                        <li>
                                            <p>Engage in any conduct that could disrupt, damage, or impair the functionality or security of the Service.</p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>Security</h2>
                            <ol>
                                <li>
                                    <p>We take reasonable measures to protect your personal information, but no data transmission over the internet is 100% secure.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>Children's Privacy:</h2>
                            <ol>
                                <li>
                                    <p>Our website and services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>Changes to This Privacy Policy:</h2>
                            <ol>
                                <li>
                                    <p>We may update this Privacy Policy from time to time. The updated Privacy Policy will be posted on our website with the new effective date.</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2>Contact Us:</h2>
                            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:Support@ignitevortex.com" className="email-link">Support@ignitevortex.com</a>.</p>
                        </li>
                    </ol>
                    <p>By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy