import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import chatapp from "/src/assets/images/chatapp-ss.png";
import chatappApi from "/src/assets/images/chatapp-api.png"

const Portfolio = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div
      ref={ref}
      data-scroll-section
      id="container"
      className="text-graphite m-auto w-screen pt-14 h-full"
    >
      <motion.div
        className="flex flex-col max-w-6xl space-y-12 md:space-y-0 text-center md:text-left md:flex-row md:space-x-10 justify-between w-3/4 h-10/12 m-auto"
        id="portfolio"
        initial="hidden"
        animate={animation}
        variants={list}
      >
        <motion.div
          className="flex flex-row space-x-2 m-auto md:m-0 md:flex-col md:space-y-2 w-full md:w-1/4 h-full text-4xl font-display"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#container"
          variants={list}
        >
          <p>Featured</p>
          <p className="md:ml-8">Projects</p>
        </motion.div>

        <div className="flex flex-col space-y-20 md:space-y-0 w-full md:w-3/4 h-full text-center">
          <motion.div
            data-scroll
            data-scroll-delay=".1"
            data-scroll-speed="5"
            variants={list}
          >
            <img className="mb-4" src={chatapp} alt="project" />
            <ProjectCard
              name={"messaging app web client"}
              tags={["html", "css", "react"]}
              github="https://github.com/gideonkemboi/messaging-app-client"
              liveDemo="https://chat-app-wjws.onrender.com/"
              description={
                "Messaging App client build with React and consumes an api built with express"
              }
            />
          </motion.div>

          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <img className="mb-4" src={chatappApi} alt="project" />
            <ProjectCard
              name={"messaging app API"}
              tags={["node.js", "express", "mongodb"]}
              github="https://github.com/gideonkemboi/messaging-app-api"
              liveDemo="https://messaging-app-api-rf3y.onrender.com/"
              description={
                "Messaging app API built with express with features such as one-on-one messaging between users, group messaging, contacts handling among others."
              }
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
