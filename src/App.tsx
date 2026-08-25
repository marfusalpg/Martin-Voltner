import "./App.css";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="portfolio-shell">
      <Topbar />

      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Contact />
        <ScrollTop />
      </main>
    </div>
  );
}

export default App;
