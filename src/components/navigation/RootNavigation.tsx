import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharacterDetails from '~screens/CharacterDetails/CharacterDetails';
import CharacterList from '~screens/CharacterList/CharacterList';

import { navigationRef } from './navigator';
import rootOptions from './styles';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = memo(() => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name="character_list" component={CharacterList} options={rootOptions} />
      <Stack.Screen name="character_details" component={CharacterDetails} options={rootOptions} />
    </Stack.Navigator>
  </NavigationContainer>
));

export default Root;
