/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React, { memo, useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const EDIT = 'Edit';
const APP_TSX = 'App.tsx';
const DESCRIPTION = ' to change this screen and then come back to see your edits.';
const READ_THE_DOCS = 'Read the docs to discover what to do next:';

const Section = memo(({ children, title }: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const titleStyle = useMemo(
    () => [
      styles.sectionTitle,
      {
        color: isDarkMode ? Colors.white : Colors.black,
      },
    ],
    [isDarkMode]
  );

  const descriptionStyle = useMemo(
    () => [
      styles.sectionDescription,
      {
        color: isDarkMode ? Colors.light : Colors.dark,
      },
    ],
    [isDarkMode]
  );

  return (
    <View style={styles.sectionContainer}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={descriptionStyle}>{children}</Text>
    </View>
  );
});

const App = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }),
    [isDarkMode]
  );

  const viewBackground = useMemo(
    () => ({
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }),
    [isDarkMode]
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View style={viewBackground}>
          <Section title="Step One">
            {EDIT} <Text style={styles.highlight}>{APP_TSX}</Text>
            {DESCRIPTION}
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">{READ_THE_DOCS}</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;