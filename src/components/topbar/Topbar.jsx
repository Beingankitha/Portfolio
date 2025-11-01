import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineRead, AiOutlineReconciliation, AiOutlineFundProjectionScreen, AiOutlineMessage } from 'react-icons/ai';
import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const topbar = document.querySelector('nav');
    const footer = document.querySelector('footer');

    const checkOverlap = () => {
      const topbarRect = topbar.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      if (topbarRect.bottom > footerRect.top && topbarRect.top < footerRect.bottom) {
        setIsInverted(true);
      } else {
        setIsInverted(false);
      }
    };

    window.addEventListener('scroll', checkOverlap);
    window.addEventListener('resize', checkOverlap);
    checkOverlap();

    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, []);

  return (
    <nav className={isInverted ? 'inverted' : ''}>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
        <AiOutlineHome color="currentColor" />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser color="currentColor" />
      </a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}>
        <AiOutlineRead color="currentColor" />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineReconciliation color="currentColor" />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <AiOutlineFundProjectionScreen color="currentColor" />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineMessage color="currentColor" />
      </a>
    </nav>
  );
};

export default Topbar;
