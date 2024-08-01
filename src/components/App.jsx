import { Helmet } from "react-helmet";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./portfolio/Portfolio";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gideon Kemboi | Fullstack Developer</title>
        <meta
          name="description"
          content="Personal portfolio website for Gideon Kemboi with his bio, projects and contact information"
        />
        <html lang="en" />
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
