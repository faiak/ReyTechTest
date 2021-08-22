import React from 'react';
import styles from './styles';
import { Searchbar as BaseSaerchbar } from 'react-native-paper';
import { View, Text } from 'react-native';

const Searchbar = props => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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
