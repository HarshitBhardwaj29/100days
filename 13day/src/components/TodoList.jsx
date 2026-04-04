import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;