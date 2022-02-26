import { useContext, useEffect } from "react";
import { Context } from "../Context";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  const { setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle("Ngoako Ramokgopa | Software Developer");
  }, []);

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
      <hr className="horizontal-line" />
    </>
  );
}

export default Home;
