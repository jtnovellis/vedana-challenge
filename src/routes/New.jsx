import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';
import { createTask } from '../components/services/tasks';
import Tag from '../components/Tag';
import { initialTaskValues, errorValues } from '../constants/initialTaskValues';
import { TaskContext } from '../context/TaskContext';

function New() {
  const { createNewTask } = useContext(TaskContext);
  const [tag, setTag] = useState('');
  const [newTask, setNewTask] = useState(initialTaskValues);
  const [errorTask, setErrorTask] = useState(errorValues);
  const navigate = useNavigate();

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
    validations();
  }

  function deleteTag(id) {
    const updatedTags = newTask.tags.filter((tag) => tag.id !== id);
    setNewTask((prev) => ({
      ...prev,
      tags: updatedTags,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    validations();
    if (newTask.description !== '' && newTask.endDate !== '' && newTask.tags !== 0) {
      await createTask(newTask);
      createNewTask(newTask);
      setNewTask(initialTaskValues);
      navigate('/');
    }
  }

  function handleChange(e) {
    setNewTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function validations() {
    if (newTask.description === '') {
      setErrorTask((prev) => ({
        ...prev,
        description: 'Must to have a description',
      }));
    } else {
      setErrorTask((prev) => ({
        ...prev,
        description: null,
      }));
    }
    if (newTask.endDate === '') {
      setErrorTask((prev) => ({
        ...prev,
        endDate: 'Must to have a end date',
      }));
    } else {
      setErrorTask((prev) => ({
        ...prev,
        endDate: null,
      }));
    }
    if (newTask.tags.length !== []) {
      setErrorTask((prev) => ({
        ...prev,
        tags: null,
      }));
    } else {
      setErrorTask((prev) => ({
        ...prev,
        tags: 'Must to have at least one tag',
      }));
    }
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
          {errorTask.description && <ErrorMessage>{errorTask.description}</ErrorMessage>}
          <input
            type='date'
            id='endDate'
            name='endDate'
            className='p-2 focus:outline-none rounded-md'
            value={newTask.endDate}
            onChange={handleChange}
          />
          {errorTask.endDate && <ErrorMessage>{errorTask.endDate}</ErrorMessage>}
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
          {errorTask.tags && <ErrorMessage>{errorTask.tags}</ErrorMessage>}
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
