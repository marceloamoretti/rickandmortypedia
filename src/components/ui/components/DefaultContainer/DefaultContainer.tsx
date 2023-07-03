import React, { memo, ReactNode, useCallback } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Banner from '~assets/icons/Banner.png';
import ChevronLeft from '~assets/icons/chevron-left.png';
import useNavigation from '~components/navigation/hooks/useNavigation';
import { theme } from '~components/ui/theme';

import styles from './styles';

const GradientStart = { x: 0.25, y: 0 };
const GradientEnd = { x: 0, y: 1 };
const GradientLocations = [0.1516, 0.1516, 0.4792, 1];

interface IProps {
  children: ReactNode;
  goBack?: boolean;
}

const DefaultContainer = memo<IProps>(({ children, goBack }) => {
  const safeAreaInsets = useSafeAreaInsets();
  const navigation = useNavigation();
  const navigateBack = useCallback(() => navigation.goBack(), [navigation]);

  const backComponent = (
    <TouchableOpacity
      onPress={navigateBack}
      // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop, react-memo/require-usememo
      style={[styles.backContainer, { paddingTop: safeAreaInsets.top }]}
    >
      <Image source={ChevronLeft} style={styles.backImage} />
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      style={styles.container}
      colors={theme.colors.gradientPurple}
      locations={GradientLocations}
      start={GradientStart}
      end={GradientEnd}
    >
      <Image source={Banner} resizeMode="cover" style={styles.imageBackground} />
      {goBack && backComponent}
      {children}
    </LinearGradient>
  );
});

export default DefaultContainer;
