import { useState } from "react";

import PrimaryButton from "./PrimaryButton";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className="contact">
      <header className="contact-header">
        <h2 className="contact-header-title">Get in touch</h2>
        <p className="contact-header-description">
          If you like what you see, have any enquiries or opportunities, fill in
          the form, submit and I’ll get back to you as soon as I can.
        </p>
      </header>
      {/* <section className="contact-content"> */}
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-field">
          <label for="name">Your name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-field">
          <label for="email">Your email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-field">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <PrimaryButton type="submit">Send message</PrimaryButton>
      </form>
      {/* </section> */}
    </section>
  );
}

export default Contact;
