/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { AddTask, Task } from '..';
import { editTodo } from '../../redux/actions/todoActions';

import s from './index.module.scss';

const TasksUnit = ({ title, tasks, id, onRemoveTask, onCheckedTask }) => {
  const dispatch = useDispatch();

  const onEditTitle = () => {
    // eslint-disable-next-line no-alert
    const newTitle = window.prompt('Enter title', title);
    if (newTitle) {
      dispatch(editTodo(newTitle, id));
    }
  };

  return (
    <div>
      <div className={s.title}>
        <h1>
          {title}
          <span onClick={() => onEditTitle()}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z"
                fill="#32363f"
              />
            </svg>
          </span>
        </h1>
      </div>
      <div className={s.task}>
        {tasks &&
          tasks.map((task, index) => (
            <Task
              key={task.id}
              text={task.text}
              itemId={task.id}
              arrId={index}
              listId={id}
              onClick={onRemoveTask}
              completed={task.completed}
              onCheckedTask={onCheckedTask}
            />
          ))}
      </div>
      <AddTask id={id} />
    </div>
  );
};

TasksUnit.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  onRemoveTask: PropTypes.func.isRequired,
  onCheckedTask: PropTypes.func.isRequired,
};

export default TasksUnit;
