import '../Styles/Sections/FAQ.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="section FAQ-Frame" id="FAQs">
            <div className="container">
                <p className="section-subtitle has-before text-center">About Us</p>
                <h2 className="h2 section-title text-center">Some Related <span className="has-before">Questions.</span></h2>
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
        question: 'Which platforms do you use to carry out all the operations?',
        answer: 'We have our own dedicated cloud servers to host and deploy the projects. We\'re in sponsored partnership with some leading companies in the IT field, so its going well.'
    },
    {
        question: 'Why the title "Revital"?',
        answer: 'We are here to change the perceptions of people over technology and its uses. The vision we have is not about proving someone else\'s ideologies wrong, but to prove ours right.'
    },
    {
        question: 'Which field is your team mainly based in?',
        answer: 'Our team mainly focuses on the Information Technology. It includes works like GFX, Editing, Hacking, Programming, etc.'
    },
    {
        question: 'When will the AI workspace be opened?',
        answer: 'As mentioned earlier also, we\'re only grade 11 students, so, we\'ll work on it during our holidays if we\'re not assigned with our academic projects, most probably.'
    },
    {
        question: 'Is this page developed by the crew itself?',
        answer: 'In short, Yes. We\'ve been assigning the works to the main site-builders Shlok, Arnav and Dhruvansh, which they\'ve been implementing over time and maintining this project.'
    },
    // Add more FAQ items as needed
];

export default FAQ;