import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtAvatar } from 'taro-ui';
import React, { FC, ReactElement, useState } from 'react';
import { Request } from '../../utils/request';
import ListBar from '../../components/ProfileListBar';
import styles from './index.module.scss';
import defaultAvatar from '../../assets/wx-default-avatar.png';
import shareImg from '../../assets/shareImg.png';

interface indexProps {

}

const Profile: FC<indexProps> = (): ReactElement => {
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatar);
  const [nickName, setNickName] = useState('账号登陆')
  const skipLogin = () => {
    Taro.getUserProfile({
      desc: '登录黎明花开', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res1) => {
        setAvatarSrc(res1.userInfo.avatarUrl);
        setNickName(res1.userInfo.nickName);
        Taro.login({
          // 获取code
          success: function (res) {
            if (res.code) {
              // 发起网络请求
              const options = {
                url: '/loginCode',
                method: 'POST',
                data: {
                  code: res.code,
                  nickName: res1.userInfo.nickName
                }
              }
              Request(options).then((result) => {
                console.log(result, '000000')
                Taro.setStorage({
                  key:"violtTokenAndOpenId",
                  data: JSON.stringify({
                    token: result.data.token,
                    openid: result.data.openid
                  })
                })
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  }

  return (
    <View className={styles.profile}>
      <View className={styles.userInfo}>
        <View>
          <AtAvatar size='large' circle image={avatarSrc} />
        </View>
        <View className={styles.loginBtn}>
          <Text className={styles.loginOrReg} onClick={skipLogin}>{nickName}</Text>
          <Text className={styles.userId}>已经登陆/未登陆</Text>
        </View>
      </View>
      <View style={{marginTop: '20px'}}>
        <ListBar textName='分享邀请好友' imgSrc={shareImg} isArrow />
      </View>
    </View>
  );
}

export default Profile;
