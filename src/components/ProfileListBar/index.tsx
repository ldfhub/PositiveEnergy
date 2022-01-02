
import React, { memo, FC, ReactElement } from 'react';
import { Image, View, Text } from '@tarojs/components'
import styles from './index.module.scss';
import rightArrow from '../../assets/rightArrow.png';


interface IProps {
  textName: string;
  imgSrc: string;
  isArrow: boolean;
}
const ListBar:FC<IProps> = memo(function ListBar(props):ReactElement {
  return (
    <View className={styles.profileListBar}>
      <View className={styles.topBox}>
        <View className={styles.BoxL}>
          <Image src={props.imgSrc}></Image>
          <Text className={styles.textName}>{props.textName}</Text>
        </View>
        {
          props.isArrow &&
          <View className={styles.rightArrow}></View>
        }
      </View>
    </View>
  )
})


export default ListBar


