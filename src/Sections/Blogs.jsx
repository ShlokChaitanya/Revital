import React from 'react'
import '../Styles/Sections/Blogs.css'
import Blog01 from '../Assets/Images/blog-1.jpg'
import Blog02 from '../Assets/Images/blog-2.jpg'
import Blog03 from '../Assets/Images/blog-3.png'
import Blog04 from '../Assets/Images/blog-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Blogs() {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle text-center has-before">Blog Post</p>
        <h2 className="h2 section-title text-center">
          Popular <span className="has-before">blog post</span>
        </h2>
        <ul className="blog-list">
          <li>
            <div className="blog-card large">
              <figure className="card-banner">
                <img src={Blog01} width="644" height="363" loading="lazy"
                  alt="Godaddy user flow solution..." className="img-cover"/>
              </figure>
              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">Development</a>
                  <a href="#" className="publish-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span className="span">July 26, 2023</span>
                  </a>
                </div>
                <h3>
                  <a href="#" className="card-title">Godaddy user flow solution...</a>
                </h3>
                <p className="card-text">
                  At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu. At Ignite Vortex we
                  specialize in designing,
                  building, shipping and scaling beautiful.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img src={Blog02} width="202" height="162" loading="lazy"
                  alt="Godaddy user flow solution for every individual" className="img-cover"/>
              </figure>
              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">Development</a>
                  <a href="#" className="publish-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                   <span className="span">July 26, 2023</span>
                  </a>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Godaddy user flow solution for every individual</a>
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img src={Blog03} width="202" height="162" loading="lazy"
                  alt="Business solution for every individual" className="img-cover"/>
              </figure>
              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">Development</a>
                  <a href="#" className="publish-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span className="span">July 26, 2023</span>
                  </a>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Business solution for every individual</a>
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img src={Blog04} width="202" height="162" loading="lazy"
                  alt="How to gain pro experience ar figma update version" className="img-cover"/>
              </figure>
              <div className="card-content">
                <div className="wrapper">
                  <a href="#" className="tag">Development</a>
                  <a href="#" className="publish-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span className="span">July 26, 2023</span>
                  </a>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">How to gain pro experience ar figma update version</a>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Blogs