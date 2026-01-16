import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
  <h2 className="section-title">Get In Touch</h2>
  
  {/* Optional: Add this intro message */}
  <div className="contact-intro">
    Feel free to reach out for collaboration or just to say hello!
  </div>
  
  {/* Optional: Add social links */}
  <div className="social-links">
    <a href="https://www.linkedin.com/in/darvin-padariya-b10ba6298/" className="social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="https://github.com/darvin-patel10" className="social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-github"></i>
    </a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=darvinstd9749@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-regular fa-envelope"></i>
    </a>
    <a href="https://wa.me/917201956010?text=Hello%20Darvin,%20I%20visited%20your%20portfolio" className="social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="tel:+917201956010" className="social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-solid fa-phone"></i>
    </a>
  </div>
  <div className="contact-info">
    <a href="mailto:darvinstd9749@gmail.com">
     darvinstd9749@gmail.com
    </a>
    <span>|</span>
    <a href="tel:+917201956010">
      +91 7201956010
    </a>
  </div>
</section>
  );
}

export default Contact;
