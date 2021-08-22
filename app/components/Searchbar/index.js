import React from 'react';
import styles from './styles';
import { Searchbar as BaseSaerchbar } from 'react-native-paper';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from 'app/store/actions';
import { taskSelectors } from 'app/store/selectors';

const Searchbar = props => {
  const dispatch = useDispatch();
  // const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    // setSearchQuery(query);
    dispatch(taskActions.search(query));
    dispatch(taskActions.get({ search: query }));
  };

  const search = useSelector(state => taskSelectors.getSearch(state));

  return (
    <View style={styles.container}>
      <BaseSaerchbar
        styles={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={search}
      />
      {/* <ThemeController /> */}
    </View>
  );
};

export default Searchbar;
