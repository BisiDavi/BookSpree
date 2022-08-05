module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/components': './src/components',
          '@/hooks': './src/hooks',
          '@/redux': './src/redux',
          '@/screens': './src/screens',
          '@/navigations': './src/navigations',
          '@/styles': './src/styles',
        },
      },
    ],
  ],
};
