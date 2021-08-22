import React, { PureComponent } from 'react';
import {
  Keyboard,
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { KeyboardAvoidingView } from 'app/container';
import styles from './styles';

const ContainerFlatList = ({
  data,
  ListHeaderComponent,
  ListFooterComponent,
  safeAreaViewStyle,
  flatListStyle,
  onScrollFlatList,
  renderItem,
  flatListProps,
}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView, safeAreaViewStyle]}>
      <KeyboardAvoidingView>
        <FlatList
          data={data}
          // refreshControl={this._refreshControl()}
          scrollEventThrottle={64}
          onScroll={onScrollFlatList}
          keyboardShouldPersistTaps="handled"
          renderItem={renderItem}
          contentContainerStyle={[styles.flatList, flatListStyle]}
          {...flatListProps}
        />
        {ListFooterComponent}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ContainerFlatList;

ContainerFlatList.defaultProps = {
  flatListProps: {},
  safeAreaViewStyle: {},
  flatListStyle: {},
  data: [],
  disableKeybordListerner: false,
  isLoading: false,
  onRefresh: null,
  onScrollFlatList: () => {},
  renderItem: null,
  ListHeaderComponent: null,
  ListFooterComponent: null,
};
