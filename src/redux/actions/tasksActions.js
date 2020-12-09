import axios from 'axios';

import { BASE_SERVER_TASKS } from '../../res/const/api_const';

export const setTasks = (items) => ({
  type: 'SET_TODO_TASKS',
  payload: items,
});

const addTasksSuccess = (items) => ({
  type: 'ADD_TASKS_SUCCESS',
  payload: items,
});

export const addTask = ({ valueTasks, id }) => {
  return (dispatch) => {
    axios
      .post(BASE_SERVER_TASKS, {
        text: valueTasks,
        todoId: id,
        completed: false,
      })
      .then(({ data }) => {
        dispatch(addTasksSuccess(data));
      });
  };
};

const removeTaskSuccess = (items) => ({
  type: 'REMOVE_TASKS_SUCCESS',
  payload: items,
});

export const removeTask = (id, index, listId) => {
  return (dispatch) => {
    axios.delete(`${BASE_SERVER_TASKS}/${id}`).then(() => {
      dispatch(removeTaskSuccess({ id, index, listId }));
    });
  };
};

const checkedTaskSuccess = (items) => ({
  type: 'CHECKED_TASKS_SUCCESS',
  payload: items,
});

export const checkedTask = (id, index, completed, listId) => {
  return (dispatch) => {
    axios.patch(`${BASE_SERVER_TASKS}/${id}`, { completed }).then(() => {
      dispatch(checkedTaskSuccess({ index, listId }));
    });
  };
};

const editTaskSuccess = (items) => ({
  type: 'EDIT_TASKS_SUCCESS',
  payload: items,
});

export const editTask = (newText, itemId, listId, arrId) => {
  return (dispatch) => {
    axios
      .patch(`${BASE_SERVER_TASKS}/${itemId}`, {
        text: newText,
      })
      .then(() => {
        dispatch(editTaskSuccess({ newText, listId, arrId }));
      });
  };
};
