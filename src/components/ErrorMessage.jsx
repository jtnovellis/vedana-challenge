import React from 'react';

function ErrorMessage({ children }) {
  return <p className='text-red-600 text-xs'>{children}</p>;
}

export default ErrorMessage;
