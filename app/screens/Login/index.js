import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from 'app/store/actions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { TextInput, Button } from 'react-native-paper';
import screens from 'app/navigation/screens';
import { Form, ModalBottom } from 'app/components';
import { ContainerScrollView } from 'app/container';
import { authSelectors } from 'app/store/selectors';

const formTemplate = [
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
    },
    submitType: 'submit',
    rules: {
      required: true,
      minLength: {
        value: 5,
        message: 'min length is 5',
      },
    },
    name: 'password',
  },
];

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => authSelectors.getLoading(state));
  const onLogin = data => dispatch(authActions.login(data));
  const onRegister = () => {
    NavigationService.navigate(screens.REGISTER);
  };
  return (
    <ContainerScrollView>
      <Form
        onSubmit={onLogin}
        data={formTemplate}
        isLoading={isLoading}
        bottomComponent={({ handleSubmit }) => (
          <>
            <Button
              labelStyle={styles.buttonLabel}
              style={styles.button}
              mode="contained"
              loading={isLoading}
              disabled={isLoading}
              onPress={handleSubmit(onLogin)}>
              LOGIN
            </Button>
            <Button mode="outlined" disabled={isLoading} onPress={onRegister}>
              DAFTAR
            </Button>
          </>
        )}
      />
    </ContainerScrollView>
  );
};

export default Login;
