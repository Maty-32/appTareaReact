import React, { useContext } from "react";
import { TasksCard } from "./TasksCard";
import "./TaskList.css";
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>NO HAY TAREAS</h1>;
  }

  return (
    <div className="containerTask">
      {tasks.map((task) => (
        <TasksCard task={task} key={task.id} />
      ))}
    </div>
  );
};
