import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr className="horizontal-line nav-horizontal-line" />
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
      <Footer />
    </div>
  );
}

export default App;
