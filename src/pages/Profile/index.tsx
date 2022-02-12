import { View, Text, OpenData } from '@tarojs/components';
import Taro, { useShareAppMessage, useShareTimeline } from '@tarojs/taro';
import { AtAvatar, AtToast } from 'taro-ui';
import React, { FC, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Request } from '../../utils/request';
import { addLoginStatus } from '../../actions/login';
import ListBar from '../../components/ProfileListBar';
import { RootState } from '../../store';
import styles from './index.module.scss';
import defaultAvatar from '../../assets/wx-default-avatar.png';
import shareImg from '../../assets/shareImg.png';

interface indexProps {

}

const Profile: FC<indexProps> = (): ReactElement => {
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatar);
  const [nickName, setNickName] = useState('账号登陆')
  const [isOpened, setIsOpened] = useState(false);
  const { loginStatus} = useSelector((state:RootState) => state.loginReducer)
  const dispatch = useDispatch();
  console.log(loginStatus, '00000000');
  const skipLogin = () => {
    Taro.getUserProfile({
      desc: '登录黎明花开', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res1) => {
        setAvatarSrc(res1.userInfo.avatarUrl);
        setNickName(res1.userInfo.nickName);
        Taro.setStorage({
          key:"WXNickName",
          data: JSON.stringify({
            wxNickName: res1.userInfo.nickName
          })
        })
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
                dispatch(addLoginStatus(true))
                Taro.setStorage({
                  key:"violetTokenAndOpenId",
                  data: JSON.stringify({
                    token: result.data.token,
                    openid: result.data.openid
                  })
                })
                setIsOpened(true)
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  }

  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '邀请好友',
      path: '/pages/GuidePages/index.tsx'
    }
  })

  return (
    <View className={styles.profile}>
      <View className={styles.userInfo}>
        <View className={styles.avatarBox}>
          {
            !loginStatus
            ? <AtAvatar size='large' circle image={avatarSrc} />
            : <OpenData type='userAvatarUrl' />
          }
        </View>
        <View className={styles.loginBtn} onClick={skipLogin}>
          {
            !loginStatus
            ? <Text className={styles.loginOrReg}>{nickName}</Text>
            : <OpenData className={styles.loginOrReg} type='userNickName' />
          }
          <Text className={styles.userId}>{ loginStatus ? '已经登陆' : '未登陆'}</Text>
        </View>
      </View>
      <View style={{marginTop: '20px'}}>
        <ListBar textName='分享邀请好友' imgSrc={shareImg} isArrow type='share' />
      </View>
      <AtToast isOpened={isOpened} text='登陆成功！'></AtToast>
    </View>
  );
}

export default Profile;
