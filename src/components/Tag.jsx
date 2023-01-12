import { MdClear } from 'react-icons/md';

function Tag({ id, name, deleteTag }) {
  function handleClick() {
    deleteTag(id);
  }

  return (
    <div className='bg-gray-300 flex items-center w-fit p-1'>
      <p className='text-gray-700 text-[10px]'>{`#${name}`}</p>
      {deleteTag ? (
        <button onClick={handleClick}>
          <MdClear size={18} />
        </button>
      ) : null}
    </div>
  );
}

export default Tag;
