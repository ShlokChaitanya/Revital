import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Sections/FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="section FAQ-Frame" id="FAQs">
            <div className="container">
                <p className="section-subtitle has-before text-center">Frequently Asked Questions</p>
                <h2 className="h2 section-title text-center">
                    Some Related <span className="has-before">Questions.</span>
                </h2>
                <div className="FAQ-Container">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} activeIndex={activeIndex} handleToggle={handleToggle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = React.memo(({ faq, index, activeIndex, handleToggle }) => {
    const isActive = index === activeIndex;

    return (
        <div className="FAQ-Question">
            <button className={`Question-Toggle ${isActive ? 'active' : ''}`} onClick={() => handleToggle(index)}>
                {faq.question}
                <FontAwesomeIcon icon={isActive ? faMinus : faAdd} />
            </button>
            <div className={`content ${isActive ? 'active' : ''}`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
});

const faqData = [
    {
        question: 'What platforms do you use for operations?',
        answer: 'We utilize dedicated cloud servers for hosting and deploying projects, supplemented by strategic partnerships with leading IT companies.'
    },
    {
        question: 'What inspired the name "Revital"?',
        answer: 'The name "Revital" embodies our commitment to reshaping technology perceptions. Our vision focuses on innovation and progress rather than ideological conflict.'
    },
    {
        question: 'What is the primary focus area of your team?',
        answer: 'Our team specializes in Information Technology, covering diverse domains such as graphic design, video editing, cybersecurity, and programming.'
    },
    {
        question: 'When is the AI workspace expected to launch?',
        answer: 'Given our current academic commitments as grade 11 students, the AI workspace development will occur during holiday breaks, subject to project prioritization.'
    },
    {
        question: 'Was this page developed internally by the team?',
        answer: 'Yes, our core team members Shlok, Arnav, and Dhruvansh spearheaded the development and maintenance of this page, ensuring alignment with our project objectives.'
    },
];

export default FAQ;