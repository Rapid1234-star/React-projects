import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Sample Task"]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const showtasks = tasks.map((task, index) => {
    return (
      <div className="task">
        <li key={index}>{task}</li>
        <button className="delete" onClick={() => handleDelete(index)}>
          Delete
        </button>
        <button className="up" onClick={() => handleUp(index)}>
          👆
        </button>
        <button className="down" onClick={() => handleDown(index)}>
          👇
        </button>
        <button className="edit" onClick={() => handleEdit(index)}>
          📝
        </button>
      </div>
    );
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  function handleAdd() {
    if (input.trim() !== "") {
      setTasks((prev) => [...prev, input]);
      setInput("");
    } else {
      alert("Please enter a valid task");
    }
  }
  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index - 1],
      ];
      setTasks(newTasks);
    }
  }

  function handleDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index + 1],
      ];
      setTasks(newTasks);
    }
  }

  function handleEdit(index) {
    setIsEditing(true);
    const newTask = prompt("Edit Your Task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      if (newTask.trim() === tasks[index]) {
        alert("No changes made 👍");
      } else {
        const updatedTasks = [...tasks];
        updatedTasks[index] = newTask.trim();
        setTasks(updatedTasks);
      }
    } else if (newTask !== null) {
      alert("Task cannot be empty 🤦‍♂️");
    }
    setIsEditing(false);
  }
  return (
    <div className="todo">
      <h1>TO-DO LIST</h1>
      <div className="lists">
        <input
          type="text"
          value={input}
          placeholder="Add a task"
          onChange={handleChange}
        />
        <button onClick={handleAdd} className="add">
          Add Task
        </button>
      </div>
      <ul>{showtasks}</ul>
    </div>
  );
}

export default App;
