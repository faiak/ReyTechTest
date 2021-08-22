import { COLORS } from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    // alignItems: 'center',
  },
  modalClose: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose2: {
    flex: 1,
    flexGrow: 1,
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 19,
  },
  wrapTextModal: { flex: 1, paddingLeft: 10 },
  wrapButtonClose: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  wrapTextTitle: { paddingBottom: 14 },
  wrapTextBody: { paddingBottom: 24 },
  title: { color: COLORS.BLACK, fontSize: 20 },
  body: { color: COLORS.BLACK },
});

export default styles;
