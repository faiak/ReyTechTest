import React from 'react';
import {
  View,
  Modal as BaseModal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import {
  Avatar,
  Card,
  Checkbox,
  IconButton,
  Paragraph,
  Text,
  Title,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, taskActions } from 'app/store/actions';
import * as modalSelectors from 'app/store/selectors/modalSelectors';
import { Button } from 'app/components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from 'app/config/styles';

const CardTask = ({
  title = '',
  task_date = '',
  created_at = '',
  is_complete = 0,
  id = 0,
}) => {
  const dispatch = useDispatch();
  const onComplete = id => {
    dispatch(taskActions.complete(id));
  };
  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <IconButton
          icon={is_complete ? 'radiobox-marked' : 'radiobox-blank'}
          color={is_complete ? COLORS.PRIMARY : COLORS.GREY}
          size={28}
          onPress={() => onComplete(id)}
        />
        <View style={styles.flex}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.date}>Created: {created_at}</Text>
        </View>
        <IconButton
          icon="pencil-outline"
          color={COLORS.GREY}
          size={18}
          onPress={() => console.log('Pressed')}
          style={styles.icon}
        />
        <IconButton
          style={styles.icon}
          icon="delete"
          color={COLORS.GREY}
          size={18}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </Card>
  );
};

export default CardTask;
