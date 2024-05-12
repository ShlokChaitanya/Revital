import '../Styles/Pages/Terms.css'
import React, { useEffect } from 'react'

function Cu() {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, []);

    return (
        <div className='policiy-frame'>
            <div className="policiy-body">
                <div id="terms-and-conditions">
                    <h1>Contact Us</h1>
                    <ol>
                        <li><strong>Email:</strong> You can email us at <strong href="mailto:contact@Revital.tech">contact@Revital.tech</strong> for any inquiries you might have. We aim to respond to all emails within 1-2 business days.</li>
                        <li><strong>Phone:</strong> To speak directly with a member of our team, you can call our customer service hotline at <cname href="tel:+18001234567">+91 999-999-9292</cname> during our business hours: Monday to Friday, 9:00 AM to 5:00 PM (GMT).</li>
                        <li><strong>Contact Form:</strong> On our website's Contact Us page, you'll find a contact form that you can fill out with your details and message. We will receive your message and respond promptly.</li>
                    </ol>
                    <p>By using the Revial online platform, you acknowledge that you have read, understood, and agreed to these <strong href="/Terms&Conditions">Terms and Conditions</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Cu