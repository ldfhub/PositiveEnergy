import { View } from '@tarojs/components';
import React, { FC, ReactElement} from 'react';
import styles from './index.module.scss';

interface IProps {

}
const CustomList: FC<IProps> = ():ReactElement => {
  return (
    <View className={styles.customList}>
      <View className={styles.L}>
        <View className={styles.content}>
          文案1 文案1文案1文案1文案1文案1文案1文案1文案1 文案1文案1文案1文案1文案1文案1文案1
        </View>
        <View className={styles.date}>收藏时间:2022年2月12号</View>
      </View>
      <View className={styles.detail}>详情</View>
    </View>
  )
}
export default CustomList;

