import { Theme } from './types';

const Colors = {
  primary: '#6842FF',
  primary100: '#8668FF',
  primary200: '#A48EFF',
  primary300: '#C3B3FF',
  primary400: '#F0ECFF',

  secondary: '#FFD300',
  secondary100: '#FFDC33',
  secondary200: '#FFE566',
  secondary300: '#FFED99',
  secondary400: '#FFFBE6',

  /* Alert & Status */
  success: '#4ADE80',
  info: '#246BFD',
  warning: '#FACC15',
  error: '#F75555',
  disabled: '#D8D8D8',
  disabledButton: '#6B5BAB',

  /* Greyscale */
  grey900: '#212121',
  grey800: '#424242',
  grey700: '#616161',
  grey600: '#757575',
  grey500: '#9E9E9E',
  grey400: '#BDBDBD',
  grey300: '#E0E0E0',
  grey200: '#EEE',
  grey100: '#F5F5F5',
  grey50: '#FAFAFA',

  /* Gradients */
  gradientPurple: ['rgba(17, 16, 20, 0.98)', '#2D1671', '#3B228F', '#5539C8'],
  gradientGreen: ['#1AB65C', '#39E180'],
  gradientBlue: ['#246BFD', '#6F9EFF'],
  gradientYellow: ['#FACC15', '#FFE580'],
  gradientRed: ['#FF5A5F', '#FF9094'],

  /* Dark Colors */
  dark1: '#181A20',
  dark2: '#1F222A',
  dark3: '#35383F',

  /* Others */
  white: '#FFF',
  black: '#000',
  red: '#F54336',
  pink: '#EA1E61',
  purple: '#9D28AC',
  deepPurple: '#673AB3',
  indigo: '#3F51B2',
  blue: '#1A96F0',
  lightBlue: '#00A9F1',
  cyan: '#00BCD3',
  teal: '#009689',
  green: '#4AAF57',
  lightGreen: '#8BC255',
  lime: '#CDDC4C',
  yellow: '#FFEB4F',
  amber: '#FFC02D',
  orange: '#FF981F',
  deepOrange: '#FF5726',
  brown: '#7A5548',
  blueGrey: '#607D8A',

  /* Background */
  bgGreen: '#F6FFFA',
  bgBlue: '#F6FAFD',
  bgRed: '#FFF5F5',
  bgYellow: '#FFFEE0',
  bgPurple: 'rgba(255, 255, 255, 0.41)',
};

const FontFamily = {
  bold: 'Urbanist-Bold',
  semibold: 'Urbanist-SemiBold',
  medium: 'Urbanist-Medium',
  regular: 'Urbanist-Regular',
};

const BodyFontSizes = {
  xLarge: 18,
  large: 16,
  medium: 14,
  small: 12,
  xSmall: 10,
};

const HeadingFontSizes = {
  h1: 48,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 20,
  h6: 18,
};

export const theme: Theme = {
  colors: Colors,
  fontFamily: FontFamily,
  bodyFontSizes: BodyFontSizes,
  headingFontSizes: HeadingFontSizes,
};
