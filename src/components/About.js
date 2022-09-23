import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        text-slate-50 text-6xl p-12 text-center"
      >
        <div className="flex flex-col text-3xl justify-center h-[80%]">
          <span className="font-bold text-4xl">Who's this guy?</span>
          <span>I'm a person from Italy.</span>
          <span>
            I like taking long walks surrounded by the nature, <br></br>
            taking care of my cat and developing apps/webpages.
          </span>
        </div>

        <a href="#projects">Projects</a>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
