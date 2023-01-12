import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Header from '../components/Header';
import ListOfTasks from '../components/ListOfTasks';
import { filterOptions } from '../constants/filterOptions';

function Root() {
  const filters = filterOptions.map((filter, i) => (
    <li key={`${filter}-${i}`}>
      <Button>{filter}</Button>
    </li>
  ));

  return (
    <div>
      <Header />
      <section className='mt-[72px] sm:mt-[88px]'>
        <div className='bg-gray-200 p-4 flex flex-col gap-4 fixed top-[72px] w-full z-10 sm:top-[88px]'>
          <Link
            to='new'
            className='font-bold text-center text-white bg-blue-500 hover:bg-blue-700 rounded-md px-3 py-2'
          >
            Add Task
          </Link>
          <div>
            <p className='text-blue-700 font-bold mb-2'>Filter by:</p>
            <ul className='flex justify-around'>{filters}</ul>
          </div>
        </div>
        <div className='p-3 mt-[226px] sm:mt-[242]'>
          <div className='bg-gray-200 rounded-md mt-3 sm:mt-6'>
            <h1 className='font-bold text-blue-700 text-2xl p-4'>Task board</h1>
            <div className='border border-t border-gray-300' />
            <div className=''>
              <ListOfTasks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Root;
