import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <hr className="horizontal-line"/>
      <Projects />
    </div>
  );
}

export default App;
