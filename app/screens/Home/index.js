import React, { useEffect } from 'react';
import CardTask from 'app/components/CardTask';
import Searchbar from 'app/components/Searchbar';
import { COLORS } from 'app/config/styles';
import { ContainerFlatList } from 'app/container';
import NavigationService from 'app/navigation/NavigationService';
import screens from 'app/navigation/screens';
import { authActions, taskActions } from 'app/store/actions';
import { RefreshControl, View, Image, Animated } from 'react-native';
import { FAB, Text } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { taskSelectors } from 'app/store/selectors';
import { Button, WrapperTask } from 'app/components';
import { IMAGES } from 'app/config/images';

const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());

  const onRefresh = () => {};

  const onCreate = () => {
    NavigationService.navigate(screens.TASK_CREATE);
  };

  const taskList = useSelector(state => taskSelectors.getTask(state));
  const isLoading = useSelector(state => taskSelectors.getLoading(state));

  useEffect(() => {
    dispatch(taskActions.get());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <Searchbar />
      <ContainerFlatList
        disableKeybordListerner
        data={taskList}
        isLoading={isLoading}
        onRefresh={onRefresh}
        renderItem={({ item, index }) => (
          <WrapperTask {...item} key={`idx_wrap_${index}`} />
        )}
        safeAreaViewStyle={styles.content}
        flatListProps={{
          ListEmptyComponent: isLoading ? null : (
            <View style={styles.emptyWrapper}>
              <Image source={IMAGES.imgNodata} style={styles.emptyImage} />
              <Button onPress={onCreate}>TAMBAH TASK</Button>
            </View>
          ),
          keyExtractor: ({ meta }) => `idx_${meta.date}`,
          refreshControl: (
            <RefreshControl
              refreshing={isLoading}
              colors={[COLORS.PRIMARY]}
              tintColor={COLORS.PRIMARY}
              onRefresh={() => dispatch(taskActions.get())}
            />
          ),
        }}
      />
      <FAB
        label="Keluar"
        style={styles.fabLogout}
        small={true}
        icon="location-exit"
        onPress={onLogout}
      />
      <FAB style={styles.fab} icon="plus" onPress={onCreate} />
    </>
  );
};

export default Home;
