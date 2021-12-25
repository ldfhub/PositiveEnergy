import React, { FC, ReactElement } from 'react';
import { View, Button } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { Request } from '../../utils/request';
import { addAction, getTest } from '../../actions/count';
import { RootState } from '../../store'
import styles from './index.module.scss';

interface IJokeProps {

}

const Joke: FC<IJokeProps> = (props):ReactElement => {
  const dispatch = useDispatch();
  const stateCounter = useSelector((state:RootState) => state.counterReducer)

  const addCount = () => {
    dispatch(addAction(5));
    dispatch(getTest());
  }
  return (
    <View className={styles.Title}>这是{stateCounter.counter}
      <Button type='primary' onClick={addCount}> + </Button>
    </View>
  );
}

export default Joke;
