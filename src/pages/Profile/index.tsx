import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtAvatar } from 'taro-ui';
import React, { FC, ReactElement, useState } from 'react';
import ListBar from '../../components/ProfileListBar';
import styles from './index.module.scss';
import defaultAvatar from '../../assets/wx-default-avatar.png';
import shareImg from '../../assets/shareImg.png';

interface indexProps {

}

const Profile: FC<indexProps> = (): ReactElement => {
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatar)
  const skipLogin = () => {
    Taro.navigateTo({
      url: './components/login/index'
    });
  }

  return (
    <View className={styles.profile}>
      <View className={styles.userInfo}>
        <View>
          <AtAvatar size='large' circle image={avatarSrc} />
        </View>
        <View className={styles.loginBtn}>
          <Text className={styles.loginOrReg} onClick={skipLogin}>登陆/注册</Text>
          <Text className={styles.userId}>用户ID:3333355</Text>
        </View>
      </View>
      <View style={{marginTop: '20px'}}>
        <ListBar textName='分享邀请好友' imgSrc={shareImg} isArrow />
      </View>
    </View>
  );
}

export default Profile;
