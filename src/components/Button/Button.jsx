import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './button.module.scss';

const Button = ({ name, liststyle, danger, onClick, isLoading }) => {
  return (
    <div>
      <button
        type="button"
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
  liststyle: PropTypes.bool.isRequired,
  danger: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
