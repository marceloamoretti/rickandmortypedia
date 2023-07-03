import React, { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Easing, Text, View } from 'react-native';

import icon from '~assets/icons/loader.png';
import { TextLarge } from '~components/ui/components/Text';

import styles from './styles';

const Loader = memo(() => {
  const { t } = useTranslation();
  const spinValue = useMemo(() => new Animated.Value(0), []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  return (
    <View style={styles.container} testID="loader-container">
      <Animated.Image
        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
        style={{
          transform: [{ rotate: spin }],
          ...styles.image,
        }}
        source={icon}
        testID="loader-image"
      />
      <TextLarge testID="loader-text">{t('loading')}</TextLarge>
    </View>
  );
});

export default Loader;
