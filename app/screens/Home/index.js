import CardTask from 'app/components/CardTask';
import { ContainerFlatList } from 'app/container';
import { authActions } from 'app/store/actions';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());

  const onRefresh = () => {};

  return (
    <ContainerFlatList
      disableKeybordListerner
      data={['sad', 'sad', 'sad', 'sad', 'sad', 'sad', 'sad', 'sad']}
      isLoading={false}
      onRefresh={onRefresh}
      renderItem={(item, index) => <CardTask key={`idx_${index}`} />}
      safeAreaViewStyle={styles.content}
      flatListProps={
        {
          // key
          // extraData: this.state,
          // ListFooterComponent: this._renderNote(),
        }
      }
      // ListFooterComponent={this._renderFooter()}
    />
  );
};

export default Home;
