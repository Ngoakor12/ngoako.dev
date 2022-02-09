import PrimaryButton from "./PrimaryButton";
import cv from "./assets/ngoako-cv.pdf";

function About() {
  return (
    <section className="about">
      <header className="about-header">
        <h2 className="about-header-title">A bit about me</h2>
      </header>
      <section className="about-content">
        <div className="about-picture"></div>
        <div className="about-body">
          <p className="about-text">
            I’m <strong>Ngoako Gift Ramokgopa</strong> (you can call me Gift if
            you can’t pronounce my first name). I'm a{" "}
            <strong>Frontend Developer</strong> from Ga-Ramokgopa a dusty
            village in <strong>Polokwane, South Africa</strong>. I got into tech
            via graphic design and slowly started learning code. I like playing{" "}
            <strong>FIFA</strong>, watching <strong>football</strong>, and{" "}
            <strong>trying new things</strong> in my free time.
          </p>
          <PrimaryButton>
            <a href={cv} target="_blank" rel="noreferrer">
              View CV
            </a>
          </PrimaryButton>
        </div>
      </section>
    </section>
  );
}

export default About;
