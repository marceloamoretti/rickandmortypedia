import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.indigo,
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    color: theme.colors.black,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.bodyFontSizes.small,
    lineHeight: 18,
    fontWeight: '400',
    marginRight: 8,
  },
});

export default styles;
