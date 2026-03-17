function Hero() {
  return (
    <section className="hero" id="hero">
      <section className="headline">
        <h1 className="hero-title">Ngoako Ramokgopa</h1>
        <h2 className="hero-title gradient">{`<Software Developer/>`}</h2>
      </section>
      {/* <p className="hero-subtitle">
        I create <span className="hero-subtitle-italic">functional</span> and{" "}
        <span className="hero-subtitle-italic">aesthetically</span> pleasing
        digital experiences.
      </p> */}
      <p className="hero-subtitle">
        I build <span className="hero-subtitle-bold">fast, user-focused web applications</span> that improve usability.
      </p>
      {/* <p className="hero-subtitle-smaller">
        Currently working at Umuzi, contributing to real-world platforms.</p> */}
      <section className="hero-buttons">
        <a href="#projects" className="primary-btn">
          View my work
        </a>
        <a href="#contact" className="secondary-btn">
          Get in touch
        </a>
      </section>
    </section>
  );
}

export default Hero;
