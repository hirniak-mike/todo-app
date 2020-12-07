import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { setTodo } from './redux/actions/setTodoItems';
import { HOME, TASK_ID } from './res/const/router_url_const';
import { Header, ListTasks, TaskItem } from './components';

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
        <Route exact path={`${HOME}`} component={() => <TaskItem />} />
        <Route exact path={`${TASK_ID}`} component={() => <ListTasks />} />
        <Route exact path={`${TASK_ID}`} component={() => <TaskItem />} />
      </div>
    </div>
  );
}

export default App;
