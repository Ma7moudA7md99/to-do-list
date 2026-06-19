import { useState } from "react";
import { TaskContext } from "./TaskContexts";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "This is the first task" },
    { id: 2, title: "Task 2", description: "This is the second task" },
  ]);

  const addTask = (title, description) => {
    setTasks((prev) => {
      const lastId = prev.length > 0 ? prev[prev.length - 1].id : 0;
      return [...prev, { id: lastId + 1, title, description }];
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const checkTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id, newTitle, newDescription) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, checkTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
