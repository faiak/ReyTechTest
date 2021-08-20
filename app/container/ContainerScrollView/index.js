import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContainerScrollView = ({ children }) => {
  return (
    <SafeAreaView style={styles.flex}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ContainerScrollView;
