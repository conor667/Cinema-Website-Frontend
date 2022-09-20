import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_aggk4op', 'template_0i4po1v', form.current, '9XYAc5eUh_yXVFudP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Thank you for your email!");
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='formContainer'>
      <label className='contactLabel'>Name</label>
      <input className='contactInput' type="text" name="from_name" placeholder="Your Name" required />
      <label className='contactLabel'>Email</label>
      <input className='contactInput' type="email" name="user_email" placeholder="Email Address"required/>
      <label className='contactLabel'>Subject</label>
      <input className='contactInput' type="text" name="subject" placeholder="Subject" required/>
      <textarea className='message' name="message" required placeholder="Your message goes here"/>
      <button className='btncontact' type="submit" value="Send">Send</button>
      </div>
    </form>
  );

export default Contact;
