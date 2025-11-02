import React from 'react';
import ME from '../../assets/me1.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p className="text-light"><b className="text-light">Welcome to my digital playground! 🌟 </b>With a profound love for technology and a knack for solving complex problems, I've carved out a niche as a versatile Software and Data Developer. My journey, from earning a Master's in Advanced Computer Science to hands-on roles in web development and satellite data processing, has been marked by innovation and continuous learning.</p>
          <p className="text-light">At the University of Leicester, I design and customize applications, integrating both bespoke EO software and third-party solutions. My technical toolkit includes Python, Django, Flask, React.js, and more, enabling me to craft efficient and user-friendly digital solutions.</p>
          <p className="text-light">But there's more to me than code! I'm also a physical fitness enthusiast 🧘‍♀️, mental health advocate 💚, and avid traveler 🌍. These interests enrich my perspective, fueling creativity and resilience in my professional endeavors.</p>
          <p className="text-light">Explore my portfolio to see the synergy of my technical skills, passions and a zest for life. Let's connect, collaborate, and create extraordinary solutions together!</p>
          <br/>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro