import React, { useState } from 'react';
import '../Styles/Sections/FAQ.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="section FAQ-Frame">
            <div className="container">
                <p className="section-subtitle has-before text-center">Our FAQ</p>
                <h2 className="h2 section-title text-center">Our Frequently Asked <span className="has-before">Question</span></h2>
                <div className="FAQ-Container">
                    {faqData.map((faq, index) => (
                        <div className="FAQ-Question" key={index}>
                            <button className={`Question-Toggle ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
                                {faq.question}
                                <FontAwesomeIcon icon={activeIndex === index ? faMinus : faAdd} />
                            </button>
                            <div className={`content ${activeIndex === index ? 'active' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const faqData = [
    {
        question: 'How can I measure the effectiveness of my digital marketing campaign?',
        answer: 'Measuring the effectiveness of a digital marketing campaign involves analyzing key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates, and social media engagement. We provide detailed analytics and reports that help you track the progress and success of your campaign.'
    },
    {
        question: 'What is Digital Marketing?',
        answer: 'Digital marketing is a practice of promoting products or services through digital channels such as search engines, social media, email, websites, mobile apps, and other digital platforms.'
    },
    {
        question: 'How your business benefits from our services?',
        answer: 'Our Digital marketing services can bring numerous benefits to businesses of all sizes and industries such as Increased visibility, accurate targeting, Increased engagement, Improved analytics, while being cost effective which will enhance customer experiences.'
    },
    {
        question: 'Are web design and SEO related?',
        answer: 'Yes, web design is closely related to digital marketing. A well-designed website is an essential part of any successful digital marketing strategy.'
    },
    {
        question: 'What services do you offer for small businesses?',
        answer: 'We offer a range of services tailored for small businesses, including website design, social media marketing, search engine optimization (SEO), pay-per-click advertising (PPC), and more. These services can help small businesses establish a strong online presence and attract their target audience.'
    },
    // Add more FAQ items as needed
];

export default FAQ;