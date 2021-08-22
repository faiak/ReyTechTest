import React from 'react';
import {
  View,
  Modal as BaseModal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, Paragraph, Text, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'app/store/actions';
import * as modalSelectors from 'app/store/selectors/modalSelectors';
import { Button } from 'app/components';
import { ContainerFlatList } from 'app/container';
import CardTask from '../CardTask';
import { COLORS } from 'app/config/styles';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const WrapperTask = ({ meta, meta: { date_fr } = {}, data = [] }) => {
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(modalActions.hide());
  };

  return (
    <View style={{}}>
      <View style={{ paddingBottom: 8, paddingTop: 8, paddingLeft: 2 }}>
        <Text style={{ fontSize: 18 }}>{date_fr}</Text>
      </View>
      <ContainerFlatList
        disableKeybordListerner
        data={data}
        isLoading={false}
        renderItem={({ item, index }) => (
          <CardTask {...item} key={`idx_${item.id}`} />
        )}
        flatListProps={{
          keyExtractor: ({ id }) => `idx_${id}`,
          // key
          // extraData: this.state,
          // ListFooterComponent: this._renderNote(),
        }}
        // ListFooterComponent={this._renderFooter()}
      />
    </View>
  );
};

export default WrapperTask;
