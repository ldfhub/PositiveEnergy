/*
 * @Description: 封装获取数据，简化thunk使用
 */
import { Request } from './request';

export const loadAsyncData = (options) => {
  const { url, methods, type } = options;
  return (dispatch) => {
    return Request(url, methods).then((res) => {
      console.log(res, '22222')
      return dispatch({type, payload: res})
      // return res;
    })
  }
}
// export const loadAsyncData = (options) => {
//   const { url, methods, type } = options;
//   return Request(url, methods ).then((res) => {
//     console.log(res, '22222')
//     return {type, payload: res};
//     // return res;
//   })
// }
