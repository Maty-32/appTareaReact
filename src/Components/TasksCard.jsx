import React, { useContext } from "react";
import "./TasksCard.css";
import { TaskContext } from "../context/TaskContext";

export const TasksCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="containerCard">
      <h2 className="titleCard">{task.title}</h2>
      <p className="descriptionCard">{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
};
