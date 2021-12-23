import { ADD_COUNT } from "../constants/count";

const initState = {
  counter: 0
}
export const counterReducer = (countes = initState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      console.log(countes)
      return { ...countes, counter: countes.counter + action.payload }
    default:
      return { countes }
  }
}
