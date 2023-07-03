/* eslint-disable typescript-sort-keys/interface */
export type UiColors = {
  primary: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;

  secondary: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;

  /* Alert & Status */
  success: string;
  disabled: string;
  disabledButton: string;
  error: string;
  info: string;
  warning: string;

  /* Greyscale */
  grey900: string;
  grey800: string;
  grey700: string;
  grey600: string;
  grey500: string;
  grey400: string;
  grey300: string;
  grey200: string;
  grey100: string;
  grey50: string;

  /* Gradients */
  gradientPurple: string[];
  gradientGreen: string[];
  gradientBlue: string[];
  gradientYellow: string[];
  gradientRed: string[];

  /* Dark Colors */
  dark1: string;
  dark2: string;
  dark3: string;

  /* Others */
  white: string;
  black: string;
  red: string;
  pink: string;
  purple: string;
  deepPurple: string;
  indigo: string;
  blue: string;
  lightBlue: string;
  cyan: string;
  teal: string;
  green: string;
  lightGreen: string;
  lime: string;
  yellow: string;
  amber: string;
  orange: string;
  deepOrange: string;
  brown: string;
  blueGrey: string;

  /* Background */
  bgGreen: string;
  bgBlue: string;
  bgRed: string;
  bgYellow: string;
  bgPurple: string;
};

type BodyFontSizes = {
  xLarge: number;
  large: number;
  medium: number;
  small: number;
  xSmall: number;
};

type HeadingFontSizes = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
};

type FontFamily = 'bold' | 'semibold' | 'medium' | 'regular';

export type Fonts = Record<FontFamily, string>;

export interface Theme {
  colors: UiColors;
  fontFamily: Fonts;
  bodyFontSizes: BodyFontSizes;
  headingFontSizes: HeadingFontSizes;
}
