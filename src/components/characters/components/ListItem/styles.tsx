import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  container: {
    width: 160,
    minHeight: 250,
    backgroundColor: theme.colors.bgPurple,
    borderRadius: 45,
    backdropFilter: 'blur(14.5px)',
  },
  characterInfo: {
    paddingHorizontal: 8,
    flex: 1,
  },
  characterImage: {
    marginTop: 25,
    width: 100,
    height: 100,
    borderRadius: 25,
    alignSelf: 'center',
  },
  chevron: {
    tintColor: theme.colors.white,
    width: 24,
    height: 24,
  },
  status: {
    marginTop: 8,
  },
  locationName: {
    marginTop: 8,
  },
  title: {
    marginTop: 15,
    alignSelf: 'center',
    height: 50,
    overflow: 'hidden',
  },
  separator: {
    width: '100%',
    height: 1,
    marginTop: 10,
    backgroundColor: theme.colors.black,
  },
  statusImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 5,
  },
  basicInfo: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 8,
    height: 60,
    width: '100%',
  },
  basicInfoText: {
    flex: 1,
    overflow: 'scroll',
    textAlign: 'center',
  },
});

export default styles;
