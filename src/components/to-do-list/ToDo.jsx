import { motion } from "framer-motion";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
export default function ToDo({ todo, toDos, setTodos, id, isDone, color }) {
  const active = {
    backgroundColor:
      color[0] === "yellow"
        ? "#efb93b"
        : color[0] === "red"
        ? "#e46f6f"
        : color[0] === "blue"
        ? "#5e9fe0"
        : color[0] === "gray"
        ? "#9e9e9e"
        : color[0] === "green"
        ? "#3f5e32"
        : color[0] === "pink"
        ? "#dd7cad"
        : color[0] === "purple"
        ? "#a45dca"
        : "",
    color:
      color[0] === "yellow"
        ? "#000"
        : color[0] === "red"
        ? ""
        : color[0] === "blue"
        ? ""
        : color[0] === "gray"
        ? ""
        : color[0] === "green"
        ? "#fff"
        : color[0] === "pink"
        ? "#fff"
        : color[0] === "purple"
        ? ""
        : "",
  };
  const deleteTodo = () => {
    setTodos((prev) => {
      const arr = prev.filter((e) => e.id !== id);
      localStorage.setItem("todos", JSON.stringify(arr));
      return arr;
    });
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
      exit={{ opacity: 0, x: "-100px" }}
      transition={{ duration: 0.3 }}
      style={active}
      className={`flex gap-5 dark:text-white  p-5 rounded-md shadow-md dark:shadow-none w-[40rem]  justify-between max-w-[40rem ] `}
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
