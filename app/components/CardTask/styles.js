import { COLORS } from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: { marginBottom: 8, marginVertical: 0 },
  content: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
  flex: { flex: 1 },
  title: { fontSize: 14, paddingBottom: 4 },
  strikeTitle: { textDecorationLine: 'line-through' },
  date: { color: COLORS.GREY, fontSize: 12 },
  icon: { margin: 2 },
});

export default styles;
