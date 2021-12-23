import { ADD_COUNT } from '../constants/count';

// const initState = {
//   count: 0
// }

// export const addCount = (count = initState.count, action) => {

// }

export const addAction = (num:number) => ({
  type: ADD_COUNT,
  payload: num
})
