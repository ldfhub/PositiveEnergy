import { loadAsyncData } from '../utils/dispatch_get_data';
import { ADD_COUNT, EXPRESS_TEST } from '../constants/count';

export const addAction = (num:number) => ({
  type: ADD_COUNT,
  payload: num
})

// export const getTest = (test) => ({
//   type: EXPRESS_TEST,
//   payload: test
// })
export const getTest = () => {
  const params = {
    url: '/search?keywords=海阔天空',
    methods: 'GET',
    type: EXPRESS_TEST
  }
  return loadAsyncData(params)
}


