import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './input.module.scss';

const Search = ({ placeholder, liststyle, taskstyle, inputValue, setValueTitle }) => {
  return (
    <div className={s.input}>
      <input
        value={inputValue}
        onChange={(e) => setValueTitle(e.target.value)}
        className={classNames('', { [s.liststyle]: liststyle, [s.taskstyle]: taskstyle })}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  liststyle: PropTypes.bool.isRequired,
  taskstyle: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  setValueTitle: PropTypes.func.isRequired,
};

export default Search;
