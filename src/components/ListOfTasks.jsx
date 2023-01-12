import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Task from './Task';

function ListOfTasks() {
  const tasks = useLoaderData();
  const renderTasks = tasks.map((task) => (
    <li key={task.id}>
      <Task {...task} />
    </li>
  ));
  return tasks.length > 0 ? <ul className='p-2'>{renderTasks}</ul> : <p>No Tasks</p>;
}

export default ListOfTasks;
