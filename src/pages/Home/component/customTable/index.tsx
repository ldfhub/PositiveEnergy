import { View, Text } from '@tarojs/components';
import React, { FC, ReactElement, useState} from 'react';
import copy from "copy-to-clipboard";
import { AtToast } from "taro-ui"
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

interface IProps {
  info: {content: string; id: string; type: string; collect: string; easyLike:string;}
}

const CustomTable: FC<IProps> = (props):ReactElement => {
  const { info } = props;
  const copyText = (textToCopy) => {
    return () => {
      Taro.setClipboardData({
        data: textToCopy,
        success: function (res) {
          console.log('复制成功', res);
        }
      })
    }
  }
  return (
    <View className={styles.customTable}>
      <View className={styles.thumbnail}></View>
      <View className={styles.contentInfo}>
        <Text className={styles.textContent}>
          {info?.content}
        </Text>
        <View className={styles.btnInfo}>
          <View className='at-icon at-icon-heart'>{(Number(info.easyLike))}</View>
          <View className='at-icon at-icon-star'>{(Number(info.collect))}</View>
          <Text onClick={copyText(info.content)}>复制文字</Text>
          <Text>详情</Text>
        </View>
      </View>
    </View>
  )
}
export default CustomTable

