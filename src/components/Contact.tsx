import { mailIcon } from "../svgs";
import { useForm, SubmitHandler } from "react-hook-form";
import InputWrapper from "./InputWrapper";

interface FormInput {
  email: string;
  name: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    // Sending data to formspree.io
    const response = await fetch("https://formspree.io/f/xqknpbgw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    const result = await response.json();

    // Redirecting to formspree.io success page
    window.location.replace(`https://formspree.io${result.next}`);
  };

  return (
    <section className="contact" id="contact">
      <header className="contact-header">
        <h2 className="contact-header-title">Get in touch</h2>
        <p className="contact-header-description">
          If you like what you see, have any enquiries or opportunities, fill in
          the form, submit and I’ll get back to you as soon as I can.
        </p>
      </header>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="contact-form-email">
          <span className="contact-form-email-icon">{mailIcon}</span>
          ngoakor12@gmail.com
        </p>
        <InputWrapper>
          <label htmlFor="name">Your name</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>This is a required field</span>}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email">Your email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>This is a required field</span>}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="message">Message</label>
          <textarea {...register("message", { required: true })}></textarea>
          {errors.message && <span>This is a required field</span>}
        </InputWrapper>
        <button className="primary-btn send-message" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
