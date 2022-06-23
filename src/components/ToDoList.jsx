import AddToDo from "./to-do-list/AddToDo";
import Background from "./to-do-list/Background";
import Header from "./to-do-list/Header";
import Wrapper from "./to-do-list/Wrapper";
import { useState, useEffect } from "react";
import List from "./to-do-list/List";
import { AnimatePresence } from "framer-motion";
import ColorWrapper from "./to-do-list/ColorWrapper";

function ToDoList() {
  const [toDos, setTodos] = useState([]);
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
        <ColorWrapper color={color} setColor={setColor} />
        <Header />
        <AddToDo setTodos={setTodos} color={color} />
        <AnimatePresence>
          <List toDos={toDos} setTodos={setTodos} color={color} />
        </AnimatePresence>
      </Wrapper>
    </Background>
  );
}

export default ToDoList;
