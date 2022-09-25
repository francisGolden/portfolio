import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {AiOutlineDown} from "react-icons/ai"

function Header() {
  return (
    <AnimatePresence>
      <motion.div id="header"
        className="flex justify-between items-center h-screen flex-col w-screen
     text-slate-50 text-6xl p-6 text-center"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0, delay: 0.5, duration: 1.3 }}
            className="flex flex-col justify-center h-screen"
          >
            <h1>
              Hi, I'm <b>Francesco.</b>
            </h1>
            <h2 className="text-2xl text-center">
              Here's a super original portfolio that doesn't have anything in
              common with the other millions of web-dev portoflios out there.
            </h2>
          </motion.div>
        </AnimatePresence>

        <motion.a
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", bounce: 0, delay: 0.5, duration: 1.3 }}
          href="#about"
          className="p-12"
        >
          <AiOutlineDown />
        </motion.a>
      </motion.div>
    </AnimatePresence>
  );
}

export default Header;
