/**
 * desc: 对taro.reauest封装，简化调用
 */
import Taro from "@tarojs/taro";
import { IRequest } from './request.interface';

export const Request = async (options) => {
  // 获取token
  let token = '';
  await Taro.getStorage({
    key: 'violetTokenAndOpenId',
    success: function (res) {
      token = JSON.parse(res.data).token
    }
  })

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
  console.log(token, '9999999')
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
