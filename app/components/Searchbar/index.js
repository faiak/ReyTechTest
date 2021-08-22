import React from 'react';
import styles from './styles';
import { Searchbar as BaseSaerchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import ThemeController from '../ThemeController';

const Searchbar = props => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View
      style={{
        paddingHorizontal: 8,
        flexDirection: 'row',
        paddingVertical: 8,
      }}>
      <BaseSaerchbar
        style={{ flex: 1 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {/* <ThemeController /> */}
    </View>
  );
  // return (
  //   // <SafeAreaView style={styles.wrap}>
  //     {/* <View style={styles.container}> */}
  //       <BaseSaerchbar
  //         style={{}}
  //         placeholder="Search"
  //         onChangeText={onChangeSearch}
  //         value={searchQuery}
  //       />
  //     {/* </View> */}
  //   {/* </SafeAreaView> */}
  // );
};

export default Searchbar;
