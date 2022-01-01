import React, { FC, } from 'react';
import Taro from '@tarojs/taro';
import { View, OpenData } from '@tarojs/components';
import { AtButton, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { IHomeProps } from './index.interface';
import TabBar from '../../components/TabBar/index'
import Joke from '../../components/Joke/index'

const Home:FC<IHomeProps> = () => {
  const getAvatar = (e) => [
    Taro.getUserProfile({
      desc: '千零粉丝获取', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang: 'zh_CN',
      success: (res) => {

      }
    })
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

