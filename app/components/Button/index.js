import React from 'react';
import styles from './styles';
import { Button as BaseButton } from 'react-native-paper';

const Button = props => {
  return (
    <BaseButton
      mode="contained"
      {...props}
      labelStyle={[styles.buttonLabel, props.labelStyle]}
    />
  );
};

export default Button;
