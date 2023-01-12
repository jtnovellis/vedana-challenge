function Button({ children }) {
  return (
    <button className='border border-blue-700 text-blue-700 rounded-md px-3 py-1 min-w-[6rem]'>
      {children}
    </button>
  );
}

export default Button;
