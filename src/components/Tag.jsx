import { MdClear } from 'react-icons/md';

function Tag({ id, name, deleteTag }) {
  function handleClick() {
    deleteTag(id);
  }
  return (
    <div className='bg-gray-400 flex items-center w-fit p-1'>
      <p className='text-gray-700 text-xs'>{`#${name}`}</p>
      <button onClick={handleClick}>
        <MdClear size={18} />
      </button>
    </div>
  );
}

export default Tag;
