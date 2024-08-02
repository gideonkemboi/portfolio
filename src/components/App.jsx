import { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

const App = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    locomotiveScroll.update();
    window.scroll = locomotiveScroll;

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
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
