function Button({ children, type = 'button', handleFilter }) {
  function handleClick(children) {
    switch (children) {
      case 'Tags':
        handleFilter(children);
        break;
      case 'Status':
        handleFilter(children);
        break;
      case 'End today':
        handleFilter(children);
        break;
      default:
        break;
    }
  }

  return (
    <button
      type={type}
      onClick={() => handleClick(children)}
      className='border border-blue-700 text-blue-700 rounded-md px-3 py-1 min-w-[6rem] lg:w-full'
    >
      {children}
    </button>
  );
}

export default Button;
