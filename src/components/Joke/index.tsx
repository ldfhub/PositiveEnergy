import React, { FC, ReactElement } from 'react';
import { View } from '@tarojs/components';
import styles from './index.module.scss';

console.log(styles, 'styles')

interface IJokeProps {

}

const Joke: FC<IJokeProps> = (props):ReactElement => {
  return (
    <View className={styles.Title}>这是笑话栏目</View>
  );
}

export default Joke;
