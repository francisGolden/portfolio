import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

function Projects() {
  const Box = ({ children, background }) => {
    return (
      <motion.li
        whileHover={{ scale: 1.2, y: 0, zIndex: 1 }}
        transition={{ type: "spring", bounce: 0, zIndex: 100, duration: 0.4 }}
        className={`flex text-slate-800 justify-center font-bold
    items-center border-solid ${background} bg-slate-300 
    bg-cover bg-blend-soft-light shadow-lg p-4 h-[100%]`}
      >
        {children}
      </motion.li>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        id="projects"
        className="flex justify-between items-center 
      flex-col w-screen 
  text-slate-50 text-6xl p-12 text-center"
      >
        <h2 className="mb-4">Projects</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="grid md:grid-cols-2 grid-cols-1
          md:grid-rows-2 grid-rows-4 items-center gap-2 md:gap-4
      justify-center md:text-6xl text-5xl md:h-[600px]"
        >
          <Box background="bg-historja">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/francisGolden/historja#readme"
              className=""
            >
              Historja
            </a>
          </Box>
          <Box background="bg-waldo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/francisGolden/Where-s-Waldo#readme"
            >
              Where's Waldo
            </a>
          </Box>
          <Box background="bg-mario">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/francisGolden/Super-Mario-Memory-Card-Game#readme"
            >
              Mario
            </a>
          </Box>
          <Box>Coming soon...</Box>
        </motion.ul>
        <a href="#contact" className="p-6">
          <AiOutlineDown />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
