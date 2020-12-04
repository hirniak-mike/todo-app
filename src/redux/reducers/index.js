import { combineReducers } from 'redux';

import todoItems from './todoItems';
import tasks from './tasks';

const rootReducer = combineReducers({
  todoItems,
  tasks,
});

export default rootReducer;
