import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button } from '..';
import { addTask } from '../../redux/actions/setTasksItem';

import s from './index.module.scss';

const AddTask = ({ id }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [valueTasks, setValueTasks] = useState('');
  const dispatch = useDispatch();

  const toogleFormVisible = () => {
    setIsVisibleForm((prev) => !prev);
    setValueTasks('');
  };

  const onAddTasks = () => {
    if (!valueTasks) {
      // eslint-disable-next-line no-alert
      alert('Enter task');
      return;
    }
    dispatch(addTask({ valueTasks, id }));
    setValueTasks('');
  };

  return (
    <div className={s.addtask}>
      {!isVisibleForm ? (
        <div className={s.addtask_open}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15"
              stroke="#62dafc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 8H15"
              stroke="#62dafc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button type="button" onClick={toogleFormVisible}>
            Add Task
          </button>
        </div>
      ) : (
        <div className={s.addtask_form}>
          <Input
            placeholder="Enter task"
            inputValue={valueTasks}
            setValue={setValueTasks}
            taskstyle
          />
          <div className={s.addtask_form_wrapper}>
            <Button name="Add" onClick={onAddTasks} />
            <Button name="Cancel" onClick={toogleFormVisible} danger />
          </div>
        </div>
      )}
    </div>
  );
};

AddTask.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddTask;
