import React, { memo, FC, ReactElement } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import { Request } from '../../../../utils/request';

interface IProps {

}

const Login:FC<IProps> = memo(function index(props):ReactElement {

  const getPhoneNumber = () => {

  }

  return (
    <View>
      <AtButton onClick={getPhoneNumber}>微信一键登陆</AtButton>
    </View>
  )
})

export default Login



