import React from 'react'
import { useState } from "react"
import Images from '../Assets/Images/newsletter-banner.png'
import Images01 from '../Assets/Images/newsletter-bg.jpg'
import '../Styles/Sections/NewsLetters.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { doc, setDoc } from "firebase/firestore";
import { db, generateToken } from "../Scripts/FireBase";

function NewsLetters() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  async function handleNewsletterSubmit(event) {
    event.preventDefault();
    try {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      const contactId = await generateToken();
      const contactData = { email, contactId: contactId, createdAt: new Date().toISOString() };
      setDoc(doc(db, "NewsLetters", contactId), contactData).then(() => {
        alert('Form submitted successfully.');
        setEmail("");
      }).catch((error) => {
        console.error('Error writing document: ', error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="section newsletter has-bg-image" id="newsletter" aria-label="newsletter"
      style={{ backgroundImage: `url(${Images01})` }}>
      <div className="container">

        <figure className="newsletter-banner">
          <img src={Images} width="355" height="356" loading="lazy"
            alt="newsletter banner" className="w-100" />
        </figure>
        <div className="newsletter-content">

          <p className="section-subtitle has-before">Hear from us!</p>

          <h2 className="h2 section-title">Subscribe to the newsletter and get latest tech tips.</h2>

          <form action="" className="newsletter-form">
            <input type="email" name="email_address" value={email} onChange={handleEmailChange} placeholder="Enter your email" required className="email-field" />

            <button type="submit" onClick={handleNewsletterSubmit} className="btn btn-secondary has-before has-after">
              <span className="span">Subscribe (coming soon)</span>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </form>

        </div>

      </div>
    </section>

  )
}

export default NewsLetters