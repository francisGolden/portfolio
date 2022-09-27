import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

function Header() {
  return (
    <AnimatePresence>
      <div
        id="header"
        className="flex justify-between items-center h-screen flex-col w-screen
     text-slate-50 text-6xl p-6 text-center"
      >
        <motion.div className="flex flex-col md:w-[50%] justify-center h-screen">
          <motion.h1
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0,
              delay: 0.7,
              duration: 1,
            }}
          >
            Hi, I'm <b>Francesco.</b>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl text-center"
            initial={{ opacity: 0, scale: 5, zIndex: 99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0,
              delay: 1,
              duration: 1,
            }}
          >
            Here's a super original portfolio that doesn't have anything in
            common with the other millions of web-dev portoflios out there.
            <br></br>
            Me? I like taking long walks surrounded by nature, taking care of my
            cat, reading history books and developing apps/webpages.
          </motion.h2>
        </motion.div>

        <motion.a
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          whileTap={{ scale: 2 }}
          transition={{ type: "spring", bounce: 0, delay: 1, duration: 1.3 }}
          href="#projects"
          className="p-12"
        >
          <AiOutlineDown />
        </motion.a>
      </div>
    </AnimatePresence>
  );
}

export default Header;
