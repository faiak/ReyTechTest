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

const WrapperTask = ({ meta, meta: { date_fr, title } = {}, data = [] }) => {
  if (!data.length) return null;
  return (
    <View>
      <View style={styles.textWrapper}>
        {title ? <Text style={styles.text}>{title} - </Text> : null}
        <Text style={styles.text}>{date_fr}</Text>
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
        }}
      />
    </View>
  );
};

export default WrapperTask;
