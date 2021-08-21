import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from 'app/store/actions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { TextInput, Button } from 'react-native-paper';
import screens from 'app/navigation/screens';
import { Form } from 'app/components';
import { ContainerScrollView } from 'app/container';
import { authSelectors } from 'app/store/selectors';

const formTemplate = [
  {
    Component: TextInput,
    componentProps: {
      label: 'Nama',
      mode: 'outlined',
    },
    submitType: 'email',
    rules: {
      required: true,
    },
    name: 'name',
  },
  {
    Component: TextInput,
    componentProps: {
      label: 'Email',
      mode: 'outlined',
      autoCapitalize: 'none',
    },
    submitType: 'password',
    rules: {
      required: true,
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format',
      },
    },
    name: 'email',
  },
  {
    Component: TextInput,
    componentProps: {
      label: 'Password',
      mode: 'outlined',
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
    submitType: 'password_confirmation',
    rules: {
      required: true,
      minLength: {
        value: 5,
        message: 'min length is 5',
      },
    },
    name: 'password',
  },
  {
    Component: TextInput,
    componentProps: {
      label: 'Konfirmasi Password',
      mode: 'outlined',
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
    submitType: 'submit',
    rules: {
      required: true,
      minLength: {
        value: 5,
        message: 'min length is 5',
      },
    },
    name: 'password_confirmation',
  },
];

const Register = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => authSelectors.getLoading(state));
  const onRegister = data => dispatch(authActions.register(data));

  return (
    <ContainerScrollView>
      <Form
        onSubmit={onRegister}
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
              onPress={handleSubmit(onRegister)}>
              DAFTAR
            </Button>
          </>
        )}
      />
    </ContainerScrollView>
  );
};

export default Register;
