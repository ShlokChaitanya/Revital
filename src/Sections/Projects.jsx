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
                <p className="section-subtitle has-before text-center">Useful Resources</p>
                <h2 className="h2 section-title text-center">
                    Here are few projects gathered by us for <span className="has-before">educative purposes.</span>
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
                                    <img src={project} width="835" height="429" loading="lazy" alt="Virtual Chemistry Lab"
                                        className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3">
                                        <a href="https://chemcollective.org/vlab/98" className="card-title">Virtual Chemistry Lab</a>
                                    </h3>
                                    <a href="https://chemcollective.org/vlab/98" className="card-tag">By chemcollective.org</a>
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