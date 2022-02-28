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
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Navigation />
              <hr className="horizontal-line nav-horizontal-line" />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navigation />
              <hr className="horizontal-line nav-horizontal-line" />
              <Projects />
              <hr className="horizontal-line" />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <Navigation />
              <hr className="horizontal-line nav-horizontal-line" />
              <ProjectDetails />
              <hr className="horizontal-line" />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigation />
              <hr className="horizontal-line nav-horizontal-line" />
              <About />
              <hr className="horizontal-line" />
              <Skills />
              <hr className="horizontal-line" />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navigation />
              <hr className="horizontal-line nav-horizontal-line" />
              <Contact />
              <hr className="horizontal-line" />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Hero />
      <hr className="horizontal-line" />
      <Skills />
      <hr className="horizontal-line" />
      <About />
      <hr className="horizontal-line" />
      <Contact />
      <hr className="horizontal-line" /> */}
    </div>
  );
}

export default App;
