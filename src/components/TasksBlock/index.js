/* eslint-disable no-alert */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TasksUnit } from '..';
import { removeTask, checkedTask } from '../../redux/actions/tasksActions';

import s from './index.module.scss';

const TasksBlock = () => {
  const { tasksList } = useSelector(({ todoReducer }) => {
    return {
      tasksList: todoReducer.items,
    };
  });
  const dispatch = useDispatch();

  const onRemoveTask = (id, index, listId) => {
    if (window.confirm('Do you really want to delete?')) {
      dispatch(removeTask(id, index, listId));
    }
  };

  const onCheckedTask = (id, index, completed, listId) => {
    dispatch(checkedTask(id, index, completed, listId));
  };

  const { id } = useParams();
  return (
    <div className={s.tasks}>
      {/* tasksList[+id] === undefinded */}
      {id === undefined
        ? tasksList.map((list) => (
            <TasksUnit
              key={list.id}
              title={list.title}
              tasks={list.tasks}
              id={list.id}
              onRemoveTask={onRemoveTask}
              onCheckedTask={onCheckedTask}
            />
          ))
        : [tasksList?.find((list) => list.id === +id)].map((item) => (
            <TasksUnit
              // error "Each child in a list should have a enique "key" prop"
              key={item?.id}
              title={item?.title}
              tasks={item?.tasks}
              id={item?.id}
              onRemoveTask={onRemoveTask}
              onCheckedTask={onCheckedTask}
            />
          ))}
    </div>
  );
};

export default TasksBlock;
