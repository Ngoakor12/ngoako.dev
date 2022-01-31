import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <hr className="horizontal-line"/>
      <Projects />
      <hr className="horizontal-line"/>
      <About/>
    </div>
  );
}

export default App;
