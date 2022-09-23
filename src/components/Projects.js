import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const Box = ({ children, background }) => {
    return (
      <motion.li
        whileHover={{ y: -2, scale: 1.2 }}
        transition={{ type: "spring", bounce: 0 }}
        className={`flex text-slate-600 justify-center 
    items-center border-solid ${background} bg-slate-200/80 
    bg-cover bg-blend-soft-light shadow-lg p-4 h-[80%]`}
      >
        {children}
      </motion.li>
    );
  };

  return (
    <div
      id="projects"
      className="flex justify-between items-center 
      h-screen flex-col w-screen bg-slate-600
  text-slate-50 text-6xl p-12 text-center"
    >
      <ul
        className="grid grid-cols-2 grid-rows-2 items-center 
      justify-center h-[90%] gap-4"
      >
        <Box background="bg-historja">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/francisGolden/historja#readme"
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
      </ul>

      <a href="#contact">Contact</a>
    </div>
  );
}

export default Projects;
