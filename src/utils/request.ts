/**
 * desc: 对taro.reauest封装，简化调用
 */
import Taro from "@tarojs/taro";
import { IRequest } from './request.interface';

// 获取token
let token = '';
Taro.getStorage({
  key: 'violtTokenAndOpenId',
  success: function (res) {
    console.log(res.data)
    token = JSON.parse(res.data).token
  }
})
console.log(token)

export const Request = (options) => {
  const baseUrl = 'http://localhost:3300';
  const { url, method, optionsRequest, data = {} } = options;

  const params:IRequest = {
    url: `${baseUrl}${url}`,
    method,
    data: {
      ...data
    },
    header: {
      'content-type': optionsRequest?.contentType || 'application/json', // 默认值
      ...optionsRequest?.header
    }
  }
  if (token) {
    params.header['Authorization'] = `Bearer ${token}`
  }
  return Taro.request(params).then((res) => {
    const { statusCode } = res;
    if (statusCode >= 200 && statusCode <= 300) {
      return res.data
    }
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
