import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { ContextProvider } from "./AppContext";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <ScrollToTop />
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
