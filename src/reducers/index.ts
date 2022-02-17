import { combineReducers } from 'redux';
import { counterReducer } from './count';
import { loginReducer } from './login';
import { listReducer } from './list';
import { homeReducer } from './home'

export default combineReducers({
  counterReducer,
  loginReducer,
  listReducer,
  homeReducer
})

