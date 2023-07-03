import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { QueryProvider } from '~components/api/QueryProvider';
import CharacterList from '~screens/CharacterList/CharacterList';

const styles = StyleSheet.create({
  gestureHandlerWrapper: {
    flex: 1,
  },
});

const App = memo(() => (
  <GestureHandlerRootView style={styles.gestureHandlerWrapper}>
    <QueryProvider>
      <CharacterList />
    </QueryProvider>
  </GestureHandlerRootView>
));

export default App;
