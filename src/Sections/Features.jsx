import React from 'react';
import '../Styles/Sections/Features.css';
import Images from '../Assets/Images/feature-banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons';

const FeaturesData = [
  { icon: faUsers, color: "174, 77%, 50%", title: "Dynamic Student Team", text: "We're Grade 11 Science Students, driven to share our passion globally." },
  { icon: faRocket, color: "241, 77%, 63%", title: "Project Diversity", text: "From collaboration to individual projects, we keep our portfolio dynamic." },
  { icon: faHeadset, color: "343, 98%, 60%", title: "Specialized Expertise", text: "Our career choices align with The IT Hub theme, showcasing our expertise." }
];


function Features() {
  return (
    <section className="section feature" id="Features" aria-label="feature">
      <p className="section-subtitle has-before text-center">Discover Our Story</p>
      <h2 className="h2 section-title text-center">Navigate Through Our <span className="has-before">Noteworthy</span> Features</h2>
      <div className="container">
        <figure className="feature-banner">
          <img src={Images} width="582" height="585" loading="lazy" alt="feature banner" className="w-100" />
        </figure>
        <div className="feature-content">
          <ul className="feature-list">
            {FeaturesData.map((item, index) => (
              <li key={index}>
                <div className="feature-card">
                  <div className="card-icon" style={{ "--color": item.color }}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <h3 className="h3 card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;