import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  container: { marginTop: 9 },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: theme.colors.black,
    marginTop: 12,
  },
});

export default styles;
