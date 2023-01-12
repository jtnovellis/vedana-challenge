import { MdGrading } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-blue-700 w-full p-4 fixed top-0 z-20 sm:py-6'>
      <div className='max-w-[1100px] mx-auto'>
        <Link to='/'>
          <MdGrading size={40} color='#fff' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
