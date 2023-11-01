import { createContext, useState, useEffect } from "react";
import dataBase from "../../Db/dateBase";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(titleTask, descriptionTask) {
    setTasks([
      ...tasks,
      {
        title: titleTask,
        id: tasks.length + 1,
        description: descriptionTask,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(dataBase);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
