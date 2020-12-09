/* eslint-disable no-param-reassign */
import produce from 'immer';

const initialState = {
  items: [],
};

const todoItems = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODO_ITEMS':
      return produce(state, (draftState) => {
        draftState.items = action.payload;
      });

    case 'ADD_TODO_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items.push(action.payload);
      });

    case 'DELETE_TODO_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items.splice(action.payload, 1);
      });

    case 'EDIT_TODO_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items.find((category) => category.id === action.payload.id).title =
          action.payload.newTitle;
      });

    case 'ADD_TASKS_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items
          .find((item) => item.id === action.payload.todoId)
          .tasks.push(action.payload);
      });

    case 'REMOVE_TASKS_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items
          .find((item) => item.id === action.payload.listId)
          .tasks.splice(action.payload.index, 1);
      });

    case 'CHECKED_TASKS_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items.find((category) => category.id === action.payload.listId).tasks[
          action.payload.index
        ].completed = !draftState.items.find((category) => category.id === action.payload.listId)
          .tasks[action.payload.index].completed;
      });

    case 'EDIT_TASKS_SUCCESS':
      return produce(state, (draftState) => {
        draftState.items.find((category) => category.id === action.payload.listId).tasks[
          action.payload.arrId
        ].text = action.payload.newText;
      });

    default:
      return state;
  }
};

export default todoItems;
