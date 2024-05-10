import React from 'react'
import '../Styles/Sections/Testimonials.css'
import image1 from '../Assets/DP/image01.webp'
import image2 from '../Assets/DP/image02.webp'
import image3 from '../Assets/DP/image03.webp'

const testimonials = [
    { id: 1, name: 'Dhruvansh Tripathi', status: 'Data Analyst', title: 'Life-Changing Experience!', quote: 'Participating in this bootcamp was a game-changer for me. The curriculum was dynamic, and the instructors were top-notch. The hands-on projects challenged me and helped me grow my skills tremendously. Thanks to this program, I secured a fantastic job as a web developer and am thriving in my career.', image: image1 },
    { id: 2, name: 'Shlok Chaitanya', status: 'Web Developer', title: 'A Journey of Growth', quote: 'From a beginner to a tech enthusiast, this bootcamp has been a remarkable journey. The mentors provided invaluable support and guidance throughout. The practical approach to learning allowed me to apply what I learned in real-world scenarios. I am now confident in my abilities and excited to pursue opportunities in the tech industry.', image: image2 },
    { id: 3, name: 'Hardaksh', status: 'Tech  Innovator', title: 'Empowering Transformation', quote: 'Attending this bootcamp was the best decision I made for my career. The comprehensive curriculum and dedicated instructors helped me develop a strong foundation in software engineering. The collaborative environment fostered growth and allowed me to network with like-minded individuals. I am grateful for the skills and connections I gained through this program.', image: image3 },
    { id: 4, name: 'Arnav Singh', status: 'AI Expert', title: 'Excellence in Education', quote: 'Exceptional teaching and support from knowledgeable instructors who are passionate about what they do. Their insights were invaluable in helping me navigate the complexities of the tech industry. This program equipped me with the skills and confidence to pursue my passion for technology. The supportive community provided encouragement and inspiration along the way.' },
];

function TestimonialCard({ testimonial }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="avatar" />
                <div className="details">
                    <div className="name">{testimonial.name}</div>
                    <div className="status">{testimonial.status}</div>
                </div>
            </div>
            <div className="title">{testimonial.title}</div>
            <div className="quote">{testimonial.quote}</div>
        </div>
    );
}

function Testimonials() {
    return (
        <section className="section testimonial" id="Testimonials" aria-label="feature">
            <div class="container">
                <p className="section-subtitle has-before text-center">Meet The Keepers!</p>
                <h2 className="h2 section-title text-center">It's Great To Listen From Our <span className="has-before">Homies.</span></h2>
                <div className="testimonial-container">
                    {testimonials.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.id} />)}
                </div>
            </div>
        </section>
    )
}

export default Testimonials