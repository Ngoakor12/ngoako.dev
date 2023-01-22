import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

const CV_URL =
  "https://drive.google.com/file/d/1RjQSRgqd8p-iRrbJkah5FR4chgpeMnLf/view?usp=sharing";

function About() {
  const {
    aboutContent,
    urlFor,
    BlockContent,
    serializers,
    setPageTitle,
  } = useContext(Context);

  useEffect(() => {
    setPageTitle("About | Ngoako Ramokgopa");
    // eslint-disable-next-line
  }, []);

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
              <BlockContent
                blocks={aboutContent.body}
                projectId="542oyksl"
                dataset="production"
                serializers={serializers}
              />
            </div>
            <a
              href={CV_URL}
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
