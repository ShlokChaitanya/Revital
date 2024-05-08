import React from 'react'
import { useState } from 'react'
import '../Styles/Sections/Projects.css'
import Project01 from '../Assets/Images/project-1.jpg'
import Project02 from '../Assets/Images/project-2.jpg'
import Project03 from '../Assets/Images/project-3.jpg'
import Project04 from '../Assets/Images/project-4.jpg'
import Project05 from '../Assets/Images/project-5.jpg'

const ProjectsData = [ 
    { image: Project02, title: "Virtual Chemistry Lab", tag: "By chemcollective.org" },
    { image: Project03, title: "Virtual Physics Lab", tag: "Branding" },
    { image: Project04, title: "Book art design", tag: "Branding" },
    { image: Project05, title: "Book art design", tag: "Branding" }
]

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
                    Here are a few projects gathered by us for <span className="has-before">educative purposes.</span>
                </h2>
                <ul className="filter-list">
                    {['Website Resources', 'Github Projects (soon)', 'iOS App (soon)', '3D Designs (soon)'].map((filter, index) => (
                        <li key={index}>
                            <button className={`filter-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}> {filter} </button>
                        </li>
                    ))}
                </ul>
                <ul className="grid-list">
                    {ProjectsData.map((project, index) => (  
                        <li key={index} className={activeIndex === index ? 'active' : ''}>
                            <div className="project-card">
                                <figure className="card-banner img-holder" style={{ "--width": "835", "--height": "429;" }}>
                                    <img src={project.image} width="835" height="429" loading="lazy" alt="Virtual Chemistry Lab"
                                        className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <h3 className="h3">
                                        <a href="https://chemcollective.org/vlab/98" target="_blank" className="card-title">{project.title}</a>
                                    </h3>
                                    <a href="https://chemcollective.org/vlab/98" target="_blank" className="card-tag">{project.tag}</a>
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