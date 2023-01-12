import React, { useContext, useEffect } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';
import { getTasks } from './services/tasks';

function ListOfTasks() {
  const { tasks, newData } = useContext(TaskContext);
  console.log(tasks);

  useEffect(() => {
    (async () => {
      const data = await getTasks();
      newData(data);
    })();
  }, []);

  function removeTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    newData(newTasks);
  }

  const renderTasks = tasks.map((task) => (
    <li key={task.id}>
      <Task {...task} removeTask={removeTask} />
    </li>
  ));
  return tasks.length > 0 ? (
    <ul className='p-2'>{renderTasks}</ul>
  ) : (
    <p className='text-center p-4 font-bold text-gray-500'>No Tasks</p>
  );
}

export default ListOfTasks;
