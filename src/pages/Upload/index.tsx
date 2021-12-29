import React, { FC, ReactElement } from 'react';
import { View, Picker } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtList, AtListItem } from 'taro-ui'

interface indexProps {

}

const Upload: FC<indexProps> = (): ReactElement => {
  const pickerDataSource = [
    '笑话', '情话', '网易云热评'
  ]
  const changeTitle = () => {
    console.log('1111');
  }
  const onChangePicker = () => {

  }
  return (
    <View>
      <AtForm>
        <Picker mode='selector' range={pickerDataSource} onChange={onChangePicker}>
          <AtList>
            <AtListItem
              title='国家地区'
              // extraText={this.state.selectorChecked}
            />
          </AtList>
        </Picker>
        <AtInput
          name='title'
          title='标题'
          type='text'
          onChange={changeTitle}
        />
      </AtForm>
    </View>
  );
}

export default Upload;



