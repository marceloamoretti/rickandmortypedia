import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  wrapper: {
    height: 220,
    alignItems: 'center',
  },
  container: { marginTop: 160, marginHorizontal: 20, marginBottom: 20 },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 120,
    borderWidth: 5,
    borderColor: theme.colors.grey100,
    marginBottom: 20,
  },
  characterName: { alignSelf: 'center', marginBottom: 10 },
});

export default styles;
