import DarkModeButton from "./components/DarkModeButton";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App ">
      <div className="absolute left-4 bottom-4 hidden md:block">
        <DarkModeButton />
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
