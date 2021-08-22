import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { taskActions } from 'app/store/actions';
import styles from './styles';
import { TextInput, Button, Text } from 'react-native-paper';
import { Form } from 'app/components';
import { ContainerScrollView } from 'app/container';
import { taskSelectors } from 'app/store/selectors';
import TextInputMask from 'react-native-text-input-mask';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

const TaskCreate = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => taskSelectors.getLoadingCreate(state));
  const onSubmit = data => {
    dispatch(
      taskActions.create(
        params?.id ? { ...data, id: params?.id || null } : data,
      ),
    );
  };

  const { params } = useRoute();

  const formTemplate = [
    {
      Component: TextInput,
      componentProps: {
        label: 'Deskripsi',
        mode: 'outlined',
      },
      submitType: 'date',
      rules: {
        required: true,
      },
      name: 'title',
      defaultValue: params?.title || '',
    },
    {
      Component: TextInput,
      componentProps: {
        label: 'Tanggal (yyyy-mm-dd)',
        render: props => <TextInputMask {...props} mask={'[0000]-[00]-[00]'} />,
        mode: 'outlined',
        autoCapitalize: 'none',
      },
      submitType: 'submit',
      rules: {
        required: true,
        pattern: {
          value: /\d{4}-\d{2}-\d{2}/,
          message: 'Please use yyyy-mm-dd format',
        },
      },
      name: 'date',
      defaultValue: params?.task_date || '',
    },
  ];

  return (
    <ContainerScrollView>
      <Form
        onSubmit={onSubmit}
        isLoading={isLoading}
        data={formTemplate}
        bottomComponent={({ handleSubmit }) => (
          <>
            {params?.id ? (
              <View style={styles.timeWarpper}>
                <Text style={styles.timeText}>
                  Dibuat pada : {params?.fr_created_at}
                </Text>
                <Text style={styles.timeText}>
                  Diubah pada : {params?.fr_updated_at}
                </Text>
              </View>
            ) : null}
            <Button
              loading={isLoading}
              disabled={isLoading}
              labelStyle={styles.buttonLabel}
              style={styles.button}
              mode="contained"
              onPress={handleSubmit(onSubmit)}>
              {params?.id ? 'UBAH' : 'TAMBAH'}
            </Button>
          </>
        )}
      />
    </ContainerScrollView>
  );
};

export default TaskCreate;
