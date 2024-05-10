import React from 'react'
import { useEffect } from 'react'
import '../Styles/Pages/Terms.css'

function Refund() {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

    return (
        <div className='policiy-frame'>
            <div className="policiy-body">
                <div id="terms-and-conditions">
                    <h1>Cancellation & Refund Policy</h1>
                    <ol>
                       <li>
                            <p><cname>Ignite Vortex believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</cname></p>
                            <ol>
                                <li>
                                    Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                                </li>
                                <li>Ignite Vortex does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
                                <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 2 days of receipt of the products.</li>
                                <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
                                <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
                                <li>In case of any Refunds approved by the Ignite Vortex, it’ll take 16-30 days for the refund to be processed to the end customer.</li>
                            </ol>
                       </li>
                        <li>
                            <h2>Contact Us:</h2>
                            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:Support@ignitevortex.com" className="email-link">Support@ignitevortex.com</a>.</p>
                        </li>
                    </ol>
                    <p>You acknowledge that you have read, understood, and agreed to the terms and conditions of this Cancellation/Refund Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Refund