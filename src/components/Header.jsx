import { MdGrading } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-blue-700 w-full p-4'>
      <Link to='/'>
        <MdGrading size={40} color='#fff' />
      </Link>
    </header>
  );
}

export default Header;