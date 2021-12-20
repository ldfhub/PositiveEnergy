/*
 * @Author: your name
 * @Date: 2021-12-20 16:35:59
 * @LastEditTime: 2021-12-20 16:44:08
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /PositiveEnergy/src/components/TabBar/index.tsx
 */
import React, { FC, ReactElement } from 'react';
import { View } from '@tarojs/components';
import { ITabBar } from './index.interface';

const TabBar:FC<ITabBar> = (): ReactElement => {
  return (
    <View>
      这是tabbar
    </View>
  )
}
export default TabBar;

