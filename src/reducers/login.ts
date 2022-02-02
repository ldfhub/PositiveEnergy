import { LOGIN_STATUS } from "../constants/login";

const initState = {
  loginStatus: false
}
export const loginReducer = (loginState = initState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return { ...loginState, loginStatus: action.payload };
    default:
      return { ...loginState }
  }
}
