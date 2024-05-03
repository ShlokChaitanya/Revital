import React from 'react'
import '../Styles/Sections/Features.css'
import Images from '../Assets/Images/feature-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons'

function Features() {
  return (
    <section className="section feature" id="feature" aria-label="feature">
      <div className="container">

        <figure className="feature-banner">
          <img src={Images} width="582" height="585" loading="lazy" alt="feature banner"
            className="w-100"/>
        </figure>

        <div className="feature-content">

          <p className="section-subtitle has-before">Why Choose us</p>

          <h2 className="h2 section-title">
            Specialist in aviding clients of financial <span className="has-before">challenges</span>
          </h2>

          <ul className="feature-list">

            <li>
              <div className="feature-card">

                <div className="card-icon" style={{"--color": "174, 77%, 50%"}}>
                  <FontAwesomeIcon icon={faRocket} />
                </div>

                <div>
                  <h3 className="h3 card-title">Fast working process</h3>

                  <p className="card-text">
                    At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div className="feature-card">

                <div className="card-icon" style={{ "--color": "241, 77%, 63%" }}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>

                <div>
                  <h3 className="h3 card-title">Didicated team</h3>

                  <p className="card-text">
                    At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div className="feature-card">

                <div className="card-icon" style={{ "--color": "343, 98%, 60%" }}>
                  <FontAwesomeIcon icon={faHeadset} />
                </div>

                <div>
                  <h3 className="h3 card-title">24/7 hours support</h3>

                  <p className="card-text">
                    At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu.
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </div>

      </div>
    </section>
  )
}

export default Features