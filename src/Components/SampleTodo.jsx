import React, { useState } from 'react';

const SampleTodo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() === ""){
            return;
        }
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditText(tasks[index]);
    };

    const updateTask = () => {
        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = editText;
            setTasks(updatedTasks);
            setEditIndex(null);
            setEditText("");
        }
    };

    const moveUpwards = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    const moveDownwards = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl text-center">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter task..."
                    required
                    value={newTask}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={addTask}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

            <ul className="flex flex-col items-center justify-center space-y-2">
                {tasks.map((task, index) => (
                    <li key={index} className="bg-gray-200 px-4 py-2 rounded-lg shadow-md w-64 text-center flex flex-col gap-2">
                        {editIndex === index ? (
                            <input
                                value={editText}
                                required
                                onChange={(e) => setEditText(e.target.value)}
                                className="border border-gray-400 p-1 rounded w-full"
                            />
                        ) : (
                            <h1 className="text-lg font-semibold text-gray-800">{task}</h1>
                        )}
                        
                        <div className="flex gap-2">
                            {editIndex === index ? (
                                <button
                                    onClick={updateTask}
                                    className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEditing(index)}
                                    className="bg-yellow-500 px-3 py-1 rounded text-white hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                            )}

                            <button
                                onClick={() => deleteTask(index)}
                                className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700"
                            >
                                Del
                            </button>
                            <button
                                onClick={() => moveUpwards(index)}
                                className="bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600"
                            >
                                ↑
                            </button>
                            <button
                                onClick={() => moveDownwards(index)}
                                className="bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600"
                            >
                                ↓
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SampleTodo;

