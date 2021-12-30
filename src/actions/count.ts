import { loadAsyncData } from '../utils/dispatch_get_data';
import { ADD_COUNT, EXPRESS_TEST, UPLOAD_CONTENT } from '../constants/count';

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
    url: '',
    methods: 'GET',
    type: EXPRESS_TEST
  }
  return loadAsyncData(params)
}

export const addUploadContent = () => {
  const params = {
    url: '/content',
    methods: 'POST',
    type: UPLOAD_CONTENT
  }
  return loadAsyncData(params)
}


