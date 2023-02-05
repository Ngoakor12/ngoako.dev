import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";
import ProjectDetails from "../pages/ProjectDetails";
import NotFoundPage from "../pages/NotFoundPage";
import { PATH } from "../constants";

function RoutesComponent() {
  return (
    <Routes>
      <Route
        path={PATH.HOME}
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
        path={PATH.PROJECT_DETAILS}
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
  );
}

export default RoutesComponent;
