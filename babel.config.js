module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/app': './src/app',
          '@/screens': './src/screens',
          '@/widgets': './src/widgets',
          '@/features': './src/features',
          '@/entities': './src/entities',
          '@/shared': './src/shared',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
