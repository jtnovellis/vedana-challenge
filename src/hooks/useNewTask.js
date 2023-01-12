import { useReducer } from 'react';

function formReducer(state, action) {
  const { name, value } = action.payload;
  switch (action.type) {
    case '@change':
      return {
        ...state,
        [name]: value,
      };
    case '@tag':
      const tag = {
        id: Math.random().toString(36).substring(2, 9),
        name: value,
      };
      state.tags.push(tag);
      return state;
    case '@error':
      return {
        ...state,
        error: {
          ...state.error,
          [name]: true,
        },
      };
    case '@resetError':
      return {
        ...state,
        error: {
          ...state.error,
          [name]: false,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  description: '',
  endDate: '',
  tags: [],
  error: {
    title: false,
    description: false,
    startDate: false,
    personId: false,
  },
};

export default function useNewTask() {
  return useReducer(formReducer, initialState);
}
