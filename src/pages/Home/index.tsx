import React, { FC, useEffect, useState } from 'react';
import { View, Image } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { AtButton } from 'taro-ui';
import { IHomeProps } from './index.interface';
import { queryHome } from '../../actions/home';
import styles from './index.module.scss';
import CustomTable from './component/customTable';
import { RootState } from '../../store';
// import Joke from '../../components/Joke/index'

const Home:FC<IHomeProps> = () => {
  // const [list, setList] = useState();
  const { list } = useSelector((state:RootState) => state.homeReducer);
  console.log(list)
  const dispatch = useDispatch();
  useEffect(() => {
    queryAllHomelist();
  }, [])
  const queryAllHomelist = () => {
    dispatch(queryHome({}));
  }
  return (
    <View className={styles.home}>
      <View className={styles.banner}>
        <Image src='' />
      </View>
      <View className={styles.middleTitle}>
        今日分享
      </View>
      <View className={styles.homeBottom}>
        {
          list.map((item, index) => {
            return (
              <CustomTable key={index} info={item} />
            )
          })
        }

      </View>
    </View>
  );
}

export default Home;

