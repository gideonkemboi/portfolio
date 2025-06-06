import { useState, useEffect, useRef } from "react";
import Nav from "../../Nav";
import NET from "vanta/dist/vanta.net.min";
import { motion } from "framer-motion";
import * as THREE from "three";
import gmail from "../../assets/icons/gmail.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Hero = () => {
  const container = {
    hidden: { y: "3vw", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 2.6,
        staggerChildren: 0.4,
      },
    },
  };

  const icon = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x1e1e21,
          points: 15.0,
          spacing: 17.0,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div data-scroll-section ref={myRef}>
      <Nav />
      <div className="relative justify-center text-light-green font-display h-screen w-screen flex flex-col space-y-6 2xl:space-y-12 px-20 2xl:px-64">
        <motion.h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-3"
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl 2xl:text-9xl"
        >
          GIDEON KEMBOI
        </motion.h1>
        <motion.div
          variants={container}
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", duration: 3, delay: 0.5 },
          }}
          className="flex space-x-2 md:-space-x-2 text-xl md:text-2xl 2xl:text-4xl"
        >
          <p
            data-scroll
            data-scroll-position="top"
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
          >
            FULL-&nbsp;
          </p>
          <p
            data-scroll
            data-scroll-position="top"
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            STACK &nbsp;
          </p>
          <p
            data-scroll
            data-scroll-position="top"
            data-scroll-direction="vertical"
            data-scroll-speed="-1"
          >
            DEVELOPER
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-16 md:bottom-10 right-1/2 md:right-1/3 flex flex-col justify-center space-y-4 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={icon}
            className="text-sm md:text-md 2xl:text-lg font-display tracking-wider animate-bounce"
          >
            Scroll
          </motion.p>
          <motion.svg
            variants={icon}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-light-green m-auto animate-bounce transition duration-150 hover:text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </motion.svg>
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-10 md:bottom-10 md:right-10 flex flex-col space-y-2"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.a
            variants={icon}
            className="links bg-red-200 w-10 h-10 flex items-center justify-center p-2 rounded-full transform transition hover:scale-125 active:scale-95"
            href="https://github.com/gideonkemboi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="github-logo"
              className="h-4 w-4 md:h-5 md:w-5"
            ></img>
          </motion.a>

          <motion.a
            variants={icon}
            className="bg-red-200 w-10 h-10 flex items-center justify-center p-2 rounded-full transform transition hover:scale-125 active:scale-95"
            href="https://www.linkedin.com/in/gideonkemboi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin-logo"
              className="h-4 w-4 md:h-5 md:w-5"
            ></img>
          </motion.a>

          <motion.a
            variants={icon}
            className="bg-red-200 w-10 h-10 flex items-center justify-center p-2 rounded-full transform transition hover:scale-125 active:scale-95"
            href="mailto:gedionkemboi18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gmail}
              alt="gmail-logo"
              className="h-4 w-4 md:h-5 md:w-5"
            ></img>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
