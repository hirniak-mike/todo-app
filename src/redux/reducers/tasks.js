const initialState = {
  items: {},
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODO_TASKS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default tasks;
