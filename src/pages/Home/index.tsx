import React, { FC, } from 'react';
import { View } from '@tarojs/components';
import { IHomeProps } from './index.interface';
import TabBar from '../../components/TabBar/index'

const Home:FC<IHomeProps> = () => {
  return (
    <View>
      这是首页
      <TabBar></TabBar>
    </View>
  );
}

export default Home;

