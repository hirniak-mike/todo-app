/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';

// import { Input } from '..';
import { HOME } from '../../res/const/router_url_const';

import s from './index.module.scss';

const Header = () => {
  const history = useHistory();
  function handleClick() {
    history.push(HOME);
  }
  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <h1 onClick={handleClick}>ToDo App</h1>
      </div>
      {/* <Input placeholder="Search" /> */}
    </div>
  );
};

export default Header;
