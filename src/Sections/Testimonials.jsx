import React from 'react'
import '../Styles/Sections/Testimonials.css'

const testimonials = [
    { id: 1, name: 'Daniel Clifford', status: 'Tech Visionary', title: 'Transformative Learning Experience!', quote: 'Enrolling in the bootcamp was the best decision I ever made. The curriculum was cutting-edge, and the instructors were incredibly knowledgeable. The real-world projects pushed me out of my comfort zone and prepared me for the challenges of the tech industry. I landed my dream job as a Software Engineer shortly after completing the course.' },
    { id: 2, name: 'Jonathan Walters', status: 'Coding Enthusiast', title: 'Empowering Journey into Tech', quote: 'From a novice to a mobile engineer, all thanks to this bootcamp. The support from the mentors was exceptional. They kept me motivated through the tough times. The practical approach to learning made all the difference. I can confidently say that this investment transformed my career.' },
    { id: 3, name: 'Jeanette Harmon', status: 'Tech Trailblazer', title: 'Unparalleled Career Shift', quote: 'Joining this bootcamp was a turning point in my life. The comprehensive curriculum equipped me with the skills demanded by the industry. The dedicated staff provided guidance at every step. I transitioned to a fulfilling tech role, and Im enjoying every moment of it.' },
    { id: 4, name: 'Patrick Abrams', status: 'Code Connoisseur', title: 'Excellence in Teaching and Support', quote: 'Exceptional support from experienced TAs who have been through the same journey. Their insights were invaluable. This program instilled the confidence I needed to step into the tech world. The community is outstanding – youll receive personalized attention and connect with brilliant minds.' },
];


function Testimonials() {
    return (
        <section className="section testimonial" id="testimonial" aria-label="feature">
            <div class="container">
                <p className="section-subtitle has-before text-center">Meet The Keepers!</p>
                <h2 className="h2 section-title text-center">It's Great To Listen From Our <span className="has-before">Homies.</span></h2>
                <div className="testimonial-container">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="testimonial-header">
                                <img src={`https://assets.codepen.io/5126815/image-${testimonial.name.toLowerCase().split(' ')[0]}.jpg`} alt={testimonial.name} className="avatar" />
                                <div className="details">
                                    <div className="name">{testimonial.name}</div>
                                    <div className="status">{testimonial.status}</div>
                                </div>
                            </div>
                            <div className="title">{testimonial.title}</div>
                            <div className="quote">{testimonial.quote}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials