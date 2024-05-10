import React from 'react'
import '../Styles/Sections/Blogs.css'
import Blog01 from '../Assets/Images/blog-1.jpg'
import Blog02 from '../Assets/Images/blog-2.jpg'
import Blog03 from '../Assets/Images/blog-3.png'
import Blog04 from '../Assets/Images/blog-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const blogs = [
    { id: 1, title: 'Godaddy user flow solution...', image: Blog01, tag: 'Development', date: 'July 26, 2023', text: 'At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu. At Ignite Vortex we specialize in designing, building, shipping and scaling beautiful.' },
    { id: 2, title: 'Godaddy user flow solution for every individual', image: Blog02, tag: 'Development', date: 'July 26, 2023', text: 'At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu. At Ignite Vortex we specialize in designing, building, shipping and scaling beautiful.' },
    { id: 3, title: 'Business solution for every individual', image: Blog03, tag: 'Development', date: 'July 26, 2023', text: 'At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu. At Ignite Vortex we specialize in designing, building, shipping and scaling beautiful.' },
    { id: 4, title: 'How to gain pro experience ar figma update version', image: Blog04, tag: 'Development', date: 'July 26, 2023', text: 'At Ignite Vortex we specialize in designing, building, shipping and scaling beautifu. At Ignite Vortex we specialize in designing, building, shipping and scaling beautiful.' },
];

function Blogs() {
    return (
        <section className="section blog" id="Blogs" aria-label="blog">
            <div className="container">
                <p className="section-subtitle text-center has-before">Blog Post</p>
                <h2 className="h2 section-title text-center">
                    Popular <span className="has-before">blog post</span>
                </h2>
                <ul className="blog-list">
                    {blogs.map((post, index) => (
                        <li key={index}>
                            <div className={index === 0 ? "blog-card large" : "blog-card"}>
                                <figure className="card-banner">
                                    <img src={post.image} width={index === 0 ? "644" : "202"} height={index === 0 ? "363" : "162"} loading="lazy" alt={post.title} className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <div className="wrapper">
                                        <a href="#" className="tag">{post.tag}</a>
                                        <a href="#" className="publish-date">
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span className="span">{post.date}</span>
                                        </a>
                                    </div>
                                    <h3 className={index === 0 ? "h2" : "h3"}>
                                        <a href="#" className="card-title">{post.title}</a>
                                    </h3>
                                    <p className="card-text">{post.text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Blogs