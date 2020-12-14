/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Input } from '..';
import { HOME } from '../../res/const/router_url_const';

import s from './index.module.scss';

const Header = () => {
  const history = useHistory();

  const popupRef = useRef();
  const inputRef = useRef();

  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [valueSearch, setValueSearch] = useState('');

  const { todos } = useSelector(({ todoReducer }) => {
    return {
      todos: todoReducer.items,
    };
  });

  const onClickSearch = () => {
    setIsVisiblePopup(true);
  };

  const onClickOutside = (e) => {
    if (
      !isVisiblePopup &&
      !e.path.includes(popupRef.current) &&
      !e.path.includes(inputRef.current)
    ) {
      setIsVisiblePopup(false);
    }
  };

  const onClickLogo = () => {
    history.push(HOME);
  };

  const onClickList = (id) => {
    history.push(`/${id}`);
    setIsVisiblePopup(false);
    setValueSearch('');
  };

  useEffect(() => {
    document.body.addEventListener('click', onClickOutside);
  }, []);

  return (
    <div className={s.header}>
      <h1 className={s.header_title} onClick={onClickLogo}>
        ToDo App
      </h1>
      <Input
        placeholder="Search"
        onClick={onClickSearch}
        setValue={setValueSearch}
        inputValue={valueSearch}
        inputRef={inputRef}
      />
      {isVisiblePopup && valueSearch && (
        <div ref={popupRef} className={s.header_search}>
          <ul>
            {todos
              .filter((todo) => todo.title.toLowerCase().includes(valueSearch?.toLowerCase()))
              .map((todoFilter) => (
                <li key={todoFilter.id} onClick={() => onClickList(todoFilter.id)}>
                  {todoFilter.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
