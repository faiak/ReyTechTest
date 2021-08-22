import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions, taskActions } from 'app/store/actions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { TextInput, Button } from 'react-native-paper';
import screens from 'app/navigation/screens';
import { Form } from 'app/components';
import { ContainerScrollView } from 'app/container';
import { authSelectors, taskSelectors } from 'app/store/selectors';
import TextInputMask from 'react-native-text-input-mask';

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
  },
  {
    Component: TextInput,
    componentProps: {
      label: 'Tanggal (yyyy-mm-dd)',
      render: props => (
        <TextInputMask
          {...props}
          // placeholder="2020-01-01"
          mask={'[0000]-[00]-[00]'}
        />
      ),
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
  },
];

const TaskCreate = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => taskSelectors.getLoadingCreate(state));
  const onSubmit = data => {
    dispatch(taskActions.create(data));
  };

  return (
    <ContainerScrollView>
      <Form
        onSubmit={onSubmit}
        isLoading={isLoading}
        data={formTemplate}
        bottomComponent={({ handleSubmit }) => (
          <>
            <Button
              loading={isLoading}
              disabled={isLoading}
              labelStyle={styles.buttonLabel}
              style={styles.button}
              mode="contained"
              onPress={handleSubmit(onSubmit)}>
              TAMBAH
            </Button>
          </>
        )}
      />
    </ContainerScrollView>
  );
};

export default TaskCreate;
