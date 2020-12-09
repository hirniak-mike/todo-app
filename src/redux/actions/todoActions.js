import axios from 'axios';

import { BASE_SERVER_API, BASE_SERVER_TODO } from '../../res/const/api_const';

export const setTodoItems = (items) => ({
  type: 'SET_TODO_ITEMS',
  payload: items,
});

export const setTodo = () => {
  return (dispatch) => {
    axios.get(BASE_SERVER_API).then(({ data }) => {
      dispatch(setTodoItems(data));
    });
  };
};

const addTodoSuccess = (items) => ({
  type: 'ADD_TODO_SUCCESS',
  payload: items,
});

export const addTodo = (title, tasks) => {
  return (dispatch) => {
    axios
      .post(BASE_SERVER_TODO, {
        title,
        tasks,
      })
      .then(({ data }) => {
        dispatch(addTodoSuccess(data));
      });
  };
};

const deleteTodoSuccess = (items) => ({
  type: 'DELETE_TODO_SUCCESS',
  payload: items,
});

export const deleteTodo = (id, index) => {
  return (dispatch) => {
    axios.delete(`${BASE_SERVER_TODO}/${id}`).then(() => {
      dispatch(deleteTodoSuccess(index));
    });
  };
};

const editTodoSuccess = (items) => ({
  type: 'EDIT_TODO_SUCCESS',
  payload: items,
});

export const editTodo = (newTitle, id) => {
  return (dispatch) => {
    axios
      .patch(`${BASE_SERVER_TODO}/${id}`, {
        title: newTitle,
      })
      .then(() => {
        dispatch(editTodoSuccess({ newTitle, id }));
      });
  };
};
