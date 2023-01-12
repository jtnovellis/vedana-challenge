import { createContext, useState } from 'react';
import { getTasks } from '../components/services/tasks';

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [tasks, setRenderTasks] = useState([]);

  (async () => {
    const data = await getTasks();
    newData(data);
  })();

  function newData(data) {
    setRenderTasks(data);
  }

  function createNewTask(task) {
    setRenderTasks((prev) => [task, ...prev]);
  }

  const value = {
    tasks,
    newData,
    createNewTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskContextProvider;
