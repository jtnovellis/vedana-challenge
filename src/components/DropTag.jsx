import { MdOutlineDeleteOutline } from 'react-icons/md';

function DropTag({ id, name, removeTag, handleTag }) {
  function handleClick() {
    removeTag(id);
  }

  return (
    <div className='bg-gray-300 flex items-center justify-between p-2 w-[100px] rounded-md'>
      <button
        onClick={() => handleTag(name)}
        className='text-gray-700 underline'
      >{`#${name}`}</button>
      <button onClick={handleClick}>
        <MdOutlineDeleteOutline size={18} color='#ff0000' />
      </button>
    </div>
  );
}

export default DropTag;
