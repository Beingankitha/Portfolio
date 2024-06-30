import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted'); 

    emailjs.sendForm('service_peom0h7', 'template_cjxfaxp', formRef.current, 'vxckYp83jQermczCT')
      .then((result) => {
          console.log(result.text);
          console.log("Email Massege Sent")
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>beingankitha@gmail.com</h5>
            <a href="mailto:beingankitha@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="text" placeholder="Your Email" name="user_email" required/>
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn">Send Message</button> 
          {/*<a href='#' className="btn">Send Message</a>*/}
        </form>
      </div>

    </section>
  )
}

export default Contact