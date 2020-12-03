import { combineReducers } from 'redux';
import todoItems from './todoItems';

const rootReducer = combineReducers({
  todoItems,
});

export default rootReducer;
