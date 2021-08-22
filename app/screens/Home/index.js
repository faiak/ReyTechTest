import CardTask from 'app/components/CardTask';
import Searchbar from 'app/components/Searchbar';
import { COLORS } from 'app/config/styles';
import { ContainerFlatList } from 'app/container';
import NavigationService from 'app/navigation/NavigationService';
import screens from 'app/navigation/screens';
import { authActions } from 'app/store/actions';
import React from 'react';
import { View } from 'react-native';
import { Button, FAB, Text } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());

  const onRefresh = () => {};

  const onCreate = () => {
    NavigationService.navigate(screens.TASK_CREATE);
  };

  return (
    <>
      <ContainerFlatList
        ListHeaderComponent={() => {
          return <Searchbar />;
        }}
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
      <FAB style={styles.fab} icon="plus" onPress={onCreate} />
    </>
  );
};

export default Home;
