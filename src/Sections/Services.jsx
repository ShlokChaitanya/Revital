import React from 'react'
import '../Styles/Sections/Services.css'
import Image01 from '../Assets/Images/service-icon-1.png'
import Image02 from '../Assets/Images/service-icon-2.png'
import Image03 from '../Assets/Images/service-icon-3.png'
import Image04 from '../Assets/Images/service-icon-4.png'
import Image05 from '../Assets/Images/service-icon-5.png'
import Image06 from '../Assets/Images/service-icon-6.png'
import Image07 from '../Assets/Images/service-icon-7.png'

const services = [
    { id: 1, title: "Fast Approach", color: "174, 77%, 50%", icon: Image01 },
    { id: 2, title: "Web Development", color: "267, 76%, 57%", icon: Image02 },
    { id: 3, title: "Supportive Core Team", color: "17, 100%, 68%", icon: Image03 },
    { id: 4, title: "Related Resources", color: "343, 98%, 60%", icon: Image04 },
    { id: 5, title: "Designing and Modifications", color: "210, 100%, 53%", icon: Image05 },
    { id: 6, title: "Communication", color: "157, 89%, 44%", icon: Image06 },
    { id: 7, title: "Digital Marketing", color: "52, 98%, 50%", icon: Image07 }
];

function Services() {
    return (
        <section className="section service" id="service" aria-label="service">
            <div className="container">
                <p className="section-subtitle has-before text-center">Our Works</p>
                <h2 className="h2 section-title text-center">
                    Helping the Tech maniacs like us step-up in the realm of <span className="has-before">Digital Age.</span>
                </h2>
                <ul className="grid-list">
                    {services.map((service) => {
                        return (
                            <div className="service-card" style={{ "--color": service.color }}>
                                <div className="card-icon">
                                    <img src={service.icon} width="30" height="30" loading="lazy" alt="service icon" />
                                </div>
                                <h3 className="h3">
                                    <a className="card-title">{service.title}</a>
                                </h3>
                            </div>);
                    })}
                    <li>
                        <a href="#" className="link-card" style={{ "--color": "203, 97%, 75%" }}>
                            <span className="span">Scroll To Top</span>
                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services