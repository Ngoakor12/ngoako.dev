import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProjectDetails from "./pages/ProjectDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
