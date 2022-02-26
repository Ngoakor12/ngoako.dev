import { useState, useEffect, useContext } from "react";
import { Context } from "../Context";

function Contact() {
  const { setPageTitle } = useContext(Context);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setPageTitle("Contact | Ngoako Ramokgopa");
  }, []);

  function handleChange(e) {
    const { name } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: e.target.value,
      };
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(form);
  // }

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
          <span className="contact-form-email-icon">
            <svg
              // aria-hidden="true"
              role="img"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
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
