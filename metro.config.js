const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { withNativeWind } = require('nativewind/metro')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config')

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
}

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(mergeConfig(defaultConfig, config), {
    input: './global.css',
    configPath: './tailwind.config.js',
  }),
)
