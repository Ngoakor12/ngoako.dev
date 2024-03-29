import { useContext } from "react";
import { Context } from "../AppContext";
import { PortableText } from "@portabletext/react";

function About() {
  const { aboutContent, urlFor, cvUrl } = useContext(Context);



  return (
    <section className="about" id="about">
      <header className="about-header">
        <h2 className="about-header-title">A bit about me</h2>
      </header>
      {aboutContent ? (
        <section className="about-content">
          <img
            className="about-picture"
            src={urlFor(aboutContent.aboutImage.image.asset)}
            alt={aboutContent.aboutImage.alt}
          />
          <div className="about-body">
            <div className="about-text">
              <PortableText value={aboutContent.body} />
            </div>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              View CV
            </a>
          </div>
        </section>
      ) : (
        <p>Loading about...</p>
      )}
    </section>
  );
}

export default About;
