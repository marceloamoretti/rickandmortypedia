import React, { memo, useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { theme } from '../theme';
import { Theme } from '../types';

type FontSize = 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';

type IProps = {
  children: React.ReactNode;
  fontSize: FontSize;
  color?: keyof Theme['colors'];
  inverted?: boolean;
} & TextProps;

const { fontFamily, bodyFontSizes } = theme;

const styles = StyleSheet.create({
  h1: {
    fontFamily: fontFamily.medium,
    fontSize: bodyFontSizes.xLarge,
    lineHeight: 32,
  },
  h2: {
    fontFamily: fontFamily.medium,
    fontSize: bodyFontSizes.large,
    lineHeight: 24,
  },
  h3: {
    fontFamily: fontFamily.medium,
    fontSize: bodyFontSizes.medium,
    lineHeight: 20,
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: bodyFontSizes.small,
    lineHeight: 18,
  },
  h5: {
    fontFamily: fontFamily.medium,
    fontSize: bodyFontSizes.xSmall,
    lineHeight: 16,
  },
});

const styleHelper = ({ color, inverted }: Omit<IProps, 'children' | 'fontSize'>) => ({
  color: color || inverted ? theme.colors.black : theme.colors.white,
});

export const fontSizeMap: Record<FontSize, StyleProp<TextStyle>> = {
  xLarge: styles.h1,
  large: styles.h2,
  medium: styles.h3,
  small: styles.h4,
  xSmall: styles.h5,
};

const Body = memo<IProps>(({ fontSize, color, inverted, ...textProps }) => {
  return (
    <Text
      style={useMemo(
        () => [fontSizeMap[fontSize], styleHelper({ color, inverted }), textProps?.style],
        [color, fontSize, inverted, textProps?.style]
      )}
    >
      {textProps.children}
    </Text>
  );
});

export const TextXLarge = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="xLarge" {...props} />
));

export const TextLarge = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="large" {...props} />
));

export const TextMedium = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="medium" {...props} />
));

export const TextSmall = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="small" {...props} />
));

export const TextXSmall = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="xSmall" {...props} />
));
