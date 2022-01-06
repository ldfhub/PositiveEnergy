import React, { FC, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, OpenData } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { IHomeProps } from './index.interface';
import Joke from '../../components/Joke/index'

const Home:FC<IHomeProps> = () => {
  // 首页检查session_key状态
  // useEffect(() => {
  //   Taro.checkSession({
  //     success: function () {
  //       console.log('session_key未过期')
  //     },
  //     fail: function () {
  //       console.log('session_key过期')
  //       Taro.navigateTo({
  //         url: '../src/pages/Profile/index.tsx'
  //       })
  //     }
  //   })
  // }, [])
  const getAvatar = (e) => [
    Taro.getUserProfile({
      desc: '千零粉丝获取', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang: 'zh_CN',
      success: (res) => {
        console.log(res)
      }
    })
    // Taro.getStorage({
    //   key: 'violtToken',
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  ]
  return (
    <View>
      这是首页
      {/* <Joke></Joke> */}
      <AtButton onClick={getAvatar}>微信一键登录</AtButton>
    </View>
  );
}

export default Home;

