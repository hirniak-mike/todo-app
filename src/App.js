/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { setTodo } from './redux/actions/todoActions';
import { HOME, TASK_ID } from './res/const/router_url_const';
import { Header, ListTasks, TasksBlock } from './components';

import './styles/normalize.scss';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodo());
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app_wrapper">
        <Route exact path={`${HOME}`} component={() => <ListTasks />} />
        <Route exact path={`${TASK_ID}`} component={() => <ListTasks />} />
        <Route exact path={`${HOME}`} component={() => <TasksBlock />} />
        <Route exact path={`${TASK_ID}`} component={() => <TasksBlock />} />
      </div>
    </div>
  );
}

export default App;
