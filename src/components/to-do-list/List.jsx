import { AnimatePresence, motion } from "framer-motion";
import ToDo from "./ToDo";

export default function List({ toDos, setTodos, color }) {
  const toDoElements = toDos
    ? toDos.map((e) => {
        return (
          <ToDo
            todo={e.todo}
            key={e.id}
            id={e.id}
            setTodos={setTodos}
            isDone={e.isDone}
            toDos={toDos}
            color={e.color}
          />
        );
      })
    : null;
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="w-[100%] h-[60%]  flex flex-col items-center overflow-y-auto"
    >
      <motion.div layout className="mt-5 flex flex-col gap-5 w-full">
        <AnimatePresence>{toDoElements}</AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
