function DropDStatus({ data }) {
  const list = data.map((item) => (
    <li key={item.id} className='mb-3'>
      <button className='bg-blue-700 text-white font-bold rounded-md p-2 w-[100px] hover:bg-blue-500'>
        {item.name}
      </button>
    </li>
  ));

  return (
    <div className='bg-white z-20 absolute top-10 rounded-md shadow-lg w-[160px] p-4'>
      <ul className='flex flex-col items-center gap-3'>{list}</ul>
    </div>
  );
}

export default DropDStatus;
