import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './input.module.scss';

const Search = ({ placeholder, liststyle, taskstyle }) => {
  return (
    <div className={s.input}>
      <input
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
};

export default Search;
