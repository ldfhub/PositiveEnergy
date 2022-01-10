import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import Taro, {
  useReady
} from '@tarojs/taro'
import styles from './index.module.scss';

const GuidePages = () => {
  useEffect(() => {
    setTimeout(() => {
      Taro.switchTab({
        url: '/pages/Home/index'
      })
    }, 3000)
  }, [])
  useReady(() => {
    console.log('2222')
  })
  return (
    <View className={styles.GuidePages}>
      {/* 这是引导页面 */}
    </View>
  )
}
export default GuidePages;

