/**
 * desc: 对taro.reauest封装，简化调用
 */
import Taro from "@tarojs/taro";
import { IRequest } from './request.interface';

export const Requext = (url:string, methods:string = 'GET', data:object, header:object = {}, contentType) => {
  const baseUrl = '';

  const params:IRequest = {
    url: url,
    data: {
      ...data
    },
    header: {
      'content-type': contentType || 'application/json', // 默认值
      ...header
    },
    methods
  }
  return Taro.request(params).then((res) => {
    // const { code } = res;
    // if (code >= 200 && code <= 30) {
    //   return res
    // }
    return res
  }).catch((err) => {
    if (err) {
      console.log(err)
      Taro.showToast({
        icon: 'none',
        title: '网络出错！',
        mask: true
      })
    }
  })
}
