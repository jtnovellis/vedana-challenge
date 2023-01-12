import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import DropDown from '../components/DropDown';
import Header from '../components/Header';
import ListOfTasks from '../components/ListOfTasks';
import { TaskContext } from '../context/TaskContext';
import { statusFilter } from '../constants/filterOptions';
import { getTags } from '../services/tags';
import DropDStatus from '../components/DropDStatus';
import { getTasks } from '../services/tasks';

function Root() {
  const [tags, setTags] = useState([]);
  const [taskToRender, setTaskToRender] = useState([]);
  const [tagFilter, setTagFilter] = useState('');
  const [filterDropdown, setFilterDropdowm] = useState({
    tags: false,
    endData: false,
    status: false,
  });

  useEffect(() => {
    (async () => {
      const allTasks = await getTasks();
      setTaskToRender(allTasks);
    })();
  }, []);

  const filtered = useMemo(() => {
    return taskToRender.filter((task) => {
      const newtask = task.tags.find((tag) => tag.name === tagFilter);
      if (!newtask) return false;
      return true;
    });
  }, [tagFilter]);

  console.log(filtered);

  useEffect(() => {
    (async () => {
      const allTags = await getTags();
      setTags(allTags);
    })();
  }, []);

  function handleTagFilter(tag) {
    setTagFilter(tag);
  }

  function handleFilter(filter) {
    switch (filter) {
      case 'Tags':
        setFilterDropdowm((prev) => ({
          tags: !prev.tags,
          endData: false,
          status: false,
        }));
        break;
      case 'Status':
        setFilterDropdowm((prev) => ({
          status: !prev.status,
          tags: false,
          endData: false,
        }));
        break;
      case 'End today':
        setFilterDropdowm((prev) => ({
          endData: !prev.endData,
          status: false,
          tags: false,
        }));
        break;
      default:
        break;
    }
  }

  function newData() {}

  return (
    <div>
      <Header />
      <section className='mt-[72px] sm:mt-[88px] max-w-[1100px] mx-auto'>
        <div className='bg-gray-200 p-4 flex flex-col gap-4 fixed lg:h-full lg:w-[20rem] top-[72px] w-full z-10 sm:top-[88px]'>
          <Link
            to='new'
            className='font-bold text-center lg:mt-6 text-white bg-blue-500 hover:bg-blue-700 rounded-md px-3 py-2'
          >
            Add Task
          </Link>
          <div>
            <p className='text-blue-700 font-bold mb-2'>Filter by:</p>
            <ul className='flex justify-around lg:flex-col lg:gap-10 lg:items-center'>
              <li className='lg:w-full relative'>
                <Button handleFilter={handleFilter}>Tags</Button>
                {filterDropdown.tags && <DropDown data={tags} handleTag={handleTagFilter} />}
              </li>
              <li className='lg:w-full relative'>
                <Button handleFilter={handleFilter}>Status</Button>
                {filterDropdown.status && <DropDStatus data={statusFilter} />}
              </li>
              <li className='lg:w-full relative'>
                <Button handleFilter={handleFilter}>End today</Button>
              </li>
            </ul>
          </div>
        </div>
        <div className='p-3 mt-[226px] sm:mt-[242] lg:ml-[20rem] lg:mt-[88px]'>
          <div className='bg-gray-200 rounded-md mt-3 sm:mt-6'>
            <h1 className='font-bold text-blue-700 text-2xl p-4'>Task board</h1>
            <div className='border border-t border-gray-300' />
            <div className=''>
              <ListOfTasks tasks={filtered} newData={newData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Root;
