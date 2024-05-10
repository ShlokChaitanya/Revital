import React from 'react';
import '../Styles/Sections/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartColumn, faCode, faEnvelope, faFile, faHeadset, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const services = [
    { id: 1, title: "Responsive Support", color: "174, 77%, 50%", icon: faEnvelope },
    { id: 2, title: "Innovative Web Solutions", color: "267, 76%, 57%", icon: faCode },
    { id: 3, title: "Supportive Core Team", color: "17, 100%, 68%", icon: faHeadset },
    { id: 4, title: "Valuable Resources", color: "343, 98%, 60%", icon: faBell },
    { id: 5, title: "Creative Design Services", color: "210, 100%, 53%", icon: faFile },
    { id: 6, title: "Data Driven Strategies", color: "157, 89%, 44%", icon: faChartColumn },
    { id: 7, title: "Strategic Marketing Solutions", color: "52, 98%, 50%", icon: faBriefcase }
];

function Services() {
    return (
        <section className="section service" id="service" aria-label="service">
            <div className="container">
                <p className="section-subtitle has-before text-center">Our Works</p>
                <h2 className="h2 section-title text-center">Empowering Tech Enthusiasts to Excel in the <span className="has-before">Digital Age.</span>
                </h2>
                <ul className="grid-list">
                    {services.map((service) => (
                        <li key={service.id} className="service-card" style={{ "--color": service.color }}>
                            <div className="card-icon"> <FontAwesomeIcon icon={service.icon} /> </div>
                            <h3 className="h3"> <a className="card-title">{service.title}</a> </h3>
                        </li>
                    ))}
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

export default Services;
