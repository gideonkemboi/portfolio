import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import holder from "/src/assets/images/holder.jpg";

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
            <img
              className="mb-4"
              src={holder}
              alt="project"
            />
            <ProjectCard
              name={"Lorem"}
              tags={["Lorem"]}
              github={"#"}
              liveDemo={"#"}
              alt={"Lorem"}
              description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem explicabo ullam velit ipsam, minus quam voluptate debitis. Aperiam voluptatem nemo, architecto, quis et, sit esse aut doloribus numquam quaerat ut."}
            />
          </motion.div>

          <div data-scroll data-scroll-delay=".1" data-scroll-speed="5">
            <img className="mb-4" src={holder} alt="project" />
            <ProjectCard
              name={"Lorem"}
              tags={["Lorem ipsum"]}
              github={"#"}
              liveDemo={"#"}
              alt={"Lorem ipsum"}
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem explicabo ullam velit ipsam, minus quam voluptate debitis. Aperiam voluptatem nemo, architecto, quis et, sit esse aut doloribus numquam quaerat ut."
              }
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
