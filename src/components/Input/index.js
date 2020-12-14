/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './index.module.scss';

const Input = ({
  placeholder,
  liststyle,
  taskstyle,
  inputRef,
  inputValue,
  onClick,
  setValue,
  autoFocus,
}) => {
  return (
    <div className={s.input}>
      <input
        value={inputValue}
        autoFocus={autoFocus}
        ref={inputRef}
        onClick={onClick}
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
  onClick: PropTypes.func,
  liststyle: PropTypes.bool,
  taskstyle: PropTypes.bool,
  autoFocus: PropTypes.bool,
  inputRef: PropTypes.object,
};

export default Input;
