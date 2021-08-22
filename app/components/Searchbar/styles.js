import { COLORS } from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonLabel: {
    color: COLORS.WHITE,
  },
  button: { marginBottom: 12 },
  wrap: {
    // flex: 0,
    minHeight: 70,
  },
  container: {
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default styles;
