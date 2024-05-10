import React from 'react'
import '../Styles/Pages/Terms.css'
import { useEffect } from 'react'

function Terms() {
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
          <h1>Terms &amp; Conditions</h1>
          <ol>
            <li>
              <h2>Acceptance of Terms:</h2>
              <p>These Terms and Conditions ("Terms") govern your use of the <cname>Revital</cname> online platform ("Platform"), provided by Ignite Vortex Inc. ("Ignite Vortex ", "we," or "us"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree with these Terms, you should not use the Platform.</p>
            </li>
            <li>
              <h2>Use of the Platform:</h2>
              <p>Account Creation: You may need to create an account to access certain features of the Platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </li>
            <li>
              <h2>Prohibited Activities:</h2>
              <ol>
                <li>
                  <p>You agree not to engage in any of the following activities while using the Platform:</p>
                  <ul>
                    <li>
                      <p>Violating any applicable laws or regulations.</p>
                    </li>
                    <li>
                      <p>Infringing upon the intellectual property rights of others</p>
                    </li>
                    <li>
                      <p>Uploading or transmitting any harmful, offensive, or inappropriate content.</p>
                    </li>
                    <li>
                      <p>Interfering with or disrupting the Platform or its associated networks.</p>
                    </li>
                    <li>
                      <p>Engaging in any fraudulent or misleading activities.</p>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h2>Content Ownership:</h2>
              <p>Ignite Vortex I does not claim ownership of any content you submit or upload to the Platform. However, by using the Platform, you grant Ignite Vortex a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, distribute, and display your content for the purpose of operating and improving the Platform.</p>
            </li>
            <li>
              <h2>Termination:</h2>
              <p>Ignite Vortex reserves the right to suspend or terminate your access to the Platform at any time, without notice, for any reason, including but not limited to a violation of these Terms.</p>
            </li>
            <li>
              <h2>Community Guidelines:</h2>
              <ol>
                <li>
                  <p><strong>Respectful Conduct: </strong>You are expected to treat other users with respect and refrain from engaging in abusive, offensive, or harassing behavior on the Platform</p>
                </li>
                <li>
                  <p><strong>User Content: </strong>You are solely responsible for any content you post, upload, or transmit on the Platform. You agree not to post any content that is illegal, defamatory, or violates the rights of others.</p>
                </li>
                <li>
                  <p><strong>Moderation: </strong>Ignite Vortex reserves the right to moderate user-generated content and may remove or edit any content that violates these Terms or is otherwise objectionable.</p>
                </li>
              </ol>
            </li>
            <li>
              <h2>Disclaimer of Warranty and Limitation of Liability:</h2>
              <ol>
                <li>
                  <p><strong>No Warranty: </strong>The Platform is provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. Ignite Vortex disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                </li>
                <li>
                  <p><strong>Limitation of Liability: </strong>In no event shall Ignite Vortex be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of the Platform, whether based on contract, tort, strict liability, or any other legal theory, even if advised of the possibility of such damages.</p>
                </li>
              </ol>
            </li>
            <li>
              <h2>Intellectual Property Rights:</h2>
              <ol>
                <li>
                  <p><strong>Trademarks: </strong>The Ignite Vortex name, logo, and any other Ignite Vortex trademarks or service marks are the property of Ignite Vortex Inc. You may not use any Ignite Vortex trademarks without prior written permission.</p>
                </li>
                <li>
                  <p><strong>Copyright: </strong>The Platform and its content, including but not limited to text, graphics, images, and software, are protected by copyright laws and other intellectual property rights. You may not reproduce, modify, distribute, or display any portion of the Platform without prior written permission from Ignite Vortex.</p>
                </li>
              </ol>
            </li>
            <li>
              <h2>Privacy: </h2>
              <p>Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.</p>
            </li>            <li>
              <h2>Governing Law and Dispute Resolution: </h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or in connection with these Terms shall be resolved through arbitration in accordance with the rules of [Arbitration Organization].</p>
            </li>
            <li>
              <h2>Modifications: </h2>
              <p>Ignite Vortex reserves the right to modify these Terms at any time without prior notice. The updated Terms will be posted on the Platform, and your continued use of the Platform after the modifications will constitute your acceptance of the updated Terms.</p>
            </li>
            <li>
              <h2>Contact :</h2>
              <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:Support@ignitevortex.com" className="email-link">Support@ignitevortex.com</a>.</p>
            </li>
          </ol>
          <p>By using the Ignite Vortex online platform, you acknowledge that you have read, understood, and agreed to these Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Terms