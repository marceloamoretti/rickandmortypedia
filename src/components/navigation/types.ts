import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Character } from '~components/characters/types';

export type ScreenParamList = {
  character_details: { character: Character };
  character_list: undefined;
};

type ParamList<T extends keyof ScreenParamList> = Pick<ScreenParamList, T>;

export type RootStackParamList = ParamList<'character_details' | 'character_list'>;

export type AppParamList = RootStackParamList;

export type AppScreenName = keyof AppParamList;

export type AppNavigationProps<S extends AppScreenName> = NativeStackNavigationProp<
  AppParamList,
  S
>;

export type AppRouteProps<T extends AppScreenName> = RouteProp<AppParamList, T>;

export type AppScreenProps<T extends AppScreenName> = {
  navigation: AppNavigationProps<T>;
  route: AppRouteProps<T>;
};

export type NavigationFunction = <RouteName extends keyof AppParamList>(
  ...args: undefined extends AppParamList[RouteName]
    ? [screen: RouteName] | [screen: RouteName, params: AppParamList[RouteName]]
    : [screen: RouteName, params: AppParamList[RouteName]]
) => void;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends AppParamList {}
  }
}
