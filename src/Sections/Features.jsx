import React from 'react'
import '../Styles/Sections/Features.css'
import Images from '../Assets/Images/feature-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons'

function Features() {
  return (
    <section className="section feature" id="feature" aria-label="feature">
      <p className="section-subtitle has-before text-center">Who we are</p>
      <h2 className="h2 section-title text-center">More about <span className="has-before">us.</span></h2>
      <div className="container">
        <figure className="feature-banner">
          <img src={Images} width="582" height="585" loading="lazy" alt="feature banner" className="w-100"/>
        </figure>
        <div className="feature-content">
          <ul className="feature-list">
            {[{ icon: faUsers, color: "174, 77%, 50%", title: "A crew of Students.", text: "We are a group of Science Students in Grade 11, aiming to showcase our passion globally." }, { icon: faUsers, color: "241, 77%, 63%", title: "Didicated team", text: "At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu." }, { icon: faHeadset, color: "343, 98%, 60%", title: "24/7 hours support", text: "At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu." }].map((item, index) => {
              return (
                <li key={index}>
                  <div className="feature-card">
                    <div className="card-icon" style={{ "--color": item.color }}>
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div>
                      <h3 className="h3 card-title">{item.title}</h3>
                      <p className="card-text"> {item.text} </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features