import React from 'react'
import { useState } from 'react'
import '../Styles/Sections/Projects.css'
import Project01 from '../Assets/Images/project-1.jpg'
import Project02 from '../Assets/Images/project-2.jpg'
import Project03 from '../Assets/Images/project-3.jpg'
import Project04 from '../Assets/Images/project-4.jpg'
import Project05 from '../Assets/Images/project-5.jpg'

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="section project" id="project" aria-label="project">
            <div className="container">
                <p className="section-subtitle has-before text-center">Projects</p>
                <h2 className="h2 section-title text-center">
                    Ignite Vortex complete <span className="has-before">project</span>
                </h2>
                <ul className="filter-list">
                    {['Website', 'Landing Page', 'iOS App', 'Branding Design'].map((filter, index) => (
                        <li key={index}>
                            <button className={`filter-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}> {filter} </button>
                        </li>
                    ))}
                </ul>
                <ul className="grid-list">
                    {[ Project02, Project03, Project04, Project05].map((project, index) => (  
                        <li key={index} className={activeIndex === index ? 'active' : ''}>
                            <div className="project-card">
                                <figure className="card-banner img-holder" style={{ "--width": "835", "--height": "429;" }}>
                                    <img src={project} width="835" height="429" loading="lazy" alt="Book art design"
                                        className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3">
                                        <a href="#" className="card-title">Book art design</a>
                                    </h3>
                                    <a href="#" className="card-tag">Branding</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects