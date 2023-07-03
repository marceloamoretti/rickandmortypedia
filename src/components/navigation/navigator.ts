import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

import { AppParamList, NavigationFunction } from './types';

export const navigationRef = createRef<NavigationContainerRef<AppParamList>>();

export const navigate: NavigationFunction = (...args) => navigationRef.current?.navigate(...args);
