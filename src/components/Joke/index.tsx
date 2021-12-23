import React, { FC, ReactElement } from 'react';
import { View, Button } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../../actions/count';
import { IState } from './index.interface';
import styles from './index.module.scss';

interface IJokeProps {

}

const Joke: FC<IJokeProps> = (props):ReactElement => {
  const dispatch = useDispatch();
  useSelector((state) => {
    console.log(state);
  })
  // const CountState = useSelector(state => state.counterrReducer)

  const addCount = () => {
    dispatch(addAction(5))
  }
  return (
    <View className={styles.Title}>这是笑话栏目
      <Button type='primary' onClick={addCount}> + </Button>
    </View>
  );
}

export default Joke;
