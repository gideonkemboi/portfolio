import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html5 from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import tailwind from "../../assets/icons/tailwind-css.svg";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import typescript from "../../assets/icons/typescript.svg";
import python from "../../assets/icons/python.svg";
import django from "../../assets/icons/django.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import express from "../../assets/icons/express.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import postgresql from "../../assets/icons/postgresql.svg";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import docker from "../../assets/icons/docker.svg";
import postman from "../../assets/icons/postman.svg";

function Skills() {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  const header = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 1,
      },
    },
    hidden: {
      y: "5vw",
      opacity: 0,
    },
  };

  const icons = {
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
      className="flex flex-col max-w-6xl space-y-12 lg:space-y-24 w-3/4 py-12 lg:py-24 m-auto my-0 lg:m-auto lg:my-4"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 w-full text-center lg:text-left m-auto">
        <motion.h1
          initial="hidden"
          animate={animation}
          variants={header}
          className="font-display text-4xl lg:w-1/4"
        >
          Skills
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={animation}
          variants={header}
          className="font-body lg:text-lg leading-loose lg:leading-loose lg:w-3/4"
        >
          I specialize in developing modern web applications with a strong
          foundation in both frontend and backend technologies. On the frontend,
          I excel in HTML5, CSS3, TailwindCSS, React, JavaScript, and
          TypeScript, building dynamic and responsive user interfaces that
          provide a seamless user experience. My backend expertise includes
          Python with Django and Node.js with Express, where I create robust
          server-side applications and design efficient APIs and handle database
          interactions with MongoDB and PostgreSQL. With a comprehensive skill
          set that spans the full stack, I&apos;m equipped to build and maintain
          scalable applications from start to finish.
        </motion.p>
      </div>

      <div className="flex flex-col w-full text-center lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 lg:divide-x divide-opacity-30 divide-graphite justify-between skills">
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={animation}
          variants={header}
        >
          <motion.h2 variants={header} className="font-display text-lg">
            Front-end
          </motion.h2>
          <motion.ul
            variants={header}
            className="grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14"
          >
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img src={html5} alt="html-logo" className="text-4xl mb-2"></img>
              HTML5
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img src={css} alt="css-logo" className="text-4xl mb-2"></img>
              CSS3
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={javascript}
                alt="javascript-logo"
                className="text-4xl mb-2"
              ></img>
              JavaScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={typescript}
                alt="typescript-logo"
                className="text-4xl mb-2"
              ></img>
              TypeScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img src={react} alt="react-logo" className="text-4xl mb-2"></img>
              React
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={tailwind}
                alt="tailwindcss-logo"
                className="text-4xl mb-2"
              ></img>
              Tailwind
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={animation}
          variants={header}
        >
          <motion.h2 variants={header} className="font-display text-lg">
            Back-end
          </motion.h2>
          <motion.ul
            variants={header}
            className="grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14"
          >
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={python}
                alt="python-logo"
                className="text-4xl mb-2"
              ></img>
              Python
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={django}
                alt="django-logo"
                className="text-4xl mb-2"
              ></img>
              Django
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={javascript}
                alt="javacript-logo"
                className="text-4xl mb-2"
              ></img>
              JavaScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={nodejs}
                alt="nodejs-logo"
                className="text-4xl mb-2"
              ></img>
              NodeJs
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={express}
                alt="express-logo"
                className="text-4xl mb-2"
              ></img>
              Express
            </motion.li>

            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={typescript}
                alt="typescript-logo"
                className="text-4xl mb-2"
              ></img>
              TypeScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={mongodb}
                alt="mongodb-logo"
                className="text-4xl mb-2"
              ></img>
              MongoDB
            </motion.li>

            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={postgresql}
                alt="postgres-logo"
                className="text-4xl mb-2"
              ></img>
              PostgreSQL
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={animation}
          variants={header}
        >
          <motion.h2 variants={header} className="font-display text-lg">
            Miscellaneous
          </motion.h2>
          <motion.ul
            variants={header}
            className="grid grid-rows-2 grid-cols-3 gap-y-16 justify-items-center font-body text-sm pt-14"
          >
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img src={git} alt="git-logo" className="text-4xl mb-2"></img>
              git
            </motion.li>

            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={github}
                alt="github-logo"
                className="text-4xl mb-2"
              ></img>
              Github
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={docker}
                alt="docker-logo"
                className="text-4xl mb-2"
              ></img>
              Docker
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <img
                src={postman}
                alt="postman-logo"
                className="text-4xl mb-2"
              ></img>
              Postman
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
