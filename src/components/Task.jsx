import { useState } from 'react';
import {
  MdOutlineDeleteOutline,
  MdPanoramaFishEye,
  MdOutlineCheckCircleOutline,
} from 'react-icons/md';
import { deleteTask } from './services/tasks';

function Task({ id, description, endDate, status }) {
  const [isDone, setDone] = useState(() => status === 'done');

  const Icon = isDone ? MdOutlineCheckCircleOutline : MdPanoramaFishEye;
  const iconColor = isDone ? '#00ff00' : '#818181';

  function handleStatus() {
    setDone((prev) => !prev);
  }

  async function handleDelete(id) {
    await deleteTask(id);
  }

  return (
    <div className='p-3 bg-white rounded-md mb-2'>
      <div className='flex relative gap-4 items-center'>
        <button onClick={handleStatus}>
          <Icon size={28} color={iconColor} />
        </button>
        <div>
          <p>{description}</p>
          <p className='text-gray-600 text-xs'>{endDate}</p>
        </div>
        <button className='absolute right-0' onClick={() => handleDelete(id)}>
          <MdOutlineDeleteOutline size={28} color='#ff0000' />
        </button>
      </div>
    </div>
  );
}

export default Task;
