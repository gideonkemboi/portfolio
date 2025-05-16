import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const nav = {
    hidden: { y: "-50vw", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 2.2,
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div data-scroll-section className="relative z-10">
      <motion.ul
        className="absolute right-0 top-0 mx-6 my-12 flex justify-end space-x-8 font-display text-light-green md:mx-14 md:space-x-16 2xl:text-lg"
        variants={nav}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="cursor-pointer border-yellow-500 hover:border-b hover:text-yellow-500"
          whileHover={{ scale: 1.2 }}
          variants={nav}
        >
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </motion.li>
        <motion.li
          className="cursor-pointer border-yellow-500 hover:border-b hover:text-yellow-500"
          whileHover={{ scale: 1.2 }}
          variants={nav}
        >
          <HashLink smooth to="/#portfolio">
            Projects
          </HashLink>
        </motion.li>
        <motion.li
          className="cursor-pointer border-yellow-500 hover:border-b hover:text-yellow-500"
          whileHover={{ scale: 1.2 }}
          variants={nav}
        >
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Nav;
