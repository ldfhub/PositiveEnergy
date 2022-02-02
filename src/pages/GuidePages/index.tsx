import React, { useEffect, useRef, useState } from 'react';
import { View } from '@tarojs/components';
import Taro, {
  useReady
} from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import { useDispatch } from 'react-redux';
import { checkSession } from '../../utils/tools';
import styles from './index.module.scss';

const GuidePages = () => {
  const [counter, setCounter] = useState<number>(3);
  const initTimer = useRef<any>(null);
  const dispatch = useDispatch()
  useEffect(() => {
    if (counter > 0) {
      initTimer.current = setInterval(() => {
        setCounter( c => c-1);
      }, 1000)
    } else {
      Taro.switchTab({
        url: '/pages/Home/index'
      })
    }
    return () => {
      clearInterval(initTimer.current)
    }
  }, [counter])
  useReady(() => {
    checkSession(dispatch);
    console.log('2222')
  })
  return (
    <View className={styles.GuidePages}>
      {/* 这是引导页面 */}
      <View>
        <AtButton circle size='small' className={styles.btnTimer}>
          { counter }
        </AtButton>
      </View>
      <View className={styles.title}>即将进入小程序</View>
    </View>
  )
}
export default GuidePages;

