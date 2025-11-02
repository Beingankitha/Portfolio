// import React from 'react';
// import { BsFillPatchCheckFill } from 'react-icons/bs';
// import './experience.css';

// const Experience = () => {
//   return (
//     <section id="experience">
//       <h5>The Skills I Have</h5><br/>
//       <h2>Skills</h2>
//       <div className="container experience__container">
//         <div className="experience__frontend">
//           <h3>Front-end Development</h3>
//           <div className="experience__content">
//           <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>HTML5</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>CSS3</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>JavaScript</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Reactjs</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>jQuery</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>SCSS</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Ajax</h4>
//             </article>
//           </div>
//         </div>
//         <div className="experience__backend">
//           <h3>Back-end Development</h3>
//           <div className="experience__content">
//           <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Python</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Flask</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Django</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>C#.net</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>PHP</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Git/GitHub</h4>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience

import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaPython, FaPhp, FaGithub } from 'react-icons/fa';
import { SiFlask, SiDjango, SiCsharp, SiJquery } from 'react-icons/si';
import './experience.css';

const skills = [
  { category: 'Front-end Development', skills: [
    { name: 'HTML5', level: '90%', icon: <FaHtml5 /> },
    { name: 'CSS3', level: '85%', icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: '80%', icon: <FaJs /> },
    { name: 'Reactjs', level: '75%', icon: <FaReact /> },
    { name: 'jQuery', level: '70%', icon: <SiJquery /> },
    { name: 'SCSS', level: '65%', icon: <FaSass /> },
    { name: 'Ajax', level: '60%', icon: <FaJs /> }
  ]},
  { category: 'Back-end Development', skills: [
    { name: 'Python', level: '90%', icon: <FaPython /> },
    { name: 'Flask', level: '85%', icon: <SiFlask /> },
    { name: 'Django', level: '80%', icon: <SiDjango /> },
    { name: 'C#.net', level: '75%', icon: <SiCsharp /> },
    { name: 'PHP', level: '70%', icon: <FaPhp /> },
    { name: 'Git/GitHub', level: '85%', icon: <FaGithub /> }
  ]}
];

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          // we can unobserve after animation triggers
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <h5>The Skills I Have</h5><br/>
      <h2>Skills</h2>
      <div ref={containerRef} className="container experience__container">
        {skills.map((skillCategory, index) => (
          <div key={index} className={`experience__${skillCategory.category.toLowerCase().replace(/ /g, '_')}`}>
            <h3>{skillCategory.category}</h3>
            <div className="experience__content">
              {skillCategory.skills.map((skill, index) => (
                <article key={index} className="experience__details">
                  <div className="experience__details-top">
                    <span className="experience__details-icon">{skill.icon}</span>
                    <h4>{skill.name}</h4>
                  </div>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={parseInt(skill.level, 10)}
                    aria-label={`${skill.name} proficiency ${skill.level}`}
                  >
                    <div className="progress" style={{ ['--target']: skill.level }}>
                      <span>{skill.level}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience;



