import { combineReducers } from 'redux';
import { counterReducer } from './count';
import { loginReducer } from './login'

export default combineReducers({
  counterReducer,
  loginReducer
})

