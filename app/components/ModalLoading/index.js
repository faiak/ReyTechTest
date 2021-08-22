import React from 'react';
import {
  View,
  Modal as BaseModal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'app/store/actions';
import * as modalSelectors from 'app/store/selectors/modalSelectors';
import { Button } from 'app/components';
import { COLORS } from 'app/config/styles';

const ModalLoading = ({}) => {
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(modalActions.hide());
  };
  const isLoading = useSelector(state => modalSelectors.getGlobal(state));

  if (!isLoading) return null;
  return (
    <View
      style={styles.wrapper}
      animationType="fade"
      transparent={isLoading}
      visible={isLoading}
      onRequestClose={onOk}>
      <View style={styles.modalClose}>
        <ActivityIndicator animating={true} color={COLORS.PRIMARY} />
      </View>
    </View>
  );
};

export default ModalLoading;
