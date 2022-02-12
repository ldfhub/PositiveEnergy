import React, { FC, ReactElement, useReducer, useState } from 'react';
// import Taro from '@tarojs/taro';
import { AtForm, AtInput, AtButton, AtList, AtListItem, AtTextarea, AtToast } from 'taro-ui';
import { View, Picker } from '@tarojs/components';
import { Request } from   '../../utils/request';
import { getUserInfo } from '../../utils/tools';

interface indexProps {

}

const initState = {
  title: '',
  type: '',
  content: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SetTitle':
      return { ...state, title: action.payload }
    case 'SetType':
      return { ...state, type: action.payload }
    case 'SetContent':
      return { ...state, content: action.payload }
    case 'Reset':
      return initState
    default:
      throw new Error();
  }
}
const Text = [
  '为了更好的体验，要完成所有选项填写哦！',
  '涉及到信息保存，请您先登陆哦！'
]

const Upload: FC<indexProps> = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [toastText, setToastText] = useState<string>('');
  const [isOpened, setIsOpened] = useState(false)
  const pickerDataSource = [
    '笑话', '情话', '网易云热评'
  ]
  const changeTitle = (value, e) => {
    dispatch({ type: 'SetTitle', payload: value})
  }
  const onChangePicker = (e) => {
    dispatch({ type: 'SetType', payload: pickerDataSource[e.detail.value]})
  }
  const changeContent = (value, e) => {
    dispatch({ type: 'SetContent', payload: value})
  }
  const re1 = getUserInfo('violetTokenAndOpenId');
  const wxName = getUserInfo('WXNickName');
  // console.log(re1, re2)
  const getType = () => {
    const type = pickerDataSource.findIndex((i, index) => {
      return i === state.type
    });
    return type + 1;
  }
  const onSubmit = (e) => {
    if (!state.type || !state.content || !state.title) {
      setIsOpened(true);
      setToastText(Text[0]);
    } else {
      const options = {
        url: '/upload/content',
        method: 'POST',
        data: {
          ...state,
          type: getType(),
          wxId: re1.openid,
          wxNickName: wxName.wxNickName
        }
      }
      Request(options).then((res) => {
        if (res.data.msg === 'token验证失败') {
          setIsOpened(true);
          setToastText(Text[1]);
        }
      })
    }
  }
  // 表单重置
  const onReset = () => {
    dispatch({ type: 'Reset' })
  }

  const toastClose = () => {
    setIsOpened(false)
  }

  return (
    <View>
      <AtForm>
        <Picker mode='selector' range={pickerDataSource} onChange={onChangePicker}>
          <AtList>
            <AtListItem
              title='上传文案类型'
              extraText={state.type}
            />
          </AtList>
        </Picker>
        <AtInput
          required
          value={state.title}
          name='title'
          title='标题'
          type='text'
          onChange={changeTitle}
          confirmType='done'
        />
        <AtTextarea
          value={state.content}
          placeholder='请输入文案内容'
          onChange={changeContent}
        />
        <AtButton onClick={onSubmit}>提交</AtButton>
        <AtButton onClick={onReset}>重置</AtButton>
      </AtForm>
      <AtToast isOpened={isOpened} text={toastText} onClose={toastClose}></AtToast>
    </View>
  );
}

export default Upload;



