import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    flex: 1,
  },
  imageWrapper: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 16,
    height: 16,
    tintColor: theme.colors.white,
    marginLeft: 4,
  },
  emptyImage: {
    width: 300,
    height: 300,
  },
});

export default styles;
