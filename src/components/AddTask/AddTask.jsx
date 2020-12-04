import React, { useState } from 'react';

import { Input, Button } from '..';

import s from './addtask.module.scss';

const AddTask = () => {
  const [visibleForm, setVisibleForm] = useState(false);

  const toogleFormVisible = () => {
    setVisibleForm(!visibleForm);
  };

  return (
    <div className={s.addtask}>
      {!visibleForm ? (
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
          <Input placeholder="Enter task" taskstyle />
          <div className={s.addtask_form_wrapper}>
            <Button name="Add" />
            <Button name="Cancel" onClick={toogleFormVisible} danger />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
