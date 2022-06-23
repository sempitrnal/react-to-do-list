import { nanoid } from "nanoid";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosAddCircle } from "react-icons/io";

export default function AddToDo({ setTodos, color }) {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      setIsValid(true);
      setTodos((prev) => {
        return [
          { todo: input, id: nanoid(), isDone: false, color: color },
          ...prev,
        ];
      });
    } else setIsValid(false);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="mb-5">
      <AnimatePresence>
        {!isValid && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-red-400 absolute top-20"
          >
            Please enter something brah
          </motion.p>
        )}
      </AnimatePresence>
      <form onSubmit={addTodo} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="What to do today?"
          className={`h-[2rem] transition-all  duration-300 shadow-sm outline outline-1 outline-[#a4a4a431] focus:outline-[#333] rounded-lg py-6 px-7 ${
            isValid ? "" : "outline-red-400"
          }`}
        />
        <button className="dark:text-white text-3xl transition duration-300 hover:text-gray-600">
          <IoIosAddCircle />
        </button>
      </form>
    </div>
  );
}
