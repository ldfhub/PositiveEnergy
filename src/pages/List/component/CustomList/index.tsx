import { View } from '@tarojs/components';
import React, { FC, ReactElement} from 'react';
import styles from './index.module.scss';

interface IProps {
  info:any
}
const CustomList: FC<IProps> = (props):ReactElement => {
  const { info } = props;
  return (
    <View className={styles.customList}>
      <View className={styles.L}>
        <View className={styles.content}>
          { info.content }
        </View>
        <View className={styles.date}>收藏时间:2022年2月12号</View>
      </View>
      <View className={styles.detail}>详情</View>
    </View>
  )
}
export default CustomList;

