/*
 * @Description: 封装获取数据，简化thunk使用
 */
import { Request } from './request';

interface ILoadAsync {
  url: string;
  methods: string;
  type: string;
  optionsRequest?: object;
}

export const loadAsyncData = (options: ILoadAsync) => {
  const { url, methods, type, optionsRequest } = options;
  if (optionsRequest && typeof optionsRequest === 'object') {
    return (dispatch) => {
      return Request({ url, methods, ...optionsRequest }).then((res) => {
        dispatch({type, payload: res})
        return res;
      })
    }
  }
  return (dispatch)=> {
    return Request({ url, methods }).then((res) => {
      dispatch({type, payload: res})
      return res;
    })
  }
}
