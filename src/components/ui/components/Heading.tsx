import React, { memo, useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { theme } from '../theme';
import { Theme } from '../types';

type FontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type IProps = {
  children: string;
  fontSize: FontSize;
  color?: keyof Theme['colors'];
  inverted?: boolean;
} & TextProps;

const { fontFamily, headingFontSizes } = theme;

const styles = StyleSheet.create({
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: headingFontSizes.h1,
    lineHeight: 48,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: headingFontSizes.h2,
    lineHeight: 40,
  },
  h3: {
    fontFamily: fontFamily.bold,
    fontSize: headingFontSizes.h3,
    lineHeight: 32,
  },
  h4: {
    fontFamily: fontFamily.bold,
    fontSize: headingFontSizes.h4,
    lineHeight: 24,
  },
  h5: {
    fontFamily: fontFamily.bold,
    fontSize: headingFontSizes.h5,
    lineHeight: 20,
  },
  h6: {
    fontFamily: fontFamily.bold,
    fontSize: headingFontSizes.h6,
    lineHeight: 18,
  },
});

const styleHelper = ({ color, inverted }: Omit<IProps, 'children' | 'fontSize'>) => ({
  color: color || inverted ? theme.colors.black : theme.colors.white,
});

export const fontSizeMap: Record<FontSize, StyleProp<TextStyle>> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
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

export const H1 = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="h1" {...props} />
));

export const H2 = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="h2" {...props} />
));

export const H3 = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="h3" {...props} />
));

export const H4 = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="h4" {...props} />
));

export const H5 = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="h5" {...props} />
));

export const H6 = memo<Omit<IProps, 'fontSize'>>(({ ...props }) => (
  <Body fontSize="h6" {...props} />
));
