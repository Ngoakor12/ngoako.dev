import cv from "./assets/ngoako-cv.pdf";
import { useContext } from "react";
import { Context } from "../Context";

function About() {
  const { aboutContent, urlFor, BlockContent, serializers } =
    useContext(Context);

  return (
    <section className="about">
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
            <p className="about-text">
              <BlockContent
                blocks={aboutContent.body}
                projectId="542oyksl"
                dataset="production"
                serializers={serializers}
              />
            </p>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
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
