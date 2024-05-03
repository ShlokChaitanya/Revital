import React from 'react'
import '../Styles/Sections/Projects.css'
import Project01 from '../Assets/Images/project-1.jpg'
import Project02 from '../Assets/Images/project-2.jpg'
import Project03 from '../Assets/Images/project-3.jpg'
import Project04 from '../Assets/Images/project-4.jpg'
import Project05 from '../Assets/Images/project-5.jpg'

function Projects() {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">

        <p className="section-subtitle has-before text-center">Projects</p>

        <h2 className="h2 section-title text-center">
          Ignite Vortex complete <span className="has-before">project</span>
        </h2>

        <ul className="filter-list">

          <li>
            <button className="filter-btn active" data-filter-btn>Website</button>
          </li>

          <li>
            <button className="filter-btn" data-filter-btn>Landing Page</button>
          </li>

          <li>
            <button className="filter-btn" data-filter-btn>iOS App</button>
          </li>

          <li>
            <button className="filter-btn" data-filter-btn>Landing Page</button>
          </li>

          <li>
            <button className="filter-btn" data-filter-btn>Branding Design</button>
          </li>

        </ul>

        <ul className="grid-list">

          <li>
            <div className="project-card">

              <figure className="card-banner img-holder" style={{"--width": "835", "--height": "429;"}}>
                <img src={Project02} width="835" height="429" loading="lazy" alt="Book art design"
                  className="img-cover"/>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">Book art design</a>
                </h3>

                <a href="#" className="card-tag">Branding</a>
              </div>

            </div>
          </li>

          <li>
            <div className="project-card">

              <figure className="card-banner img-holder" style={{"--width": "416", "--height": "429"}}>
                <img src={Project02} width="416" height="429" loading="lazy" alt="Graphic Design"
                  className="img-cover"/>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">Graphic Design</a>
                </h3>

                <a href="#" className="card-tag">Design</a>
              </div>

            </div>
          </li>

          <li>
            <div className="project-card">

              <figure className="card-banner img-holder" style={{"--width": "416", "--height": "429"}}>
                <img src={Project03} width="416" height="429" loading="lazy" alt="3d Digital Art"
                  className="img-cover"/>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">3d Digital Art</a>
                </h3>

                <a href="#" className="card-tag">Design</a>
              </div>

            </div>
          </li>

          <li>
            <div className="project-card">

              <figure className="card-banner img-holder" style={{"--width": "416", "--height": "429"}}>
                <img src={Project04} width="416" height="429" loading="lazy" alt="Web Design"
                  className="img-cover"/>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">Web Design</a>
                </h3>

                <a href="#" className="card-tag">Design</a>
              </div>

            </div>
          </li>

          <li>
            <div className="project-card">

              <figure className="card-banner img-holder" style={{"--width": "416", "--height": "429"}}>
                <img src={Project05} width="416" height="429" loading="lazy"
                  alt="Mobile App Design" className="img-cover"/>
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">Mobile App Design</a>
                </h3>

                <a href="#" className="card-tag">Design</a>
              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>
  )
}

export default Projects