import { useEffect, useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";

function App() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      window.setTimeout(() => {
        setIsPageLoading(false);
      }, 1200);
    };

    if (document.readyState === "complete") {
      hideLoader();
      return;
    }

    window.addEventListener("load", hideLoader, { once: true });
    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  return (
    <>
      <div
        className={`page-loader ${isPageLoading ? "visible" : "hidden"}`}
        aria-live="polite"
        aria-busy={isPageLoading}
      >
        <div className="page-loader__backdrop" aria-hidden="true" />
        <div className="page-loader__grid" aria-hidden="true" />
        <div className="page-loader__orb" aria-hidden="true" />

        <div className="page-loader__content">
          <span className="page-loader__brand">M</span>
          <div className="page-loader__divider" aria-hidden="true" />

          <div className="page-loader__meta">
            <span>Loading</span>
            <span>Portfolio</span>
          </div>

          <div className="page-loader__bar" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>

      <div className={`portfolio-shell ${isPageLoading ? "is-loading" : "is-ready"}`}>
        <Topbar />

        <main id="top">
          <Hero />
          <About />
          <Experience />
          <Contact />
          <ScrollTop />
        </main>
      </div>
    </>
  );
}

export default App;
