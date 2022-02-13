/*
 * @Description: 封装获取数据，简化thunk使用
 */
import { Request } from './request';

interface ILoadAsync {
  url: string;
  method: string;
  type: string;
  optionsRequest?: object;
  data?: object
}

export const loadAsyncData = (options: ILoadAsync) => {
  const { url, method, type, optionsRequest, data } = options;
  if (optionsRequest && typeof optionsRequest === 'object') {
    return (dispatch) => {
      return Request({ url, method, ...optionsRequest, data }).then((res) => {
        dispatch({type, payload: res})
        return res;
      })
    }
  }
  return (dispatch)=> {
    return Request({ url, method, data }).then((res) => {
      console.log(res, '00000000')
      dispatch({type, payload: res.data})
      return res;
    })
  }
}
