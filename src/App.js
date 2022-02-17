import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ProjectDetails from "./components/projectDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr className="horizontal-line nav-horizontal-line" />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <hr className="horizontal-line" />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <ProjectDetails />
              <hr className="horizontal-line" />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <hr className="horizontal-line" />
              <Skills />
              <hr className="horizontal-line" />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <hr className="horizontal-line" />
            </>
          }
        />
      </Routes>
      {/* <Hero />
      <hr className="horizontal-line" />
      <Skills />
      <hr className="horizontal-line" />
      <About />
      <hr className="horizontal-line" />
      <Contact />
      <hr className="horizontal-line" /> */}
      <Footer />
    </div>
  );
}

export default App;
