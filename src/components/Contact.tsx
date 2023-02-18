import { useState } from "react";
import { mailIcon } from "../svgs";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: e.target.value,
      };
    });
  }

  return (
    <section className="contact" id="contact">
      <header className="contact-header">
        <h2 className="contact-header-title">Get in touch</h2>
        <p className="contact-header-description">
          If you like what you see, have any enquiries or opportunities, fill in
          the form, submit and I’ll get back to you as soon as I can.
        </p>
      </header>
      <form
        id="contact-form"
        action="https://formspree.io/f/xqknpbgw"
        method="POST"
      >
        <p className="contact-form-email">
          <span className="contact-form-email-icon">{mailIcon}</span>
          ngoakor12@gmail.com
        </p>
        <div className="contact-form-field">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="primary-btn send-message" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
