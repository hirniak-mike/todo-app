import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header, ListTasks, Tasks } from './components';

import { setTodoItems } from './redux/actions/setTodoItems';

import './styles/normalize.scss';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/todo?_embed=tasks').then(({ data }) => {
      dispatch(setTodoItems(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app_wrapper">
        <ListTasks />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
