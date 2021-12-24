import React, { FC, } from 'react';
import { View } from '@tarojs/components';
import { IHomeProps } from './index.interface';
import TabBar from '../../components/TabBar/index'
import Joke from '../../components/Joke/index'

const Home:FC<IHomeProps> = () => {
  return (
    <View>
      这是首页
      <Joke></Joke>
    </View>
  );
}

export default Home;

