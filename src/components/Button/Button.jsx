import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './button.module.scss';

const Button = ({ name, lists, danger, toogleFormVisible }) => {
  return (
    <div>
      <button
        type="button"
        onClick={toogleFormVisible}
        className={classNames(s.button, { [s.lists]: lists, [s.danger]: danger })}
      >
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  lists: PropTypes.bool.isRequired,
  danger: PropTypes.bool.isRequired,
  toogleFormVisible: PropTypes.func.isRequired,
};

export default Button;
