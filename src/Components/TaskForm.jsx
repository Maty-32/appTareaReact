import React from "react";
import { useState, useContext } from "react";
import "./TaskForm.css";
import { TaskContext } from "./../context/TaskContext";

export const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe el titulo de tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Escribe la descripcion de la tarea"
      />
      <button>Guardar Tarea</button>
    </form>
  );
};
