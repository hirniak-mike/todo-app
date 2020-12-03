import React from 'react';

import { Input } from '..';

import s from './header.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <h1>ToDo App</h1>
      </div>
      <Input placeholder="Search" />
    </div>
  );
};

export default Header;
