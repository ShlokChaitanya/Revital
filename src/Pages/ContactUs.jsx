import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { doc, setDoc } from "firebase/firestore";
import { db, generateToken } from "../Scripts/FireBase";
import "../Styles/Pages/ContactUs.css"

function ContactUs() {
    const [credentials, setCredentials] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    const handleInputChange = (event, field) => {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [field]: event.target.value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [`${field}ErrorMessage`]: '',
        }));
    };

    const register = async (event) => {
        event.preventDefault();
        try {
            const patternMap = {
                fNamePattern: /^[A-Za-z]+$/,
                lNamePattern: /^[A-Za-z]+$/,
                phoneNumberPattern: /^[0-9]{10}$/,
                emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            };
            ["fName", "lName", "message", "email", "phoneNumber"].forEach((field) => {
                const patternKey = `${field}Pattern`;
                if (!credentials[field] || !credentials[field].trim().length > 3) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        [`${field}ErrorMessage`]: `Please enter your`,
                    }));
                    return;
                } else  if (patternMap.hasOwnProperty(patternKey)) {
                    const pattern = patternMap[patternKey];
                    if (!pattern.test(credentials[field])) {
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            [`${field}ErrorMessage`]: `Please enter a valid`,
                        }));
                        return;
                    }
                } 
            })
            const contactId = await generateToken();
            const contactData = {
                email: credentials.email, username: `${credentials.fName + " " + credentials.lName}`,
                contactId: contactId, phoneNumber: credentials.phoneNumber,
                createdAt: new Date().toISOString(),
            };
            setDoc(doc(db, "ContactUs", contactId), contactData).then(() => {
                alert('Form submitted successfully.');
                setCredentials({});
            }).catch((error) => {
                console.error('Error writing document: ', error);
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="Contact-Us-Frame">
            <div className="Contact-Us-Form">
                <div className="Form-Header">
                    <h1 className="Form-Title">Contact Us</h1>
                    <p className="Form-Description">
                        Connect with Us: Embrace New Horizons and Reach Your Goals Together!
                    </p>
                </div>
                <div className="input-container">
                    <div className="flex-input">
                        <div className="input-group">
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={credentials.fName}
                                    onChange={(event) => handleInputChange(event, "fName")}
                                    required
                                />
                                <label htmlFor="name">First Name*</label>
                            </div>
                            {errors.fNameErrorMessage && (
                                <div className="error-message">
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                    <span>{errors.fNameErrorMessage} Name.</span>
                                </div>
                            )}
                        </div>
                        <div className="input-group">
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={credentials.lName}
                                    onChange={(event) => handleInputChange(event, "lName")}
                                    required
                                />
                                <label htmlFor="name">Last Name*</label>
                            </div>
                            {errors.lNameErrorMessage && (
                                <div className="error-message">
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                    <span>{errors.lNameErrorMessage} Name.</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-box">
                            <input
                                type="email"
                                value={credentials.email}
                                onChange={(event) => handleInputChange(event, "email")}
                                required
                            />
                            <label htmlFor="email">Email*</label>
                        </div>
                        {errors.emailErrorMessage && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                <span>{errors.emailErrorMessage} Email.</span>
                            </div>
                        )}
                    </div>
                    <div className="input-group">
                        <div className="input-box">
                            <input
                                type="tel"
                                value={credentials.phoneNumber}
                                onChange={(event) =>
                                    handleInputChange(event, "phoneNumber")
                                }
                                required
                            />
                            <label htmlFor="password">Phone Number*</label>
                        </div>
                        {errors.phoneNumberErrorMessage && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                <span>{errors.phoneNumberErrorMessage} Phone Number.</span>
                            </div>
                        )}
                    </div>
                </div>
                <button className="submit-btn" onClick={register}>
                    Submit Now
                </button>
                <div className="Terms-Conditions-Box">
                    By Submitting You Are Accepting Our
                    <conditions onClick={() => navigate("/Terms&Conditions")}>
                        Terms & Conditions
                    </conditions> And
                    <conditions className="Conditions-text" onClick={() => navigate("/PrivacyPolicy")}>
                        Privacy Policy
                    </conditions>.
                </div>
            </div>
        </div>
    )
}

export default ContactUs
