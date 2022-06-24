import { nanoid } from "nanoid";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosAddCircle } from "react-icons/io";

export default function AddToDo({ setTodos, color, toDos }) {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      setIsValid(true);
      setTodos((prev) => {
        const arr = [
          { todo: input, id: nanoid(), isDone: false, color: color },
          ...prev,
        ];
        localStorage.setItem("todos", JSON.stringify(arr));
        return arr;
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
      <form
        onSubmit={addTodo}
        className="flex w-full  justify-center items-center"
      >
        <div className="relative mx-7">
          <input
            required
            type="text"
            id="to-do"
            value={input}
            onChange={handleChange}
            className={`h-[2rem] transition-all bg-[#f5f5f5] dark:bg-[#292929]  dark:text-white duration-300 shadow-sm   dark:focus:bg-dark focus:bg-white rounded-lg py-6 px-7 w-full ${
              isValid ? "" : "outline-red-400 relative "
            } `}
          />
          <label
            htmlFor="to-do"
            className="absolute left-7 top-3 text-gray-400 font-thin rounded-md dark:text-white "
          >
            What to do today?
          </label>
        </div>
        <button className="dark:text-white text-3xl transition duration-300 hover:text-gray-600 hidden md:block">
          <IoIosAddCircle />
        </button>
      </form>
    </div>
  );
}
