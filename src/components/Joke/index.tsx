import React, { FC, ReactElement } from 'react';
import { View, Button } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, getTest } from '../../actions/count';
import { RootState } from '../../store'
import styles from './index.module.scss';

interface IJokeProps {

}

const Joke: FC<IJokeProps> = (props):ReactElement => {
  const dispatch = useDispatch<any>();
  const { counter, test} = useSelector((state:RootState) => state.counterReducer)

  const addCount = () => {
    dispatch(addAction(5));
    dispatch(getTest());
  }
  return (
    <View className={styles.Title}>这是{counter}
      {/* {
        test?.data?.result?.songs?.map((item) => {
          return <View key={item.id}>{item.name}</View>
        })
      } */}
      <Button type='primary' onClick={addCount}> + </Button>
    </View>
  );
}

export default Joke;
