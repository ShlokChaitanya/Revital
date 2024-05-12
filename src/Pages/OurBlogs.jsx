import '../Styles/Pages/OurBlogs.css';
import { db } from '../Scripts/FireBase.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';

function OurBlogs() {
    const { blogId } = useParams();
    const history = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { fetchBlogData(); window.scrollTo({ top: 0, behavior: 'smooth' }) }, [blogId]);

    async function fetchBlogData() {
        try {
            const fdata = await getDoc(doc(db, "blogs", blogId));
            if (fdata.exists()) {
                setData(fdata.data());
            } else {
                alert("Blog not found");
                history("/");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blog data:", error);
            setLoading(false);
        }
    }

    return (
        <div className="our-blogs-frame">
            <div className="site-content">
                <section className="posts" id="post-list">
                    {loading && <h1>Loading...</h1>}
                    {!loading && !data && <h1>Blog not found</h1>}
                    {!loading && data && (
                        <div className="post-content aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <div className="post-image">
                                <div>
                                    <img src={data.image} className="img banner" alt="blog1" />
                                </div>
                                <div className="post-info flex-row">
                                    <span className="publishby"><FontAwesomeIcon icon={faUser} />{data.author}&nbsp;&nbsp;</span>
                                    <span className="published"><FontAwesomeIcon icon={faCalendarAlt} />{data.date}&nbsp;&nbsp;</span>
                                    <span><FontAwesomeIcon icon={faComment} />{data.comments}</span>
                                </div>
                            </div>
                            <div className="post-title">
                                <a className="title">{data.title}</a>
                                <div className="article">
                                    {data.content.map((item, index) => {
                                        if (item.startsWith("#") && item.endsWith("#")) {
                                            return <h2 key={index}>{item.replace(/#/g, '')}</h2>
                                        } else {
                                            return <p key={index}>{item}</p>
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default OurBlogs;
