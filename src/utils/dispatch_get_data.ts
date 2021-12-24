/*
 * @Description: 封装获取数据，简化thunk使用
 */
import { Request } from './request';

export const loadAsyncData = (options) => {
  const { url, methods, requestOptions = {}, type } = options;
  console.log('00000')
  return (dispatch) => {
    console.log('55555')
    return Request(url, methods, ...requestOptions).then((res) => {
      console.log(res, '22222')
      dispatch({type, payload: res})
      return res;
    })
  }
}

export const loadSyncData = () => {

}
