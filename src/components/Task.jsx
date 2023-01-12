import { useState } from 'react';
import {
  MdOutlineDeleteOutline,
  MdPanoramaFishEye,
  MdOutlineCheckCircleOutline,
} from 'react-icons/md';
import { deleteTask, updateTask } from './services/tasks';
import Tag from './Tag';

function Task({ id, description, endDate, status, tags, removeTask }) {
  const [isDone, setDone] = useState(() => status === 'done');

  let Icon = isDone ? MdOutlineCheckCircleOutline : MdPanoramaFishEye;
  let iconColor = isDone ? '#00ff00' : '#818181';

  async function handleStatus() {
    setDone((prev) => !prev);
    let status = !isDone ? 'done' : 'pending';
    await updateTask(id, { status });
  }

  async function handleDelete(id) {
    removeTask(id);
    await deleteTask(id);
  }

  const rendertags = tags.map((tag) => (
    <li key={tag.id}>
      <Tag name={tag.name} />
    </li>
  ));

  return (
    <div className='p-3 bg-white rounded-md mb-2'>
      <div className='flex relative gap-4 items-center'>
        <button onClick={handleStatus}>
          <Icon size={28} color={iconColor} />
        </button>
        <div>
          <p>{description}</p>
          <p className='text-gray-600 text-xs'>{endDate}</p>
          <ul className='hidden sm:flex flex-wrap gap-2 mt-2'>{rendertags}</ul>
        </div>
        <button className='absolute right-0' onClick={() => handleDelete(id)}>
          <MdOutlineDeleteOutline size={28} color='#ff0000' />
        </button>
      </div>
    </div>
  );
}

export default Task;
