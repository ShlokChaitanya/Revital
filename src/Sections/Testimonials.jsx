import React from 'react'
import image1 from '../Assets/dp/hardaksh.webp'
import image2 from '../Assets/dp/anant.webp'
import image3 from '../Assets/dp/raunak.webp'
import image4 from '../Assets/dp/dhruvansh.webp'

import '../Styles/Sections/Testimonials.css'

const testimonials = [
    { id: 1, name: 'Hardaksh Singh', status: 'Content Lead', title: 'Pen-Down Praises!', quote: 'Being the main content drafter, I love how our team coordinated to make the ends meet. Everyone played their roles rightly and made the functioning smooth. I must highlight the exceptional work of our content providers too. Their attention to detail, creativity, and ability to capture the essence of our projects in words have been instrumental in shaping our image. Their dedication to delivering high-quality content on time, even under tight deadlines, is truly commendable.', image: image1 },
    { id: 2, name: 'Raunak Yadav', status: 'Management Lead', title: 'A Journey of Growth.', quote: 'I am proud to say that our team\'s success is a result of strategic planning, decisive actions, and effective leadership. We have navigated challenges with a clear vision, ensuring that our projects align seamlessly with our objectives. Our meticulous approach to task prioritization, resource allocation, and time management has optimized our productivity and outcomes. I prioritize transparent communication, value team input, and foster a collaborative environment that encourages innovation and growth.', image: image3 },
    { id: 3, name: 'Dhruvansh Tripathi', status: 'Projects Lead', title: 'Fueled Enthusiasm.', quote: 'As the projects lead, I have had the privilege of working closely with our talented team, and I must say, our leads stand out for their exceptional leadership and organizational skills. We have the ability to keep our projects on track, ensuring that timelines are met and objectives are achieved. Our strategic thinking and problem-solving approach have been instrumental in overcoming challenges and delivering successful outcomes.', image: image4 },
    { id: 4, name: 'Anant Solanki', status: 'Host', title: 'Smooth Experience!', quote: 'As an events host, my role is all about creating memorable experiences and ensuring that everything runs smoothly behind the scenes. I thrive on engaging with diverse audiences, keeping the energy high, and making sure that every event is a success. From coordinating with speakers and performers to managing logistics and overseeing the overall flow of the event, I take pride in orchestrating seamless and impactful experiences for our attendees.', image: image2 },
]


function Testimonials() {
    return (
        <section className="section testimonial" id="Testimonials" aria-label="feature">
            <div class="container">
                <p className="section-subtitle has-before text-center">Meet The Team!</p>
                <h2 className="h2 section-title text-center">Listen from our <span className="has-before">Core.</span></h2>
                <div className="testimonial-container">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial-card" key={testimonial.id}>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials