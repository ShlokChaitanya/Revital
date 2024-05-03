import React from 'react'
import Features from '../Sections/Features'
import NewsLetters from '../Sections/NewsLetters'
import Projects from '../Sections/Projects'
import Services from '../Sections/Services'
import Hero from '../Sections/Hero'
import Blogs from '../Sections/Blogs'
import FAQ from '../Sections/FAQ'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Testimonials from '../Sections/Testimonials'

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const scrollTo = urlParams.get('scrollTo');
    if (scrollTo) {
      const targetComponent = document.getElementById(scrollTo);
      if (targetComponent) {
        targetComponent.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    navigate(location.pathname, { replace: true });
  }, [location.search, navigate]);

  return (
    <>
    <Hero />
    <Services />
    <Features />
    <FAQ />
    <Testimonials />
    <Projects />
    <NewsLetters />
    <Blogs />
    </>
  )
}

export default Home