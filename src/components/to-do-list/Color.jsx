import React from "react";
import { motion } from "framer-motion";
export default function Color({
  color,
  initial,
  setColor,
  colors,
  index,
  onClick,
}) {
  const select = () => {
    let newColor = [];
    newColor = colors.filter((e) => e !== color);
    newColor.unshift(color);
    setColor(newColor);
  };
  const active = {
    backgroundColor:
      color === "yellow"
        ? "#efb93b"
        : color === "red"
        ? "#e46f6f"
        : color === "blue"
        ? "#5e9fe0"
        : color === "gray"
        ? "#9e9e9e"
        : color === "green"
        ? "#3f5e32"
        : color === "pink"
        ? "#dd7cad"
        : color === "purple"
        ? "#a45dca"
        : "",
  };
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      initial={{ x: `${initial * index}px`, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: `${initial * index}px`, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
      }}
      className={`w-8 h-8 rounded-[50%]  cursor-pointer`}
      style={active}
      onClick={
        index !== 0
          ? () => {
              onClick();
              select();
            }
          : () => {
              onClick();
            }
      }
    ></motion.div>
  );
}
