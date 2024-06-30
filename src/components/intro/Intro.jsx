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

        <p>Hailing from Leicester, UK, I'm a passionate Software Developer with a keen inclination towards web development, database design, and satellite data processing. My academic journey, culminating in an MSc in Advanced Computer Science from the University of Leicester, has been complemented by hands-on experience in industry-relevant projects and software internships.</p>

        <p>At the core, I am an innovator. Whether I'm integrating bespoke EO software for satellite data processing or conceptualizing web applications powered by Python (both Flask & Django), my primary focus is on creating efficient and user-friendly digital solutions. My diverse experience, ranging from crafting responsive web designs to working with the Agile methodology, positions me uniquely at the intersection of technical proficiency and creative problem-solving.</p>

        <p>Beyond the world of code, my professional experiences have spanned B2B sales, e-commerce management, and even healthcare. These diverse roles have enriched my interpersonal skills, emphasizing the importance of effective communication and team collaboration.</p>

        <p>Outside of work, I am a lifelong learner, consistently updating myself with emerging technologies and trends. When not coding, I am an advocate for mental health, a yoga enthusiast, and an avid traveler. Feel free to explore my projects and get in touch if you'd like to collaborate or chat about technology, travel, or anything in between!</p>

        {/*


        Originating from Leicester, UK, I'm a dedicated Software Developer with a fervent interest in web development, database structuring, and the intricate processing of satellite data. My educational pursuits, peaking with an MSc in Advanced Computer Science from the renowned University of Leicester, have seamlessly blended with practical exposure in pivotal industry projects and immersive software internships.

In essence, I'm a trailblazer. My ventures span from developing bespoke EO software for nuanced satellite data interpretation to shaping robust web applications through Python, utilizing both Flask & Django frameworks. My undivided attention zeroes in on architecting streamlined and intuitive digital tools. With a wide-ranging experience from devising mobile-responsive web layouts to adeptly maneuvering within the Agile workspace, I stand at a crossroads where technological adeptness meets inventive problem-solving.

Venturing beyond the digital realm, my professional pursuits have touched domains like B2B sales, digital commerce administration, and the healthcare sector. Such varied engagements have sculpted my soft skills, underlining the paramountcy of clear communication and synergistic team dynamics.

Away from the professional arena, I'm a perpetual scholar, always on the hunt for the latest tech innovations and shifts. Off the coding grid, I champion mental well-being, indulge in the tranquility of yoga, and satiate my wanderlust through travels. Dive into my portfolio and feel free to connect—whether you're keen on a tech collaboration, sharing travel tales, or engaging in enriching conversations on myriad topics!
        
        <p>Hello again! My name is Ankita and I am passinate about developing web applications that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! </p>
            
        <p>I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript, building everything from landing pages to APIs. My experience as a teacher in an international school helped me collaborate with fellow developers from all over the world. Additionally, working with kids isn’t an easy task, however, it has helped me become efficient, productive, and fast even in a very stressful environment, which is an important skill in the tech industry.</p> */}
        <br/>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro