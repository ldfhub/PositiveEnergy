
import React, { memo, FC, ReactElement } from 'react';
import { Image, View, Text, Button } from '@tarojs/components'
import styles from './index.module.scss';
import rightArrow from '../../assets/rightArrow.png';


interface IProps {
  textName: string;
  imgSrc: string;
  isArrow: boolean;
  callBack?: () => any;
  type?: 'share';
}
const ListBar:FC<IProps> = memo(function ListBar(props):ReactElement {
  const { callBack, type } = props;
  return (
    <View className={styles.profileListBar} onClick={callBack}>
      <View className={styles.topBox}>
        <View className={styles.BoxL}>
          <Image src={props.imgSrc}></Image>
          {
            !type && <Text className={styles.textName}>{props.textName}</Text>
          }
          {
            type === 'share' &&
            <Button className={styles.isButton} open-type='share'>{props.textName}</Button>
          }
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


