import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  bottomActivityIndicator: { paddingBottom: 24 },
  topActivityIndicator: { paddingTop: 56 },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  contentContainer: {
    paddingBottom: 20,
    paddingTop: 40,
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    height: 200,
    width: '100%',
  },
});

export default styles;
