import React from 'react';
import styles from './styles';
import { Searchbar as BaseSaerchbar } from 'react-native-paper';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { taskActions } from 'app/store/actions';

const Searchbar = props => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    dispatch(taskActions.get({ search: query }));
  };

  return (
    <View style={styles.container}>
      <BaseSaerchbar
        styles={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {/* <ThemeController /> */}
    </View>
  );
};

export default Searchbar;
