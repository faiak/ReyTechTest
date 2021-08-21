import { authActions } from 'app/store/actions';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import styles from './styles';
const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
