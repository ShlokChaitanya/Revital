import React, { useState } from 'react';
import '../Styles/Sections/Projects.css';
import Project01 from '../Assets/Images/project-1.jpg';
import Project02 from '../Assets/Images/project-2.jpg';
import Project03 from '../Assets/Images/project-3.jpg';
import Project04 from '../Assets/Images/project-4.jpg';
import Project05 from '../Assets/Images/project-5.jpg';

const ChemistryData = [
    { image: Project01, title: "Determining the solubility of copper chloride", tag: "By chemcollective.org"},
    { image: Project02, title: "Standardization of NaOH with a KHP solution: Acid Base Titration", tag: "By chemcollective.org" },
    { image: Project03, title: "Exploring Oxidation-Reduction Reactions", tag: "By chemcollective.org" },
    { image: Project04, title: "Strong Acid and Base Problems", tag: "By chemcollective.org" },
    { image: Project05, title: "Cobalt Chloride and LeChatlier’s Principle", tag: "By chemcollective.org" }
];

function ProjectCard({ project }) {
    return (
        <li className="project-card">
            <figure className="card-banner img-holder" style={{ "--width": "835", "--height": "429;" }}>
                <img src={project.image} loading="lazy" alt="Virtual Chemistry Lab" className="img-cover" />
            </figure>
            <div className="card-content">
                <h3 className="h3">
                    <a href="https://chemcollective.org/chem/jsvlab/vlab.html" target="_blank" rel="noopener noreferrer" className="card-title">{project.title}</a>
                </h3>
                <a href="https://chemcollective.org/chem/jsvlab/vlab.html" target="_blank" rel="noopener noreferrer" className="card-tag">{project.tag}</a>
            </div>
        </li>
    );
}

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleToggle = (index) => {
        if (activeIndex !== index) setActiveIndex(index);
    };

    return (
        <section className="section project" id="Projects" aria-label="project">
            <div className="container">
                <p className="section-subtitle has-before text-center">Useful Resources</p>
                <h2 className="h2 section-title text-center">
                    Here are a few projects gathered by us for <span className="has-before">educative purposes.</span>
                </h2>
                <ul className="filter-list">
                    {['Website Resources', 'Github Projects (soon)', 'iOS App (soon)', '3D Designs (soon)'].map((filter, index) => (
                        <li key={index}>
                            <button className={`filter-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)} disabled={index !== 0}>{filter}</button>
                        </li>
                    ))}
                </ul>
                <ul className="grid-list">
                    {ChemistryData.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;    