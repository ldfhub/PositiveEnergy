import { combineReducers } from 'redux';
import { counterReducer } from './count';
import { loginReducer } from './login';
import { listReducer } from './list';

export default combineReducers({
  counterReducer,
  loginReducer,
  listReducer
})

