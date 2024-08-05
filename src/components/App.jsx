import { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scrollRef = useRef();

  // Initialize Locomotive Scroll after the component mounts
  useEffect(() => {
    let locomotiveScroll;

    const initializeScroll = () => {
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true,
      });
      locomotiveScroll.update();
      window.scroll = locomotiveScroll;
    };

    // Check if the document is already fully loaded
    if (document.readyState === "complete") {
      initializeScroll();
    } else {
      // Initialize Locomotive Scroll once the window has fully loaded
      window.addEventListener("load", initializeScroll);
    }

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      window.removeEventListener("load", initializeScroll);
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      className="smooth-scroll bg-light-green overflow-hidden"
    >
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gideon Kemboi | Fullstack Developer</title>
          <meta
            name="description"
            content="Personal portfolio website for Gideon Kemboi with his bio, projects and contact information"
          />
          <html lang="en" />
        </Helmet>
      </HelmetProvider>

      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
