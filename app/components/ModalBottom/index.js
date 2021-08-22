import React from 'react';
import {
  View,
  Modal as BaseModal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'app/store/actions';
import * as modalSelectors from 'app/store/selectors/modalSelectors';
import { Button } from 'app/components';

const ModalBottom = ({}) => {
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(modalActions.hide());
  };
  const { show, title, body } = useSelector(state => modalSelectors.get(state));
  const isLoading = useSelector(state => modalSelectors.getGlobal(state));

  return (
    <BaseModal
      animationType="fade"
      transparent={show && !isLoading}
      visible={show && !isLoading}
      onRequestClose={onOk}>
      <View style={styles.modalClose}>
        <Pressable style={styles.modalClose2} onPress={onOk} />
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onOk} style={styles.wrapButtonClose}>
            <Icon name="close" size={18} />
          </TouchableOpacity>
          <View style={styles.wrapTextTitle}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.wrapTextBody}>
            <Text style={styles.body}>{body}</Text>
          </View>
          <Button mode="contained" onPress={onOk}>
            OK
          </Button>
        </View>
      </View>
    </BaseModal>
  );
};

export default ModalBottom;
