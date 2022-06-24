import AddToDo from "./to-do-list/AddToDo";
import Background from "./to-do-list/Background";
import Header from "./to-do-list/Header";
import Wrapper from "./to-do-list/Wrapper";
import { useState, useEffect } from "react";
import List from "./to-do-list/List";
import { AnimatePresence } from "framer-motion";
import ColorWrapper from "./to-do-list/ColorWrapper";
import DarkModeButton from "./DarkModeButton";

function ToDoList() {
  const [toDos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [color, setColor] = useState([
    "yellow",
    "red",
    "blue",
    "gray",
    "green",
    "pink",
    "purple",
  ]);
  return (
    <Background>
      <Wrapper>
        <div className="absolute right-4 top-[-12px] md:hidden">
          <DarkModeButton />
        </div>
        <ColorWrapper color={color} setColor={setColor} />
        <Header />
        <AddToDo setTodos={setTodos} color={color} toDos={toDos} />
        <AnimatePresence>
          <List toDos={toDos} setTodos={setTodos} color={color} />
        </AnimatePresence>
      </Wrapper>
    </Background>
  );
}

export default ToDoList;
