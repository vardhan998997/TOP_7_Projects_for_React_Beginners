import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-lg rounded-xl mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleChange}
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={addTask}
        >
          ADD
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md">
            <span className="text-gray-700 font-medium">{task}</span>
            <div className="flex gap-2">
              <button
                onClick={() => moveTaskUp(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
              >
                ⬆
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
              >
                ⬇
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Del
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

