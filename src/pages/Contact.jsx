import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false); // State to track submission status
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    
    emailjs.sendForm('service_zximd22', 'template_mem7zgh', form.current, 'gW0tISv1vnEGVuDu_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleCloseMessage = () => {
    setSubmitted(false); // Hide the message
  };

  useEffect(() => {
    // Function to check if all inputs are valid
    const checkValidity = () => {
      const form = document.getElementById('contactForm');
      setIsFormValid(form.checkValidity());
    };

    // Call checkValidity function on input change
    const form = document.getElementById('contactForm');
    form.addEventListener('input', checkValidity);

    return () => form.removeEventListener('input', checkValidity);
  }, []);

  return <div className="backdrop">
    <div className="container">
      <div className="item">
        <div className="contact">
          <div className="first-text">Get in touch</div>
          <div className="social-links">
            <ul className="social-media">
              <li><a href="https://github.com/synnielxy"><i className="bx bxl-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/synnie"><i className="bx bxl-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="submit-form">
          <form ref={form} action="" onSubmit={handleSubmit} id="contactForm">
            <div className="input-box">
              <input type="text" className="input" name="user_name" required />
              <label htmlFor="user_name">Your name</label>
            </div>
            <div className="input-box">
              <input type="email" className="input" name="user_email" required />
              <label htmlFor="user_email">Your email</label>
            </div>
            <div className="input-box">
              <textarea name="message" id="message" cols="30" rows="10" className="input" required></textarea>
              <label htmlFor="message">Your message</label>
            </div>
            <input type="submit" value="Send" className="btn-submit" />
          </form>
        </div>
      </div>

    </div>

    {submitted && (
      <div className="modal-backdrop">
        <div className="modal">
          <h3>Your message has been sent!</h3>
          <button onClick={handleCloseMessage} className="btn-close">Close</button>
        </div>
      </div>

    )}
  </div>;
}