const initialState = {
  items: [],
  isLoaded: false,
};

const todoItems = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODO_ITEMS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default todoItems;
