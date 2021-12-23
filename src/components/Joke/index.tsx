import React, { FC, ReactElement } from 'react';
import { View, Button } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../../actions/count';
import { RootState } from '../../store'
import styles from './index.module.scss';

interface IJokeProps {

}

const Joke: FC<IJokeProps> = (props):ReactElement => {
  const dispatch = useDispatch();
  useSelector((state) => {
    console.log(state, 'state');
  })
  const stateCounter = useSelector((state:RootState) => state.counterReducer)
  console.log(stateCounter, 'CountState')

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
