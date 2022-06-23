import { motion } from "framer-motion";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
export default function ToDo({ todo, toDos, setTodos, id, isDone, color }) {
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };
  const done = () => {
    let newArr = [];
    newArr = toDos.filter((e) => e.id !== id);
    toDos.map((e) =>
      e.id === id && !e.isDone
        ? newArr.push({ ...e, isDone: true })
        : e.id === id && e.isDone
        ? newArr.unshift({ ...e, isDone: false })
        : null
    );
    setTodos(newArr);
  };
  return (
    <motion.div
      layout
      exit={{ opacity: 0, x: "-1000px" }}
      transition={{ duration: 0.3 }}
      className={`flex gap-5 dark:text-white bg-${color[0]}-400 p-5 rounded-md shadow-md dark:shadow-none w-[40rem]  justify-between max-w-[40rem ] `}
    >
      <p
        onClick={done}
        className={`w-[15rem] ${
          isDone ? "line-through text-gray-500" : ""
        } transition duration-300`}
      >
        {todo}
      </p>
      <div className="buttons flex gap-2 text-lg transition duration-300 ">
        <button>
          <AiFillEdit />
        </button>
        <button onClick={(e) => deleteTodo(e)} className="">
          <AiFillDelete />
        </button>
      </div>
    </motion.div>
  );
}
