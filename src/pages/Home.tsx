import { useContext, useEffect } from "react";
import { Context } from "../Context";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  const { setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle("Ngoako Ramokgopa | Software Developer");
    // eslint-disable-next-line
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
