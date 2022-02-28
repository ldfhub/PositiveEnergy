import { View, Text } from '@tarojs/components';
import React, { FC, ReactElement, useState, useRef} from 'react';
import copy from "copy-to-clipboard";
import { AtToast } from "taro-ui";
// import bag1 from '../../../../assets/4.jpg'
import { useDispatch } from 'react-redux';
import Taro from '@tarojs/taro';
import { queryHomeOne } from '../../../../actions/home';
import styles from './index.module.scss';

interface IProps {
  info: {content: string; id: string; type: string; collect: string; easyLike:string;}
}

const CustomTable: FC<IProps> = (props):ReactElement => {
  const dispatch = useDispatch();
  const { info } = props;
  const timeId = useRef();
  const [isRoute, setIsRoute] = useState(false);
  const queryHomeOneList = () => {
    console.log('000000')
    dispatch(queryHomeOne({ type: info.type }))
  }
  const clickRoute = () => {
    // clearTimeout(timeId.current);
    setIsRoute(true)
    timeId.current = setTimeout(() => {
      queryHomeOneList();
      setIsRoute(false);
    }, 1000)
  }
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
          <View className={styles.btnInfo_l}>
            <View className='mgl10 at-icon at-icon-heart'>({Number(info.easyLike)})</View>
            <View className='mgl10 at-icon at-icon-star'>({Number(info.collect)})</View>
            <Text className='mgl10' onClick={copyText(info.content)}>复制文字</Text>
          </View>
          <View className={styles.btnInfo_r}>
            <View className={isRoute ? styles.route + ' ' + styles.refresh : styles.refresh} onClick={clickRoute}></View>
            <Text className='mgl10 mgr10'>详情</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default CustomTable

