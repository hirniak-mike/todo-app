const initialState = {
  items: [],
};

const todoItems = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODO_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)],
      };
    // mutable (will be changed soon...)
    case 'ADD_TASKS_SUCCESS':
      state.items.find((item) => item.id === action.payload.todoId).tasks.push(action.payload);
      return {
        ...state,
      };
    // mutable (will be changed soon...)
    case 'REMOVE_TASKS_SUCCESS':
      state.items
        .find((item) => item.id === action.payload.listId)
        .tasks.splice(action.payload.index, 1);
      return {
        ...state,
      };
    // mutable (will be changed soon...)
    case 'CHECKED_TASKS_SUCCESS': {
      const newState = state.items.map((category) =>
        category.id === action.payload.listId
          ? {
              ...category,
              tasks: category.tasks.map((task, index) =>
                index === action.payload.index ? { ...task, completed: !task.completed } : task
              ),
            }
          : category
      );
      return {
        ...state,
        items: newState,
      };
    }

    default:
      return state;
  }
};

export default todoItems;
