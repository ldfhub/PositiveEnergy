import { ADD_COUNT } from "../constants/count";

const initState = {
  counter: 0
}
export const counterReducer = (counters = initState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...counters, counter: counters.counter + action.payload };
    default:
      return { ...counters }
  }
}
