import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Hero />
      <hr className="horizontal-line" />
      <Projects />
      <hr className="horizontal-line" />
      <Skills />
      <hr className="horizontal-line" />
      <About />
      <hr className="horizontal-line" />
      <Contact />
    </>
  );
}

export default Home;
