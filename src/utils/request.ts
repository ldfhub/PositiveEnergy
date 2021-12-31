/**
 * desc: 对taro.reauest封装，简化调用
 */
import Taro from "@tarojs/taro";
import { IRequest } from './request.interface';

export const Request = (options) => {
  const baseUrl = 'http://localhost:3300';
  const { url, method, optionsRequest } = options;

  const params:IRequest = {
    url: `${baseUrl}${url}`,
    data: {
      ...optionsRequest?.data
    },
    header: {
      'content-type': optionsRequest?.contentType || 'application/json', // 默认值
      ...optionsRequest?.header
    },
    method
  }
  console.log(params);
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
