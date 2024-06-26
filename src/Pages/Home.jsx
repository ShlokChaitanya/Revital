import React, { useEffect, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Blogs = React.lazy(() => import('../Sections/Blogs'));
const FAQ = React.lazy(() => import('../Sections/FAQ'));
const Features = React.lazy(() => import('../Sections/Features'));
const Hero = React.lazy(() => import('../Sections/Hero'));
const NewsLetters = React.lazy(() => import('../Sections/NewsLetters'));
const Projects = React.lazy(() => import('../Sections/Projects'));
const Services = React.lazy(() => import('../Sections/Services'));
const Testimonials = React.lazy(() => import('../Sections/Testimonials'));

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, []);
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const scrollTo = urlParams.get('scrollTo');
        if (scrollTo) {
            const targetComponent = document.getElementById(scrollTo);
            if (targetComponent) {
                targetComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        navigate(location.pathname, { replace: true });
    }, [location.search, navigate]);

    return (
        <>
            <Suspense fallback={null}>
                <Hero />
                <Services />
                <Features />
                <FAQ />
                <Testimonials />
                <Projects />
                <NewsLetters />
                <Blogs />
            </Suspense>
        </>
    );
}

export default Home;