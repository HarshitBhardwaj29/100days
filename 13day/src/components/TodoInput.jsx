import { useState } from "react";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleTask = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleTask}>Add</button>
    </div>
  );
}

export default TodoInput;