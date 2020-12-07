/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './index.module.scss';

const Input = ({ placeholder, liststyle, taskstyle, inputValue, setValue }) => {
  return (
    <div className={s.input}>
      <input
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        className={classNames('', { [s.liststyle]: liststyle, [s.taskstyle]: taskstyle })}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  setValue: PropTypes.func,
  liststyle: PropTypes.bool,
  taskstyle: PropTypes.bool,
};

export default Input;
