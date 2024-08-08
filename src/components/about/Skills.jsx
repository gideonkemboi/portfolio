import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "boxicons";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum
          neque sed nisi omnis, facere fuga blanditiis voluptatibus itaque
          perferendis aut? Natus unde necessitatibus officia! Molestias quae
          minima explicabo minus.
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
              <box-icon
                type="logo"
                name="html5"
                className="text-4xl mb-2"
              ></box-icon>
              HTML5
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="css3"
                className="text-4xl mb-2"
              ></box-icon>
              CSS3
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="javascript"
                className="text-4xl mb-2"
              ></box-icon>
              JavaScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="typescript"
                className="text-4xl mb-2"
              ></box-icon>
              TypeScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="react"
                className="text-4xl mb-2"
              ></box-icon>
              React
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="tailwind-css"
                className="text-4xl mb-2"
              ></box-icon>
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
              <box-icon
                type="logo"
                name="html5"
                className="text-4xl mb-2"
              ></box-icon>
              NodeJs
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="css3"
                className="text-4xl mb-2"
              ></box-icon>
              Express
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="javascript"
                className="text-4xl mb-2"
              ></box-icon>
              JavaScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="typescript"
                className="text-4xl mb-2"
              ></box-icon>
              TypeScript
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="mongodb"
                className="text-4xl mb-2"
              ></box-icon>
              MongoDB
            </motion.li>

            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="postgresql"
                className="text-4xl mb-2"
              ></box-icon>
              PostgreSQL
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="python"
                className="text-4xl mb-2"
              ></box-icon>
              Python
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="django"
                className="text-4xl mb-2"
              ></box-icon>
              Django
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
              <box-icon
                type="logo"
                name="git"
                className="text-4xl mb-2"
              ></box-icon>
              git
            </motion.li>

            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="github"
                className="text-4xl mb-2"
              ></box-icon>
              Github
            </motion.li>
            <motion.li
              variants={icons}
              className="icon flex flex-col items-center"
            >
              <box-icon
                type="logo"
                name="docker"
                className="text-4xl mb-2"
              ></box-icon>
              Docker
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
