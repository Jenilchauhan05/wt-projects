import { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    const text = task.trim();
    if (!text) return;
    const newItem = { id: Date.now(), text, completed: false }; // <- NEW
    setTodo((old) => [...old, newItem]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodo((old) => old.filter((item) => item.id !== id));
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const saveEdit = () => {
    setTodo((old) =>
      old.map((item) =>
        item.id === editId ? { ...item, text: editText } : item
      )
    );
    setEditId(null);
    setEditText("");
  };

  const toggleDone = (id) => {
    setTodo((old) =>
      old.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h1>Todo List App</h1>

      <input
        placeholder="Add your task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <hr />

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    opacity: item.completed ? 0.6 : 1,
                  }}
                >
                  {item.text}
                </span>
                &nbsp;&nbsp;

                <button onClick={() => toggleDone(item.id)}>
                  {item.completed ? "Undo" : "Mark as Done"}
                </button>

                <button onClick={() => startEdit(item)}>Edit</button>
                <button onClick={() => deleteTask(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
