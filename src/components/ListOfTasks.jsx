import React from 'react';
import { tasks } from '../constants/tasks';
import Task from './Task';

function ListOfTasks() {
  const renderTasks = tasks.map((task) => (
    <li key={task.id}>
      <Task {...task} />
    </li>
  ));
  return <ul className='p-2'>{renderTasks}</ul>;
}

export default ListOfTasks;
