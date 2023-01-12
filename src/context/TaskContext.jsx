import { createContext, useState } from 'react';

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [tasks, setRenderTasks] = useState([]);
  function newData(data) {
    setRenderTasks(data);
  }
  const value = {
    tasks,
    newData,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
export default TaskContextProvider;
