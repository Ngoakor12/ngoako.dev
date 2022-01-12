function Hero() {
  return (
    <section className="hero">
      <section className="headline">
        <h1 className="hero-title">Ngoako Ramokgopa</h1>
        <h2 className="hero-title gradient">{`<Software Developer/>`}</h2>
      </section>
      <p className="hero-subtitle">
        I create <span className="hero-subtitle-italic">functional</span> and{" "}
        <span className="hero-subtitle-italic">aesthetically</span> pleasing
        digital experiences.
      </p>
      <section className="hero-buttons">
        <button className="primary-btn">View work</button>
        <button className="secondary-btn">Get in touch</button>
      </section>
    </section>
  );
}

export default Hero;
