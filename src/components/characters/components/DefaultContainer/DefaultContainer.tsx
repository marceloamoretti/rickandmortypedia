import React, { memo, ReactNode } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Banner from '~assets/icons/Banner.png';
import { theme } from '~components/ui/theme';

import styles from './styles';

const GradientStart = { x: 0.25, y: 0 };
const GradientEnd = { x: 0, y: 1 };
const GradientLocations = [0.1516, 0.1516, 0.4792, 1];

interface IProps {
  children: ReactNode;
}

const DefaultContainer = memo<IProps>(({ children }) => (
  <LinearGradient
    style={styles.container}
    colors={theme.colors.gradientPurple}
    locations={GradientLocations}
    start={GradientStart}
    end={GradientEnd}
  >
    <Image source={Banner} resizeMode="cover" style={styles.imageBackground} />
    {children}
  </LinearGradient>
));

export default DefaultContainer;
