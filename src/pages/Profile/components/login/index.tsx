import React, { memo, FC, ReactElement } from 'react';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';

interface IProps {

}

const Login:FC<IProps> = memo(function index(props):ReactElement {

  const getPhoneNumber = (e) => {
    console.log(e)
  }

  return (
    <View>
      <AtButton openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber}>微信一键登陆</AtButton>
    </View>
  )
})

export default Login



