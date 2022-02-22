import { QUERY_HOME, QUERY_HOME_ONE } from "../constants/home";

interface state {
  list: any
}
const initState: state = {
  list: []
}
export const homeReducer = (queryHomeLists = initState, action) => {
  switch (action.type) {
    case QUERY_HOME:
      return { ...queryHomeLists, list: action.payload.list };
    case QUERY_HOME_ONE:
      let num = 0;
      console.log(action.payload.extra, 'console.log(action.payload.extra)')
      switch(action.payload.extra) {
        case 'JOKE':
          num = 0;
          break;
        case 'LOVEWORDS':
          num = 1;
          break;
        case 'HOTWORDS':
          num = 2;
          break;
        case 'WISDOM':
          num = 3;
          break;
      }
      console.log(num, 'num');
      console.log(queryHomeLists.list, 'queryHomeLists.list')
      queryHomeLists.list.splice(num, 1, action.payload.data.list);
      // console.log(finalList, 'finalList');
      return { ...queryHomeLists, list: queryHomeLists.list.splice(num, 1, action.payload.data.list) };
    default:
      return { ...queryHomeLists }
  }
}
