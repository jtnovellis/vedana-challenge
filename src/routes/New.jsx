import React, { useState } from 'react';
import Button from '../components/common/Button';
import Header from '../components/Header';
import Tag from '../components/Tag';
import { initialTaskValues } from '../constants/initialTaskValues';

function New() {
  const [tag, setTag] = useState('');
  const [newTask, setNewTask] = useState(initialTaskValues);

  function handleTag() {
    if (tag === '') return;
    const newTag = {
      id: Math.random().toString(36).substring(2, 9),
      name: tag,
    };
    setNewTask((prev) => ({
      ...prev,
      tags: [...prev.tags, newTag],
    }));
    setTag('');
  }

  function deleteTag(id) {
    const updatedTags = newTask.tags.filter((tag) => tag.id !== id);
    setNewTask((prev) => ({
      ...prev,
      tags: updatedTags,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newTask);
  }

  function handleChange(e) {
    setNewTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const rendertags = newTask.tags.map((tag) => (
    <li key={tag.id}>
      <Tag {...tag} deleteTag={deleteTag} />
    </li>
  ));

  return (
    <div>
      <Header />
      <div className='p-2 mt-[72px]'>
        <form className='rounded-md bg-gray-200 flex flex-col p-3 gap-4' onSubmit={handleSubmit}>
          <h1 className='font-bold text-center text-blue-700 text-2xl p-4'>Add new task</h1>
          <input
            type='text'
            id='description'
            name='description'
            placeholder='Description'
            className='rounded-md placeholder:p-2 focus:outline-none p-2'
            value={newTask.description}
            onChange={handleChange}
          />
          <input
            type='date'
            id='endDate'
            name='endDate'
            className='p-2 focus:outline-none rounded-md'
            value={newTask.endDate}
            onChange={handleChange}
          />
          <div className='flex justify-between'>
            <input
              type='text'
              id='tag'
              name='tag'
              placeholder='Add tag'
              className='rounded-md placeholder:p-2 focus:outline-none p-2'
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <button
              type='button'
              className='text-white font-bold rounded-md bg-blue-700 p-2'
              onClick={handleTag}
            >
              Add tag
            </button>
          </div>
          {newTask.tags.length > 0 ? (
            <ul className='flex flex-wrap gap-2'>{rendertags}</ul>
          ) : (
            <p>No tags</p>
          )}
          <Button type='submit'>Create task</Button>
        </form>
      </div>
    </div>
  );
}

export default New;
