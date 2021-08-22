import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Card, IconButton, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from 'app/store/actions';
import { COLORS } from 'app/config/styles';
import NavigationService from 'app/navigation/NavigationService';
import screens from 'app/navigation/screens';

const CardTask = ({
  title = '',
  task_date = '',
  created_at = '',
  updated_at = '',
  is_complete = 0,
  id = 0,
}) => {
  const dispatch = useDispatch();
  const onComplete = () => {
    dispatch(taskActions.complete(id));
  };
  const onDelete = () => {
    dispatch(taskActions.delete(id));
  };
  const onEdit = () => {
    NavigationService.navigate(screens.TASK_UPDATE, {
      id,
      title,
      task_date,
      created_at,
      updated_at,
    });
  };

  const isDark = useSelector(state => state.themeReducer.isDark);
  return (
    <Card style={styles.card}>
      <View
        style={[
          styles.content,
          is_complete && {
            backgroundColor: isDark
              ? COLORS.GREY_TRANSP
              : COLORS.DARK_SEPERATOR,
          },
        ]}>
        <IconButton
          icon={is_complete ? 'radiobox-marked' : 'radiobox-blank'}
          color={is_complete ? COLORS.PRIMARY : COLORS.GREY}
          size={28}
          onPress={onComplete}
        />
        <View style={styles.flex}>
          <Text
            style={[styles.title, is_complete && styles.strikeTitle]}
            numberOfLines={1}>
            {title}
          </Text>
          <Text style={[styles.date, is_complete && styles.strikeTitle]}>
            Dibuat: {created_at}
          </Text>
        </View>
        <IconButton
          icon="pencil-outline"
          color={COLORS.GREY}
          size={18}
          onPress={onEdit}
          style={styles.icon}
        />
        <IconButton
          style={styles.icon}
          icon="delete"
          color={COLORS.GREY}
          size={18}
          onPress={onDelete}
        />
      </View>
    </Card>
  );
};

export default CardTask;
