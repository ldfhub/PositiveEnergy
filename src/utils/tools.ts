import Taro from "@tarojs/taro";
import { addLoginStatus } from '../actions/login';

// 检查是否session_key过期
export const checkSession = (dispatch) => {
  return Taro.checkSession({
    success: function () {
      //session_key 未过期，并且在本生命周期一直有效
      console.log('token未过期')
      dispatch(addLoginStatus(true));
    },
    fail: function () {
      // session_key 已经失效，需要重新执行登录流程
      // Taro.login() //重新登录
      console.log('token过期')
      dispatch(addLoginStatus(false));
      Taro.setStorage({
        key:"violetTokenAndOpenId",
        data: JSON.stringify({
          token: null,
          openid: null
        })
      })
    }
  })
}

