function Contact() {
  return (
    <div className="contact-container">

      <h1>📞 Contact Us</h1>

      <div className="contact-info">

        <div className="contact-card">
          <h3>🏫 College</h3>
          <p>Madanapalle Institute of Technology and Science</p>
        </div>

        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>Madanapalle, Andhra Pradesh, India</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>studentportal@gmail.com</p>
        </div>

      </div>

      <h2>Send us a Message</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <textarea
          rows="5"
          placeholder="Enter Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;