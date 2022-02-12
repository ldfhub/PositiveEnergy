import { View } from '@tarojs/components';
import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AtButton } from 'taro-ui';
import styles from './index.module.scss';
import { screenType } from '../../utils/constantData';
import { IButtonActiveType } from './index.d';
import CustomList from './component/CustomList';
import { RootState } from '../../store';

interface indexProps {

}

const List: FC<indexProps> = (): ReactElement => {
  const [buttonActiveType, setButtonActiveType] = useState('笑话'); // 设置button激活类型
  const { loginStatus} = useSelector((state:RootState) => state.loginReducer)
  const buttonClick = (item) => {
    return () => {
      setButtonActiveType(item.name);
    }
  }
  return (
    <View className={styles.list}>
      {
        loginStatus
        ? <View>
          <View className={styles.screenBUtton}>
            {
              screenType.map((item, index) => {
                return (
                  <AtButton key={index} onClick={buttonClick(item)} size={buttonActiveType === item.name ? 'normal' : 'small'}>{item.name}</AtButton>
                )
              })
            }
          </View>
          <CustomList />
        </View>
        : <View>请登陆查看个人文案列表</View>
      }
    </View>
  );
}

export default List;

