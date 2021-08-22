import React, { useEffect, useState, useMemo } from 'react';
import { View, Animated, Alert } from 'react-native';
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
  is_deleted = false,
}) => {
  const dispatch = useDispatch();
  const onComplete = () => {
    dispatch(taskActions.complete(id));
  };
  const onDelete = () => {
    Alert.alert('Peringatan!', 'Yakin ingin hapus task ?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          dispatch(taskActions.delete(id));
        },
        style: 'cancel',
      },
    ]);
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

  const [scale, setScale] = useState(new Animated.Value(1));
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    if (is_deleted) {
      Animated.timing(scale, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setIsHidden(true);
        dispatch(taskActions.deleteForce({ id }));
      });
    }
  }, [is_deleted, scale, dispatch, id]);

  const isDark = useSelector(state => state.themeReducer.isDark);
  if (isHidden) return null;
  return (
    <Animated.View
      style={{
        transform: [{ scale: scale }],
      }}>
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
    </Animated.View>
  );
};

export default CardTask;
