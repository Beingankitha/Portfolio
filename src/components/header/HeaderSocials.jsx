import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/beingankitha/" target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Beingankitha" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
      <a href="https://facebook.com/beingankitha" target="_blank" rel="noopener noreferrer" ><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials