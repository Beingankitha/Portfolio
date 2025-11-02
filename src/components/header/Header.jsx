import React, { useEffect, useState } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  const roles = [
    'Software and Data Engineer',
    'AWS Cloud Specialist',
    'React Developer'
  ];

  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let timeout = null;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    }

    if (charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 900);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ankita Patel</h1>
  <h5 className="text-light"><span aria-live="polite" className="typed">{displayed}</span><span className="cursor" aria-hidden="true">&nbsp;</span></h5>
  {/* <p className="header__tagline">Open to work &nbsp;•&nbsp; Available for hire</p><br/> */}
  <CTA />
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header