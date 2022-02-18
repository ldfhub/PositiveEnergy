import React, { FC, useEffect, useState, useRef } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { IHomeProps } from './index.interface';
import { queryHome } from '../../actions/home';
import styles from './index.module.scss';
import CustomTable from './component/customTable';
import { RootState } from '../../store';
import refresh from '../../assets/刷新.png';
// import Joke from '../../components/Joke/index'

const Home:FC<IHomeProps> = () => {
  const [isRoute, setIsRoute] = useState(false);
  const timeId = useRef();
  const { list } = useSelector((state:RootState) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    queryAllHomelist();
  }, [])
  const queryAllHomelist = () => {
    dispatch(queryHome({}));
  }

  // 点击刷新
  const clickRoute = () => {
    // clearTimeout(timeId.current);
    setIsRoute(true)
    timeId.current = setTimeout(() => {
      queryAllHomelist();
      setIsRoute(false);
    }, 1000)
  }
  return (
    <View className={styles.home}>
      <View className={styles.banner}>
        <Image src='' />
      </View>
      <View className={styles.middleTitle}>
        <Text>今日分享</Text>
        <View className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh} onClick={clickRoute}></View>
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

