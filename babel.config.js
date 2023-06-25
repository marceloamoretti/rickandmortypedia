module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.js', '.ios.js', '.android.js', '.json'],
        alias: {
          '~assets': './assets',
          '~utils': './src/utils',
          '~types': './src/types',
          '~components': './src/components',
          '~screens': './src/screens',
        },
      },
    ],
  ],
};