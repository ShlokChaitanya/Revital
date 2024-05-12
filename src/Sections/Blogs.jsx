import '../Styles/Sections/Blogs.css';
import { Link } from 'react-router-dom';
import { db } from '../Scripts/FireBase.js';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

async function fetchBlogData() {
    try {
        const q = query(collection(db, 'blogs'), orderBy('date', 'desc'), limit(4));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return [];
    }
}

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const fetchedBlogs = await fetchBlogData();
            setBlogs(fetchedBlogs);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <section className="section blog" id="Blogs" aria-label="blog">
            <div className="container">
                <p className="section-subtitle text-center has-before">Blogs!</p>
                <h2 className="h2 section-title text-center">
                    Our <span className="has-before">Blog Posts.</span>
                </h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ul className="blog-list">
                        {blogs.map((post, index) => (
                            <li key={post.id}>
                                <div className={index === 0 ? "blog-card large" : "blog-card"}>
                                    <figure className="card-banner">
                                        <img
                                            src={post.image}
                                            width={index === 0 ? "644" : "202"}
                                            height={index === 0 ? "363" : "162"}
                                            loading="lazy"
                                            alt={post.title}
                                            className="img-cover"
                                        />
                                    </figure>
                                    <div className="card-content">
                                        <div className="wrapper">
                                            <a className="tag">{post.tag}</a>
                                            <a className="publish-date">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                <span className="span">{post.date}</span>
                                            </a>
                                        </div>
                                        <h3 className={index === 0 ? "h2" : "h3"}>
                                            <Link to={"/blogs/" + post.id} className="card-title">{post.title}</Link>
                                        </h3>
                                        <p className="card-text">{post.content[0]}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Blogs;
