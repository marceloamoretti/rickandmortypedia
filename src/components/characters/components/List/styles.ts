import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

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
  topTouchable: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: theme.colors.deepPurple,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIcon: { width: 30, height: 30 },
});

export default styles;
