/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import type { PropsWithChildren } from 'react';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

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
  const { t } = useTranslation();
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
    <GestureHandlerRootView style={styles.gestureHandlerWrapper}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header />
          <View style={viewBackground}>
            <Section title="Step One">
              {t('edit')} <Text style={styles.highlight}>{t('app')}</Text>
              {t('description')}
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">{t('read_the_docs')}</Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  gestureHandlerWrapper: {
    flex: 1,
  },
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
