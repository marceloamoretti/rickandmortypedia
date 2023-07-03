import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { QueryProvider } from '~components/api/QueryProvider';
import Root from '~components/navigation/RootNavigation';

const styles = StyleSheet.create({
  gestureHandlerWrapper: {
    flex: 1,
  },
});

const App = memo(() => (
  <GestureHandlerRootView style={styles.gestureHandlerWrapper}>
    <QueryProvider>
      <Root />
    </QueryProvider>
  </GestureHandlerRootView>
));

export default App;
