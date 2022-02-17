import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <ScrollToTop />
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
