import { ADD_COUNT, EXPRESS_TEST } from "../constants/count";

const initState = {
  counter: 0,
  test: ''
}
export const counterReducer = (counters = initState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...counters, counter: counters.counter + action.payload };
    case EXPRESS_TEST:
      return { ...counters, test: action.payload };
    default:
      return { ...counters }
  }
}
