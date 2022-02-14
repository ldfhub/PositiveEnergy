import React, { FC, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, OpenData, Image } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { IHomeProps } from './index.interface';
import styles from './index.module.scss';
import CustomTable from './component/customTable';
// import Joke from '../../components/Joke/index'

const Home:FC<IHomeProps> = () => {
  return (
    <View className={styles.home}>
      <View className={styles.banner}>
        <Image src='' />
      </View>
      <View className={styles.middleTitle}>
        今日分享
      </View>
      <View className={styles.homeBottom}>
        <CustomTable />
      </View>
    </View>
  );
}

export default Home;

