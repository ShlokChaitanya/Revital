import React from 'react'
import '../Styles/Pages/Terms.css'
import { useEffect } from 'react'

function Shipping() {
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
          <h1>Shipping & Delivery Policy</h1>
          <ol>
            <li>
              <h2>Shipping is not applicable for business.</h2>
            </li>
            <li>
              <h2>Contact</h2>
              <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:Support@ignitevortex.com" className="email-link">Support@ignitevortex.com</a>.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Shipping