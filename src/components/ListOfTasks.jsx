import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';

function ListOfTasks() {
  const { tasks, newData } = useContext(TaskContext);

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
