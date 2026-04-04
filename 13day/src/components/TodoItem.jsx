function TodoItem({ task, index, deleteTask }) {
  return (
    <div>
      <p>{task}</p>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;