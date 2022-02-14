import { View } from '@tarojs/components';
import React, { FC, ReactElement} from 'react';
import styles from './index.module.scss';

interface IProps {

}

const CustomTable: FC<IProps> = (props):ReactElement => {
  return (
    <View className={styles.customTable}>
      <View className={styles.thumbnail}></View>
      <View className={styles.contentInfo}></View>
    </View>
  )
}
export default CustomTable

