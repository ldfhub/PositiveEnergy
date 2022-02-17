import { QUERY_HOME } from "../constants/home";

const initState = {
  list: []
}
export const homeReducer = (queryHomeLists = initState, action) => {
  switch (action.type) {
    case QUERY_HOME:
      return { ...queryHomeLists, list: action.payload.list };
    default:
      return { ...queryHomeLists }
  }
}
