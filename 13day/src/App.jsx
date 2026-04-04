import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, text]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;