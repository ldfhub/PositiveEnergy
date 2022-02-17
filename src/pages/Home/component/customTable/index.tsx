import { View } from '@tarojs/components';
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
      <View className={styles.contentInfo}>{info.content}</View>
    </View>
  )
}
export default CustomTable

