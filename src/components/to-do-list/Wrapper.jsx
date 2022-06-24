import React from "react";
import { motion } from "framer-motion";
export default function Wrapper({ children }) {
  const dropIn = {
    hidden: {
      y: "-5vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={dropIn}
      className="w-[clamp(350px,60%,900px)] h-[50rem] rounded-lg shadow-[0_10px_20px_#0000004]  shadow-[#00000020] bg-white dark:bg-dark dark:shadow-none transition duration-300 overflow-hidden flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}
