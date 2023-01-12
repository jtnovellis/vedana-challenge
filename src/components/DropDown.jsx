import React from 'react';
import { deleteTag } from '../services/tags';
import DropTag from './DropTag';

function DropDown({ data, handleTag }) {
  async function removeTag(id) {
    await deleteTag(id);
  }
  const list = data.map((item) => (
    <li key={item.id} className='mb-3'>
      <DropTag {...item} deleteTag={removeTag} handleTag={handleTag} />
    </li>
  ));

  return (
    <div className='bg-white z-20 absolute top-10 rounded-md shadow-lg w-[160px] p-4'>
      {data.length > 0 ? (
        <ul className='flex flex-col items-center gap-3'>{list}</ul>
      ) : (
        <p className='text-center p-4 font-bold text-gray-500'>No Tags</p>
      )}
    </div>
  );
}

export default DropDown;
