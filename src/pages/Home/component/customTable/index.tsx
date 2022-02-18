import { View, Text } from '@tarojs/components';
import React, { FC, ReactElement} from 'react';
import styles from './index.module.scss';
interface IProps {
  info: {content: string; id: string; type: string;}
}

const CustomTable: FC<IProps> = (props):ReactElement => {
  const { info } = props;
  return (
    <View className={styles.customTable}>
      <View className={styles.thumbnail}></View>
      <View className={styles.contentInfo}>
        <Text className={styles.textContent}>
          {info.content}
        </Text>
        <View className={styles.btnInfo}>
          <View className='at-icon at-icon-heart'></View>
          <View className='at-icon at-icon-star'></View>
        </View>
      </View>
    </View>
  )
}
export default CustomTable

