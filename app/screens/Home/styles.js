import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fabLogout: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
  emptyWrapper: { alignItems: 'center', justifyContent: 'center' },
  emptyImage: { width: 250, height: 250 },
});

export default styles;
