import { useNavigation } from '@react-navigation/native';

import { AppNavigationProps, AppScreenName } from '../types';

export default <T extends AppScreenName>(): AppNavigationProps<T> =>
  useNavigation<AppNavigationProps<T>>();
