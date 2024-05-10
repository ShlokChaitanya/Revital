import React from 'react'
import '../Styles/Pages/Terms.css'
import { useEffect } from 'react'

function Cu() {
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
          <h1>Contact Us</h1>
          <ol>
            <li><strong>Email:</strong> You can email us at <strong href="mailto:contact@revital.tech">contact@revital.tech</strong> for any inquiries you might have. We aim to respond to all emails within 1-2 business days.</li>
            <li><strong>Contact Form:</strong> On our website's Contact Us page, you'll find a contact form that you can fill out with your details and message. We will receive your message and respond promptly.</li>
          </ol>
          <p>By using Revital, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default Cu