import React, { PureComponent } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

class KeyboardAvoidingViewOther extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <KeyboardAvoidingView
        enabled={Platform.OS === 'ios'}
        behavior="padding"
        style={styles.container}
        {...this.props}>
        {children}
      </KeyboardAvoidingView>
    );
  }
}

export default KeyboardAvoidingViewOther;
