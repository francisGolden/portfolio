import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, scale: 5}}
        animate={{opacity: 1, scale: 1}}
        transition={{type: "spring", bounce: 0}}
        className="flex justify-between items-center h-screen flex-col w-screen
     text-slate-50 text-6xl p-12 text-center"
      >
        <div className="flex flex-col justify-center h-[80%]">
          <h1>
            Hi, I'm <b>Francesco.</b>
          </h1>
          <h2 className="text-2xl text-center">
            Here's a super original portfolio that doesn't have anything in
            common with the other millions of web-dev portoflios out there.
          </h2>
        </div>

        <a href="#about">About</a>
      </motion.div>
    </AnimatePresence>
  );
}

export default Header;
