import React from 'react'
import '../Styles/Sections/Services.css'
import Image01 from '../Assets/Images/service-icon-1.png'
import Image02 from '../Assets/Images/service-icon-2.png'
import Image03 from '../Assets/Images/service-icon-3.png'
import Image04 from '../Assets/Images/service-icon-4.png'
import Image05 from '../Assets/Images/service-icon-5.png'
import Image06 from '../Assets/Images/service-icon-6.png'
import Image07 from '../Assets/Images/service-icon-7.png'

const services = [{
  id: 1,
  color: "174, 77%, 50%",
  title: "Product Management",
  icon: Image01
}, {
  id: 2,
  color: "267, 76%, 57%",
  title: "Web & Mobile Development",
  icon: Image02
}, {
  id: 3,
  color: "17, 100%, 68%",
  title: "Fast Customer Support",
  icon: Image03
}, {
  id: 4,
  color: "343, 98%, 60%",
  title: "Human Resources",
  icon: Image04
}, {
  id: 5,
  color: "210, 100%, 53%",
  title: "Design and Creatives",
  icon: Image05
}, {
  id: 6,
  color: "157, 89%, 44%",
  title: "Marketing and Communication",
  icon: Image06
}, {
  id: 7,
  color: "52, 98%, 50%",
  title: "Business Development",
  icon: Image07
}];

function Services() {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">

        <p className="section-subtitle has-before text-center">Our Services</p>

        <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
          service</span></h2>

        <ul className="grid-list">
          {services.map((service) => {
            return(
            <div className="service-card" style={{"--color": service.color}}>
              <div className="card-icon">
                  <img src={service.icon} width="30" height="30" loading="lazy" alt="service icon"/>
              </div>
              <h3 className="h3">
                <a className="card-title">{service.title}</a>
              </h3>
            </div>);
          })}
          <li>
            <a href="#" className="link-card" style={{"--color": "203, 97%, 75%"}}>
              <span className="span">04 More Service</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </li>

        </ul>

      </div>
    </section>
  )
}

export default Services