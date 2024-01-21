import { useState, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // State to track submission status
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Update the submitted state to true
    // Submit form logic here
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
          <form action="" onSubmit={handleSubmit} id="contactForm">
            <div className="input-box">
              <input type="text" className="input" required /><label htmlFor="">Your name</label>
            </div>
            <div className="input-box">
              <input type="email" className="input" required /><label htmlFor="">Your email</label>
            </div>
            <div className="input-box">
              <textarea name="" id="message" cols="30" rows="10" className="input" required></textarea>
              <label htmlFor="">Your message</label>
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