import { QUERY_LIST } from "../constants/list";

const initState = {
  list: []
}
export const listReducer = (queryLists = initState, action) => {
  switch (action.type) {
    case QUERY_LIST:
      return { ...queryLists, list: action.payload.list };
    default:
      return { ...queryLists }
  }
}
