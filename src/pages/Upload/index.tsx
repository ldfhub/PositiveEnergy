import React, { FC, ReactElement, useReducer, useState } from 'react';
// import Taro from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import { Request } from   '../../utils/request';
import { AtForm, AtInput, AtButton, AtList, AtListItem, AtTextarea, AtToast } from 'taro-ui'

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

const Upload: FC<indexProps> = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initState)
  const [isOpened, setIsOpened] = useState(false)
  const pickerDataSource = [
    '笑话', '情话', '网易云热评'
  ]
  const changeTitle = (value, e) => {
    dispatch({ type: 'SetTitle', payload: value})
  }
  const onChangePicker = (e) => {
    dispatch({ type: 'SetType', payload: pickerDataSource[e.detail.value]})
    // console.log(getType())
  }
  const changeContent = (value, e) => {
    dispatch({ type: 'SetContent', payload: value})
  }
  const getType = () => {
    const type = pickerDataSource.findIndex((i, index) => {
      return i === state.type
    });
    return type + 1;
  }
  const onSubmit = (e) => {

    if (!state.type || !state.content || !state.title) {
      setIsOpened(true);
    }
    const options = {
      url: '/upload/content',
      method: 'POST',
      data: {
        ...state,
        type: getType()
      }
    }
    Request(options)
  }
  const onReset = () => {
    dispatch({ type: 'Reset' })
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
      <AtToast isOpened={isOpened} text='为了更好的体验，要完成所有选项填写哦！'></AtToast>
    </View>
  );
}

export default Upload;



