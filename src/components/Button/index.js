/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './index.module.scss';

const Button = ({ name, onClick, liststyle, type, danger, isLoading }) => {
  return (
    <div>
      <button
        type={`${type}`}
        onClick={onClick}
        className={classNames(s.button, { [s.liststyle]: liststyle, [s.danger]: danger })}
      >
        {isLoading ? 'Loading...' : `${name}`}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  liststyle: PropTypes.bool,
  danger: PropTypes.bool,
};

export default Button;
