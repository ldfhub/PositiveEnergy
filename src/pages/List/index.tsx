import { View } from '@tarojs/components';
import React, { FC, ReactElement, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AtButton } from 'taro-ui';
import styles from './index.module.scss';
import { screenType } from '../../utils/constantData';
import { IButtonActiveType } from './index.d';
import { queryList} from '../../actions/list';
import { getUserInfo } from '../../utils/tools';
import CustomList from './component/CustomList';
import { RootState } from '../../store';

interface indexProps {

}

// 1: 笑话
// 2: 情话
// 3: 热评论
// 4: 励志

const List: FC<indexProps> = (): ReactElement => {
  const [buttonActiveType, setButtonActiveType] = useState('笑话'); // 设置button激活类型
  const [type, setType] = useState('1');
  const { loginStatus} = useSelector((state:RootState) => state.loginReducer);
  const { list } = useSelector((state:RootState) => state.listReducer);
  const dispatch = useDispatch();
  const wxId = getUserInfo('violetTokenAndOpenId').openid;
  const wxNickName = getUserInfo('WXNickName').wxNickName;
  useEffect(() => {
    queryAllList();
  }, [type])
  // 查询列表
  const queryAllList = () => {
    const params = {
      wxId,
      wxNickName,
      type
    }
    dispatch(queryList(params));
  }

  const buttonClick = (item) => {
    return () => {
      setType(item.key)
      setButtonActiveType(item.name);
      queryAllList();
    }
  }
  console.log(list);
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
          {
            list.length > 0 &&
            list.map((item, index) => {
              return (
                <CustomList key={index} info={item} />
              )
            })
          }
        </View>
        : <View>请登陆查看个人文案列表</View>
      }
    </View>
  );
}

export default List;

