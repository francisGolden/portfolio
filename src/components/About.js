import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {AiOutlineDown} from "react-icons/ai"

function About() {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        
        id="about"
        className="flex justify-between items-center h-screen flex-col w-screen
        text-slate-50 text-6xl p-6
        text-center"
      >
        <div className="flex flex-col text-4xl justify-around h-[80%]">

        </div>

        <a href="#projects"><AiOutlineDown /></a>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
