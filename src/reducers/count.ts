import { ADD_COUNT } from "../constants/count";

const initState = {
  counter: 0
}
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      console.log( state )
      return { ...state, counter: state.counter + 1 }
    default:
      return { state }
  }
}
