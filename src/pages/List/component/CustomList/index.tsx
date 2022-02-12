import { View } from '@tarojs/components';
import React, { FC, ReactElement} from 'react';
import styles from './index.module.scss';

interface IProps {

}
const CustomList: FC<IProps> = ():ReactElement => {
  return (
    <View className={styles.customList}>
      文案1 文案1文案1文案1文案1文案1文案1文案1
    </View>
  )
}
export default CustomList;

