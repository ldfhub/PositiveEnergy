import { LOGIN_STATUS } from "../constants/login";

const initState = {
  list: []
}
export const listReducer = (queryLists = initState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return { ...queryLists, list: action.payload };
    default:
      return { ...queryLists }
  }
}
