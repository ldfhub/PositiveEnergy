/*
 * @Description: 封装获取数据，简化thunk使用
 */
import { Request } from './request';

interface ILoadAsync {
  url: string;
  method: string;
  type: string;
  optionsRequest?: object;
  data?: object;
  payloadExtra?: any;
}

export const loadAsyncData = (options: ILoadAsync) => {
  const { url, method, type, optionsRequest, data, payloadExtra } = options;
  if (optionsRequest && typeof optionsRequest === 'object') {
    return (dispatch) => {
      return Request({ url, method, ...optionsRequest, data }).then((res) => {
        dispatch({type, payload: res})
        return res;
      })
    }
  }
  if (payloadExtra) {
    return (dispatch)=> {
      return Request({ url, method, data }).then((res) => {
        console.log('payloadExtra存在')
        dispatch({type, payload: {data: res.data,extra: payloadExtra}})
        return res;
      })
    }
  }
  return (dispatch)=> {
    return Request({ url, method, data }).then((res) => {
      dispatch({type, payload: res.data})
      return res;
    })
  }
}
