import React from 'react';
import styles from './styles';
import { Text, Button as BaseButton } from 'react-native-paper';

const Button = props => {
  return (
    <BaseButton
      {...props}
      labelStyle={[styles.buttonLabel, props.labelStyle]}
    />
  );
};

export default Button;
