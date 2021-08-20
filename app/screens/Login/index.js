import React from 'react';
import { useDispatch } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { TextInput, Button } from 'react-native-paper';
import screens from 'app/navigation/screens';
import { Form } from 'app/components';
import { ContainerScrollView } from 'app/container';

const formTemplate = [
  {
    Component: TextInput,
    componentProps: {
      label: 'Email',
      mode: 'outlined',
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
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onRegister = () => NavigationService.navigate(screens.REGISTER);

  const onSubmit = data => console.log(data);

  return (
    <ContainerScrollView>
      <Form
        onSubmit={onSubmit}
        data={formTemplate}
        bottomComponent={({ handleSubmit }) => (
          <>
            <Button
              labelStyle={styles.buttonLabel}
              style={styles.button}
              mode="contained"
              onPress={handleSubmit(onSubmit)}>
              LOGIN
            </Button>
            <Button mode="outlined" onPress={onRegister}>
              DAFTAR
            </Button>
          </>
        )}
      />
    </ContainerScrollView>
  );
};

export default Login;
